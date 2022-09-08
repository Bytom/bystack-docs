## Node API

### How to use API

| Client   | URL   |
|:--:   |:--:   |
|Mainnet   |https://mainnet.bmcchain.com|
|Testnet |https://testnet.bmcchain.com|

### Example
```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 12
}'

//Response
{
"jsonrpc":"2.0",
"id":12,
"result":"0x32366"
}
```

### API method

* [`eth_blockNumber`](#eth_blockNumber)
* [`eth_getBlockByNumber`](#eth_getBlockByNumber)
* [`eth_getBlockByHash`](#eth_getBlockByHash)
* [`eth_getBlockTransactionCountByNumber`](#eth_getBlockTransactionCountByNumber)
* [`eth_getBlockTransactionCountByHash`](#eth_getBlockTransactionCountByHash)
* [`eth_getUncleCountByBlockHash`](#eth_getUncleCountByBlockHash)
* [`eth_getUncleCountByBlockNumber`](#eth_getUncleCountByBlockNumber)
* [`eth_syncing`](#eth_syncing)
* [`eth_accounts`](#eth_accounts)
* [`eth_gasPrice`](#eth_gasPrice)
* [`eth_newBlockFilter`](#eth_newBlockFilter)
* [`eth_newPendingTransactionFilter`](#eth_newPendingTransactionFilter)
* [`eth_uninstallFilter`](#eth_uninstallFilter)
* [`eth_mining`](#eth_mining)
* [`eth_hashrate`](#eth_hashrate)
* [`eth_getBalance`](#eth_getBalance)
* [`eth_getTransactionCount`](#eth_getTransactionCount)
* [`eth_getTransactionReceipt`](#eth_getTransactionReceipt)
* [`eth_getTransactionByHash`](#eth_getTransactionByHash)
* [`eth_getCode`](#eth_getCode)
* [`eth_getTransactionByBlockHashAndIndex`](#eth_getTransactionByBlockHashAndIndex)
* [`eth_getTransactionByBlockNumberAndIndex`](#eth_getTransactionByBlockNumberAndIndex)

#### `eth_blockNumber`

Returns the current block height.

##### Parameters

None

##### Returns

`Object`:

- `String` - *result*,Returns the current block height

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 12
}'

//Response
{
"jsonrpc":"2.0",
"id":12,
"result":"0x32366"
}
```
#### `eth_getBlockByNumber`

Returns information about a block by block number(hex encoded unsigned integer).

##### Parameters

`Object`:

- `String` & `Boolean`- *params*
  - `String` - *Block Number*
  - `Boolean`, If true it returns the full transaction objects, if false only the hashes of the transactions.

##### Returns

`Object` - The matching block object, or null if the block is not found, the structure is as follows:

- `String` - *result* 
  {
  - `String` - *difficulty*,The difficulty value of the block, as an integer.
  - `String` - *extraData*,Block extra data.
  - `String` - *gasLimit*,The maximum amount of gas allowed for this block.
  - `String` - *gasUsed*,The total gas used by all transactions in this block.
  - `String` - *hash*,The block hash, the pending block is null.
  - `String` - *logsBloom*,Bloom filter for the block log, pending blocks are null.
  - `String` - *miner*,The receiving account of mining rewards.
  - `String` - *mixHash*,mixHash
  - `String` - *nonce*,nonce
  - `String` - *Number*,The block number, the pending block is null.
  - `String` - *parentHash*,Parent block hash.
  - `String` - *receiptsRoot*,The root node of the block transaction receipt tree.
  - `String` - *sha3Uncles*,The SHA3 hash of the uncle data in the block.
  - `String` - *size*,Block size, the number of bytes in this block.
  - `String` - *stateRoot*,The root node of the final state tree of the block.
  - `String` - *timestamp*,timestamp
  - `String` - *totalDifficulty*,The total difficulty on the chain as of this block.
  - `String` - *transactions*,An array of transaction objects, or a 32-byte long array of transaction hashes.
  - `String` - *transactionsRoot*,Transaction data root node.
  - `String` - *uncles* ,Array of uncle block hashes.
}

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": ["0x92765",true],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":{
"difficulty":"0x2",
"extraData":"0xd883010000846765746888676f312e31332e34856c696e7578000000b27786dcf244b57773227818910a33c3af6ed4c4cd43e71694bc33aeec38e01add410948445bae6221179c480240cc9a185e9e1d3e582023dee006f71c0e0f4ebc36ffb500",
"gasLimit":"0x1c9c380",
"gasUsed":"0x0",
"hash":"0x66f2ef5b9eddaa63b5501dec4a3d6740c914ddf6419aec1771479c6476454a11",
"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"miner":"0x52093c7d03be906c37e0ecb42fd0d9ea1cfb1c0a",
"mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000",
"nonce":"0x0000000000000000",
"number":"0x92765",
"parentHash":"0xd301cd0fe5752cd5a6395f926a195e8350f38cab1287316cc3a67bd87b7f3d0e",
"receiptsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
"sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
"size":"0x262",
"stateRoot":"0x2813cddc28afe8313026fbb878ff5de2625b8a903af20eea899db233e3059f32",
"timestamp":"0x61d68803",
"totalDifficulty":"0x124cc3",
"transactions":[],
"transactionsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
"uncles":[]}}
```

#### `eth_getBlockByHash`

##### Parameters

`Object`:

- `String` - *Block Number*, 32-byte block hash.
- `Boolean`, If true it returns the full transaction objects, if false only the hashes of the transactions.

##### Returns

`Object` - The matching block object, or null if the block is not found, the structure is as follows:

- `String` - *result* 
  {
  - `String` - *difficulty*,The difficulty value of the block, as an integer.
  - `String` - *extraData*,Block extra data.
  - `String` - *gasLimit*,The maximum amount of gas allowed for this block.
  - `String` - *gasUsed*,The total gas used by all transactions in this block.
  - `String` - *hash*,The block hash, the pending block is null.
  - `String` - *logsBloom*,Bloom filter for the block log, pending blocks are null.
  - `String` - *miner*,The receiving account of mining rewards.
  - `String` - *mixHash*,mixHash
  - `String` - *nonce*,nonce
  - `String` - *Number*,The block number, the pending block is null.
  - `String` - *parentHash*,Parent block hash.
  - `String` - *receiptsRoot*,The root node of the block transaction receipt tree.
  - `String` - *sha3Uncles*,The SHA3 hash of the uncle data in the block.
  - `String` - *size*,Block size, the number of bytes in this block.
  - `String` - *stateRoot*,The root node of the final state tree of the block.
  - `String` - *timestamp*,timestamp
  - `String` - *totalDifficulty*,The total difficulty on the chain as of this block.
  - `String` - *transactions*,An array of transaction objects, or a 32-byte long array of transaction hashes.
  - `String` - *transactionsRoot*,Transaction data root node.
  - `String` - *uncles* ,Array of uncle block hashes.
}

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockByHash",
    "params": ["0x92765",true],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":{
"difficulty":"0x2",
"extraData":"0xd883010000846765746888676f312e31332e34856c696e7578000000b27786dcf244b57773227818910a33c3af6ed4c4cd43e71694bc33aeec38e01add410948445bae6221179c480240cc9a185e9e1d3e582023dee006f71c0e0f4ebc36ffb500",
"gasLimit":"0x1c9c380",
"gasUsed":"0x0",
"hash":"0x66f2ef5b9eddaa63b5501dec4a3d6740c914ddf6419aec1771479c6476454a11",
"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"miner":"0x52093c7d03be906c37e0ecb42fd0d9ea1cfb1c0a",
"mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000",
"nonce":"0x0000000000000000",
"number":"0x92765",
"parentHash":"0xd301cd0fe5752cd5a6395f926a195e8350f38cab1287316cc3a67bd87b7f3d0e",
"receiptsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
"sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
"size":"0x262",
"stateRoot":"0x2813cddc28afe8313026fbb878ff5de2625b8a903af20eea899db233e3059f32",
"timestamp":"0x61d68803",
"totalDifficulty":"0x124cc3",
"transactions":[],
"transactionsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
"uncles":[]}}
```

#### `eth_getBlockTransactionCountByNumber`

Returns the total transaction count for a given block number.

##### Parameters

`Object`:

- `String` - *params*, a Block number,hex encoded unsigned integer

##### Returns

`Object`:

- `String` - *result* ,Specifies the number of transactions within the block.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockTransactionCountByNumber",
    "params": ["0x1"],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":"0x1"
}

```

#### `eth_getBlockTransactionCountByHash`

Returns the number of transactions within the given hash block.

##### Parameters

`Object`:

- `String` - *params*, 32-byte block hash.

##### Returns

`Object`:

- `String` - *result*, Specifies the number of transactions within the block, an integer.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockTransactionCountByHash",
    "params": ["0x3a871a4c817df1625a054e79bdec02a6842c5db5a5209b3524636dd6c28dbf40"],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":"0x1"
}
```

#### `eth_getUncleCountByBlockHash`

Returns the number of uncle blocks of the block with the specified hash.

##### Parameters

- `String` - *params*，32-byte block hash

##### Returns

- `String` - *result*，Specifies the number of uncles for the block, an integer.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getUncleCountByBlockHash",
    "params": ["0xe0dce5b9aa028956bf14101eec5d41008471ccca9f50b8da0968991ba9aeea93"],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":"0x0"
}

```

#### `eth_getUncleCountByBlockNumber`

Returns the number of uncle blocks for a given block number.

##### Parameters

`Object`:

- `String` - *params*,a Block number,hex encoded unsigned integer

##### Returns

`Object`:

- `String` - *result*, the number of uncle blocks for the specified block.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getUncleCountByBlockNumber",
    "params": ["0x323f5"],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":"0x0"
}
```

#### `eth_syncing`

For synchronized clients, the call returns an object describing the synchronization state; for unsynchronized clients, it returns false.

##### Parameters

None

##### Returns

`Object` - Sync state object or false.

- `Boolean` - *result*, should always return false if out of sync.

The structure of the synchronization object is as follows:

- `String` - *startingBlock*, starting block.
- `String` - *currentBlock*, the current block.
- `String` - *highestBlock*, estimated highest block.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_syncing",
    "params": [],
    "id": 12
}'

//Respond
{
"jsonrpc": "2.0",
  "id": 12,
  "result":false
}
```

#### `eth_accounts`

Return a list of addresses owned by client.

##### Parameters

None

##### Returns

`Object`:

- `String` - *result*, A list of address strings held by the client.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_accounts",
    "params": [],
    "id": 12
}'

//Respond
{
"jsonrpc": "2.0",
 "id": 12,
 "result":[]
}
```

#### `eth_gasPrice`

Return the current price per gas in wei.

##### Parameters

None

##### Returns

`Object`:

- `String` - *result*, Integer, the current gas price in wei.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_gasPrice",
    "params": [],
    "id": 12
}'

//Respond:
{
"jsonrpc": "2.0",
"id": 12,
"result":"0x12a05f200"
}
```

#### `eth_newBlockFilter`

Create a filter in the node to be notified when a new block is generated. To check for state changes, call `eth_getFilterChanges`.

##### Parameters

None

##### Returns

`Object`:

- `String` - *result*,filter number.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_newBlockFilter",
    "params": [],
    "id": 12
}'

//Respond
{
"jsonrpc": "2.0",
"id": 12,
"result":"0xa4d21c5909c3e5355f0095ce3d530ab7"
}
```
#### `eth_newPendingTransactionFilter`

Create a filter in the node to be notified when pending transactions are generated. To check for state changes, call `eth_getFilterChanges`.

##### Parameters

None

##### Returns

`Object`:

- `String` - *result*, filter number.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_newPendingTransactionFilter",
    "params": [],
    "id": 12
}'

//Respond
{
"jsonrpc": "2.0",
"id": 12,
"result":"0xb899e1d4f0b20082620ac51bee0546ac"
}
```

#### `eth_uninstallFilter`

Write on the filter with the specified number. This call is always executed when listening is no longer required. Additionally, the filter automatically times out if the `eth_getFilterChanges` call is not received within a certain period of time.

##### Parameters

`Object`:

- `String` - *params*,filter number.

##### Returns

`Object`:

- `Boolean` - *result*,Returns true if the uninstall was successful, false otherwise.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_uninstallFilter",
    "params": ["0x11a1e4f3e5e6ead5922574ed4e9b4b2b"],
    "id": 12
}'

//Respond
{
"jsonrpc": "2.0",
"id": 12,
"result":"false"
}
```

#### `eth_mining`

Returns whether the client is actively mining new blocks.

##### Parameters

None

##### Returns

`Object`:

- `Bool` - *result*,  Returns true when the client is mining, otherwise returns false.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_mining",
    "params": [],
    "id": 12
}'

//Respond
"jsonrpc": "2.0",
"id": 12,
"result":"false"
```

#### `eth_hashrate`

Returns the number of hashes the node can compute per second when mining.

##### Parameters

None

##### Returns

`Object`:

- `String` - *Hashrate*,The number of hashes computed per second.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_mining",
    "params": [],
    "id": 12
}'

//Respond
"jsonrpc": "2.0",
"id": 12,
"result":"0x0"
```

#### `eth_getBalance`

Returns the balance of the account at the specified address.

##### Parameters

`Object`:

- `String` - *Address*，20 bytes, the address to check the balance.
- `String` - *Block*，Integer block number, or the string "latest", "earliest" or "pending".

##### Returns

- `String` - *Balance*，Current balance, unit: wei.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": ["0x6721c700284022337d0A549Cce25D31fE611C687","latest"],
    "id": 12
}'

//Respond
"jsonrpc": "2.0",
"id": 12,
"result":"0x9f92c6e342269c00"

```

#### `eth_getTransactionCount`

Returns the number of transactions that occurred at the specified address.

##### Parameters

`Object`:

- `String` - *Address*，20 bytes, the address to check the balance.
- `String` - *Block*，Integer block number, or the string "latest", "earliest" or "pending".

##### Returns

- `String` - *Number*，Number of transactions sent from the specified address, integer.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionCount",
    "params": ["0x6721c700284022337d0A549Cce25D31fE611C687","latest"],
    "id": 12
}'

//Respond
"jsonrpc": "2.0",
"id": 12,
"result":"0x9"
```

#### `eth_getTransactionReceipt`

Returns a receipt for the specified transaction, using the hash to specify the transaction.

It should be noted that pending transactions have invalid receipts.

##### Parameters

`Object` ：

- `String` - *Transaction hash*，32 bytes - transaction hash.

##### Returns

`Object` - The transaction receipt object, or null if the receipt does not exist. The structure of the transaction object is as follows:

  - `String` - *transactionHash*: DATA, 32 bytes - transaction hash.
  - `String` -*transactionIndex*: QUANTITY - The index number of the transaction within the block.
  - `String` - *blockHash*: DATA, 32bytes - Exchange the hash of the block.
  - `String` - *blockNumber*: QUANTITY - The number of the block in the exchange.
  - `String` - *from*: DATA, 20 bytes - transaction sender address.
  - `String` - *to*: DATA, 20bytes - The address of the recipient of the transaction, which is null for contract creation transactions.
  - `String` - *cumulativeGasUsed*: QUANTITY - The total amount of gas consumed by the exchange in the block.
  - `String` - *gasUsed: QUANTITY - The amount of gas consumed by this transaction.
  - `String` - *contractAddress*: DATA, 20 bytes - For contract creation transactions, the value of the newly created contract address, otherwise null.
  - `String` - *logs*: Array - Array of log objects generated by this transaction.
  - `String` - *logsBloom*: DATA, 256 bytes - bloom filter, used by light clients to quickly extract relevant logs.

The returned result object also includes one of the following:

  - `String` - *root* : DATA 32 bytes, post-transaction state root (pre Byzantium).
  - `String` - *status*: QUANTITY ，1 (success) or 0 (failure).

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionReceipt",
    "params": ["0x3ddeb97b8a3bc800e57ccec58c197e024e3a0030a2b690a31be6e0904195077c"],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":{
"blockhash":"0x1e593ff630122c60f1bfffad1e2ac6ba85ec306ed106eadc89fe58003187c8b6",
"blockNumber":"0xaf4ea",
"contractAddress":null,
"cumulativeGasUsed":"0x5280",
"from":"0x6721c700284022337d0A549Cce25D31fE611C687",
"gasUsed":"0x5280",
"logs":[],
"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"status":"0x1",
"to":"0xc105d8828b0FB39D4DB00d51CEb4BBcF1c3C6121",
"transactionHash":"0x3ddeb97b8a3bc800e57ccec58c197e024e3a0030a2b690a31be6e0904195077c",
"transactionIndex":"0x0",
"type":"0x0"}}
```

#### `eth_getTransactionByHash`

Returns the transaction corresponding to the specified hash.

##### Parameters

`Object`:

- `String` - *Transaction hash*，transaction hash.

##### Returns

`Object` - The transaction object, or null if no matching transaction is found. The structure is as follows:

  - `String` - *hash*: DATA, 32 bytes - transaction hash
  - `String` - *nonce*: QUANTITY - The number of transactions that the sender has generated before this transaction.
  - `String` - *blockHash*: DATA, 32bytes - The hash of the block being exchanged, or null for pending blocks.
  - `String` - *blockNumber*: QUANTITY - The number of the block the exchange is in, or null for pending blocks.
  - `String` - *transactionIndex*: QUANTITY - The index position of the transaction in the block, the value of the pending block is null.
  - `String` - *from*: DATA, 20bytes - Transaction sender address.
  - `String` -* to*: DATA, 20bytes - The address of the recipient of the transaction, or null for contract creation transactions.
  - `String` - *value*: QUANTITY - Amount of ether sent, unit: wei.
  - `String` - *gasPrice*: QUANTITY - The gas price provided by the sender, in wei.
  - `String` -* gas*: QUANTITY - The amount of gas available from the sender.
  - `String` - *input*: DATA - Data sent with the transaction.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByHash",
    "params": ["0x3ddeb97b8a3bc800e57ccec58c197e024e3a0030a2b690a31be6e0904195077c"],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":{
"blockhash":"Ox1e593ff630122c60f1bfffad1e2ac6ba85ec306edc89fe58003187c8b6",
"blockNumber":"0xaf4ea",
"from":"0x6721c700284022337d0A549Cce25D31fE611C687",
"gas":"0x5208",
"gasPrice":"0x3b9aca00",
"hash":"0x3ddeb97b8a3bc800e57ccec58c197e024e3a0030a2b690a31be6e0904195077c",
"input":"0x",
"nonce":"0x8",
"to":"0xc105d8828b0FB39D4DB00d51CEb4BBcF1c3C6121",
"transactionIndex":"0x0",
"value":"0xde0b6b3a7640000",
"type":"0x0",
"v":"0x19d",
"r":"0xfee4a2f16498752677d026c6061203aaabe9574204d558d4373cab2586870515"
"s":"0x158977d6141303150f10ffab0bc769e12d52ae89f69a67e328800cef3be131a6"}}

```

#### `eth_getCode`

Returns the code for the specified address.

##### Parameters

`Object`:

- `String` - *address*，20 bytes, address.
- `String` - *number*， Integer block number, or the string "latest", "earliest", or "pending".

##### Returns

- `String` - *Bytecode*，code at specified address.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getCode",
    "params": ["0x9B3EE91d5f499cB08871dA83AEE5a1f39302Dde8","latest"],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":"0x"
}

```

#### `eth_getTransactionByBlockHashAndIndex`

Returns the transaction with the specified index sequence number within the specified block.

##### Parameters

`Object`：

- `String` - *Block hash*，32bytes，Block hash。
- `String` - *Transaction index*，The index number of the transaction within the block.

##### Returns

`Object`：

- `String` - *Transaction informatoin*，Transaction informatoin.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByBlockHashAndIndex",
    "params": ["0x67a78c58c9dd2743f4d4e1ead9269e3419231702e3fcffc1105d38cfdb745b69","0x1"],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":null
}

```

#### `eth_getTransactionByBlockNumberAndIndex`

Returns the transaction with the specified index sequence number within the specified numbered block.

##### Parameters

`Object`：

- `String` - *Block number*，Integer block number, or the string "earliest", "latest", or "pending".
- `String` - *Transaction index*，The index number of the transaction within the block.

##### Returns

`Object`：

- `String` - *Transaction informatoin*，Transaction informatoin.

##### Example

```js
//Request
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByBlockNumberAndIndex",
    "params": ["0x1","0x1"],
    "id": 12
}'

//Respond
{
"jsonrpc":"2.0",
"id":12,
"result":null
}

```

