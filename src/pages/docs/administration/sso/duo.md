---
title: "Duo"
updated: 2023-01-19
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

> **[SSO with Duo is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

To configure SSO with Duo, you can configure a SAML application. You must be an administrator in both your Duo organization and Postman to configure SSO for your team.

## Configuring SSO with Duo

Before configuring the SAML application in Duo, you must [configure SSO in Postman](/docs/administration/sso/admin-sso/). When choosing the **Authentication Type**, select **Duo**. Name your authentication and **Continue**.

<img alt="Configure identity provider details in Postman" src="https://assets.postman.com/postman-docs/v10/configure-identity-provider-v10.jpg"/>

To continue configuring your SAML application, do the following:

1. Open your Duo admin panel in a new tab.
1. Go to **Applications** and select **Protect an Application**.

    <img alt="duo dashboard" src="https://assets.postman.com/postman-docs/duo_dashboard.png"/>

1. Search for "SAML - Service Provider" and select **Protect this Application** from the results.

    <img alt="duo protect" src="https://assets.postman.com/postman-docs/duo_protect.png"/>

1. Enter `Postman` as the service provider name.
1. Take the **Entity ID** and **ACS URL** from Postman and add them to your SAML configuration in Duo.
1. Select **emailAddress** as the NameID format.

     > Other fields can either be left blank or set to the default value.

     <img alt="duo provider" src="https://assets.postman.com/postman-docs/duo_provider.png"/>

1. Select **Save Configuration** in Duo.

1. Download the configuration file from Duo.

     <img alt="duo download configuration file" src="https://assets.postman.com/postman-docs/duo_download.png"/>

1. Duo requires you to add your cloud application to the Duo Access Gateway. Refer to this [guide for setting this up](https://duo.com/docs/dag-generic).

1. In Postman, enter the **SSO URL**, **Identity provider issuer**, and **X.509 Certificate** individually under **Identity provider details**.

1. Select **Save Authentication** in Postman.
