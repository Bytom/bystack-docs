## BMC 命令行

### 命令用法

```
geth [选项] 命令 [命令选项][参数…] 
```
### 命令

| 命令   | 说明   |
|:--:   |:--:   |
| account   | 管理账户 |
| attach   |  启动交互式JavaScript环境（连接到节点） |
| bug   |     上报bug Issues |
| console  |  启动交互式JavaScript环境 |
| copydb  |   从文件夹创建本地链 |
| dump   |    Dump（分析）一个特定的块存储 |
|dumpconfig | 显示配置值 |
| export  |   导出区块链到文件 |
| import |    导入一个区块链文件 |
| init   |    启动并初始化一个新的创世纪块 |
| js     |    执行指定的JavaScript文件(多个) |
| license |   显示许可信息 |
| makecache | 生成ethash验证缓存(用于测试) |
| makedag  |  生成ethash 挖矿DAG(用于测试) |
| monitor  |  监控和可视化节点指标 |
| removedb |  删除区块链和状态数据库 |
| version |   打印版本号 |
| wallet  |   管理Ethereum预售钱包 |
|help |  显示一个命令或帮助一个命令列表 |

### ETHEREUM选项

| 选项   | 说明   |
|:--:   |:--:   |
| --config value     |     TOML 配置文件 |
| --datadir “xxx”    |     数据库和keystore密钥的数据目录 |
| --keystore        |      keystore存放目录(默认在datadir内) |
| --nousb          |       禁用监控和管理USB硬件钱包 |
| --networkid value  |     网络标识符(整型, 1=Frontier, 2=Morden (弃用), 3=Ropsten, 4=Rinkeby) (默认: 1) |
| --testnet     |          Ropsten网络:预先配置的POW(proof-of-work)测试网络 |
| --rinkeby      |         Rinkeby网络: 预先配置的POA(proof-of-authority)测试网络 |
| --syncmode "fast"   |    同步模式 ("fast", "full", or "light") |
| --ethstats value  |      上报ethstats service  URL (nodename:secret@host:port) |
| --identity value   |     自定义节点名 |
| --lightserv value  |     允许LES请求时间最大百分比(0 – 90)(默认值:0)  |
| --lightpeers value  |    最大LES client peers数量(默认值:20) |
| --lightkdf      |        在KDF强度消费时降低key-derivation RAM&CPU使用 |