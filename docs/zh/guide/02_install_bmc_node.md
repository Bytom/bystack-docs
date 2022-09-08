# 安装BMC节点

本教程将展示如何从源代码安装 BMC 节点。

## 安装Golang

按照[Office Docs](https://go.dev/doc/install)安装`Go`，并且设置$PATH环境变量。

检查`Go`环境变量

```bash
go env GOROOT GOPATH
```

检查`Go`的版本, 1.5 或者更高

```bash
go version
```

## 获取源代码

```shell
git clone https://github.com/Bytom/bmc.git
```

## 构建源代码

```shell
cd bmc-main 
make geth 
```

你可以在 `/bmc-main/build/bin`中看到此文件

## 可执行文件

|  命令   | 描述                                                  |
| :--------: | ------------------------------------------------------------ |
| **`geth`** | 主要的 Bytom 侧链客户端二进制文件。它是进入 BMC 网络的入口，能够作为全节点（默认）、归档节点（保留所有历史状态）或轻节点（实时检索数据）运行。 它具有与 go-ethereum 相同且更多的 RPC 和其他接口，并且可以被其他进程用作进入 BMC 网络的网关，通过暴露在 HTTP、WebSocket 和/或 IPC 传输之上的 JSON RPC 端点。 `geth --help` 和 [CLI 页面](https://geth.ethereum.org/docs/interface/command-line-options) 用于命令行选项。 |

## 运行 BMC  

### 下载  

下载必要的配置文件 [testnet.zip](https://github.com/Bytom/bmc/releases/download/v.1.0.0/testnet.zip) 或 [mainnet.zip]()(todo...)
解压后你会看到  `genesis.json` 和 `config.toml`两个文件

### 初始化

将配置文件(`genesis.json` 和 `config.toml`) 放入 `/bmc-main/build/bin`文件夹中
进入 ```/bmc-main/build/bin``` 

```shell
geth  --datadir {{datadir}/node}  init genesis.json
```
`{datadir}` ：你可以自己指定一个路径，并保证与下面使用的路径一致

### 启动网络

```shell
geth --config config.toml --datadir {{datadir}/node}  --cache 8000  --txlookuplimit 0
```

### 检查节点

```shell
geth attach /{datadir}/node/geth.ipc

>eth.blockNumber
13872
```

### 连接网络
使用 MetaMask 连接 BMC 网络

|                 | 主网                      | 测试网                      |
|:----------------|------------------------------|:-----------------------------|
| 网络名称    | BMC                          | BMC测试网                  |
| 链ID        | 188                          | 189                          |
| RPC URL         | https://mainnet.bmcchain.com | https://testnet.bmcchain.com |
| 代币符号 | BTM                          | BTM                          |

##  可能出现的问题

1. 当执行 `make geth`命令时，如果出现 :

```
# runtime/cgo
_cgo_export.c:3:10: fatal error: stdlib.h: No such file or directory
    3 | #include <stdlib.h>
      |          ^~~~~~~~~~
compilation terminated.
util.go:46: exit status 2
exit status 1
make: *** [Makefile:16: geth] Error 1
```

你可以执行`sudo apt-get install build-essential`去解决这个问题。

