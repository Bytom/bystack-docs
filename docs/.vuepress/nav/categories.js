// 导航菜单 中文
const zh = [
  {
    title: '快速入门',
    children: [
      { title: '简介', link: '/zh/guide/01_introduction.html' },
      { title: '主网快速入门', link: '/zh/guide/01_mainnet_quick_start.html' },
      { title: '测试网快速入门', link: '/zh/guide/01_testnet_quick_start.html' },
      { title: 'BAP20资产', link: '/zh/guide/01_bap20_token.html' },
      { title: '资产合约列表', link: '/zh/guide/01_token_list.html' },
      { title: '工具', link: '/zh/guide/01_tools.html' }
    ]
  },
  {
    title: '构建全节点',
    children: [
      { title: '构建全节点', link: '/zh/guide/02_install_bmc_node.html' },
      { title: '全节点 API', link: '/zh/guide/02_bmc_api.html' },
      { title: 'BMC命令行', link: '/zh/guide/02_bmc_cli.html' }
    ]
  },
  {
    title: '智能合约',
    children: [
      { title: '智能合约介绍', link: '/zh/guide/03_contract_introduction.html' },
      { title: '合约数据类型', link: '/zh/guide/03_types.html' },
      { title: '发行BAP20资产', link: '/zh/guide/03_issue_token.html' }
    ]
  },
  {
    title: '基础概念',
    children: [
      { title: '账户', link: '/zh/guide/04_account.html' },
      { title: '交易', link: '/zh/guide/04_transactions.html' },
      { title: 'Gas费用', link: '/zh/guide/04_gas.html' }
    ]
  }
];
const en = [
    {
      title: 'Getting Started',
      children: [
      { title: 'Introduction', link: '/guide/01_introduction.html' },
      { title: 'Mainnet Quick Start', link: '/guide/01_mainnet_quick_start.html' },
      { title: 'Testnet Quick Start', link: '/guide/01_testnet_quick_start.html' },
      { title: 'BAP20 Token', link: '/guide/01_bap20_token.html' },
      { title: 'Token List', link: '/guide/01_token_list.html' },
      { title: 'Tools', link: '/guide/01_tools.html' }
    ]
  },
  {
    title: 'Build Node',
    children: [
      { title: 'Install Node', link: '/guide/02_install_bmc_node.html' },
      { title: 'BMC API', link: '/guide/02_bmc_api.html' },
      { title: 'BMC Command Line', link: '/guide/02_bmc_cli.html' }
    ]
  },
  {
    title: 'Smart Contract',
    children: [
      { title: 'Smart Contract Introduction', link: '/guide/03_contract_introduction.html' },
      { title: 'Contract Data Types', link: '/guide/03_types.html' },
      { title: 'Issue BAP20 Token', link: '/guide/03_issue_token.html' }
    ]
  },
  {
    title: 'Concept',
    children: [
      { title: 'Account', link: '/guide/04_account.html' },
      { title: 'Transactions', link: '/guide/04_transactions.html' },
      { title: 'Gas', link: '/guide/04_gas.html' }
    ]
  }
];
export default {
  'zh-CN': zh,
  'en-US': en,
}