// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '微软电脑管家文档库',
  tagline: '我们将在这里为你解答你在使用微软电脑管家的过程中遇到的问题',
  url: 'https://mspcmgr.docs.licaoz.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://pcmanager.microsoft.com/assets/logo2.png',
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en', 'zh-TW'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/LiCaoZ/MSPCMgrDocs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '微软电脑管家文档库',
        logo: {
          alt: '微软电脑管家图标',
          src: 'https://pcmanager.microsoft.com/assets/logo2.png',
        },
        items: [
          { to: '/category/faq', label: '常见问题', position: 'left' },
          { to: '/communities', label: '社群', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/LiCaoZ/MSPCMgrDocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '新增内容',
            items: [
              {
                label: 'Microsoft 365',
                to: 'https://www.microsoft.com/microsoft-365',
              },
              {
                label: 'Windows 11 应用程序',
                to: 'https://www.microsoft.com/windows/windows-11-apps',
              },
            ],
          },
          {
            title: 'Microsoft Store',
            items: [
              {
                label: '账户个人资料',
                to: 'https://account.microsoft.com/',
              },
              {
                label: '下载中心',
                to: 'https://www.microsoft.com/zh-cn/download',
              },
              {
                label: '订单追踪',
                to: 'https://account.microsoft.com/orders',
              },
            ],
          },
          {
            title: '教育',
            items: [
              {
                label: 'Microsoft 教育版',
                to: 'https://www.microsoft.com/zh-cn/education',
              },
              {
                label: '教育设备',
                to: 'https://www.microsoft.com/zh-cn/education/devices/overview',
              },
              {
                label: 'Microsoft Teams 教育版',
                to: 'https://www.microsoft.com/zh-cn/education/products/teams',
              },
              {
                label: 'Microsoft 365 教育版',
                to: 'https://www.microsoft.com/zh-cn/education/buy-license/microsoft365',
              },
              {
                label: 'Office 教育版',
                to: 'https://www.microsoft.com/zh-cn/education/products/office',
              },
              {
                label: '教育工作者培训和开发',
                to: 'https://education.microsoft.com/',
              },
              {
                label: '面向学生和家长的优惠',
                to: 'https://www.microsoft.com/en-us/store/b/education',
              },
              {
                label: '面向学生的 Azure',
                to: 'https://azure.microsoft.com/zh-cn/free/students/',
              },
            ],
          },
          {
            title: '企业',
            items: [
              {
                label: 'Microsoft Cloud',
                to: 'https://www.microsoft.com/zh-cn/microsoft-cloud',
              },
              {
                label: 'Microsoft 安全',
                to: 'https://www.microsoft.com/zh-cn/security',
              },
              {
                label: 'Azure',
                to: 'https://azure.microsoft.com/zh-cn/',
              },
              {
                label: 'Dynamics 365',
                to: 'https://dynamics.microsoft.com/zh-cn/',
              },
              {
                label: 'Microsoft 365',
                to: 'https://www.microsoft.com/zh-cn/microsoft-365/business/',
              },
              {
                label: 'Microsoft Advertising',
                to: 'https://about.ads.microsoft.com/zh-cn',
              },
              {
                label: 'Microsoft 行业',
                to: 'https://www.microsoft.com/zh-cn/industry',
              },
              {
                label: 'Microsoft Teams',
                to: 'https://www.microsoft.com/zh-cn/microsoft-teams/group-chat-software',
              },
            ],
          },
          {
            title: '开发人员与 IT',
            items: [
              {
                label: '开发人员中心',
                to: 'https://developer.microsoft.com/zh-cn/',
              },
              {
                label: '文档',
                to: 'https://learn.microsoft.com/docs/',
              },
              {
                label: 'Microsoft Learn',
                to: 'https://learn.microsoft.com/',
              },
              {
                label: 'Microsoft 技术社区',
                to: 'https://techcommunity.microsoft.com/',
              },
              {
                label: 'Azure 市场',
                to: 'https://azuremarketplace.microsoft.com/zh-cn/',
              },
              {
                label: 'AppSource',
                to: 'https://appsource.microsoft.com/zh-cn/',
              },
              {
                label: 'Microsoft Power Platform',
                to: 'https://powerplatform.microsoft.com/zh-cn/',
              },
              {
                label: 'Visual Studio',
                to: 'https://visualstudio.microsoft.com/',
              },
            ],
          },
          {
            title: '公司',
            items: [
              {
                label: '招贤纳士',
                to: 'https://careers.microsoft.com/',
              },
              {
                label: '关于 Microsoft',
                to: 'https://www.microsoft.com/zh-cn/about',
              },
              {
                label: '公司新闻',
                to: 'https://news.microsoft.com/zh-cn',
              },
              {
                label: 'Microsoft 隐私',
                to: 'https://privacy.microsoft.com/zh-cn',
              },
              {
                label: '投资人',
                to: 'https://www.microsoft.com/investor/default.aspx',
              },
              {
                label: '可持续发展',
                to: 'https://www.microsoft.com/zh-cn/sustainability/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '官方网站',
                to: 'https://pcmanager.microsoft.com/',
              },
              {
                label: '官方微博',
                to: 'https://weibo.com/7763750711?',
              },
              {
                label: '历史版本',
                to: 'https://pcmanager.microsoft.com/HistoryVersions',
              },
              {
                label: 'OfficePLUS',
                to: 'https://www.officeplus.cn/',
              },
              {
                label: '微软桌面壁纸',
                to: 'https://lockscreen.microsoft.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft Corporation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
