// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** define the GIT repository details */
const orgName = 'timler';
const projectName = 'fasp-documentation';
const repoRoot = `https://github.com/${orgName}/${projectName}`;
const apiDownloadUrl = `https://raw.githubusercontent.com/${orgName}/${projectName}/main/documentation/static/api/`;

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FASP QAT Documentation',
  tagline: 'Quantification Analytics Tool',
  favicon: 'img/favicon.ico',

  // Github Pages deployment config
  url: `https://${orgName}.github.io`,
  baseUrl: `/${projectName}/`,
  organizationName: orgName,
  projectName: projectName,
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          docRootComponent: "@theme/DocRoot",
          docItemComponent: "@theme/ApiItem",
          editUrl: `${repoRoot}/tree/main`,
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Latest',
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/QAT-login-logo.png',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'FASP QAT Documentation',
        logo: {
          alt: 'Quantification Analytics Tool',
          src: 'img/QAT-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'api-latest',
            label: 'API',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'userSidebar',
            label: 'User',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developerSidebar',
            label: 'Developer',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'communitySidebar',
            label: 'Community',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'productSidebar',
            label: 'About',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsBefore: [],
            dropdownItemsAfter: [],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/FASP-QAT',
            className: 'header-github-link',
            position: 'right',
            "aria-label": "GitHub repository"
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'QAT Links',
            items: [
              {
                label: 'Login',
                href: 'https://www.quantificationanalytics.org',
              },
              {
                label: 'Login (Demo)',
                href: 'https://demo.quantificationanalytics.org',
              },
              {
                label: 'QAT Helpdesk',
                href: 'https://qathelpdesk.atlassian.net/servicedesk/customer/portals',
              },
              {
                label: 'QAT website',
                href: 'https://www.ghsupplychain.org/quantificationanalyticstool',
              }
            ],
          },
          {
            title: 'Guides',
            items: [
              {
                label: 'End-User Guide',
                to: 'docs/user/intro',
              },
              {
                label: 'Developer Onboarding',
                to: 'docs/developer/intro',
              },
              {
                label: 'Contributor Guide',
                to: 'docs/community/intro',
              },
            ],
          },
          {
            title: 'About QAT',
            items: [
              {
                label: 'Overview',
                href: 'https://www.ghsupplychain.org/sites/default/files/2023-02/QAT_Overview_External.pdf',
              },
              {
                label: 'User Guide',
                href: 'https://www.ghsupplychain.org/sites/default/files/2024-04/QAT-UserGuide.pdf',
              },
              {
                label: 'Reports Reference',
                href: 'https://www.ghsupplychain.org/sites/default/files/2023-11/Reports%20Reference%20Sheet.pdf'
              },
              {
                label: 'Reports e-learning module',
                href: 'https://cloud.scorm.com/sc/InvitationConfirmEmail?publicInvitationId=ea8db62e-7ea9-4ba5-bafc-a81a2f427d70',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      announcementBar: {
        id: "announcementBar_1",
        content: "Draft version",
        isCloseable: false,
      },
    }),

    plugins: [
      [
        'docusaurus-plugin-openapi-docs',
        {
          id: "api",
          docsPluginId: "classic",
          config: {
            api: {
              // current version
              specPath: "static/api/test-v1.0.2.json",
              outputDir: "docs/api",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag",
              },
              showSchemas: true,
              version: "1.0.2", 
              label: "v1.0.2",
              baseUrl: "api",
              downloadUrl: `${apiDownloadUrl}/test-v1.0.2.json`,
              versions: {
                // previous versions
                "1.0.0": {
                  specPath: "static/api/test-v1.0.0.json",
                  outputDir: "docs/api/v1.0.0",
                  label: "v1.0.0",
                  baseUrl: "/fasp-documentation/docs/api-2",
                  downloadUrl: `${apiDownloadUrl}/test-v1.0.0.json`,
                },
                "1.0.1": {
                  specPath: "static/api/test-v1.0.1.json",
                  outputDir: "docs/api/v1.0.1",
                  label: "v1.0.1",
                  baseUrl: "/fasp-documentation/docs/api-1",
                  downloadUrl: `${apiDownloadUrl}/test-v1.0.1.json`,
                }
              },
            },
          }
        },
      ]
    ],
    themes: [
      'docusaurus-theme-openapi-docs',
      [
        "@easyops-cn/docusaurus-search-local",
        ({
          hashed: true,
          language: ["en"],
          indexDocs: true,
          highlightSearchTermsOnTargetPage: true,
          searchBarPosition: "right",
        })
      ]
    ],
};

export default config;
