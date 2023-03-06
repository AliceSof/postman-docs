---
title: "Configuring domain capture"
order: 143
page_id: "configuring_domain_capture"
warning: false
updated: 2022-03-02
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Domain Capture: Group Your Organization’s Postman Users into a Single Team"
    url: "https://blog.postman.com/introducing-domain-capture/"

---

> **[Domain capture is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Domain capture allows you to identify and manage all user accounts in Postman that have been created with your organization’s domains and subdomains. With this feature, you can consolidate all of your organization's Postman users into a single Postman team and ensure that any new users who sign up for Postman with your domain are automatically added.

## Contents

* [Prerequisites for domain capture](#prerequisites-for-domain-capture)

* [Enabling domain capture](#enabling-domain-capture)

* [Admin experience](#admin-experience)

* [User experience](#user-experience)

* [Domain capture FAQs](#domain-capture-faqs)

## Prerequisites for domain capture

You must be a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable domain capture for your team. In addition, domain capture requires the following:

* Your team must be on the [Postman Enterprise](https://www.postman.com/pricing) plan.
* Your team must be on [Postman version 9 or later](/docs/administration/updating/).
* [SSO](/docs/administration/sso/admin-sso/) must be configured and enabled.
    * Alternative authentication methods (Postman or Google sign in) must be deactivated.

It's recommended that you enable [SSO provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) to ease the process of onboarding new users and [Auto-Flex](/docs/administration/billing/#using-auto-flex) to ensure that your team can automatically accommodate all users that may be added to your Postman team when domain capture is enabled.

## Enabling domain capture

To enable domain capture, open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar.

Confirm that your team has only the SSO authentication method enabled. Then, select the **Domains** tab.

> Your team must have only SAML-based SSO authentication methods enabled to set up domain capture. Alternative authentication methods such as Postman or Google sign in must be deactivated.

Select **Add Domain**. Enter the domain or subdomain you'd like to add, then select **Generate Verification Records**. <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy** the **TXT record** and add it to your domain's DNS configuration.

<img alt="Add domain - domain details" src="https://assets.postman.com/postman-docs/authentication-domain-add-details-9.4.jpg" width="350"/>

In Postman, you can select **← Back** to return to your domain dashboard.

<img alt="Domain dashboard" src="https://assets.postman.com/postman-docs/authentication-domain-dashboard-9.5.jpg"/>

Verification status will change from "Created" to "In Progress" after the TXT record has been added to the domain's DNS configuration.

Postman's team will check your requested domain and update its status to "Verified" in your domain dashboard. They will also email your Team Admins.

> You can reach out to [Postman support](https://www.postman.com/support/) to check on the status of your domain verification.

Once your domain has been verified, you can enable it by selecting the switch under **Domain authentication**.

<img alt="Domain authentication confirmation" src="https://assets.postman.com/postman-docs/manage-accts-domain-v9.jpg" width="500px"/>

Select **Confirm** to enable domain capture.

You can enable domain capture for additional domains and subdomains at any time in your [domain dashboard](https://go.postman.co/settings/team/domain-capture). You must add, verify, and enable domain capture for each subdomain separately. User accounts associated with subdomains won't be captured implicitly if domain capture is only enabled for the domain.

## Admin experience

Team members with the [Team Admin role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can manage the domains and subdomains that have been added to a team by navigating to the [domain dashboard](https://go.postman.co/settings/team/domain-capture). Here, Admins can add, activate, deactivate, or delete domains and subdomains for their team at any time.

<img alt="Domain dashboard" src="https://assets.postman.com/postman-docs/authentication-domain-dashboard-9.5.jpg"/>

In the domain dashboard, you can view your domains, their verification status, the number of unclaimed accounts associated with the domain, and if domain capture is currently turned on or off for the particular domain.

**Unclaimed Accounts** is the number of accounts associated with a verified domain that aren't a part of your Postman team. When you opt to enable **Domain authentication** for a domain, you'll be provided with a list of the unclaimed Postman accounts that will be automatically added to your team. Once enabled, the number of unclaimed accounts will reduce as these users sign in and join your team.

> You won't be able to selectively pick users you'd like to add to your team. When domain capture is enabled, any user associated with the domain, who can authenticate with the SSO auth method you've enabled, can join your Postman team.

With domain capture enabled, any new users that sign up for Postman with your domain are automatically added to your team and can be managed in your [team dashboard](https://go.postman.co/settings/team/members).

## User experience

When domain capture is enabled, Postman users with accounts associated with the domain or subdomain will only be able to access Postman after joining your Postman team. This applies to existing users who are a part of other Postman teams, existing individual Postman users, and new users who sign up for Postman.

The next time existing users sign in to Postman, they will get a notification that your team manages their account.

<img alt="Domain capture join team notification" src="https://assets.postman.com/postman-docs/domain-capture-join-team-9.4.jpg" width="350px"/>

Existing users who were on other Postman teams will lose access to all data from their previous teams, including personal workspaces. No data will be transferred from their previous teams to their new team. Users won't be able to remain on or join extra Postman teams with their captured accounts.

> If users experience any issues when moving to your Postman team, reach out to [Postman support](https://www.postman.com/support/).

## Domain capture FAQs

### What happens to captured users and their data (collections, environments) when domain capture is enabled?

The experience for captured users depends on their prior team status:

* If a captured user is already on your organization's team, nothing changes for them.
* If a captured user isn't a part of any team:
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team using SSO.
    * When the user authenticates into your organization's team using SSO, their existing data will be transferred to the team.
* If a captured user is a part of an existing free or paid team:
    * They're removed from their existing team.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team using SSO.
    * Users can authenticate into your organization's team using SSO.
    * They will lose access to all data from their previous teams, including personal workspaces. No data will be transferred from their previous teams to their new team.
* If a captured user is the last admin of an existing free team:
    * They're removed from the team and the remaining users are assigned the [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles). The data that solely belongs to them and hasn't been shared will be moved with them.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team using SSO.
    * Users can authenticate into your organization's team using SSO.
    * They will lose access to all data from their previous teams, including personal workspaces. No data will be transferred from their previous teams to their new team.
* If a captured user is the last admin of an existing paid team:
    * Postman support will contact your Team Admins to discuss how to approach this prior to verifying the domain you've added to your team.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to leave their existing team.
    * They will need to contact [Postman support](https://www.postman.com/support/) to assign the Admin role to another team member and remove them from the team. The data that solely belongs to them and hasn't been shared will be moved with them.
    * Users can authenticate into your organization's team using SSO.
    * They will lose access to all data from their previous teams, including personal workspaces. No data will be transferred from their previous teams to their new team.

### Can a Team Admin view the list of user accounts that will be captured before enabling domain capture?

Yes, a Team Admin can view the list of the unclaimed Postman accounts that will be captured prior to confirming they'd like to enable domain capture.

### Does adding a domain automatically add all the team members with the organization’s domain to the organization’s team?

No, after you add a domain, it must be verified by [Postman support](https://www.postman.com/support/). Postman support will contact Team Admins to evaluate and explain the effects of enabling domain capture, then confirm verification of the domain. Any Team Admin will then be able to enable domain capture for your Postman team.
