const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const requestOptions = {
  method: 'GET',
  headers: {
    bff: 'e2e'
  },
  redirect: 'follow'
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const host = process.env.BFF_FOOTER_URL || ''

function fetchFooter() {
  if (host) {
    return fetch(host, requestOptions)
      .then(
        (res) => {
          res.text()
            .then((resp) => {
              if (resp) {
                const respData = JSON.parse(resp).data || { error: true };
                if (!respData.error && respData.items) {
                  fs.writeFile(path.join(
                    'bff-data',
                    'footer.json',
                  ), JSON.stringify(respData), (err) => {
                    if (err) {
                      /* eslint-disable no-console */
                      console.error(err);
                      /* eslint-enable */
                      process.exit(1);
                      throw err;
                    }
                    /* eslint-disable no-console */
                    console.info('Success pre-render footer data');
                    /* eslint-enable */
                  });
                } else {
                  console.log('The footer endpoint returned unusable data..')
                  fs.writeFile(path.join(
                    'bff-data',
                    'footer.json',
                  ), JSON.stringify({
                    "type": "footer",
                    "src": "https://voyager.postman.com/illustration/postman-footer-rocket-launch.svg",
                    "alt": "api-platform",
                    "copyright": "© 2022 Postman, Inc.",
                    "items": [
                      {
                        "title": "Product",
                        "arialabelledby": "product",
                        "category": "global-footer",
                        "label": "product",
                        "items": [
                          {
                            "title": "What is Postman?",
                            "url": "https://www.postman.com/product/what-is-postman/",
                            "category": "global-footer",
                            "label": "what-is-postman",
                            "ariaLabel": "Read more about what Postman is"
                          },
                          {
                            "title": "API repository",
                            "url": "https://www.postman.com/product/api-repository/",
                            "category": "global-footer",
                            "label": "api-repository",
                            "ariaLabel": "Read more about A P I repository"
                          },
                          {
                            "title": "Tools",
                            "url": "https://www.postman.com/product/tools/",
                            "category": "global-footer",
                            "label": "tools",
                            "ariaLabel": "Read more about Postman tools"
                          },
                          {
                            "title": "Governance",
                            "url": "https://www.postman.com/product/governance/",
                            "category": "global-footer",
                            "label": "governance",
                            "ariaLabel": "Read more about Postman governance"
                          },
                          {
                            "title": "Workspaces",
                            "url": "https://www.postman.com/product/workspaces/",
                            "category": "global-footer",
                            "label": "workspaces",
                            "ariaLabel": "Read more about Postman workspaces"
                          },
                          {
                            "title": "Integrations",
                            "url": "https://www.postman.com/product/integrations/",
                            "category": "global-footer",
                            "label": "integrations",
                            "ariaLabel": "Read more about Postman integrations"
                          },
                          {
                            "title": "Enterprise",
                            "url": "https://www.postman.com/postman-enterprise/",
                            "category": "global-footer",
                            "label": "enterprise",
                            "ariaLabel": "Read more about Postman enterprise"
                          },
                          {
                            "title": "Plans and pricing",
                            "url": "https://www.postman.com/pricing/",
                            "category": "global-footer",
                            "label": "plans-and-pricing",
                            "ariaLabel": "Read more about Postman plans and pricing"
                          },
                          {
                            "title": "Download the app",
                            "url": "https://www.postman.com/downloads/",
                            "category": "global-footer",
                            "label": "download-the-app",
                            "ariaLabel": "Visit the download page for the Postman app"
                          },
                          {
                            "title": "Support Center",
                            "url": "https://www.postman.com/support/",
                            "category": "global-footer",
                            "label": "support-center",
                            "ariaLabel": "Visit the Postman support center"
                          }
                        ]
                      },
                      {
                        "title": "Company",
                        "arialabelledby": "company",
                        "category": "global-footer",
                        "label": "company",
                        "id": "company",
                        "items": [
                          {
                            "title": "About",
                            "url": "https://www.postman.com/company/about-postman/",
                            "category": "global-footer",
                            "label": "about",
                            "ariaLabel": "Read more about Postman, the company"
                          },
                          {
                            "title": "Careers and culture",
                            "url": "https://www.postman.com/company/careers/",
                            "category": "global-footer",
                            "label": "careers-and-culture",
                            "ariaLabel": "Read more about careers and culture at Postman"
                          },
                          {
                            "title": "Press and media",
                            "url": "https://www.postman.com/company/press-media/",
                            "category": "global-footer",
                            "label": "press-and-media",
                            "ariaLabel": "Read more about press and media for Postman"
                          },
                          {
                            "title": "Contact us",
                            "url": "https://www.postman.com/company/contact-us/",
                            "category": "global-footer",
                            "label": "contact-us",
                            "ariaLabel": "Contact us at Postman"
                          },
                          {
                            "title": "Partner program",
                            "url": "https://www.postman.com/partner-program/",
                            "category": "global-footer",
                            "label": "partner-program",
                            "ariaLabel": "Read more about Postman Ecosystem Partner Program"
                          }
                        ]
                      },
                      {
                        "title": "Security and Legal",
                        "arialabelledby": "security-and-legal",
                        "category": "global-footer",
                        "label": "security-and-legal",
                        "id": "security-and-legal",
                        "items": [
                          {
                            "title": "Trust and Security",
                            "url": "https://www.postman.com/trust/",
                            "hrefType": "internal",
                            "category": "global-footer",
                            "label": "security",
                            "ariaLabel": "Read more about Postman Security"
                          },
                          {
                            "title": "Privacy policy",
                            "url": "https://www.postman.com/legal/privacy-policy/",
                            "hrefType": "internal",
                            "category": "global-footer",
                            "label": "privacy-policy",
                            "ariaLabel": "Read more about Postman's privacy policy'e"
                          },
                          {
                            "title": "Terms",
                            "url": "https://www.postman.com/legal/terms/",
                            "category": "global-footer",
                            "label": "terms",
                            "ariaLabel": "Read more about Postman's terms'"
                          }
                        ]
                      },
                      {
                        "title": "API Categories",
                        "arialabelledby": "api-categories",
                        "category": "global-footer",
                        "label": "api-categories",
                        "id": "api-categories",
                        "items": [
                          {
                            "title": "Payments",
                            "url": "https://www.postman.com/category/payments",
                            "hrefType": "internal",
                            "category": "global-footer",
                            "label": "payments",
                            "ariaLabel": "Read more about Postman payments"
                          },
                          {
                            "title": "Artificial Intelligence",
                            "url": "https://www.postman.com/category/artificial-intelligence",
                            "hrefType": "internal",
                            "category": "global-footer",
                            "label": "artificial-intelligence",
                            "ariaLabel": "Read more about Postman's artificial intelligence"
                          },
                          {
                            "title": "Communication",
                            "url": "https://www.postman.com/category/communication",
                            "category": "global-footer",
                            "label": "communication",
                            "ariaLabel": "Read more about communication"
                          },
                          {
                            "title": "Data Analytics",
                            "url": "https://www.postman.com/category/data-analytics",
                            "category": "global-footer",
                            "label": "data-analytics",
                            "ariaLabel": "Read more about Postman's data analytics"
                          },
                          {
                            "title": "Developer Productivity",
                            "url": "https://www.postman.com/category/developer-productivity",
                            "category": "global-footer",
                            "label": "developer-productivity",
                            "ariaLabel": "Read more about developer productivity"
                          },
                          {
                            "title": "DevOps",
                            "url": "https://www.postman.com/category/devops",
                            "category": "global-footer",
                            "label": "devops",
                            "ariaLabel": "Read more about devOps'"
                          },
                          {
                            "title": "Financial Services",
                            "url": "https://www.postman.com/category/financial-services",
                            "category": "global-footer",
                            "label": "financial-services",
                            "ariaLabel": "Read more about financial services'"
                          }
                        ]
                      },
                      {
                        "title": "Social",
                        "arialabelledby": "social",
                        "items": [
                          {
                            "svg": "<svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14.1439 3.76852C14.1534 3.9068 14.1534 4.04509 14.1534 4.18465C14.1534 8.43705 10.9162 13.3414 4.99671 13.3414V13.3388C3.24808 13.3414 1.53578 12.8405 0.0637207 11.8961C0.317985 11.9267 0.573525 11.9419 0.829701 11.9426C2.27882 11.9439 3.68651 11.4576 4.82656 10.5623C3.44946 10.5362 2.24186 9.63827 1.82 8.32744C2.3024 8.42048 2.79946 8.40136 3.27294 8.272C1.77156 7.96867 0.691417 6.64955 0.691417 5.11759C0.691417 5.10357 0.691417 5.09018 0.691417 5.0768C1.13877 5.32597 1.63965 5.46425 2.15201 5.47955C0.737936 4.5345 0.302054 2.65332 1.15598 1.18254C2.7899 3.19308 5.20063 4.41533 7.78853 4.54469C7.52916 3.42695 7.88348 2.25568 8.71955 1.46994C10.0157 0.251509 12.0543 0.31396 13.2727 1.6095C13.9935 1.46739 14.6843 1.20293 15.3164 0.828224C15.0762 1.57318 14.5734 2.20597 13.9017 2.60808C14.5396 2.53288 15.1628 2.3621 15.7498 2.10146C15.3177 2.74891 14.7735 3.31288 14.1439 3.76852Z' fill='#1D9BF0'/></svg>",
                            "icon": "https://st-ar.cdn.postman-beta.com/images/twitter-0a329e47c804eaf077b769f71cdc4750.svg",
                            "title": "Twitter",
                            "url": "https://twitter.com/getpostman",
                            "hrefType": "external-other",
                            "category": "global-footer",
                            "label": "twitter",
                            "ariaLabel": "Follow Postman on Twitter"
                          },
                          {
                            "svg": "<svg width=\"25\" height=\"25\" viewBox=\"0 0 25 25\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.134 7.363H.537v14.044h4.597zM5.437 3.019C5.407 1.642 4.44.593 2.866.593 1.293.593.265 1.642.265 3.019c0 1.348.998 2.427 2.541 2.427h.03c1.603 0 2.601-1.079 2.601-2.427zM21.714 13.354c0-4.313-2.268-6.32-5.293-6.32-2.44 0-3.534 1.362-4.144 2.319v-1.99H7.68c.06 1.318 0 14.044 0 14.044h4.598v-7.843c0-.42.03-.839.151-1.139.333-.839 1.09-1.707 2.36-1.707 1.664 0 2.329 1.288 2.329 3.175v7.514h4.597v-8.053z\" fill=\"#0e76a8\" fillRule=\"evenodd\"></path></svg>",
                            "icon": "https://st-ar.cdn.postman-beta.com/images/linkedin-b6fdef2dc0dae8854a8f80921629a462.svg",
                            "title": "LinkedIn",
                            "url": "https://www.linkedin.com/company/postman-platform",
                            "hrefType": "external-other",
                            "category": "global-footer",
                            "label": "linkedin",
                            "ariaLabel": "Follow Postman on Linked In"
                          },
                          {
                            "svg": "<svg height=\"16\" class=\"octicon octicon-mark-github\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" aria-hidden=\"true\"><path fill=\"#24292f\" fillRule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg>",
                            "icon": "https://st-ar.cdn.postman-beta.com/images/github-1a489e56e4f318f915a3456af6530a2d.svg",
                            "title": "GitHub",
                            "url": "https://github.com/postmanlabs",
                            "hrefType": "external-other",
                            "category": "global-footer",
                            "label": "github",
                            "ariaLabel": "Contribute to Postman on Git Hub"
                          },
                          {
                            "svg": "<svg height='16' width='16' enable-background='new 0 0 30 21.14' viewBox='0 0 30 21.14' xmlns='http://www.w3.org/2000/svg'><path d='m29.37 3.3c-.35-1.3-1.36-2.32-2.65-2.67-2.34-.63-11.72-.63-11.72-.63s-9.38 0-11.72.63c-1.29.35-2.31 1.37-2.65 2.67-.63 2.36-.63 7.27-.63 7.27s0 4.91.63 7.27c.35 1.3 1.36 2.32 2.65 2.67 2.34.63 11.72.63 11.72.63s9.38 0 11.72-.63c1.29-.35 2.31-1.37 2.65-2.67.63-2.36.63-7.27.63-7.27s0-4.91-.63-7.27zm-17.44 11.73v-8.92l7.84 4.46z' fill='#c4302b'></path></svg>",
                            "icon": "https://st-ar.cdn.postman-beta.com/images/youtube-2a03d6d6046971d17cfa7b0a04d2e8a9.svg",
                            "title": "YouTube",
                            "url": "https://www.youtube.com/c/Postman",
                            "hrefType": "external-other",
                            "category": "global-footer",
                            "label": "youtube",
                            "ariaLabel": "Watch our Postman You Tube channel"
                          },
                          {
                            "svg": "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 2400 2800' style='enable-background:new 0 0 2400 2800;' xml:space='preserve'><style type='text/css'>.st0{fill:#FFFFFF;}.st1{fill:#9146FF;}</style><title>Asset 2</title><g><polygon class='st0' points='2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200'/><g><g id='Layer_1-2'><path class='st1' d='M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600 V1300z'/><rect x='1700' y='550' class='st1' width='200' height='600'/><rect x='1150' y='550' class='st1' width='200' height='600'/></g></g></g></svg>",
                            "icon": "https://st-ar.cdn.postman-beta.com/images/twitch-b58ae59bf57ffcd3ad7d59caa20c3cb2.svg",
                            "title": "Twitch",
                            "url": "https://www.twitch.tv/getpostman",
                            "hrefType": "external-other",
                            "category": "global-footer",
                            "label": "twitch",
                            "ariaLabel": "Follow Postman on Twitch"
                          }
                        ],
                      }
                    ],
                  }), (err) => {
                    if (err) {
                      /* eslint-disable no-console */
                      console.error(err);
                      /* eslint-enable */
                      process.exit(1);
                      throw err;
                    }
                    /* eslint-disable no-console */
                    console.info('Success pre-render empty footer data');
                    /* eslint-enable */
                  });
                }
              }
            })
        }
      )
      .catch(err => {
        console.error("Error when making BFF call... writing empty footer.json", err)
        fs.writeFile(path.join(
          'bff-data',
          'footer.json',
        ), JSON.stringify({}), (err) => {
          if (err) {
            /* eslint-disable no-console */
            console.error(err);
            /* eslint-enable */
            process.exit(1);
            throw err;
          }
          /* eslint-disable no-console */
          console.info('Success pre-render empty footer data');
          /* eslint-enable */
        });
      })
  } else {
    console.log('No Footer data endpoint provided.')
    fs.writeFile(path.join(
      'bff-data',
      'footer.json',
    ), JSON.stringify({}), (err) => {
      if (err) {
        /* eslint-disable no-console */
        console.error(err);
        /* eslint-enable */
        process.exit(1);
        throw err;
      }
      /* eslint-disable no-console */
      console.info('Success pre-render empty footer data');
      /* eslint-enable */
    });
  }
}

module.exports = fetchFooter;
