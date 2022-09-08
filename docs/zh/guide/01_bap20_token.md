# BAP20 资产

## 1.  概述

BAP-20提出了一个接口标准，用于在Bytom侧链上创建Token合约。

## 2.  摘要

以下标准定义了代币智能合约的 API 实现。 它是由以太坊的 ERC20 协议衍生而来，提供基本的代币转账功能，允许代币被批准以便其他链上第三方使用，以及比原链和比原链侧链之间的转账。

## 3.  目的

创建标准接口，允许比原链上的任何代币被其他应用程序以一致的方式使用，包括但不限于钱包、去中心化交易所等。

## 4.  状态

草稿

## 5.  规范

### 5.1 Token

#### 5.1.1 方法

##### 5.1.1.1 name

```
function name() external view returns (string memory)
```

- 返回Token的名称，例如：“MyToken”。
- 
- **可选** - 这个方法可以用来提高可用性，但是不要在接口以及其他合约中使用！

##### 5.1.1.2 symbol

```
function symbol() external view returns (string memory)
```

- 返回Token的标记符号，例如“HIX”。
- 提高可用性。
- **注意** - 这个方法在EIP20中是可选的，但在BAP20中却是必需声明的。

##### 5.1.1.3 decimals

```
function decimals() external view returns (uint8)
```

- 返回Token使用的小数位数 - 例如 8，表示将token数量除以100000000。
- 提高可用性。
- **注意** - 这个方法在EIP20中是可选的。在BAP20中是必需声明的。

##### 5.1.1.4 totalSupply

```
function totalSupply() external view returns (uint256)
```

- 返回总Token供应量。

##### 5.1.1.5 balanceOf

```
function balanceOf(address account) external view returns (uint256)
```

- 返回地址为“_owner”的另一个账户的账户余额。

##### 5.1.1.6 getOwner

```
function getOwner() external view returns (address)
```

- 返回绑定 BAP20 Token所需的 BAP20 Token所有者。
- **注意** - 这是EIP20的扩展方法。

##### 5.1.1.7 transfer

```
function transfer(address recipient, uint256 amount) external returns (bool)
```

- 将 `_value` 数量的代币转移到地址 `_to`，并且必须触发 Transfer 。 如果消息调用者的帐户余额不足，则抛出该函数。
- **注意** - 可以使用0值的传输，并可以触发 Transfer 。

##### 5.1.1.8 transferFrom

```
function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)
```

- 将`_value`数量的代币从地址`_from`转移到地址`_to`，并且必须触发 Transfer 事件。
- transferFrom 方法用于提款，允许合约代表您转移Token。 这可用于允许合约代表您转移Token或以子货币收取费用。 只有`_from` 帐户通过某种机制故意授权消息的发送者，该函数才会被抛出。
- **注意** - 可以使用0 值的传输，并可以触发 Transfer 。

##### 5.1.1.9 approve

```
function approve(address spender, uint256 amount) external returns (bool)
```

- 允许 `_spender` 多次从您的账户中提款，最多可达 `_value` 的金额。 如果再次调用此函数，“_value”会覆盖当前的限额。
- **注意** - 为了防止利用以上方法进行攻击，客户端创建用户界面时首先应将限额设置为 0，然后再将其设置为同一spender的另一个值。 合约本身不强制执行，以允许与之前部署的合约向后兼容。

##### 5.1.1.10 allowance

```
function allowance(address _owner, address spender) external view returns (uint256)
```

- 返回`_spender`仍可从`_owner`中提取的金额。

#### 5.1.2 事件

##### 5.1.2.1 Transfer

```
event Transfer(address indexed from, address indexed to, uint256 value)
```

- **注意** - 代币转移时触发，包括零值转移。
- 创建新代币的代币合约应该在创建代币时触发`_from`地址设置为 0x0 的 Transfer 事件。

##### 5.1.2.2 Approval

```
event Approval(address indexed owner, address indexed spender, uint256 value)
```

**注意** - 在成功调用 `approve(address _spender, uint256 _value)` 时触发。

### 5.2 执行

示例实现可查看 [https://github.com/Bytom/bmc-genesis-contract/tree/main/contracts/bap20_template](https://github.com/Bytom/bmc-genesis-contract/tree/main /contracts/bap20_template)

