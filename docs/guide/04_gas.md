## Gas and Fees

This tutorial will introduce you to Gas in BMC.

### What is Gas ?

Gas refers to the computational effort required to perform a specific operation on the BMC.

Since each transaction requires computing resources to execute, each transaction needs to be paid, and Gas refers to the cost of a successful transaction. (*Note: Gas on BMC needs to be paid with BTM, and the accuracy of BTM is 10<sup>-18</sup>*

### Why do gas fees exist ?

Gas fees help ensure the security of the BMC network. There is a charge for every computation performed on the network, which prevents participants from spamming the network. To prevent unintentional, malicious, infinite loops or other computational waste in the code, each transaction is required to place a limit on the computational steps the code can perform.

### Gas calculation rules

Let's say Alice had to pay Bob 1 BTM. In the transaction, the gas limit is 21,000 units, and the gas price is 200 *10<sup>-9</sup> BTM.

Total fee would have been: _Gas units (limit) * Gas price per unit_ , i.e  _21,000 *200 *10<sup>-9</sup> = 0.0042 BTM_

When Alice sent the money, 1.0042 BTM would be deducted from Alice's account. Bob would be credited 1.0000 BTM. Miner would receive 0.0042 BTM.

The calculation of the gas limit involving smart contracts is more complicated, which will be explained in detail below.

### What is gas limit ?

The gas limit is the maximum amount of gas you are willing to spend in a transaction. More complex transactions involving smart contracts require more computational work, so they require higher gas limits than simple payments. Standard BTM transfers generally require a gas limit of 21,000 units.

For example, if you set a 50,000 gas limit on a simple BTM transfer. The EVM will consume 21,000 and you will receive the remaining 29,000. However, if you set too little gas, say, for a simple BTM transfer, the gas limit is 20,000. The EVM will cost you 20,000 gas trying to implement the transaction, but it won't complete. The EVM then reverts all changes, but since the miner has done work worth 20k gas, the gas is consumed.

### Gas calculation

If you want to estimate the gas executed by the smart contract, you can refer to the result given by `gasUsed` in Remix or geth.

It is also possible to use the Gas Estimation Chrome plugin -  [Blocknative ETH Gas Estimator](https://chrome.google.com/webstore/detail/blocknative-eth-gas-estim/ablbagjepecncofimgjmdpnhnfjiecfm) 

For specific gas consumption rules, please refer to [Yellow Paper](http://gavwood.com/Paper.pdf)

