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

Bystack use a similar way to generate keys as Bitcoin, i.e. use 256 bits entropy to generate a 24-word mnemonic based on BIP39, and then use the mnemonic and an empty passphrase to generate a seed; finally use the seed to generate a master key, and derive the private key using BIP32/BIP44 with HD prefix as "44'".

### Key

Bystack uses the same elliptic curve cryptography as the current Bitcoin implementation, i.e. secp256k1. Its private key is 32 bytes while public key is 33 bytes.

### Address

Addresses on Bystack are 20 bytes and may be expressed as:

`Address = RIPEMD160(SHA256(compressed public key))`

Typically, an address is encoded in the bech32 format which includes a checksum and human-readable prefix

### Signature

Bystack uses an ECDSA signature on curve secp256k1 against a SHA256 hash of the byte array of a JSON-encoded canonical representation of the transaction. 

## Transaction

交易指的是由账户发起的操作，即由人管理的账户，而不是合约。

### 交易类型

在Bystack上有几种不同类型的交易：

- 常规交易：从一个钱包到另一个钱包的交易。
- 合约部署交易：没有“收件人”地址的交易，其中数据字段用于合约代码。

