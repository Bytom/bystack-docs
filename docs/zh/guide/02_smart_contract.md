# 智能合约

BMC兼容EVM虚拟机，可以用Solidity语言来写BMC合约，如下是一个简单的合约入门

```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

function set(uint x) public {
    storedData = x;
}

function get() public view returns (uint) {
    return storedData;
}
```

该合约实现了将数据存储于链上，它能允许任何人在合约中存储一个单独的数字，并且这个数字可以被世界上任何人访问，且没有可行的办法阻止你发布这个数字。当然，任何人都可以再次调用 set ，传入不同的值，覆盖你的数字，但是这个数字仍会被存储在区块链的历史记录中。

更多合约语言信息，请参考 Solidity文档
