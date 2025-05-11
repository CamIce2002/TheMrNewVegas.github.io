// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Boneyard Creations',
  tagline: 'Modlists & Servers',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://www.modlists.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TheMrNewVegas', // Usually your GitHub org/user name.
  projectName: 'themrnewvegas.github.io', // Usually your repo name.
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
          sidebarPath: './sidebars.js',
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
	colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
      algolia: {
        appId: "YT8MKLXGDB",
        apiKey: "828568b1a1a24894f73157fe239e85d4",
        indexName: "modlists",
        contextualSearch: false,
      },
      image: 'img/bycsocial.png',
      navbar: {
        title: 'Boneyard Creations',
        logo: {
          alt: 'Boneyard Creations',
          src: 'img/logo.png',
        },
        items: [
		  {
			type: 'doc',
			position: 'left',
			docId: '1-Home',
            label: 'Home',
          },
		  {
			type: 'doc',
			position: 'left',
			docId: '4hos/Home',
            label: 'Halls of Sovngarde',
          },
		  {
			type: 'doc',
			position: 'left',
			docId: '5oh/Home',
            label: 'Ordo Hereticus',
          },
		  {
			type: 'doc',
			position: 'left',
			docId: '6poti/Home',
            label: 'Path of the Incarnate',
          },
          {
            href: 'https://discord.gg/43EhRjU',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                to: '/docs/Home',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Subreddit',
                href: 'https://www.reddit.com/r/boneyardcreations/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/43EhRjU',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BYCMods',
              },
            ],
          },
          {
            title: 'More',
            items: [
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Boneyard Creations, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

