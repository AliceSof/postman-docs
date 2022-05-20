---
title: "Setting up Postman"
order: 8.1
updated: 2022-02-16
page_id: "settings"
search_keyword: "GPU, hardware acceleration, shortcut, shortcuts, keyboard shortcuts"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Keyboard Shortcuts | Postman Level Up"
    url: "https://youtu.be/J3kuTxNItD0"
  - type: link
    name: "Dark Mode | Postman Level Up"
    url: "https://youtu.be/rZySZm9XaLM"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/getting-started/sending-the-first-request/"

warning: false

---

Postman automatically chooses default values for some settings so you can get right to work. Make changes to settings at any time based on your use case or to customize your Postman experience.

To view and update Postman settings, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header. In the Postman Desktop app, you can also select **⌘+Comma (,)** or **Ctrl+Comma (,)**.

## General

Use the **General** settings to configure how Postman sends requests or to customize the Postman user interface.

### Request

* **Trim keys and values in request body** - Turn this on to trim parameters when sending requests with form data or url-encoded data.
* **SSL certificate verification** - Turn this off to prevent Postman from checking the validity of SSL certificates when making requests.
* **Always open requests in new tab** - By default, when you select a request in a collection, Postman opens the request in the preview tab. Turn this on to always open requests in a new tab.
* **Always ask when closing unsaved tabs** - By default, Postman asks if you want to save any unsaved changes when closing a tab. Turn this off to always discard unsaved changes when closing a tab.
* **Language detection** - By default, Postman automatically detects the correct media type for the response body based on the Content-Type header. Select **JSON** to always use JSON rendering for the response body.
* **Request Timeout in ms** - Enter how long (in milliseconds) Postman will wait for a response before timing out. If you enter **0**, Postman will wait for a response forever.
* **Max response size in MB** - Enter the largest response size (in megabytes) that Postman will download. For responses that exceed this limit, Postman asks if you want to increase the size limit or download the response. If you enter **0**, Postman downloads responses of any size. Rendering large responses may affect Postman's performance.
* **Request Validation** - Turn this off to prevent Postman from attempting to validate requests in collections linked to an API schema.

### Headers

* **Send no-cache header** - (Recommended) Turn this on to send a `Cache-Control: no-cache` header with each request. The `no-cache` directive forces the server to revalidate each request and ensures you get an up-to-date (not stale) response.
* **Send Postman Token header** - (Recommended) Turn this on to send a random Postman token with an XMLHttpRequest. Sending a random token ensures the receiving server handles one request at a time, even when the requests send with the same parameters. The token can also aid debugging and help you distinguish between requests on the server side.
* **Retain headers when clicking on links** - When you select a link in a response, Postman creates a new `GET` request with the link URL. Turn this on to keep the headers from the earlier request in the new request. Retaining headers is useful if you mainly access protected resources.
* **Automatically follow redirects** - Turn this off to prevent requests that return a 3xx series response from automatically redirecting.
* **Send anonymous usage data to Postman** - Postman gathers basic, anonymous usage data to help with product improvement. Turn this off to stop sending anonymous usage data to Postman.

### User interface

* **Two-pane view** - By default, Postman displays responses below requests. Turn this on to display the response and request panes side by side.
* **Show icons with tab names** - Turn this off to hide the icons that appear next to tab names.
* **Variable autocomplete** - Turn this on to enable autocomplete when typing variable names.

### Working directory

When you send a form-data or binary file with a request body, Postman saves a path to the file as part of the collection. The file path is relative to your working directory. Postman uses `~/Postman/files` as the default working directory. To use a different working directory, select **Choose** and then select the directory you want to use.

<img alt="Working directory settings" src="https://assets.postman.com/postman-docs/settings-working-directory-v9.19.jpg" width="600px">

**To make collaboration easier, store files in your working directory.** Storing files in your working directory ensures that requests in shared collections always work. As long as you and your teammates use the same files and working directory location, shared requests will run across everyone's systems. Learn more about [sending body data](/docs/sending-requests/requests/#sending-body-data).

**The working directory is also used by Newman.** Store files you want to upload to Newman in the working directory path saved in the collection. Learn more about [file uploads in Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/#file-uploads).

**You can't change the working directory in Postman for Web.** When you upload a file, Postman for Web creates a new folder with a random name in the `~/Postman/files` directory. Postman stores the uploaded file in the new folder so you can use it when sending requests. To automatically sync files you upload to Postman for Web with your local working directory, make sure you are using the [Postman Desktop Agent](/docs/getting-started/installation-and-updates/#using-postman-on-the-web).

**Use caution with files located outside your working directory.** To use files located outside your working directory when sending requests, turn on **Allow reading files outside working directory**. This option gives third-party collections the ability to read any file on your system. Use caution, and make sure you trust all third-party collections you are using before enabling this option.

### Editor settings

**Editor** settings affect code-related text such as request and response bodies, pre-request scripts, and tests. To revert back to default text settings, select **Reset**. <!-- TODO: not in the spec, need to confirm that this is still going to be a feature -->

* **Font family:** Enter one or more font family names separated by commas. Postman uses the first available font family to display code text.
* **Font size (`px`):** Enter the font size in pixels to use for code text.
* **Indentation count:** Enter the number of indentation characters to use for each code level.
* **Indentation type:** Select the indentation character type to use (**Space** or **Tab**).
* **Auto close brackets:** Turn this on to automatically add a closing bracket when you enter an opening bracket.
* **Auto close quotes:** Turn this on to automatically add a closing quotation mark when you enter an opening quotation mark.

## Themes

Select a light or dark theme for Postman.

<img alt="Choose a theme for Postman" src="https://assets.postman.com/postman-docs/settings-choose-theme-v9.19.jpg" width="600px"/>

## Shortcuts

**Shortcuts** displays all the keyboard shortcuts available in Postman. To turn off keyboard shortcuts, select the **Shortcuts** toggle.

Some shortcuts aren't available in Postman for Web. Also, shortcut modifier keys in Postman may differ depending on your operating system. For example, to open a new tab select **⌘+T** on macOS or **Ctrl+T** on Windows or Linux.

## Data

Use **Data** to request a bulk export of Postman data or to import data. To begin the export process, select **Export Data**. You can choose to export your collections, environments, or both. You'll receive an email when your dump file is ready to download.

Importing a dump file may overwrite your existing collections and environments, so use caution. Always make a backup before importing files. Learn more about [importing and exporting data](/docs/getting-started/importing-and-exporting-data/).

## Add-ons

Select the link to download Newman, Postman's command line companion. Newman integrates your Postman collections with your build system and runs automated API tests. Learn more about [command line integration with Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/).

## Certificates

Use **Certificates** to add and manage CA certificates and client certificates in Postman. Learn more about [managing certificates](/docs/sending-requests/certificates/).

## Proxy

Use **Proxy** to configure proxy settings for connecting to online services and sending API requests. Learn more about [configuring a proxy](/docs/getting-started/proxy/).

<!-- ## Update

Use the **Update** tab to check for updates to Postman or to enable automatic updating. Learn more about [updating Postman](/docs/getting-started/installation-and-updates/#updating-postman). --> <!-- TODO: this isn't in the spec, need to confirm it's being removed -->

## About

The **About** tab displays the current version of Postman, along with links to helpful information and support.
