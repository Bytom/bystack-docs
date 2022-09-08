## Gas费用

本教程将为您介绍 BMC 中的 Gas 相关内容。

### 什么是Gas？

Gas 是指在 BMC 上执行特定操作所需的计算工作量。

由于每笔交易都需要计算资源才能执行，所以每笔交易都需要付费，Gas 就是是指成功进行交易所需的费用。（*注：BMC 上的 Gas 需要使用 BTM 支付，BTM 的精度为 10<sup>-18</sup>*

### 为什么存在Gas？

Gas 费用有助于确保 BMC 网络安全。 在网络上执行的每次计算都需要收费，这样可以防止参与者对网络造成垃圾信息。 为了防止代码中无意、恶意的无限循环或其他计算浪费，要求每个事务对代码可以执行的计算步骤设置一个限制。

### Gas计算规则

假设 Alice 需要支付 1 BTM 给 Bob。 在普通交易中，gas 限额为 21,000 单位，gas 的价格是 200 *10<sup>-9</sup> BTM。

总费用为： `Gas 单位（限额） * Gas 单价` ，例如： _21,000 *200 *10<sup>-9</sup> = 0.0042 BTM_

当 Alice 汇款时，将从 Alice 账户中扣除 1.0042 BTM。 Bob 将获得 1.0000 BTM。 矿工将得到 0.0042 BTM。

而涉及智能合约的 Gas 限额计算则更加复杂，下面会具体阐述。

### 什么是 GAS 限额？

Gas 限额是指您愿意在交易中消耗的最大 gas 数量。 涉及**智能合约**的更复杂交易需要更多的计算工作，因此相比较简单的支付，它们需要**更高的 gas 限额**。 标准的 BTM 转账一般要求 gas 的限额为 21,000 单位。

例如，如果您对简单的 BTM 转账设置 50,000 gas 限额。EVM 将消耗 21,000，您将收到剩余的 29,000。 然而，如果您设置的 gas 太少，比如说，对于简单的 BTM 转账，gas 限额为 20,000。EVM 将消耗您 20,000 gas 试图实现交易，但不会完成。 然后，EVM 会恢复所有变化，但由于矿工已经完成了价值 20k gas 的工作，所以 gas 被消耗掉了。

### Gas计算

如果您想对智能合约执行的Gas做估算的话，可以参考 Remix 或者 geth 中的 `gasUsed` 给的结果。

也可以使用 Gas 估算 Chrome 插件 -  [Blocknative ETH Gas Estimator](https://chrome.google.com/webstore/detail/blocknative-eth-gas-estim/ablbagjepecncofimgjmdpnhnfjiecfm) 

具体的Gas消耗规则请参考[黄皮书](http://gavwood.com/Paper.pdf)





