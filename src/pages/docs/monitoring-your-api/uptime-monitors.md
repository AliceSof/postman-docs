---
title: "Monitoring API uptime"
order: 88
page_id: "uptime_monitors"
updated: 2022-2-14
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing Postman’s API Uptime Monitor in Open Beta"
    url: "https://blog.postman.com/introducing-uptime-monitor/"

warning: false

---

Uptime monitors (open beta) continuously check the availability of a single API endpoint, website, or other URL and let you know whenever downtime occurs (typically within 1 to 2 minutes).

To create a new uptime monitor, enter the URL and select which team members to notify in the event of a system outage. You can customize how often the monitor checks the availability of the URL. You can also configure the monitor to run in multiple regions (paid plans only).

Use the uptime monitor dashboard to quickly check if the API endpoint is currently up or down and the average response time. You can also view previous downtime incidents and get insights into the availability of the endpoint over time.

> **The Postman uptime monitors feature is currently in open beta.** If you have feedback on uptime monitors, visit our [GitHub discussion board](https://github.com/postmanlabs/uptime-monitors/discussions) and tell us about your experience.

## Contents

* [Creating an uptime monitor](#creating-an-uptime-monitor)
* [Viewing uptime results](#viewing-uptime-monitor-results)
    * [Viewing the uptime graph](#viewing-the-uptime-graph)
    * [Viewing downtime incidents](#viewing-downtime-incidents)
    * [Working with uptime monitors](#working-with-uptime-monitors)
* [Uptime Monitor pricing](#uptime-monitor-pricing)

## Creating an uptime monitor

Create a new uptime monitor to track the availability of a single API endpoint, website, or other URL. The uptime monitor sends an email notification to your team whenever downtime is detected, or when the service is once again up and available.

1. Select **Monitors** in the sidebar, and then select **+**.
1. Under **API endpoint or URL**, select **Continue**.

<img alt="Selecting what you want to monitor" src="https://assets.postman.com/postman-docs/monitor-landing-uptime-v9-19.jpg" width="716px"/>

1. Enter the **URL** you want to monitor. *Uptime monitors can only monitor URLs, API endpoints, and websites that are publicly available over the internet. Only HTTP and HTTPS are supported.*
1. For **Monitor name**, enter a descriptive name that will help you identify the monitor later.
1. Configure any optional details for the monitor:

    * **Notification recipients** - Add up to five members of your Postman team to be notified when downtime occurs.
    * **Run frequency** - Select how often the monitor checks the availability of the URL, up to every minute (paid plans) or every 15 minutes (free plans).
    * **Regions** - Select one or more regions to run the monitor from (paid plans only). If downtime occurs in any selected region, a notification is sent. (For free plans, the region is automatically selected.)
    * **Follow redirects** - Select this option to exclude redirects from being classified as service downtime.

1. Select **Create Uptime Monitor**.

    <img alt="Creating an uptime monitor" src="https://assets.postman.com/postman-docs/monitors-uptime-create-v9-9.jpg" width="491px"/>

## Viewing uptime monitor results

To view results for an uptime monitor, select **Monitors** in the sidebar, and then select a monitor to view its dashboard.

The dashboard shows if the API endpoint was up or down at the time it was last checked, for how long, and the number of regions where it's failing. To update the dashboard with the latest monitor status, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.

The dashboard also shows key statistics for the selected time period. You can view the percentage of time the endpoint has been available globally in at least one region. You can also view the number of downtime incidents and the average response time in milliseconds. To change the time period displayed, select a different time period in the menu at the upper right.

<img alt="Uptime monitor graph" src="https://assets.postman.com/postman-docs/monitors-uptime-graph-v9-12.jpg" width="841px"/>

> **Want to share an uptime monitor with others?** Hover over the monitor name at the top of the dashboard and select the link icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px"> to copy a link to the monitor. To view or edit the monitor, the person you share the link with must have the appropriate access to the workspace where the monitor is located. Learn more about [defining roles](/docs/collaborating-in-postman/roles-and-permissions/).

### Viewing the uptime graph

The **Uptime** graph shows the status of the monitored endpoint URL during the selected time period:

* **Up** - (Green) The URL is serving traffic and returning 2xx status codes within the expected response time (60 seconds or less).
* **Down** - (Red) The URL is not serving traffic, is returning non-2xx status codes, or is exceeding the expected response time (more than 60 seconds).

    > If you selected the **Follow redirects** option when configuring the monitor, 3xx status codes are not considered as downtime.

* **Unknown** - (Gray) Postman cannot determine the status of the URL because the monitor is paused, because the monitor didn't exist during the displayed time period, or for some other unexpected reason.

Select **Summary** to view combined data for all regions, or select **Region** to view data for each region separately.

### Viewing downtime incidents

All detected outages are listed under **Downtime incidents**. For each incident, the list displays the start time, duration, error code, and affected regions.

### Working with uptime monitors

From the monitor dashboard, you can take the following actions:

* **Pause an uptime monitor** - While paused, the monitor no longer makes calls to the specified URL. To pause a monitor, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> at the upper right and select **Pause**. To resume the monitor, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> again and select **Resume**.
* **Edit an uptime monitor** - Edit an existing uptime monitor to update the name, URL, or any other configuration options. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> at the upper right and select **Edit**. Change any configuration options, and then select **Update Monitor**.

    > You can quickly rename a monitor without editing it. Select **Monitors** in the sidebar, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a monitor, and then select **Rename**.

* **Delete an uptime monitor** - Delete an uptime monitor if it's no longer needed. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> at the upper right and select **Delete**.

## Uptime monitor pricing

**Teams on paid Postman plans can try uptime monitors for free.** During the open beta period, you can have up to 3 (Basic plan), 5 (Professional plan), or 9 (Enterprise plan) uptime monitors, including paused monitors. These free uptime monitors will not count against your [team's monthly usage limit](https://www.postman.com/pricing/) for monitoring API calls.

**Users on Postman Free plans can try uptime monitors too.** You can create up to 3 uptime monitors at no cost. Just keep in mind that calls made by these monitors will count against your team's monthly allowance of 1,000 monitoring API calls. If you need to make more calls, you can [upgrade your Postman plan](https://go.postman.co/purchase) or purchase [additional monitoring blocks](/docs/monitoring-your-api/monitor-usage/#purchasing-monitoring-blocks).

> Uptime monitors can be run more frequently than collection-based monitors, which may affect your monthly usage. For more details on how to check your monthly monitor usage, see [Viewing monitor usage](/docs/monitoring-your-api/monitor-usage/).
