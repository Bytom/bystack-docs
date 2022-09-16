// 导航菜单 中文
const zh = [
  {
    title: '快速入门',
    children: [
      { title: '简介', link: '/zh/guide/01_introduction.html' },
      { title: '快速入门', link: '/zh/guide/01_quick_start.html' },
      { title: '联系我们', link: '/zh/guide/01_contact_us.html' }
    ]
  },
  {
    title: '技术架构',
    children: [
      { title: '技术概述', link: '/zh/guide/02_overview.html' },
      { title: 'Bystack链介绍', link: '/zh/guide/02_chain.html' },
      { title: '智能合约', link: '/zh/guide/02_smart_contract.html' },
      { title: 'Bystack网关', link: '/zh/guide/02_gateway.html' }
    ]
  },
  {
    title: 'API指南',
    children: [
      { title: '网关API', link: '/zh/guide/03_gateway_api.html' }
    ]
  },
  {
    title: '案例介绍',
    children: [
    ]
  }
];
const en = [
    {
      title: 'Getting Started',
      children: [
      { title: 'Introduction', link: '/guide/01_introduction.html' },
      { title: 'Quick Start', link: '/guide/01_quick_start.html' },
      { title: 'Contact us', link: '/guide/01_contact_us.html' }
    ]
  },
  {
    title: 'Technology',
    children: [
      { title: 'Overview', link: '/guide/02_overview.html' },
      { title: 'Bystack Chain', link: '/guide/02_chain.html' },
      { title: 'Smart Contract', link: '/guide/02_smart_contract.html' },
      { title: 'Bystack Gateway', link: '/guide/02_gateway.html' }
    ]
  },
  {
    title: 'API',
    children: [
      { title: 'Gateway API', link: '/guide/03_gateway_api.html' }
    ]
  },
  {
    title: 'Usecase',
    children: [
    ]
  }
];
export default {
  'zh-CN': zh,
  'en-US': en,
}