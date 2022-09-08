# Install BMC Node

This guide will show how to install BMC node from source code.

## Install Golang

Install `Go`by following the [Office Docs](https://go.dev/doc/install),Remember to set your $PATH environment variable.

Check `Go`environment variable

```bash
go env GOROOT GOPATH
```

Check  `Go` version, 1.5 or higher

```bash
go version
```

## Get the source code

```shell
git clone https://github.com/Bytom/bmc.git
```

## Build source code

```shell
cd bmc-main
make geth 
```

you can see the file in `/bmc-main/build/bin`

## Executables

|  Command   | Description                                                  |
| :--------: | ------------------------------------------------------------ |
| **`geth`** | Main Bytom Side Chain client binary. It is the entry point into the BMC network，capable of running as a full node (default), archive node (retaining all historical state) or a light node (retrieving data live). It has the same and more RPC and other interface as go-ethereum and can be used by other processes as a gateway into the BMC network via JSON RPC endpoints exposed on top of HTTP, WebSocket and/or IPC transports. `geth --help` and the [CLI page](https://geth.ethereum.org/docs/interface/command-line-options) for command line options. |

## Running BMC  

### Download  

Download the necessary configuration files. [testnet.zip](https://github.com/Bytom/bmc/releases/download/v.1.0.0/testnet.zip) or [mainnet.zip]()(todo...)
Unzip it and you'll see two files  `genesis.json` and `config.toml`.

### Init

Add the configuration file(`genesis.json` and `config.toml`) to directory `/bmc-main/build/bin`
go to ```/bmc-main/build/bin``` 

```shell
geth  --datadir {{datadir}}  init genesis.json
```

### Start

```shell
geth --config config.toml --datadir {{datadir}}  --cache 8000  --txlookuplimit 0
```
`{datadir}` :You can specify your own path and consistent with the following.

### Check the Node

```shell
geth attach /{datadir}/node/geth.ipc

>eth.blockNumber
13872
```

### Connect
Connect BMC network with MetaMask

|                 | Mainnet                      | Testnet                      |
|:----------------|------------------------------|:-----------------------------|
| Network Name    | BMC                          | BMC Testnet                  |
| Chain ID        | 188                          | 189                          |
| RPC URL         | https://mainnet.bmcchain.com | https://testnet.bmcchain.com |
| Currency Symbol | BTM                          | BTM                          |

##  The possible problem

1. When you execute command `make geth`, if :

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

You can use `sudo apt-get install build-essential` to  solve the problem.

