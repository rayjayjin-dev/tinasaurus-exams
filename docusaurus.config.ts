import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tinasaurus 예제 사이트',
  tagline: 'TinaCMS와 Docusaurus로 만드는 문서 사이트',
  favicon: 'img/favicon.svg',

  url: 'https://rayjayjin-dev.github.io',
  baseUrl: '/tinasaurus-exams/',

  organizationName: 'rayjayjin-dev',
  projectName: 'tinasaurus-exams',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  trailingSlash: false,

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  plugins: ['./src/plugins/tailwind-plugin.cjs'],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['ko', 'en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

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
      logo: {
        alt: 'Tinasaurus 로고',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '문서',
        },
        {
          href: 'https://github.com/rayjayjin-dev/tinasaurus-exams',
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
              href: 'https://github.com/rayjayjin-dev/tinasaurus-exams',
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
