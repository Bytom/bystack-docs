## Node API

### 如何使用 API

| 网络   | URL   |
|:--:   |:--:   |
|  主网  |https://mainnet.bmcchain.com|
|测试网 |https://testnet.bmcchain.com|

### 示例
```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 12
}'

//响应
{
"jsonrpc":"2.0",
"id":12,
"result":"0x32366"
}
```

### API 方法

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

返回当前块高度。

##### 参数

空

##### 返回值

`Object`:

- `String` - *result*, 返回当前区块高度。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' \
--header 'Content-Type: application/json' \
--data '{
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 12
}'

//响应
{
"jsonrpc":"2.0",
"id":12,
"result":"0x32366"
}
```
#### `eth_getBlockByNumber`

按区块编号（十六进制编码的无符号整数）返回有关区块的信息。

##### 参数

`Object`:

- `String` & `Boolean`- *params*
  - `String`，区块号
  - `Boolean`，如果为 true，则返回完整的交易对象，如果为 false，则仅返回交易的哈希值。

##### 返回值

`Object` - 匹配的区块对象，如果未找到区块则返回null，结构如下：

- `String` - *result* 
  {
  - `String` - *difficulty*，区块的难度值，为整数。
  - `String` - *extraData*，区块额外数据。
  - `String` - *gasLimit*，本区块允许的最大gas用量。
  - `String` - *gasUsed*，本块中所有交易使用的总gas用量。
  - `String` - *hash*，区块哈希，挂起块为null。
  - `String` - *logsBloom*， 区块日志的bloom过滤器，挂起块为null。
  - `String` - *miner*，挖矿奖励的接收账户。
  - `String` - *mixHash*，混合哈希。
  - `String` - *nonce*，随机数。
  - `String` - *Number*，区块编号，挂起块为null。
  - `String` - *parentHash*，父区块哈希。
  - `String` - *receiptsRoot*，区块交易收据树的根节点。
  - `String` - *sha3Uncles*，区块中叔伯数据的SHA3哈希。
  - `String` - *size*，区块大小，本区块字节数。
  - `String` - *stateRoot*，区块最终状态树的根节点。
  - `String` - *timestamp*，时间戳。
  - `String` - *totalDifficulty*，截止到本块的链上总难度。
  - `String` - *transactions*，交易对象数组，或32字节长的交易哈希数组。
  - `String` - *transactionsRoot*，交易数据根节点。
  - `String` - *uncles* ，叔伯区块哈希数组。
}

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": ["0x92765",true],
    "id": 12
}'

//响应
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

返回指定哈希的区块信息。

##### 参数

`Object`:

- `String` - 32字节的区块哈希。
- `Boolean`，为true时返回完整的交易对象，否则仅返回交易哈希。

##### 返回值

`Object` - 匹配的块对象，如果未找到块则返回null，结构如下：

- `String` - *result* 
  {
  - `String` - *difficulty*，块的难度值，为整数。
  - `String` - *extraData*，区块额外数据。
  - `String` - *gasLimit*，本区块允许的最大gas用量。
  - `String` - *gasUsed*，本块中所有交易使用的总gas用量。
  - `String` - *hash*，区块哈希，挂起块为null。
  - `String` - *logsBloom*， 区块日志的bloom过滤器，挂起块为null。
  - `String` - *miner*，挖矿奖励的接收账户。
  - `String` - *mixHash*，混合哈希。（^0x[0-9a-f]{64}$）
  - `String` - *nonce*，随机数。
  - `String` - *Number*，区块编号，挂起块为null。
  - `String` - *parentHash*，父区块哈希。
  - `String` - *receiptsRoot*，块交易收据树的根节点。
  - `String` - *sha3Uncles*，区块中叔伯数据的SHA3哈希。
  - `String` - *size*，区块大小，本区块字节数。
  - `String` - *stateRoot*，区块最终状态树的根节点。
  - `String` - *timestamp*，时间戳。
  - `String` - *totalDifficulty*，截止到本块的链上总难度。
  - `String` - *transactions*，交易对象数组，或32字节长的交易哈希数组。
  - `String` - *transactionsRoot*，交易数据根节点。
  - `String` - *uncles* ，叔伯哈希数组。
}

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockByHash",
    "params": ["0x66f2ef5b9eddaa63b5501dec4a3d6740c914ddf6419aec1771479c6476454a11",true],
    "id": 12
}'

//响应
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

返回给定编号区块内的交易数量。

##### 参数

`Object`:

- `String` - *params*, 区块编号：十六进制编码的无符号整数。

##### 返回值

`Object`:

- `String` - *result* ,指定区块内的交易数量。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockTransactionCountByNumber",
    "params": ["0x1"],
    "id": 12
}'

//响应
{
"jsonrpc":"2.0",
"id":12,
"result":"0x1"
}

```

#### `eth_getBlockTransactionCountByHash`

返回给定哈希区块内的交易数量。

##### 参数

- `String` - *params*，32字节的区块哈希。

##### 返回值

- `String` - *result*，指定块内的交易数量，整数。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockTransactionCountByHash",
    "params": ["0x3a871a4c817df1625a054e79bdec02a6842c5db5a5209b3524636dd6c28dbf40"],
    "id": 12
}'

//响应
{
"jsonrpc":"2.0",
"id":12,
"result":"0x1"
}

```

#### `eth_getUncleCountByBlockHash`

返回指定哈希的区块的叔伯块数量。

##### 参数

- `String` - *params*，32字节的区块哈希

##### 返回值

- `String` - *result*，指定块的叔伯数量，整数。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getUncleCountByBlockHash",
    "params": ["0xe0dce5b9aa028956bf14101eec5d41008471ccca9f50b8da0968991ba9aeea93"],
    "id": 12
}'

//响应
{
"jsonrpc":"2.0",
"id":12,
"result":"0x0"
}

```

#### `eth_getUncleCountByBlockNumber`

返回给定编号区块的叔伯块数量。

##### 参数

`Object`:

- `String` - *params*，区块号，十六进制编码的无符号整数

##### 返回值

`Object`:

- `String` - *result*, 指定块的叔伯块数量

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getUncleCountByBlockNumber",
    "params": ["0x323f5"],
    "id": 12
}'

//响应
{
"jsonrpc":"2.0",
"id":12,
"result":"0x0"
}
```

#### `eth_syncing`

对于已经同步的客户端，该调用返回一个描述同步状态的对象；对于未同步客户端，返回false。

##### 参数

空

##### 返回值

`Object` - 同步状态对象或false。

- `Boolean` - *result*，如果不同步，应该总是返回 false。

同步对象的结构如下：

- `String` - *startingBlock*，开始块
- `String` - *currentBlock*，当前块
- `String` - *highestBlock*，预估最高块

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_syncing",
    "params": [],
    "id": 12
}'

//响应
{
"jsonrpc": "2.0",
  "id": 12,
  "result":false
}
```

#### `eth_accounts`

返回客户端拥有的地址列表。

##### 参数

空

##### 返回值

`Object`:

- `String` - *result*, 客户端持有的地址字符串列表。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_accounts",
    "params": [],
    "id": 12
}'

//响应
{
"jsonrpc": "2.0",
 "id": 12,
 "result":[]
}
```

#### `eth_gasPrice`

返回当前的gas价格，单位：wei。

##### 参数

空

##### 返回值

`Object`:

- `String` - *result*, 整数，以wei为单位的当前gas价格。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_gasPrice",
    "params": [],
    "id": 12
}'

//响应
{
"jsonrpc": "2.0",
"id": 12,
"result":"0x12a05f200"
}
```

#### `eth_newBlockFilter`

在节点中创建一个过滤器，以便当新块生成时进行通知。要检查状态是否变化， 请调用`eth_getFilterChanges`。

##### 参数

空

##### 返回值

`Object`:

- `String` - *result*,，过滤器编号。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_newBlockFilter",
    "params": [],
    "id": 12
}'

//响应
{
"jsonrpc": "2.0",
"id": 12,
"result":"0xa4d21c5909c3e5355f0095ce3d530ab7"
}
```

#### `eth_newPendingTransactionFilter`

在节点中创建一个过滤器，以便当产生挂起交易时进行通知。 要检查状态是否发生变化，请调用`eth_getFilterChanges`。

##### 参数

空

##### 返回值

`Object`:

- `String` - *result*, 过滤器编号。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_newPendingTransactionFilter",
    "params": [],
    "id": 12
}'

//响应
{
"jsonrpc": "2.0",
"id": 12,
"result":"0xb899e1d4f0b20082620ac51bee0546ac"
}
```

#### `eth_uninstallFilter`

写在具有指定编号的过滤器。当不在需要监听时，总是需要执行该调用。另外，过滤器 如果在一定时间内未接收到`eth_getFilterChanges`调用会自动超时。

##### 参数

`Object`:

- `String` - *params*，过滤器编号

##### 返回值

`Object`:

- `Boolean` - *result*，如果成功卸载则返回true，否则返回false。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_uninstallFilter",
    "params": ["0x11a1e4f3e5e6ead5922574ed4e9b4b2b"],
    "id": 12
}'

//响应
{
"jsonrpc": "2.0",
"id": 12,
"result":"false"
}
```

#### `eth_mining`

如果客户端在积极挖矿则返回true。

##### 参数

空

##### 返回值

`Object`：

- `Bool` - *result*,  当客户端在挖矿时返回true，否则返回false。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_mining",
    "params": [],
    "id": 12
}'

//响应
"jsonrpc": "2.0",
"id": 12,
"result":"false"
```

#### `eth_hashrate`

返回节点挖矿时每秒可算出的哈希数量。

##### 参数

空

##### 返回值

`Object`:

- `String` - *Hashrate*,每秒算出的哈希数量。

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_hashrate",
    "params": [],
    "id": 12
}'

//响应
"jsonrpc": "2.0",
"id": 12,
"result":"0x0"
```

#### `eth_getBalance`

返回指定地址账户的余额。

##### 参数

`Object`:

- `String` - *Address*，20字节，要检查余额的地址
- `String` - *Block*，整数块编号，或者字符串"latest", "earliest" 或 "pending"

##### 返回值

- `String` - *Balance*，当前余额，单位：wei

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": ["0x6721c700284022337d0A549Cce25D31fE611C687","latest"],
    "id": 12
}'

//响应
"jsonrpc": "2.0",
"id": 12,
"result":"0x9f92c6e342269c00"

```

#### `eth_getTransactionCount`

返回指定地址发生的交易数量。

##### 参数

`Object`:

- `String` - *Address*，20字节，要检查余额的地址
- `String` - *Block*，整数块编号，或者字符串"latest", "earliest" 或 "pending"

##### 返回值

- `String` - *Number*，从指定地址发出的交易数量，整数

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionCount",
    "params": ["0x6721c700284022337d0A549Cce25D31fE611C687","latest"],
    "id": 12
}'

//响应
"jsonrpc": "2.0",
"id": 12,
"result":"0x9"
```

#### `eth_getTransactionReceipt`

根据哈希返回交易信息。

注意：挂起的交易无效。

##### 参数

`Object` ：

- `String` - *Transaction hash*，32字节 - 交易哈希。

##### 返回值

`Object` - 交易收据对象，如果收据不存在则为null。交易对象的结构如下：

  - `String` - transactionHash: DATA, 32字节 - 交易哈希
  - `String` -transactionIndex: QUANTITY - 交易在块内的索引序号
  - `String` -blockHash: DATA, 32字节 - 交易所在块的哈希
  - `String` -blockNumber: QUANTITY - 交易所在块的编号
  - `String` -from: DATA, 20字节 - 交易发送方地址
  - `String` -to: DATA, 20字节 - 交易接收方地址，对于合约创建交易该值为null
  - `String` -cumulativeGasUsed: QUANTITY - 交易所在块消耗的gas总量
  - `String` -gasUsed: QUANTITY - 该次交易消耗的gas用量
  - `String` -contractAddress: DATA, 20字节 - 对于合约创建交易，该值为新创建的合约地址，否则为null
  - `String` -logs: Array - 本次交易生成的日志对象数组
  - `String` -logsBloom: DATA, 256字节 - bloom过滤器，轻客户端用来快速提取相关日志

返回的结果对象中还包括下面二者之一 :

- `String` -root : DATA 32字节，后交易状态根(pre Byzantium)
- `String` -status: QUANTITY ，1 (成功) 或 0 (失败)

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionReceipt",
    "params": ["0x3ddeb97b8a3bc800e57ccec58c197e024e3a0030a2b690a31be6e0904195077c"],
    "id": 12
}'

//响应
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

返回指定哈希对应的交易。

##### 参数

`Object`:

- `String` - *Transaction hash*，交易哈希

##### 返回值

`Object` - 交易对象，如果没有找到匹配的交易则返回null。结构如下：

  - `String` - hash: DATA, 32字节 - 交易哈希
  - `String` - nonce: QUANTITY - 本次交易之前发送方已经生成的交易数量
  - `String` - blockHash: DATA, 32字节 - 交易所在块的哈希，对于挂起块，该值为null
  - `String` - blockNumber: QUANTITY - 交易所在块的编号，对于挂起块，该值为null
  - `String` - transactionIndex: QUANTITY - 交易在块中的索引位置，挂起块该值为null
  - `String` - from: DATA, 20字节 - 交易发送方地址
  - `String` - to: DATA, 20字节 - 交易接收方地址，对于合约创建交易，该值为null
  - `String` - value: QUANTITY - 发送的以太数量，单位：wei
  - `String` - gasPrice: QUANTITY - 发送方提供的gas价格，单位：wei
  - `String` - gas: QUANTITY - 发送方提供的gas可用量
  - `String` - input: DATA - 随交易发送的数据

##### 代码示例

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByHash",
    "params": ["0x3ddeb97b8a3bc800e57ccec58c197e024e3a0030a2b690a31be6e0904195077c"],
    "id": 12
}'

//响应
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

返回指定地址的代码。

##### 参数

`Object`:

- `String` - *address*，20字节，地址
- `String` - *number*， 整数块编号，或字符串"latest"、"earliest" 或"pending"

##### 返回值

- `String` - *Bytecode*，指定地址处的代码

##### 示例代码

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getCode",
    "params": ["0x9B3EE91d5f499cB08871dA83AEE5a1f39302Dde8","latest"],
    "id": 12
}'

//响应
{
"jsonrpc":"2.0",
"id":12,
"result":"0x"
}

```

#### `eth_getTransactionByBlockHashAndIndex`

返回指定块内具有指定索引序号的交易。

##### 参数

`Object`：

- `String` - *Block hash*，32字节，区块哈希。
- `String` - *Transaction index*，交易在区块内的索引序号。

##### 返回值

`Object`：

- `String` - *Transaction informatoin*，交易信息

##### 代码示例

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByBlockHashAndIndex",
    "params": ["0x67a78c58c9dd2743f4d4e1ead9269e3419231702e3fcffc1105d38cfdb745b69","0x1"],
    "id": 12
}'

//响应
{
"jsonrpc":"2.0",
"id":12,
"result":null
}

```


#### `eth_getTransactionByBlockNumberAndIndex`

返回指定编号的块内具有指定索引序号的交易。

##### 参数

`Object`：

- `String` - *Block number*，整数块编号，或字符串"earliest"、"latest" 或"pending"。
- `String` - *Transaction index*，交易在区块内的索引序号。

##### 返回值

`Object`：

- `String` - *Transaction informatoin*，交易信息

##### 代码示例

```js
//请求
curl --location --request POST 'https://mainnet.bmcchain.com' --header 'Content-Type: application/json' --data '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByBlockNumberAndIndex",
    "params": ["0x1","0x1"],
    "id": 12
}'

//响应
{
"jsonrpc":"2.0",
"id":12,
"result":null
}

```

