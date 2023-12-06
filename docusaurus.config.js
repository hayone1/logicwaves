// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tech Converge',
  tagline: 'One-stop shop for your technical business solutions ',
  favicon: 'img/main/favicon.png',

  // Set the production url of your site here
  url: 'https://hayone1.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/logicwaves/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hayone1', // Usually your GitHub org/user name.
  projectName: 'techconverge', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            './src/css/animate.min.css',
            './src/css/custom.css',
            './src/css/fontawesome.min.css',
            // './src/css/magnific.min.css',
            // './src/css/nice-select.min.css',
            './src/css/bootstrap.min.css',
            './src/css/responsive.css',
            // './src/css/rtl-style.css',
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/main/favicon.png',
      navbar: {
        title: 'Tech Converge',
        logo: {
          alt: 'Logo',
          src: 'img/main/favicon.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '#AboutCompany', label: 'About Us', position: 'left'},
          {to: '#AboutTeam', label: 'Our Team', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: '#contactUs',
            label: 'Contact Us',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Team',
            items: [
              {
                label: 'Our Team',
                to: '#AboutTeam',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'About Us',
                href: '#AboutCompany',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Linkedin',
                to: 'https://www.linkedin.com/in/ronkedaini/',
              },
              {
                label: 'Facebook',
                to: 'https://www.linkedin.com/in/ronkedaini/',
              },
              {
                label: 'Twitter-X',
                to: 'https://www.linkedin.com/in/ronkedaini/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tech Converge`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
