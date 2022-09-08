# BAP20 Token

## 1.  Summary

This BAP-20 proposes an interface standard to create token contracts on Bytom Sidechain.

## 2.  Abstract

The following standard defines the implementation of APIs for token smart contracts. It is proposed by deriving the ERC20 protocol of Ethereum and provides the basic functionality to transfer tokens, allow tokens to be approved so they can be spent by another on-chain third party, and transfer between Bytom Blockchain and Bytom Sidechain

## 3.  Motivation

A standard interface allows any tokens on Bytom Sidechain to be used by other applications: from wallets to decentralized exchanges in a consistent way. 

## 4.  Status

draft.

## 5.  Specification

### 5.1 Token

#### 5.1.1 Methods

##### 5.1.1.1 name

```
function name() external view returns (string memory)
```
- Returns the name of the token - e.g. "MyToken".
- **OPTIONAL** - This method can be used to improve usability, but interfaces and other contracts MUST NOT expect these values to be present.

##### 5.1.1.2 symbol

```
function symbol() external view returns (string memory)
```
- Returns the symbol of the token. E.g. “HIX”.
- This method can be used to improve usability
- **NOTE** - This method is optional in EIP20. In BAP20, this is a required method. 

##### 5.1.1.3 decimals

```
function decimals() external view returns (uint8)
```
- Returns the number of decimals the token uses - e.g. 8, means to divide the token amount by 100000000 to get its user representation.
- This method can be used to improve usability
- **NOTE** - This method is optional in EIP20. In BAP20, 

##### 5.1.1.4 totalSupply

```
function totalSupply() external view returns (uint256)
```
- Returns the total token supply. 

##### 5.1.1.5 balanceOf

```
function balanceOf(address account) external view returns (uint256)
```
- Returns the account balance of another account with address `_owner`.

##### 5.1.1.6 getOwner

```
function getOwner() external view returns (address)
```
- Returns the bap20 token owner which is necessary for binding with bap2 token.
- **NOTE** - This is an extended method of EIP20. 

##### 5.1.1.7 transfer

```
function transfer(address recipient, uint256 amount) external returns (bool)
```

- Transfers `_value` amount of tokens to address `_to`, and MUST fire the Transfer event. The function SHOULD throw if the message caller’s account balance does not have enough tokens to spend.
- **NOTE** - Transfers of 0 values MUST be treated as normal transfers and fire the Transfer event.

##### 5.1.1.8 transferFrom

```
function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)
```
- Transfers `_value` amount of tokens from address `_from` to address `_to`, and MUST fire the Transfer event.
- The transferFrom method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf. This can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies. The function SHOULD throw unless the `_from` account has deliberately authorized the sender of the message via some mechanism.
- **NOTE** - Transfers of 0 values MUST be treated as normal transfers and fire the Transfer event.

##### 5.1.1.9 approve

```
function approve(address spender, uint256 amount) external returns (bool)
```

- Allows `_spender` to withdraw from your account multiple times, up to the `_value` amount. If this function is called again it overwrites the current allowance with `_value`.
- **NOTE** - To prevent attack vectors like the one described here and discussed here, clients SHOULD make sure to create user interfaces in such a way that they set the allowance first to 0 before setting it to another value for the same spender. THOUGH The contract itself shouldn’t enforce it, to allow backwards compatibility with contracts deployed before

##### 5.1.1.10 allowance

```
function allowance(address _owner, address spender) external view returns (uint256)
```

- Returns the amount which `_spender` is still allowed to withdraw from `_owner`.

#### 5.1.2 Events

##### 5.1.2.1 Transfer

```
event Transfer(address indexed from, address indexed to, uint256 value)
```
- **MUST** trigger when tokens are transferred, including zero value transfers.
- A token contract which creates new tokens SHOULD trigger a Transfer event with the `_from` address set to 0x0 when tokens are created.

##### 5.1.2.2 Approval

```
event Approval(address indexed owner, address indexed spender, uint256 value)
```
**MUST** trigger on any successful call to `approve(address _spender, uint256 _value)`.

### 5.2 Implementation

Example implementations are available at [https://github.com/Bytom/bmc-genesis-contract/tree/main/contracts/bap20_template](https://github.com/Bytom/bmc-genesis-contract/tree/main/contracts/bap20_template)

