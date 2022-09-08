## Account

This document describes BMC's account system, an account is an entity with a BTM balance that can send transactions on BMC. Accounts can be controlled by users or deployed as smart contracts.

### BMC Accounts Type  

BMC has two account types: 

- Externally-owned – controlled by anyone with the private keys
- Contract – a smart contract deployed to the network, controlled by code. 

Both account types have the ability to:

- Receive, hold and send tokens（BTM）

- Interact with deployed smart contracts

#### Key differences

- **Externally-owned**
- 
  - Creating an account costs nothing

  - Can initiate transactions

  - Transactions between externally-owned accounts can only be BTM or other token transfers

- **Contract**

  - Creating a contract has a cost because you're using network storage

  - Can only send transactions in response to receiving a transaction

  - Transactions from an external account to a contract account can trigger code which can execute many different actions, such as transferring tokens or even creating a new contract


### Account Details

BMC accounts have four fields:

- `nonce` – A counter that indicates the number of transactions sent from the account. This ensures transactions are only processed once. In a contract account, this number represents the number of contracts created by the account.

- `balance` – The balance of the account.（BTM）

- `codeHash` – This hash refers to the code of an account. Contract accounts have code fragments programmed in that can perform different operations. This code gets executed if the account gets a message call. It cannot be changed, unlike the other account fields. All such code fragments are contained in the state database under their corresponding hashes for later retrieval. This hash value is known as a codeHash. For externally owned accounts, the codeHash field is the hash of an empty string.

- `storageRoot` – Sometimes known as a storage hash. A 256-bit hash of the root node of a Merkle Patricia trie that encodes the storage contents of the account (a mapping between 256-bit integer values), encoded into the trie as a mapping from the Keccak 256-bit hash of the 256-bit integer keys to the RLP-encoded 256-bit integer values. This trie encodes the hash of the storage contents of this account, and is empty by default.

### Account and Key

#### Externally-owned Accounts and Key Pairs 

An account is made up of a cryptographic pair of keys: public and private. They help prove that a transaction was actually signed by the sender and prevent forgeries. Your private key is what you use to sign transactions, so it grants you custody over the funds associated with your account. 

This prevents malicious actors from broadcasting fake transactions because you can always verify the sender of a transaction.

If Alice wants to send BTM from her own account to Bob’s account, Alice needs to create a transaction request and send it out to the network for verification. BMC’s usage of public-key cryptography ensures that Alice can prove that she originally initiated the transaction request. Without cryptographic mechanisms, a malicious adversary Dav could simply publicly broadcast a request that looks something like “send 5 BTM from Alice’s account to Dav’s account,” and no one would be able to verify that it didn’t come from Alice

#### Account Creation  

When you want to create an account most libraries will generate you a random private key.

A private key is made up of 64 hex characters and can be encrypted with a password.

Example:

`fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036415f`

The public key is generated from the private key using the [Elliptic Curve Digital Signature Algorithm](https://wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm). You get a public address for your account by taking the last 20 bytes of the Keccak-256 hash of the public key and adding `0x` to the beginning.

Here's an example of creating an account in the console using GETH's `personal_newAccount`

```js
> personal.newAccount()
Passphrase:
Repeat passphrase:
"0x5e97870f263700f46aa00d967821199b9bc5a120"

> personal.newAccount("h4ck3r")
"0x3d80b31a78c30fc628f20b2c89d7ddbf6e53cedc"
```

#### Contract Accounts

Contract accounts also have a 42 character hexadecimal address:

Example:

`0x06012c8cf97bead5deae237070f9587f8e7a266d`

The contract address is usually given when a contract is deployed to the BMC Blockchain. The address comes from the creator's address and the number of transactions sent from that address (the “nonce”).








