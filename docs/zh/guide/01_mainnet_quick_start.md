# 主网快速入门


## 准备钱包

我们使用的是 metamask ，介绍如下：

[什么是Metamask](https://metamask.io/index.html)

[Metamask指南](https://docs.metamask.io/guide/)


## 为 BMC 配置 Metamask

- 网络名称：BMC

- RPC URL:  [https://mainnet.bmcchain.com](https://mainnet.bmcchain.com)

- 链 ID: 188

- 货币符号: BTM

- 区块链浏览器网址：[https://bmc.blockmeta.com](https://bmc.blockmeta.com)

![](../img/01/mainnet1.png)

或者使用Chainlist一键添加BMC网络

1、在浏览器中进入：[https://chainlist.org/](https://chainlist.org/)
![](../img/01/mainnet2.png)

2、连接钱包
![](../img/01/mainnet3.png)

3、在搜索框中，搜索BMC
![](../img/01/mainnet4.png)

4、点击添加到metamask即可

## 部署智能合约

我们使用 remix 来编写、编译、部署智能合约
remix 是一个“无需设置”的浏览器 IDE，用于开发 EVM 智能合约。

### 1.准备智能合约

前往 [https://remix.ethereum.org/](https://remix.ethereum.org/)
文件资源管理器中有一些合约。 选择这些合约中的任何一个。 在这个例子中，我们使用`Storage.sol`，或者你也可以自己编写智能合约。

![](../img/01/testnet3.png)

### 2.编译智能合约

在左侧栏上，选择“Solidity Compiler”并编译合约。

![](../img/01/testnet4.png)

### 3.部署智能合约

在左侧栏上，选择`部署和运行`选项。 选择`injected web3`作为环境。 这里会弹出一个 metamask 窗口，确认是否将 Metamask 连接到 Remix，点击下一步，点击连接。

![](../img/01/testnet5.png)

![](../img/01/testnet6.png)

![](../img/01/testnet7.png)

![](../img/01/testnet8.png)

现在您的帐户已连接，您可以部署合约，点击部署按钮，弹出 metamask 窗口，提示是否确认，点击确认交易。

![](../img/01/testnet9.png)

智能合约部署成功

![](../img/01/testnet10.png)

### 4. 与智能合约交互

现在，您可以通过 Remix 与合约进行交互。 对于`Storage.sol`，输入 10 并单击 store。

![](../img/01/testnet11.png)

这里会打开一个 Metamask 弹出窗口，询问是否确认，确认交易。 

![](../img/01/testnet12.png)

弹出交易成功提示

![](../img/01/testnet13.png)

然后单击检索以获取数值，这里的数值应为 10。

![](../img/01/testnet14.png)


