---
title: 'Okta'
order: 138
updated: 2021-01-20
page_id: 'okta'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

> **[SSO with Okta is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

To configure SSO with Okta, you can use the available Postman app in Okta or create a custom SAML application. You must be an administrator in both Okta and Postman to configure SSO for your team.

## Contents

* [Setting up a custom SAML application in Okta](#setting-up-a-custom-saml-application-in-okta)
* [Setting up a custom SAML application in Okta by using the Postman app](#setting-up-a-custom-saml-application-in-okta-by-using-the-postman-app)

## Setting up a custom SAML application in Okta

To set up custom SAML application, follow the procedure outlined below:

After you sign in to your Okta account, perform the following steps:

### Okta - Step 1

Select **Admin** as illustrated in the following screen:
[![okta admin](https://assets.postman.com/postman-docs/Okta-SAML1.png)](https://assets.postman.com/postman-docs/Okta-SAML1.png)

### Okta - Step 2

From the Okta Dashboard, select **Add Application**.
[![okta add application](https://assets.postman.com/postman-docs/Okta-Add-Application.png)](https://assets.postman.com/postman-docs/Okta-Add-Application.png)

### Okta - Step 3

Select **Create New App**, as illustrated below:
[![okta_new app](https://assets.postman.com/postman-docs/Okta-Create-Application.png)](https://assets.postman.com/postman-docs/Okta-Create-Application.png)

### Okta - Step 4

In the following screen, ensure **Web** is selected as Platform. Select "SAML 2.0" and select **Create**.
[![okta choose saml](https://assets.postman.com/postman-docs/Okta-Choose-SAML.png)](https://assets.postman.com/postman-docs/Okta-Choose-SAML.png)

### Okta - Step 5

Under the first step "General Settings", enter an application name and then select **Next**.
[![okta app name](https://assets.postman.com/postman-docs/okta_app_name.png)](https://assets.postman.com/postman-docs/okta_app_name.png)

### Okta - Step 6

Under the second step “Configure SAML”, section A “SAML Settings”, enter the Postman service provider details which can be found on the Postman [Edit Team Details](https://go.postman.co/settings/team/general) page. To update the identity provider details, go to _Authentication > <My_Okta_Integration_Name>_ and select **Edit**. Next, select **Proceed**. Ensure you are in the following screen after the completion of this step:
[![details](https://assets.postman.com/postman-docs/server-provider-details.jpg)](https://assets.postman.com/postman-docs/server-provider-details.jpg)

Now, download the encryption certificate. Select the **Download as file** link (shown in red circle). You will upload this later in the **Okta SAML** configuration section, which is explained below. In the following screen, select **Show Advanced Settings** link to configure advanced SAML assertion settings.
[![!okta service provider](https://assets.postman.com/postman-docs/okta_service_provider.png)](https://assets.postman.com/postman-docs/okta_service_provider.png)

| **Field**                   | **Value**    |
| --------------------------- | ------------ |
| Single Sign On URL          | ACS URL      |
| Audience URI (SP Entity ID) | Entity ID    |
| Name ID Format              | EmailAddress |

### Okta - Step 7

Configure the options as shown below. Ensure your field options reflect these values.
[![okta advanced](https://assets.postman.com/postman-docs/Okta-SAML-Adv-Settings.png)](https://assets.postman.com/postman-docs/Okta-SAML-Adv-Settings.png)

For the Encryption Certificate, upload the encryption file in the **Encryption Certificate** field shown above. Remember, you downloaded the encryption file earlier using the **Download as a file** link in Postman's Service Provider Details section. Select **Next** to continue.

### Okta - Step 8

Under the third step “Feedback”, select “I’m an Okta customer adding an internal app”, and check “This is an internal app that we have created”, and then select **Finish**.
[![okta feedback](https://assets.postman.com/postman-docs/okta_feedback.png)](https://assets.postman.com/postman-docs/okta_feedback.png)

### Okta - Step 9

Move over to the **Sign On** tab, and select **View Setup Instructions**.
[![okta sign on](https://assets.postman.com/postman-docs/okta_sign_on.png)](https://assets.postman.com/postman-docs/okta_sign_on.png)

The **View Setup Instructions** screen comes populated with values. Copy these values and paste them in the **Identity Provider Details** section.

You will need to come back to this screen to paste the value in _Default Relay State_ that you will generate from the Postman's **Identity Provide Details** section.

### Okta - Step 10

Copy the **Identity Provider Single Sign-On URL**, **Identity Provider Issuer** and **X.509 Certificate** from the below screen.
[![okta identity provider](https://assets.postman.com/postman-docs/okta_identity_provider_updated.png)](https://assets.postman.com/postman-docs/okta_identity_provider_updated.png)

And paste them in the corresponding sections of the **Identity Provider Details** screen as shown below:
[![details](https://assets.postman.com/postman-docs/Okta-IDP-Details3.png)](https://assets.postman.com/postman-docs/Okta-IDP-Details3.png)

Once you fill in the details, select **Generate relay/Regenerate relay** to create a parameter to send with a SAML response in an IDP-initiated single sign-on. Copy the **relay state** and paste it in the following screen:
[![details](https://assets.postman.com/postman-docs/Okta-Relay-State.png)](https://assets.postman.com/postman-docs/Okta-Relay-State.png)

To paste, select **Edit** and paste the value in **Default Relay State** field.

Select **Save Authentication**.

## Setting up a custom SAML application in Okta by using the Postman app

To set up custom SAML application using the Postman app, follow the procedure outlined below:

After you sign in to your Okta account, perform the following steps:

### Postman - Step 1

Select **Admin**:

[![okta admin](https://assets.postman.com/postman-docs/Okta-SAML1.png)](https://assets.postman.com/postman-docs/Okta-SAML1.png)

### Postman - Step 2

From the Okta Dashboard, select **Add Application**.

[![okta add application](https://assets.postman.com/postman-docs/Okta-Add-Application.png)](https://assets.postman.com/postman-docs/Okta-Add-Application.png)

### Postman - Step 3

In the search bar, search for _Postman_. Select **Postman**, and then select **Add**.

[![okta add application](https://assets.postman.com/postman-docs/Okta-New-Integ1.png)](https://assets.postman.com/postman-docs/Okta-New-Integ1.png)

In the following screen, enter a name in the **Application Label** field and select **Done**.

[![details](https://assets.postman.com/postman-docs/Okta-New-Integ2.png)](https://assets.postman.com/postman-docs/Okta-New-Integ2.png)

### Postman - Step 4

Now, go to the Postman [Edit Team Details](https://go.postman.co/settings/team/general) page. To update the identity provider details, go to _Authentication > <My_Okta_Integration_Name>_ and select **Edit**. Next, select **Proceed**. Ensure you are in the following screen after the completion of this step:

[![details](https://assets.postman.com/postman-docs/Okta-IDP-Details.png)](https://assets.postman.com/postman-docs/Okta-IDP-Details.png)

Now, download the encryption certificate by selecting **Download as file** (shown in red circle). You will upload this later in the **Okta SAML** configuration section, which is explained below.

Go to your Okta account. Go to the **Sign On** tab and select **Edit**.
[![details](https://assets.postman.com/postman-docs/Okta-New-Integ3.png)](https://assets.postman.com/postman-docs/Okta-New-Integ3.png)

The following screen opens:
[![details](https://assets.postman.com/postman-docs/Okta-New-Integ4.png)](https://assets.postman.com/postman-docs/Okta-New-Integ4.png)

Select **Browse** and upload the encryption certificate. Select **Save**.

### Postman - Step 5

Move over to the **Sign On** tab, and select **View Setup Instructions**.
[![okta sign on](https://assets.postman.com/postman-docs/okta_sign_on.png)](https://assets.postman.com/postman-docs/okta_sign_on.png)

The **View Setup Instructions** screen comes populated with values. Copy these values and paste them in the **Identity Provider Details** section.

You will need to come back to this screen to paste the value in _Default Relay State_ that you will generate from the Postman's **Identity Provide Details** section.

### Postman - Step 6

Copy the **Identity Provider Single Sign-On URL**, **Identity Provider Issuer** and **X.509 Certificate** from the below screen.
[![okta identity provider](https://assets.postman.com/postman-docs/okta_identity_provider_updated.png)](https://assets.postman.com/postman-docs/okta_identity_provider_updated.png)

And paste them in the corresponding sections of the **Identity Provider Details** screen as shown below:
[![details](https://assets.postman.com/postman-docs/Okta-IDP-Details3.png)](https://assets.postman.com/postman-docs/Okta-IDP-Details3.png)

### Postman - Step 7

Once you fill in the details, select **Generate relay/Regenerate relay** to create a parameter to send with a SAML response in an IDP-initiated single sign-on. Copy the **relay state** and paste it in the following screen:
[![details](https://assets.postman.com/postman-docs/Okta-Relay-State.png)](https://assets.postman.com/postman-docs/Okta-Relay-State.png)

To paste, select **Edit** and paste the value in **Default Relay State** field.

Select **Save Authentication**.
