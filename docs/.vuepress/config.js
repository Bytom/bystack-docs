const path = require('path');

module.exports = {
  title: 'BMC',
  decription: 'BMC docs',
  dest: path.join(__dirname, '../../dist'),
  // base: '/docs/',   // base URL  <img :src="$withBase('/foo.png')" alt="foo">
  port: 8085,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
    }],
    ['link', {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    }]
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    // nextLinks: false,
    // prevLinks: false,
    smoothScroll: true,
    sidebarDepth: 1,  // 默认1
    displayAllHeaders: false, // 显示所有页面的标题链接  默认false
    // sidebar: 'auto',
    // sidebar: [],
    locales: {
      '/': {
        label: 'English',
        lang: 'en-US',
        title: 'Developer Center - BMC',
        description: 'BMC Documentation Center',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/api/': getApiSidebar(),
          '/guide/': getGuideSidebar('Getting Started','Install Node','Smart Contract','Concept')
        },
      },
      '/zh/': {
        label: '简体中文',
        lang: 'zh-CN',
        title: '开发者中心-BMC',
        description: 'BMC开发者中心',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/api/': getApiSidebar(),
          '/zh/guide/': getGuideSidebar('快速入门','安装全节点','智能合约','基础概念'),
        }
      }
    },
  },

  locales: {
    '/': {
      label: 'English',
      lang: 'en-US',
      title: 'Developer Center - BMC',
      description: 'BMC Documentation Center',
    },
    '/zh/': {
      label: '简体中文',
      lang: 'zh-CN',
      title: '开发者中心-BMC',
      description: 'BMC 文档中心',
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '../public', // ！[Image from alias](~@alias/image.png)
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
        md.set({
            html: true
        })
        md.use(require('markdown-it-katex'))
    }
  },
  plugins: [
    ['@vuepress/back-to-top'],
    [
      'vuepress-plugin-right-anchor',
      {
        showLevel: 1,
        ignore: [
          '/zh/',
          '/en/',
          '/faq/',
          '/zh/faq/'
        ]
      }
    ]
  ]
};

function getApiSidebar () {
  return [
    'bytomrpc',
    'vaporrpc',
    'blockmeta',
    'bapp',
    'blockcenter',
    'bycoin'
  ]
}

function getGuideSidebar (groupA,groupB,groupC,groupD) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
            '01_introduction',
            '01_mainnet_quick_start',
            '01_testnet_quick_start',
            '01_tools',
            '01_bap20_token',
            '01_token_list'
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
            '02_install_bmc_node',
            '02_bmc_api',
            '02_bmc_cli'
      ]
    },
    {
      title: groupC,
      collapsable: true,
      children: [
            '03_contract_introduction',
            '03_issue_token',
            '03_types'
      ]
    },
    {
      title: groupD,
      collapsable: true,
      children: [
            '04_account',
            '04_transactions',
            '04_gas'
      ]
    }
  ]
}