import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '東京都知事選2024 候補者調査',
  tagline: '2024年の都知事選候補者の公約と対応する行動・実績の調査',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tochijisen2024.kingyosun.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KingYoSun', // Usually your GitHub org/user name.
  projectName: 'tochijisen2024-search', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KingYoSun/tochijisen2024-search/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'TOP',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '一覧',
        },
        {
          href: 'https://github.com/KingYoSun/tochijisen2024-search',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ページ',
          items: [
            {
              label: '候補者一覧',
              to: '/docs/kouhosya',
            },
          ],
        },
        {
          title: '候補者',
          items: [
            {
              label: '小池ゆりこ',
              to: '/docs/koike_yuriko'
            },
            {
              label: '蓮舫',
              to: '/docs/renho'
            },
            {
              label: '田母神としお',
              to: '/docs/tabogami_toshio'
            },
            {
              label: '石丸伸二',
              to: '/docs/ishimaru_shinji'
            },
          ]
        },
        {
          title: '　',
          items: [
            {
              label: 'ひまそらあかね',
              to: '/docs/himasoraakane'
            },
            {
              label: '安野たかひろ',
              to: '/docs/anno_takahiro'
            },
            {
              label: 'うつみさとる',
              to: '/docs/utsumi_satoru'
            }
          ]
        },
        {
          title: 'リンク',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KingYoSun/tochijisen2024-search',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KingYoSun`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
