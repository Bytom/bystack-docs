## BMC Smart Contract

BMC is compatible with EVM virtual machine, and BMC contract can be written in Solidity language. The following is a example

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

}
```

The contract realizes the storage of data on the chain, it allows anyone to store a single number in the contract, and this number can be accessed by anyone in the world, and there is no feasible way to prevent you from publishing this number. Of course, anyone can call `set`method again and pass in a different value to overwrite your number, but this number will still be stored in the history of the blockchain.

For more contract language information, please refer to  [Solidity docs](https://docs.soliditylang.org/en/v0.8.11/)

