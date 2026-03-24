import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tinasaurus 예제 사이트',
  tagline: 'TinaCMS와 Docusaurus로 만드는 문서 사이트',
  favicon: 'img/favicon.ico',

  url: 'https://<사용자명>.github.io',
  baseUrl: '/tinasaurus-example-page/',

  organizationName: '<사용자명>',
  projectName: 'tinasaurus-example-page',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Tinasaurus 예제',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '문서',
        },
        {
          href: 'https://github.com/<사용자명>/tinasaurus-example-page',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {
              label: '시작하기',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '더 알아보기',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'TinaCMS',
              href: 'https://tina.io',
            },
          ],
        },
        {
          title: '소스 코드',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/<사용자명>/tinasaurus-example-page',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tinasaurus 예제 사이트. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
