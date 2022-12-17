// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '🧭 常见问题',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: '常见问题解答',
        description: '微软电脑管家常见问题总览',
        slug: '/category/faq',
      },
      items: [
        {
          type: 'category',
          label: '安装',
          link: {
            type: 'generated-index',
            title: '安装问题解答',
            description: '微软电脑管家安装问题总览',
            slug: '/category/faq/installation',
          },
          items: ['faq/installation/unable-to-modify-installation-directory'],
        },
        'faq/an-error-occurred-during-program-operation',
      ],
    },
  ]
};

module.exports = sidebars;
