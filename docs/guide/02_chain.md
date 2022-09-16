# Bystack Chain

## Design goals

- Wait for a few blocks to confirm, no fork in most cases.
- 5 seconds or less block time
- better compatible
- support more cryptographic signature algorithm(like SM1 - SM4)

## Validator

Bystack chain relies on a set of validators who are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by signing blocks that contain cryptographic signatures signed by each validator's private key. 

## Block

Each block contain 1M Byte data at maximum,contain thousands of transactions, and generate a block in 5s or less

## Account and Address

Bystack使用与比特币类似的方式生成密钥，即使用 256 位熵生成基于BIP39的 24 字助记词，然后使用助记词和空密码生成种子；最后使用种子生成主密钥，使用 BIP32/BIP44 导出私钥，HD 前缀为"44'/"。

Bystack链使用secp256k1椭圆曲线。它的私钥是 32 字节，而公钥是 33 字节。

地址为 20 字节，可以表示为：

`Address = RIPEMD160(SHA256(compressed public key))`

通常，地址以bech32格式编码，其中包括校验和和人类可读前缀 (HRP)。

## 交易

交易指的是由账户发起的操作，即由人管理的账户，而不是合约。

### 交易类型

在Bystack上有几种不同类型的交易：

- 常规交易：从一个钱包到另一个钱包的交易。
- 合约部署交易：没有“收件人”地址的交易，其中数据字段用于合约代码。

