# Blockmeta API

## Blockmeta Bytom API 接口

**默认 JSON-RPC 接口:**

| Client | URL |
| --- | --- |
| Base URL | [https://blockmeta.com/api/v3](https://blockmeta.com/api/v3) |


**一个完整的请求和返回示例如下：**

```json
// curl -X GET url/method
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/blocks?page=1&limit=2'

// response
{
    "blocks": [
        {
            "hash": "46c5c128269cc6001d59b61fb6a15c080ebb74a5395ea6b8c98a497a37d501c3",
            "previous_block_hash": "ad7f81fb93f47a5a14c9bea91d033af3fa77e85f844ad7ef0b5fe818df2d5feb",
            "transaction_status_hash": "6978a65b4ee5b6f4914fe5c05000459a803ecf59132604e5d334d64249c5e50a",
            "transaction_merkle_root": "5755cad062140b233d3bab55c8caaca5bc4fa0f59cf1b58aa9c0673780875bfa",
            "size": 7850,
            "version": 1,
            "height": 352099,
            "timestamp": 1575599788,
            "miner_address": "bm1q08rnqaf67l5fhkt60lq43n07xqe36az8gwlfqx",
            "miner_name": "antpool",
            "chain_status": "mainnet",
            "nonce": 966909481856598328,
            "bits": 2017612633063013959,
            "hash_rate": 2182503155,
            "difficulty": "69840100991",
            "transaction_count": 2
        },
        {
            "hash": "ad7f81fb93f47a5a14c9bea91d033af3fa77e85f844ad7ef0b5fe818df2d5feb",
            "previous_block_hash": "0d57c73a75b7261c229acd969ee2eec10fc0d72432963f04536c5ab3ea439f7d",
            "transaction_status_hash": "a4489d66751139d2d3f120b2dacf4a8c52e6cadd7de603dc8ef1c66c350cba74",
            "transaction_merkle_root": "92ae06588fcc2006d23a2bfd16dd25d8a8c03a59ad7b23f17c4b9ddc45765f7e",
            "size": 2400,
            "version": 1,
            "height": 352098,
            "timestamp": 1575599756,
            "miner_address": "bm1q08rnqaf67l5fhkt60lq43n07xqe36az8gwlfqx",
            "miner_name": "antpool",
            "chain_status": "mainnet",
            "nonce": 955392097488305462,
            "bits": 2017612633063013959,
            "hash_rate": 200114902,
            "difficulty": "69840100991",
            "transaction_count": 3
        }
    ],
    "pagination": {
        "current": 1,
        "limit": 2,
        "total": 352100
    }
}
```

### API 方法

- 区块相关

  - [`blocks`](#blocks)
  - [`block/height/{height}`](#block/height/%7Bheight%7D)
  - [`block/hash/{hash}`](#block/hash/%7Bhash%7D)
  - [`latest-block`](#latest-block)
- 交易相关

  - [`transactions`](#transactions)
  - [`transaction/{transaction_id}`](#transaction/%7Btransaction_id%7D)
  - [`unconfirmed-transactions`](#unconfirmed-transactions)
  - [`unconfirmed-transactions/{transaction_id}`](#unconfirmed-transactions/%7Btransaction_id%7D)
- 地址资产相关

  - [`address/{address_id}/asset`](#address/%7Baddress_id%7D/asset)
  - [`address/{address_id}/list-utxo`](#address/%7Baddress_id%7D/list-utxo)
  - [`asset/{asset_id}/address/address/{address_id}/transaction`](#asset/%7Basset_id%7D/address/address/%7Baddress_id%7D/transaction)
  - [`asset/{asset_id}/transaction`](#asset/%7Basset_id%7D/transaction)
  - [`asset/{asset_id}`](#asset/%7Basset_id%7D)
  - [`list-asset`](#list-asset)
  - [`asset/{asset_id}/addresses`](#asset/%7Basset_id%7D/addresses)
- 日统计数据相关

  - [`daily/kline/{pair}`](#daily/kline/%7Bpair%7D)
  - [`daily/miner`](#daily/miner)
  - [`daily/total`](#daily/total)
  - [`kline/{pair}`](#kline/%7Bpair%7D)
- 历史统计相关

  - [`stat/diffculty`](#stat/diffculty)
  - [`stat/miner`](#stat/miner)
  - [`stat/hash-rate`](#stat/hash-rate)
  - [`stat/total`](#stat/total)
- 其他

  - [`kline/{pair}`](#kline/%7Bpair%7D)
  - [`nodes`](#nodes)

---

### Detail

#### `blocks`

获取当前最后一个区块

##### 参数

**可选**:

- `Integer`- _page_, 页码.
- `Integer`- _limit_, 每页的数量.

##### 返回

`Object`:

- `Array of Object` -_blocks_, block info list.

  - `String`- _hash_, hash of block.
  - `String`- _previous_block_hash_, previous block hash.
  - `String`- _transaction_merkle_root_, merkle root of transaction.
  - `String`- _transaction_status_hash_, merkle root of transaction status.
  - `Integer`- _size_, size of block.
  - `Integer`- _version_, version of block.
  - `Integer`- _heigh_, height of block.
  - `Integer`- _timestamp_, timestamp of block.
  - `Integer`- _nonce_, nonce value.
  - `Integer`- _bits_, bits of difficulty.
  - `String`- _difficulty_, difficulty value(String type).
  - `Integer`- _hash_rate_, the hash rate of block.
  - `Integer`- _miner_address_, the address of miner.
  - `Integer`- _transaction_count_, the count of transaction in the block.
  - `String`- _chain_status_, mainchain or orphan.
  - `String`- _cross_chain_, the flag of this block include cross chain transaction.
  - `String`- _miner_name_, the name of miner.
  - `String`- _anchor_id_, the anchor transaction id of partner.
  - `String`- _partner_, the name of partner.
- `Array of Object` -_pagination_, pagination info.

  - `Integer`- _current_, current number of page.
  - `Integer`- _limit_, number of data per page.
  - `Integer`- _total_, the number of total.

##### 例子

获取第一页的2个区块信息:

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/blocks?page=1&limit=2'
// Result
{
  "blocks": [
    {
      "hash": "4064ef8e909b40a41d3052ea677d50c0367a1f163c45b4a61ad83831998f9099",
      "previous_block_hash": "46c5c128269cc6001d59b61fb6a15c080ebb74a5395ea6b8c98a497a37d501c3",
      "transaction_status_hash": "c9c377e5192668bc0a367e4a4764f11e7c725ecced1d7b6a492974fab1b6d5bc",
      "transaction_merkle_root": "f86c6eb178263999e1fbbc983aa1eae687d8767c20c8cde4e42e2ffd57c0b25e",
      "size": 416,
      "version": 1,
      "height": 352100,
      "timestamp": 1575599833,
      "miner_address": "bm1qlr5e6ep34tdr6566q9d6zp60d449338nwuhkdw",
      "miner_name": "matpool",
      "chain_status": "mainnet",
      "nonce": 803787027616180200,
      "bits": 2017612633063014000,
      "hash_rate": 1552002244,
      "difficulty": "69840100991",
      "transaction_count": 1
    },
    {
      "hash": "46c5c128269cc6001d59b61fb6a15c080ebb74a5395ea6b8c98a497a37d501c3",
      "previous_block_hash": "ad7f81fb93f47a5a14c9bea91d033af3fa77e85f844ad7ef0b5fe818df2d5feb",
      "transaction_status_hash": "6978a65b4ee5b6f4914fe5c05000459a803ecf59132604e5d334d64249c5e50a",
      "transaction_merkle_root": "5755cad062140b233d3bab55c8caaca5bc4fa0f59cf1b58aa9c0673780875bfa",
      "size": 7850,
      "version": 1,
      "height": 352099,
      "timestamp": 1575599788,
      "miner_address": "bm1q08rnqaf67l5fhkt60lq43n07xqe36az8gwlfqx",
      "miner_name": "antpool",
      "chain_status": "mainnet",
      "nonce": 966909481856598300,
      "bits": 2017612633063014000,
      "hash_rate": 2182503155,
      "difficulty": "69840100991",
      "transaction_count": 2
    }
  ],
  "pagination": {
    "current": 1,
    "limit": 2,
    "total": 352101
  }
}
```

---

#### `blocks/height/{height}`

根据区块高度获取区块信息

##### 参数

**可选**:

- `String`- height, block height.

##### 返回

**可选**:

- `String`- _hash_, hash of block.
- `Integer`- _size_, size of block.
- `Integer`- _version_, version of block.
- `Integer`- _height_, height of block.
- `String`- _previous_block_hash_, previous block hash.
- `Integer`- _timestamp_, timestamp of block.
- `Integer`- _nonce_, nonce value.
- `Integer`- _bits_, bits of difficulty.
- `String`- _difficulty_, difficulty value(String type).
- `String`- _transaction_merkle_root_, merkle root of transaction.
- `String`- _transaction_status_hash_, merkle root of transaction status.
- `Integer`- _hash_rate_, the hash rate of block.
- `Integer`- _miner_address_, the address of miner.
- `Integer`- _transaction_count_, the count of transaction in the block.
- `String`- _chain_status_, mainchain or orphan.
- `String`- _cross_chain_, the flag of this block include cross chain transaction.
- `String`- _miner_name_, the name of miner.
- `String`- _anchor_id_, the anchor transaction id of partner.
- `String`- _partner_, the name of partner.
- `Array of Object` - _transactions_, transaction object:

  - `String` - _id_, transaction id, hash of the transaction.
  - `Integer` - _version_, version of transaction.
  - `Integer` - _size_, size of transaction.
  - `Integer` - _timestamp_, the unix timestamp for when the requst was responsed.
  - `Integer` - _time_range_, the unix timestamp for when the requst was responsed.
  - `Boolean` - _status_fail_, whether the state of the request has failed.
  - `String` - _mux_id_, the previous transaction mux id(source id of utxo).
  - `Integer` - _block_height_, block height.
  - `Integer` - _chain_status_, mainnet or orphan.
  - `Integer` - _coinbase_, the flag of coinbase transaction.
  - `Boolean` - _cross_chain_, the flag of cross chain transaction.
  - `Integer` - _trx_fee_, transaction fee.
  - `Integer` - _trx_amount_, the amount of transaction.
  - `Integer` - _confirmations_, the number comfirmed.
  - `Array of Object` - _inputs_, object of inputs for the transaction.

    - `String` - _txtype_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_alias_, name of asset.
    - `Object` - _asset_definition_, definition of asset(json object).
    - `Integer` - _amount_, amount of asset.
    - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
    - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
    - `String` - _address_, address of account, it only exist when type is 'spend'.
    - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
    - `String` - _account_id_, account id.
    - `String` - _account_alias_, name of account.
    - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
    - `String` - _input_id_, hash of input action.
    - `Array of String` - _witness_arguments_, witness arguments.
    - `String` - _asset_name_, asset name.
    - `String` - _asset_decimals_, decimal of asset.
  - `Array of Object` - _outputs_, object of outputs for the transaction.

    - `String` - _txtype_, the type of output action, available option include: 'retire', 'control'.
    - `String` - _id_, outputid related to utxo.
    - `Integer` - _position_, position of outputs.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_alias_, name of asset.
    - `Object` - _asset_definition_, definition of asset(json object).
    - `Integer` - _amount_, amount of asset.
    - `String` - _account_id_, account id.
    - `String` - _account_alias_, name of account.
    - `Object` - _control_program_, control program of account.
    - `String` - _address_, address of account.
    - `String` - _asset_name_, asset name.
    - `String` - _asset_decimals_, decimal of asset.

##### 例子

获取区块高度为123的区块信息:

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/block/123'
// Result
{
  "hash": "531e1ebdd6f38924bfdd86331bc1286b1626da0d0b5b6f6da233a2d054d7f041",
  "previous_block_hash": "91a1fce360040bb9943f8374980032692ba967e1fa24e318b6a1fb3f648b0a58",
  "transaction_status_hash": "c9c377e5192668bc0a367e4a4764f11e7c725ecced1d7b6a492974fab1b6d5bc",
  "transaction_merkle_root": "4031f270c360fd98187db674b94dc0a9aea371e69701b8451ef9238666d4b022",
  "size": 396,
  "version": 1,
  "height": 123,
  "timestamp": 1524556238,
  "miner_address": "bm1qrp2fmpx675e5f5e9vwpscl8e08wpn4wqhrv0zt",
  "miner_name": "bm1qrp2fm...",
  "chain_status": "mainnet",
  "nonce": 8946685314549,
  "bits": 2161727821137910500,
  "hash_rate": 688854,
  "difficulty": "15154807",
  "transaction_count": 1,
  "transactions": [
    {
      "id": "a3f370af6df14f07861ae0a0219f52b9db606dc04624fc190ebbee7142bf2177",
      "timestamp": 1524556238,
      "block_height": 123,
      "trx_amount": 41250000000,
      "trx_fee": 0,
      "status_fail": false,
      "coinbase": true,
      "size": 76,
      "chain_status": "mainnet",
      "time_range": 0,
      "index_id": 124,
      "mux_id": "38296f40609dcf661e3706b444147daa934b669c8806a38c5a47341d070e7f64",
      "inputs": [
        {
          "txtype": "coinbase",
          "asset_id": "0000000000000000000000000000000000000000000000000000000000000000",
          "amount": 0,
          "spent_output_id": "<nil>",
          "arbitrary": "7b",
          "input_id": "8a2df61847e8b8a00922f0ac95a14d0f8f9a16a20bc17f11c890365bae819baa",
          "witness_arguments": null,
          "asset_name": "",
          "asset_definition": "{}",
          "asset_decimals": 0
        }
      ],
      "outputs": [
        {
          "txtype": "control",
          "id": "8dfa1bc333aa4c47332b3b941641e87341d3d79b102095b4a26d88c7b3ed8087",
          "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "amount": 41250000000,
          "control_program": "001418549d84daf53344d32563830c7cf979dc19d5c0",
          "address": "bm1qrp2fmpx675e5f5e9vwpscl8e08wpn4wqhrv0zt",
          "asset_name": "BTM",
          "asset_definition": "{}",
          "position": 0,
          "asset_decimals": 8
        }
      ]
    }
  ]
}
```

---

#### `blocks/hash/{hash}`

通过区块hash获取区块信息

##### 参数

**可选**:

- `String`- _hash_, block hash.

**返回**

`Object`:

- `String`- _hash_, hash of block.
- `Integer`- _size_, size of block.
- `Integer`- _version_, version of block.
- `Integer`- _height_, height of block.
- `String`- _previous_block_hash_, previous block hash.
- `Integer`- _timestamp_, timestamp of block.
- `Integer`- _nonce_, nonce value.
- `Integer`- _bits_, bits of difficulty.
- `String`- _difficulty_, difficulty value(String type).
- `String`- _transaction_merkle_root_, merkle root of transaction.
- `String`- _transaction_status_hash_, merkle root of transaction status.
- `Integer`- _hash_rate_, the hash rate of block.
- `Integer`- _miner_address_, the address of miner.
- `Integer`- _transaction_count_, the count of transaction in the block.
- `String`- _chain_status_, mainchain or orphan.
- `String`- _cross_chain_, the flag of this block include cross chain transaction.
- `String`- _miner_name_, the name of miner.
- `String`- _anchor_id_, the anchor transaction id of partner.
- `String`- _partner_, the name of partner.
- `Array of Object` - _transactions_, transaction object:

  - `String` - _id_, transaction id, hash of the transaction.
  - `Integer` - _version_, version of transaction.
  - `Integer` - _size_, size of transaction.
  - `Integer` - _timestamp_, the unix timestamp for when the requst was responsed.
  - `Integer` - _time_range_, the unix timestamp for when the requst was responsed.
  - `Boolean` - _status_fail_, whether the state of the request has failed.
  - `String` - _mux_id_, the previous transaction mux id(source id of utxo).
  - `Integer` - _block_height_, block height.
  - `Integer` - _chain_status_, mainnet or orphan.
  - `Integer` - _coinbase_, the flag of coinbase transaction.
  - `Boolean` - _cross_chain_, the flag of cross chain transaction.
  - `Integer` - _trx_fee_, transaction fee.
  - `Integer` - _trx_amount_, the amount of transaction.
  - `Integer` - _confirmations_, the number comfirmed.
  - `Array of Object` - _inputs_, object of inputs for the transaction.

    - `String` - _txtype_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_alias_, name of asset.
    - `Object` - _asset_definition_, definition of asset(json object).
    - `Integer` - _amount_, amount of asset.
    - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
    - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
    - `String` - _address_, address of account, it only exist when type is 'spend'.
    - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
    - `String` - _account_id_, account id.
    - `String` - _account_alias_, name of account.
    - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
    - `String` - _input_id_, hash of input action.
    - `Array of String` - _witness_arguments_, witness arguments.
    - `String` - _asset_name_, asset name.
    - `String` - _asset_decimals_, decimal of asset.
  - `Array of Object` - _outputs_, object of outputs for the transaction.

    - `String` - _txtype_, the type of output action, available option include: 'retire', 'control'.
    - `String` - _id_, outputid related to utxo.
    - `Integer` - _position_, position of outputs.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_alias_, name of asset.
    - `Object` - _asset_definition_, definition of asset(json object).
    - `Integer` - _amount_, amount of asset.
    - `String` - _account_id_, account id.
    - `String` - _account_alias_, name of account.
    - `Object` - _control_program_, control program of account.
    - `String` - _address_, address of account.
    - `String` - _asset_name_, asset name.
    - `String` - _asset_decimals_, decimal of asset.

##### 例子：

获取区块hash是 531e1ebdd6f38924bfdd86331bc1286b1626da0d0b5b6f6da233a2d054d7f041的区块信息:

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/block/hash/531e1ebdd6f38924bfdd86331bc1286b1626da0d0b5b6f6da233a2d054d7f041" -H "accept: application/json"

// Result
{
  "hash": "531e1ebdd6f38924bfdd86331bc1286b1626da0d0b5b6f6da233a2d054d7f041",
  "previous_block_hash": "91a1fce360040bb9943f8374980032692ba967e1fa24e318b6a1fb3f648b0a58",
  "transaction_status_hash": "c9c377e5192668bc0a367e4a4764f11e7c725ecced1d7b6a492974fab1b6d5bc",
  "transaction_merkle_root": "4031f270c360fd98187db674b94dc0a9aea371e69701b8451ef9238666d4b022",
  "size": 396,
  "version": 1,
  "height": 123,
  "timestamp": 1524556238,
  "miner_address": "bm1qrp2fmpx675e5f5e9vwpscl8e08wpn4wqhrv0zt",
  "miner_name": "bm1qrp2fm...",
  "chain_status": "mainnet",
  "nonce": 8946685314549,
  "bits": 2161727821137910500,
  "hash_rate": 688854,
  "difficulty": "15154807",
  "transaction_count": 1,
  "transactions": [
    {
      "id": "a3f370af6df14f07861ae0a0219f52b9db606dc04624fc190ebbee7142bf2177",
      "timestamp": 1524556238,
      "block_height": 123,
      "trx_amount": 41250000000,
      "trx_fee": 0,
      "status_fail": false,
      "coinbase": true,
      "size": 76,
      "chain_status": "mainnet",
      "time_range": 0,
      "index_id": 124,
      "mux_id": "38296f40609dcf661e3706b444147daa934b669c8806a38c5a47341d070e7f64",
      "inputs": [
        {
          "txtype": "coinbase",
          "asset_id": "0000000000000000000000000000000000000000000000000000000000000000",
          "amount": 0,
          "spent_output_id": "<nil>",
          "arbitrary": "7b",
          "input_id": "8a2df61847e8b8a00922f0ac95a14d0f8f9a16a20bc17f11c890365bae819baa",
          "witness_arguments": null,
          "asset_name": "",
          "asset_definition": "{}",
          "asset_decimals": 0
        }
      ],
      "outputs": [
        {
          "txtype": "control",
          "id": "8dfa1bc333aa4c47332b3b941641e87341d3d79b102095b4a26d88c7b3ed8087",
          "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "amount": 41250000000,
          "control_program": "001418549d84daf53344d32563830c7cf979dc19d5c0",
          "address": "bm1qrp2fmpx675e5f5e9vwpscl8e08wpn4wqhrv0zt",
          "asset_name": "BTM",
          "asset_definition": "{}",
          "position": 0,
          "asset_decimals": 8
        }
      ]
    }
  ]
}
```

---

#### `transactions`

获取当前区块的最后一笔交易

##### 参数

**可选**:

- `Integer`- _page_, page nunber of data.
- `Integer`- _limit_, number of data per page.

##### 返回

**Object**:

- `Array of Object` - _transactions_, transaction object:

  - `String` - _id_, transaction id, hash of the transaction.
  - `Integer` - _version_, version of transaction.
  - `Integer` - _size_, size of transaction.
  - `Integer` - _timestamp_, the unix timestamp for when the requst was responsed.
  - `Integer` - _time_range_, the unix timestamp for when the requst was responsed.
  - `Boolean` - _status_fail_, whether the state of the request has failed.
  - `String` - _mux_id_, the previous transaction mux id(source id of utxo).
  - `Integer` - _block_height_, block height.
  - `Integer` - _chain_status_, mainnet or orphan.
  - `Integer` - _coinbase_, the flag of coinbase transaction.
  - `Boolean` - _cross_chain_, the flag of cross chain transaction.
  - `Integer` - _trx_fee_, transaction fee.
  - `Integer` - _trx_amount_, the amount of transaction.
  - `Integer` - _confirmations_, the number comfirmed.
  - `Array of Object` - _inputs_, object of inputs for the transaction.

    - `String` - _txtype_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_alias_, name of asset.
    - `Object` - _asset_definition_, definition of asset(json object).
    - `Integer` - _amount_, amount of asset.
    - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
    - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
    - `String` - _address_, address of account, it only exist when type is 'spend'.
    - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
    - `String` - _account_id_, account id.
    - `String` - _account_alias_, name of account.
    - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
    - `String` - _input_id_, hash of input action.
    - `Array of String` - _witness_arguments_, witness arguments.
    - `String` - _asset_name_, asset name.
    - `String` - _asset_decimals_, decimal of asset.
  - `Array of Object` - _outputs_, object of outputs for the transaction.

    - `String` - _txtype_, the type of output action, available option include: 'retire', 'control'.
    - `String` - _id_, outputid related to utxo.
    - `Integer` - _position_, position of outputs.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_alias_, name of asset.
    - `Object` - _asset_definition_, definition of asset(json object).
    - `Integer` - _amount_, amount of asset.
    - `String` - _account_id_, account id.
    - `String` - _account_alias_, name of account.
    - `Object` - _control_program_, control program of account.
    - `String` - _address_, address of account.
    - `String` - _asset_name_, asset name.
    - `String` - _asset_decimals_, decimal of asset.
- `Array of Object` -_pagination_, pagination info.

  - `Integer`- _current_, current number of page.
  - `Integer`- _limit_, number of data per page.
  - `Integer`- _total_, the number of total.

##### 例子

获取当前第一页的一笔交易信息:

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/transactions?page=1&limit=2'
// Result
{
  "transactions": [
    {
      "id": "766bf68c5717d3a58fe6096e81d18549adba77179b91458083b14f537e02e0df",
      "timestamp": 1575624156,
      "block_height": 352248,
      "trx_amount": 7497000000,
      "trx_fee": 1000000,
      "status_fail": false,
      "coinbase": false,
      "size": 611,
      "chain_status": "mainnet",
      "time_range": 0,
      "index_id": 754646,
      "mux_id": "c8ca464ada81eeff2ebbb0b0e0644bb9f73500438f69cf8bb1bccaba23287e47",
      "inputs": [
        {
          "txtype": "spend",
          "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "amount": 7498000000,
          "control_program": "0014fabbb8deb24fcf4f11a8a5a4ce59e1bd73e85c8b",
          "address": "bm1ql2am3h4jfl857ydg5kjvuk0ph4e7shytmscnqm",
          "spent_output_id": "c66bbe9fee9e9b0e9f251838699ceb906a29eec2eff82ca281602511a63d59d3",
          "input_id": "a2bc701a4d409b0d109a352be1f3f643747d605f8d460b9ebf10b7434d159620",
          "witness_arguments": [
            "98d0fed72a88637cf1d664c2c42bd8bc8d71840dbfa21535a240b2b349678c5e7e92c859ed797fc3b7884ab2b1acb514b990b123dfab44fc1c76588bd4d6e509",
            "40f9d65e2d3688c7b051f915b94e9c6b6b76481494927dfb2d1311fe86abebba"
          ],
          "asset_name": "BTM",
          "asset_definition": "{}",
          "asset_decimals": 8
        },
        {
          "txtype": "spend",
          "asset_id": "bd18639abbffa3e184d4e0add8cbc2ce1e9eb3f35d3d32a1e19018aa94441d2a",
          "amount": 46446400000000,
          "control_program": "00148b98a1c27a1675b87fb32e0e57fb7e323770f189",
          "address": "bm1q3wv2rsn6ze6mslan9c8907m7xgmhpuvf063m3n",
          "spent_output_id": "0e89b87f6def9d652b1ee8cedcefe0fdebd6dbcd99d989018f2ec0e799caecdb",
          "input_id": "9b6faa99ab8d821f9229c0b3f4112da9a3390d3d7e82074ee32bf8754d559694",
          "witness_arguments": [
            "bc0a1030637a8a2b5bfc486353ad80d9bc254a6d9bf5b9bf8a244d718f8e37d8fed8cc7ca8cb78a43255bc04bda7a7e332efd2595d9dc64713e242e64301eb00",
            "1f7290e168c5c30cf87eb2cefd03b04abfa8f297b103f4c010972bdd952df6d7"
          ],
          "asset_name": "BQB",
          "asset_definition": "{}",
          "asset_decimals": 8
        }
      ],
      "outputs": [
        {
          "txtype": "control",
          "id": "10e3618b29e0bb34eb2e774a9877deacc8585610660f5e23aebb479ce4427659",
          "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "amount": 7497000000,
          "control_program": "00141672adef4cbb0d9ff9665b2efbcc6641b2e1389c",
          "address": "bm1qzee2mm6vhvxel7txtvh0hnrxgxewzwyu7msqqu",
          "asset_name": "BTM",
          "asset_definition": "{}",
          "position": 0,
          "asset_decimals": 8
        },
        {
          "txtype": "control",
          "id": "03774c875fde718bf52a60b1a2171c7d079ac629b6a969032837ada7d8efb7af",
          "asset_id": "bd18639abbffa3e184d4e0add8cbc2ce1e9eb3f35d3d32a1e19018aa94441d2a",
          "amount": 46446300000000,
          "control_program": "0014145c67bc4a87a7fcecb20c2f99e371ab9ca0efe6",
          "address": "bm1qz3wx00z2s7nlem9jpshencm34ww2pmlxsaq64g",
          "asset_name": "BQB",
          "asset_definition": "{}",
          "position": 1,
          "asset_decimals": 8
        },
        {
          "txtype": "retire",
          "id": "9a01c1b612627edeaba09cba416f8b53e8e41f3766e892b90a9b0ea903d9c096",
          "asset_id": "bd18639abbffa3e184d4e0add8cbc2ce1e9eb3f35d3d32a1e19018aa94441d2a",
          "amount": 100000000,
          "control_program": "6a238028edc5d0d0791cca31038562fcbe3ea522a55a88af75b93b0e2b3e03fe307a2fcf90",
          "asset_name": "BQB",
          "asset_definition": "{}",
          "position": 2,
          "asset_decimals": 8
        }
      ],
      "confirmations": 1
    },
    {
      "id": "b498160ad1bee5043923ff14f767d6adc63d98da300ddd3775e415317c5f2f8b",
      "timestamp": 1575624156,
      "block_height": 352248,
      "trx_amount": 41251000000,
      "trx_fee": 0,
      "status_fail": false,
      "coinbase": true,
      "size": 82,
      "chain_status": "mainnet",
      "time_range": 0,
      "index_id": 754645,
      "mux_id": "5a471253f41e684e34d4d8ab8baa7ac261ec88b52cfb275719bd11462dab9e0a",
      "inputs": [
        {
          "txtype": "coinbase",
          "asset_id": "0000000000000000000000000000000000000000000000000000000000000000",
          "amount": 0,
          "spent_output_id": "<nil>",
          "arbitrary": "00333532323438",
          "input_id": "7cf69003f8cfc9968adf31a886bc79dfa8bf11386ae85d7b10f8b57d61527851",
          "witness_arguments": null,
          "asset_name": "",
          "asset_definition": "{}",
          "asset_decimals": 0
        }
      ],
      "outputs": [
        {
          "txtype": "control",
          "id": "0da22c93aa7735ccdd1503ce6b313da212db7b212abc53503c9cc68d3548a7be",
          "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "amount": 41251000000,
          "control_program": "001479c730753af7e89bd97a7fc158cdfe30331d7447",
          "address": "bm1q08rnqaf67l5fhkt60lq43n07xqe36az8gwlfqx",
          "asset_name": "BTM",
          "asset_definition": "{}",
          "position": 0,
          "asset_decimals": 8
        }
      ],
      "confirmations": 1
    }
  ],
  "pagination": {
    "current": 1,
    "limit": 2,
    "total": 754646
  }
}
```

---

#### `transaction/{hash}`

根据交易id获取交易详情

##### 参数

**必选**:

- `String`- _hash_, tranasction id.

##### 返回

**`Object`**:

- `String` - _id_, transaction id, hash of the transaction.
- `Integer` - _version_, version of transaction.
- `Integer` - _size_, size of transaction.
- `Integer` - _timestamp_, the unix timestamp for when the requst was responsed.
- `Integer` - _time_range_, the unix timestamp for when the requst was responsed.
- `Boolean` - _status_fail_, whether the state of the request has failed.
- `String` - _mux_id_, the previous transaction mux id(source id of utxo).
- `Integer` - _block_height_, block height.
- `Integer` - _chain_status_, mainnet or orphan.
- `Integer` - _coinbase_, the flag of coinbase transaction.
- `Boolean` - _cross_chain_, the flag of cross chain transaction.
- `Integer` - _trx_fee_, transaction fee.
- `Integer` - _trx_amount_, the amount of transaction.
- `Integer` - _confirmations_, the number comfirmed.
- `Array of Object` - _inputs_, object of inputs for the transaction.

  - `String` - _txtype_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
  - `String` - _asset_id_, asset id.
  - `String` - _asset_alias_, name of asset.
  - `Object` - _asset_definition_, definition of asset(json object).
  - `Integer` - _amount_, amount of asset.
  - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
  - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
  - `String` - _address_, address of account, it only exist when type is 'spend'.
  - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
  - `String` - _account_id_, account id.
  - `String` - _account_alias_, name of account.
  - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
  - `String` - _input_id_, hash of input action.
  - `Array of String` - _witness_arguments_, witness arguments.
  - `String` - _asset_name_, asset name.
  - `String` - _asset_decimals_, decimal of asset.
- `Array of Object` - _outputs_, object of outputs for the transaction.

  - `String` - _txtype_, the type of output action, available option include: 'retire', 'control'.
  - `String` - _id_, outputid related to utxo.
  - `Integer` - _position_, position of outputs.
  - `String` - _asset_id_, asset id.
  - `String` - _asset_alias_, name of asset.
  - `Object` - _asset_definition_, definition of asset(json object).
  - `Integer` - _amount_, amount of asset.
  - `String` - _account_id_, account id.
  - `String` - _account_alias_, name of account.
  - `Object` - _control_program_, control program of account.
  - `String` - _address_, address of account.
  - `String` - _asset_name_, asset name.
  - `String` - _asset_decimals_, decimal of asset.

##### 例子

获取交易id是766bf68c5717d3a58fe6096e81d18549adba77179b91458083b14f537e02e0df的交易详情：

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/transaction/766bf68c5717d3a58fe6096e81d18549adba77179b91458083b14f537e02e0df'

// Result
{
  "id": "766bf68c5717d3a58fe6096e81d18549adba77179b91458083b14f537e02e0df",
  "timestamp": 1575624156,
  "block_height": 352248,
  "trx_amount": 7497000000,
  "trx_fee": 1000000,
  "status_fail": false,
  "coinbase": false,
  "size": 611,
  "chain_status": "mainnet",
  "time_range": 0,
  "index_id": 754646,
  "mux_id": "c8ca464ada81eeff2ebbb0b0e0644bb9f73500438f69cf8bb1bccaba23287e47",
  "inputs": [
    {
      "txtype": "spend",
      "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      "amount": 7498000000,
      "control_program": "0014fabbb8deb24fcf4f11a8a5a4ce59e1bd73e85c8b",
      "address": "bm1ql2am3h4jfl857ydg5kjvuk0ph4e7shytmscnqm",
      "spent_output_id": "c66bbe9fee9e9b0e9f251838699ceb906a29eec2eff82ca281602511a63d59d3",
      "input_id": "a2bc701a4d409b0d109a352be1f3f643747d605f8d460b9ebf10b7434d159620",
      "witness_arguments": [
        "98d0fed72a88637cf1d664c2c42bd8bc8d71840dbfa21535a240b2b349678c5e7e92c859ed797fc3b7884ab2b1acb514b990b123dfab44fc1c76588bd4d6e509",
        "40f9d65e2d3688c7b051f915b94e9c6b6b76481494927dfb2d1311fe86abebba"
      ],
      "asset_name": "BTM",
      "asset_definition": "{}",
      "asset_decimals": 8
    },
    {
      "txtype": "spend",
      "asset_id": "bd18639abbffa3e184d4e0add8cbc2ce1e9eb3f35d3d32a1e19018aa94441d2a",
      "amount": 46446400000000,
      "control_program": "00148b98a1c27a1675b87fb32e0e57fb7e323770f189",
      "address": "bm1q3wv2rsn6ze6mslan9c8907m7xgmhpuvf063m3n",
      "spent_output_id": "0e89b87f6def9d652b1ee8cedcefe0fdebd6dbcd99d989018f2ec0e799caecdb",
      "input_id": "9b6faa99ab8d821f9229c0b3f4112da9a3390d3d7e82074ee32bf8754d559694",
      "witness_arguments": [
        "bc0a1030637a8a2b5bfc486353ad80d9bc254a6d9bf5b9bf8a244d718f8e37d8fed8cc7ca8cb78a43255bc04bda7a7e332efd2595d9dc64713e242e64301eb00",
        "1f7290e168c5c30cf87eb2cefd03b04abfa8f297b103f4c010972bdd952df6d7"
      ],
      "asset_name": "BQB",
      "asset_definition": "{}",
      "asset_decimals": 8
    }
  ],
  "outputs": [
    {
      "txtype": "control",
      "id": "10e3618b29e0bb34eb2e774a9877deacc8585610660f5e23aebb479ce4427659",
      "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      "amount": 7497000000,
      "control_program": "00141672adef4cbb0d9ff9665b2efbcc6641b2e1389c",
      "address": "bm1qzee2mm6vhvxel7txtvh0hnrxgxewzwyu7msqqu",
      "asset_name": "BTM",
      "asset_definition": "{}",
      "position": 0,
      "asset_decimals": 8
    },
    {
      "txtype": "control",
      "id": "03774c875fde718bf52a60b1a2171c7d079ac629b6a969032837ada7d8efb7af",
      "asset_id": "bd18639abbffa3e184d4e0add8cbc2ce1e9eb3f35d3d32a1e19018aa94441d2a",
      "amount": 46446300000000,
      "control_program": "0014145c67bc4a87a7fcecb20c2f99e371ab9ca0efe6",
      "address": "bm1qz3wx00z2s7nlem9jpshencm34ww2pmlxsaq64g",
      "asset_name": "BQB",
      "asset_definition": "{}",
      "position": 1,
      "asset_decimals": 8
    },
    {
      "txtype": "retire",
      "id": "9a01c1b612627edeaba09cba416f8b53e8e41f3766e892b90a9b0ea903d9c096",
      "asset_id": "bd18639abbffa3e184d4e0add8cbc2ce1e9eb3f35d3d32a1e19018aa94441d2a",
      "amount": 100000000,
      "control_program": "6a238028edc5d0d0791cca31038562fcbe3ea522a55a88af75b93b0e2b3e03fe307a2fcf90",
      "asset_name": "BQB",
      "asset_definition": "{}",
      "position": 2,
      "asset_decimals": 8
    }
  ],
  "confirmations": 2
}
```

---

#### `unconfirmed-transactions`

从Bytom节点交易池中获取未确认的交易

##### 参数

**无**

##### 返回

**`对象`**:

- `Array of Object`

  - `String` - _id_, transaction id, hash of the transaction.
  - `Integer` - _version_, version of transaction.
  - `Integer` - _size_, size of transaction.
  - `Integer` - _time_range_, the unix timestamp for when the requst was responsed.
  - `Boolean` - _status_fail_, whether the state of the request has failed.
  - `String` - _mux_id_, the previous transaction mux id(source id of utxo).
  - `Integer` - _fee_, transaction fee.
  - `Integer` - _transaction_amount_, the amount of transaction.

##### 例子：

获取未确认的交易

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/unconfirmed-transactions'


// Result
[
  {
    "id": "1825f6901cce38b446a3713ffa80d9eb3cf24d72d32591138dcb344e8ec83c4d",
    "version": 1,
    "size": 611,
    "time_range": 0,
    "status_fail": false,
    "mux_id": "6a4d3ee2245cf1552248640861d2d7e3b024fe47be79603468b873a33eb8b19c",
    "fee": 1000000,
    "transaction_amount": 7496000000,
  }
]
```

---

#### `unconfirmed-transaction/{hash}`

根据交易id获取bytom节点交易池中未确认的交易.

##### 参数

**对象**:

- `String`- _hash_, tranasction id.

##### 返回

**`Object`**:

- `String` - _id_, transaction id, hash of the transaction.
- `Integer` - _version_, version of transaction.
- `Integer` - _size_, size of transaction.
- `Integer` - _timestamp_, the unix timestamp for when the requst was responsed.
- `Integer` - _time_range_, the unix timestamp for when the requst was responsed.
- `Boolean` - _status_fail_, whether the state of the request has failed.
- `String` - _mux_id_, the previous transaction mux id(source id of utxo).
- `Integer` - _block_height_, block height.
- `Integer` - _chain_status_, mainnet or orphan.
- `Integer` - _coinbase_, the flag of coinbase transaction.
- `Boolean` - _cross_chain_, the flag of cross chain transaction.
- `Integer` - _trx_fee_, transaction fee.
- `Integer` - _trx_amount_, the amount of transaction.
- `Integer` - _confirmations_, the number comfirmed.
- `Array of Object` - _inputs_, object of inputs for the transaction.

  - `String` - _txtype_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
  - `String` - _asset_id_, asset id.
  - `String` - _asset_alias_, name of asset.
  - `Object` - _asset_definition_, definition of asset(json object).
  - `Integer` - _amount_, amount of asset.
  - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
  - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
  - `String` - _address_, address of account, it only exist when type is 'spend'.
  - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
  - `String` - _account_id_, account id.
  - `String` - _account_alias_, name of account.
  - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
  - `String` - _input_id_, hash of input action.
  - `Array of String` - _witness_arguments_, witness arguments.
  - `String` - _asset_name_, asset name.
  - `String` - _asset_decimals_, decimal of asset.
- `Array of Object` - _outputs_, object of outputs for the transaction.

  - `String` - _txtype_, the type of output action, available option include: 'retire', 'control'.
  - `String` - _id_, outputid related to utxo.
  - `Integer` - _position_, position of outputs.
  - `String` - _asset_id_, asset id.
  - `String` - _asset_alias_, name of asset.
  - `Object` - _asset_definition_, definition of asset(json object).
  - `Integer` - _amount_, amount of asset.
  - `String` - _account_id_, account id.
  - `String` - _account_alias_, name of account.
  - `Object` - _control_program_, control program of account.
  - `String` - _address_, address of account.
  - `String` - _asset_name_, asset name.
  - `String` - _asset_decimals_, decimal of asset.

##### 例子

获取交易ID为1825f6901cce38b446a3713ffa80d9eb3cf24d72d32591138dcb344e8ec83c4d的未确认交易

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/unconfirmed-transaction/1825f6901cce38b446a3713ffa80d9eb3cf24d72d32591138dcb344e8ec83c4d'

// Result
{
  "id": "1825f6901cce38b446a3713ffa80d9eb3cf24d72d32591138dcb344e8ec83c4d",
  "version": 1,
  "timestamp": 0,
  "trx_amount": 7496000000,
  "trx_fee": 1000000,
  "status_fail": false,
  "size": 611,
  "time_range": 0,
  "mux_id": "6a4d3ee2245cf1552248640861d2d7e3b024fe47be79603468b873a33eb8b19c",
  "inputs": [
    {
      "type": "spend",
      "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      "amount": 7497000000,
      "control_program": "00141672adef4cbb0d9ff9665b2efbcc6641b2e1389c",
      "address": "bm1qzee2mm6vhvxel7txtvh0hnrxgxewzwyu7msqqu",
      "spent_output_id": "10e3618b29e0bb34eb2e774a9877deacc8585610660f5e23aebb479ce4427659",
      "input_id": "8f8eb1b5b66d389321c6f17d565b94d21bdd68762b71a119026aa4457ed3ac3e",
      "witness_arguments": [
        "b8191d6ab68de7a5373e8501b385e06177e85809f6e585d7e0e6cd011769174730b5e2e9ed2f504d10d88eaf970fdee443352fab83d44641ea269b2448c3ec00",
        "42f86529ead4ac40e17f9606513e25db88738b885e54c0438a9f99eb888f85a5"
      ],
      "asset_name": "BTM",
      "asset_decimals": 8
    },
    {
      "type": "spend",
      "asset_id": "bd18639abbffa3e184d4e0add8cbc2ce1e9eb3f35d3d32a1e19018aa94441d2a",
      "amount": 46446300000000,
      "control_program": "0014145c67bc4a87a7fcecb20c2f99e371ab9ca0efe6",
      "address": "bm1qz3wx00z2s7nlem9jpshencm34ww2pmlxsaq64g",
      "spent_output_id": "03774c875fde718bf52a60b1a2171c7d079ac629b6a969032837ada7d8efb7af",
      "input_id": "9e4dbdff4559727a80f43abb1c12e0b7fc3199176b8d88947f749fab3e619fa3",
      "witness_arguments": [
        "6c60d963361ed5ef2021df13e20570a82fd6ab66e4fb40c53879b6c8e3fbfc7a49ecec2097b5435cdc8edd6c6b5df61aaeef3fa67c115d72ce77eb3756988201",
        "c8ff9152d2b5733fc45142e74079232e287db30b0cd61158178de3b48c01e2c5"
      ],
      "asset_name": "BQB",
      "asset_decimals": 8
    }
  ],
  "outputs": [
    {
      "type": "control",
      "id": "7b349e17b061ce19effb5efb4fddad5ef703df5e03a1e23759daf94c4e26626e",
      "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      "amount": 7496000000,
      "control_program": "001427488a44aced7c90e1b49b6eb4cc0e4cb88976ae",
      "address": "bm1qyayg539va47fpcd5ndhtfnqwfjugja4wp95c76",
      "asset_name": "BTM",
      "position": 0,
      "asset_decimals": 8
    },
    {
      "type": "control",
      "id": "3be543f5f315865b1902c762decdf40f45f6a444fd9d843054d3ea312150941c",
      "asset_id": "bd18639abbffa3e184d4e0add8cbc2ce1e9eb3f35d3d32a1e19018aa94441d2a",
      "amount": 46446200000000,
      "control_program": "00144be00f62973235a3c3a4be82975bc76407b42b47",
      "address": "bm1qf0sq7c5hxg668sayh6pfwk78vsrmg268zcj042",
      "asset_name": "BQB",
      "position": 1,
      "asset_decimals": 8
    },
    {
      "type": "retire",
      "id": "bf0e9274734b1e544e8d6c07f75ebd45569b38013a1968d639c29d80f5a83225",
      "asset_id": "bd18639abbffa3e184d4e0add8cbc2ce1e9eb3f35d3d32a1e19018aa94441d2a",
      "amount": 100000000,
      "control_program": "6a232a8d95cacd59c574422010176bbf31eaecd3b6fa9edac56de762a2146646043f2fd00a",
      "asset_name": "BQB",
      "position": 2,
      "asset_decimals": 8
    }
  ]
}
```

---

#### `address/{address_id}/asset`

获取地址的所有账户资产，接收资产数量，发送资产数量和最近的交易信息。

##### 参数

**`必选`**:

- `String`- _address_, address

##### 返回

`Object`:

- `String` - _address_id_, address.
- `String` - _asset_id_, asset id.
- `String` - _asset_name_, asset name.
- `String` - _balance_, address balance.
- `String` - _receive_, address reveived asset total amount.
- `String` - _sent_, address sent asset total amount.
- `Integer` - _join_timestamp_, first time create address.
- `Integer` - _decimals_, the decimals of asset.
- `Integer` - _s_timestamp_, latest transaction timestamp.
- `Integer` - _tx_count_, the address's transaction count.

##### 例子

获取地址为bm1qtmt60f9jamarpyvw2eplhmsuzrkfcmxp37s94fzvg9lypgnvsg7qt2q492的所有资产信息。

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/address/bm1qtmt60f9jamarpyvw2eplhmsuzrkfcmxp37s94fzvg9lypgnvsg7qt2q492/asset" -H "accept: application/json"

// Result
[
  {
    "address_id": "bm1qtmt60f9jamarpyvw2eplhmsuzrkfcmxp37s94fzvg9lypgnvsg7qt2q492",
    "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    "asset_name": "BTM",
    "balance": "21000000000000000",
    "receive": "105000000280000000",
    "sent": "84000000280000000",
    "join_timestamp": 1525680122,
    "s_timestamp": 1563774584,
    "decimals": 8,
    "tx_count": 8
  },
  {
    "address_id": "bm1qtmt60f9jamarpyvw2eplhmsuzrkfcmxp37s94fzvg9lypgnvsg7qt2q492",
    "asset_id": "419449812fe7fcbbd51ad72344b648beae7b00a84ebd7e4c951a2fcde9d41f39",
    "asset_name": "Asset",
    "balance": "800000000",
    "receive": "800000000",
    "sent": "0",
    "join_timestamp": 1532616063,
    "s_timestamp": 1532616063,
    "decimals": 8,
    "tx_count": 1
  },
  {
    "address_id": "bm1qtmt60f9jamarpyvw2eplhmsuzrkfcmxp37s94fzvg9lypgnvsg7qt2q492",
    "asset_id": "61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3",
    "asset_name": "DCA",
    "balance": "1000000000",
    "receive": "1000000000",
    "sent": "0",
    "join_timestamp": 1565836134,
    "s_timestamp": 1565836134,
    "decimals": 8,
    "tx_count": 1
  }
]
```

---

#### `address/{address_id}/list-utxo`

获取指定地址相关的UTXO

##### 参数

**`必选`**:

- `String`- _address_id_, address

**可选**:

- `Integer`- _page_, page nunber of data.
- `Integer`- _limit_, number of data per page.

##### 返回

`Object`:

- `Array of Object` - _utxo_list_, transaction object:

  - `String` - _asset_id_, transaction id, hash of the transaction.
  - `Bool` - _is_spend_, the utxo is spend or not.
  - `String` - _hash_, the hash of utxo.
  - `Integer` - _amount_, the amount of utxo.
  - `String` - _control_program_, the control program of utxo.
  - `String` - _address_id_, address id.
  - `Integer` - _block_height_, block height.
- `Array of Object` -_pagination_, pagination info.

  - `Integer`- _current_, current number of page.
  - `Integer`- _limit_, number of data per page.
  - `Integer`- _total_, the number of total.

##### 例子：

获取指定地址为bm1q2ycyr78ae3d6wm3yd7ypyltg0evas9kgyruqxn的UTXO信息：

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/address/bm1q2ycyr78ae3d6wm3yd7ypyltg0evas9kgyruqxn/list-utxo?page=1&limit=2" -H "accept: application/json"

// Result
{
  "utxo_list": [
    {
      "block_height": 345183,
      "address_id": "bm1q2ycyr78ae3d6wm3yd7ypyltg0evas9kgyruqxn",
      "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      "is_spend": false,
      "hash": "2402bebc77a17231ea4a23c4d2abfca23a401a45ef34c71291bcac9280a09b31",
      "amount": 45295549680498,
      "control_program": "0014513041f8fdcc5ba76e246f88127d687e59d816c8"
    },
    {
      "block_height": 344610,
      "address_id": "bm1q2ycyr78ae3d6wm3yd7ypyltg0evas9kgyruqxn",
      "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      "is_spend": false,
      "hash": "e346ddb8c1218b3e3dbdbf49481a62173b48e2795804fc956bedace949417ad5",
      "amount": 50213637755141,
      "control_program": "0014513041f8fdcc5ba76e246f88127d687e59d816c8"
    }
  ],
  "pagination": {
    "current": 1,
    "limit": 2,
    "total": 1209
  }
}
```

---

#### `asset/{asset_id}/address/address/{address_id}/transaction`

获取指定地址指定资产相关的交易

##### 参数

**`必选`**:

- `String`- _asset_id_, asset
- `String`- _address_id_, address

**可选**:

- `Integer`- _page_, page nunber of data.
- `Integer`- _limit_, number of data per page.

##### 返回

`Object`:

- `Array of Object` - _transactions_, transaction object:

  - `String` - _id_, transaction id, hash of the transaction.
  - `Integer` - _version_, version of transaction.
  - `Integer` - _size_, size of transaction.
  - `Integer` - _timestamp_, the unix timestamp for when the requst was responsed.
  - `Integer` - _time_range_, the unix timestamp for when the requst was responsed.
  - `Boolean` - _status_fail_, whether the state of the request has failed.
  - `String` - _mux_id_, the previous transaction mux id(source id of utxo).
  - `Integer` - _block_height_, block height.
  - `Integer` - _chain_status_, mainnet or orphan.
  - `Integer` - _coinbase_, the flag of coinbase transaction.
  - `Boolean` - _cross_chain_, the flag of cross chain transaction.
  - `Integer` - _trx_fee_, transaction fee.
  - `Integer` - _trx_amount_, the amount of transaction.
  - `Integer` - _confirmations_, the number comfirmed.
  - `Array of Object` - _inputs_, object of inputs for the transaction.

    - `String` - _txtype_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_alias_, name of asset.
    - `Object` - _asset_definition_, definition of asset(json object).
    - `Integer` - _amount_, amount of asset.
    - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
    - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
    - `String` - _address_, address of account, it only exist when type is 'spend'.
    - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
    - `String` - _account_id_, account id.
    - `String` - _account_alias_, name of account.
    - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
    - `String` - _input_id_, hash of input action.
    - `Array of String` - _witness_arguments_, witness arguments.
    - `String` - _asset_name_, asset name.
    - `String` - _asset_decimals_, decimal of asset.
  - `Array of Object` - _outputs_, object of outputs for the transaction.

    - `String` - _txtype_, the type of output action, available option include: 'retire', 'control'.
    - `String` - _id_, outputid related to utxo.
    - `Integer` - _position_, position of outputs.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_alias_, name of asset.
    - `Object` - _asset_definition_, definition of asset(json object).
    - `Integer` - _amount_, amount of asset.
    - `String` - _account_id_, account id.
    - `String` - _account_alias_, name of account.
    - `Object` - _control_program_, control program of account.
    - `String` - _address_, address of account.
    - `String` - _asset_name_, asset name.
    - `String` - _asset_decimals_, decimal of asset.
- `Array of Object` -_pagination_, pagination info.

  - `Integer`- _current_, current number of page.
  - `Integer`- _limit_, number of data per page.
  - `Integer`- _total_, the number of total.

##### 例子：

获取指定资产为61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3，指定地址为bm1qtmt60f9jamarpyvw2eplhmsuzrkfcmxp37s94fzvg9lypgnvsg7qt2q492的交易信息：

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/asset/61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3/address/bm1qtmt60f9jamarpyvw2eplhmsuzrkfcmxp37s94fzvg9lypgnvsg7qt2q492/transaction?page=1&limit=1" -H "accept: application/json"

// Result
{
  "transactions": [
    {
      "id": "a6477e5df933a1dd465560f8fc09d92c0710bbe77cf20deb6d60f9226876fc51",
      "timestamp": 1565836134,
      "block_height": 286744,
      "trx_amount": 0,
      "trx_fee": 898000,
      "status_fail": false,
      "coinbase": false,
      "size": 607,
      "chain_status": "mainnet",
      "time_range": 304022,
      "index_id": 629592,
      "mux_id": "0911050d2d886ea7af8de92cf2ae9308505a689258468bcf834a0868d6532a95",
      "inputs": [
        {
          "txtype": "spend",
          "asset_id": "61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3",
          "amount": 47100000000,
          "control_program": "0014baa5455f5345fda568f4b68b7f634911eeedc8be",
          "address": "bm1qh2j52h6ngh762685k69h7c6fz8hwmj97n2xg9s",
          "spent_output_id": "4d5dd703d4e996821b02c48bbbbc69c77ba3cb5a3d5f83357fd3c90be06d8932",
          "input_id": "b9049a3149430f4c61766d9e6101c7440bfcf5e8ebb27167856f39a083627eab",
          "witness_arguments": [
            "ccb6ad019f67c2952479d0a2dbfed87652ca3f048cd6c2a466bdf82379ea46aee154a252a40fe9ad72166590c428ed6f80dd423a1a6dcb7e090b2090db173a06",
            "22e9714a49fc6715b5d93cd04131991e225d128ae662e94062e6adba8a034f1c"
          ],
          "asset_name": "DCA",
          "asset_definition": "{}",
          "asset_decimals": 8
        },
        {
          "txtype": "spend",
          "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "amount": 207047998,
          "control_program": "0014baa5455f5345fda568f4b68b7f634911eeedc8be",
          "address": "bm1qh2j52h6ngh762685k69h7c6fz8hwmj97n2xg9s",
          "spent_output_id": "2d93598fbcee63a6a9ce6da5e6d983439dd62450a654e353b44ea67d781081b6",
          "input_id": "ec291159f92e4f6172df00c2f3fa5f447550bd6f44bdc235600447aad643299e",
          "witness_arguments": [
            "e668782526b289577f85a0097ec9da5a7ae970266251d7f4f10fff1f4356ecb993e1179fb44437ad7391dc98a15b446bd9497f79f6ab82dc79c1875123337305",
            "22e9714a49fc6715b5d93cd04131991e225d128ae662e94062e6adba8a034f1c"
          ],
          "asset_name": "BTM",
          "asset_definition": "{}",
          "asset_decimals": 8
        }
      ],
      "outputs": [
        {
          "txtype": "control",
          "id": "d9e46efc69daf2790392589fdf76786ccb99303712e96798c7c21897ded551e4",
          "asset_id": "61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3",
          "amount": 1000000000,
          "control_program": "00205ed7a7a4b2eefa30918e5643fbee1c10ec9c6cc18fa05aa44c417e40a26c823c",
          "address": "bm1qtmt60f9jamarpyvw2eplhmsuzrkfcmxp37s94fzvg9lypgnvsg7qt2q492",
          "asset_name": "DCA",
          "asset_definition": "{}",
          "position": 0,
          "asset_decimals": 8
        },
        {
          "txtype": "control",
          "id": "48803d3cf86b3492a3314ee1bd26da235a8e104dd06955037e6bd4266512e091",
          "asset_id": "61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3",
          "amount": 46100000000,
          "control_program": "0014baa5455f5345fda568f4b68b7f634911eeedc8be",
          "address": "bm1qh2j52h6ngh762685k69h7c6fz8hwmj97n2xg9s",
          "asset_name": "DCA",
          "asset_definition": "{}",
          "position": 1,
          "asset_decimals": 8
        },
        {
          "txtype": "control",
          "id": "afa03cb52b29852ed0a41103eb849bc8f8630075351923c92178f649c77edfb4",
          "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "amount": 206149998,
          "control_program": "0014baa5455f5345fda568f4b68b7f634911eeedc8be",
          "address": "bm1qh2j52h6ngh762685k69h7c6fz8hwmj97n2xg9s",
          "asset_name": "BTM",
          "asset_definition": "{}",
          "position": 2,
          "asset_decimals": 8
        }
      ]
    }
  ],
  "pagination": {
    "current": 1,
    "limit": 1,
    "total": 1
  }
}
```

---

#### `asset/{asset_id}/transaction`

获取资产相关的交易

##### 参数

**`必选`**:

- `String`- _asset_id_, asset

**可选**:

- `Integer`- _page_, page nunber of data.
- `Integer`- _limit_, number of data per page.

##### 返回

`Object`:

- `String` - _total_amount_, issue total amount.
- `Integer` - _decimals_, decimals.
- `String` - _description_, asset description.
- `String` - _name_, asset name.
- `String` - _symbol_, asset symbol.
- `String` - _asset_id_, uuid of asset.
- `String` - _logo_, asset's logo.
- `String` - _reissue_, reissue.
- `Integer` - _issuse_timestamp_, latest transaction amount.
- `Integer` - _quorum_, asset's sign number.
- `Bool` - _is_bap2_, Bap2 protocol.
- `String` - _turnover_, asset's turnover amount.
- `String` - _decode_program_, the result of decode issue program.
- `String` - _issuance_program_, program of issue.
- `Array of Object` - _transactions_, transaction object:

  - `String` - _id_, transaction id, hash of the transaction.
  - `Integer` - _version_, version of transaction.
  - `Integer` - _size_, size of transaction.
  - `Integer` - _timestamp_, the unix timestamp for when the requst was responsed.
  - `Integer` - _time_range_, the unix timestamp for when the requst was responsed.
  - `Boolean` - _status_fail_, whether the state of the request has failed.
  - `String` - _mux_id_, the previous transaction mux id(source id of utxo).
  - `Integer` - _block_height_, block height.
  - `Integer` - _chain_status_, mainnet or orphan.
  - `Integer` - _coinbase_, the flag of coinbase transaction.
  - `Boolean` - _cross_chain_, the flag of cross chain transaction.
  - `Integer` - _trx_fee_, transaction fee.
  - `Integer` - _trx_amount_, the amount of transaction.
  - `Integer` - _confirmations_, the number comfirmed.
  - `Array of Object` - _inputs_, object of inputs for the transaction.

    - `String` - _txtype_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_alias_, name of asset.
    - `Object` - _asset_definition_, definition of asset(json object).
    - `Integer` - _amount_, amount of asset.
    - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
    - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
    - `String` - _address_, address of account, it only exist when type is 'spend'.
    - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
    - `String` - _account_id_, account id.
    - `String` - _account_alias_, name of account.
    - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
    - `String` - _input_id_, hash of input action.
    - `Array of String` - _witness_arguments_, witness arguments.
    - `String` - _asset_name_, asset name.
    - `String` - _asset_decimals_, decimal of asset.
  - `Array of Object` - _outputs_, object of outputs for the transaction.

    - `String` - _txtype_, the type of output action, available option include: 'retire', 'control'.
    - `String` - _id_, outputid related to utxo.
    - `Integer` - _position_, position of outputs.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_alias_, name of asset.
    - `Object` - _asset_definition_, definition of asset(json object).
    - `Integer` - _amount_, amount of asset.
    - `String` - _account_id_, account id.
    - `String` - _account_alias_, name of account.
    - `Object` - _control_program_, control program of account.
    - `String` - _address_, address of account.
    - `String` - _asset_name_, asset name.
    - `String` - _asset_decimals_, decimal of asset.
- `Array of Object` -_pagination_, pagination info.

  - `Integer`- _current_, current number of page.
  - `Integer`- _limit_, number of data per page.
  - `Integer`- _total_, the number of total.

##### 例子：

获取地址为bm1q050g0urjwgvpr7eu3e3y8s0xrlntzd5kneapal的资产信息：

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/asset/ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff/transaction?page=1&limit=1" -H "accept: application/json"

// Result
{
  "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
  "issuance_program": "",
  "decode_program": null,
  "description": "Bytom Official Issue",
  "total_amount": "210000000000000000",
  "turnover": "209999999845024364",
  "name": "BTM",
  "symbol": "BTM",
  "issue_timestamp": 1524499200,
  "reissue": "",
  "logo": "",
  "decimals": 8,
  "quorum": 0,
  "is_bap2": false,
  "address_count": 321307,
  "transactions": [
    {
      "id": "4904aec0b396b154c1dc270d4a3406f899626391c88c0d76fdea04730c34ab2f",
      "timestamp": 1575857208,
      "block_height": 353855,
      "trx_amount": 41250000000,
      "trx_fee": 0,
      "status_fail": false,
      "coinbase": true,
      "size": 82,
      "chain_status": "mainnet",
      "time_range": 0,
      "index_id": 757258,
      "mux_id": "280e8514a0d233f22a67dcdfec38f2909e0af33c6d48bfe08fd26332f38aab1b",
      "inputs": [
        {
          "txtype": "coinbase",
          "asset_id": "0000000000000000000000000000000000000000000000000000000000000000",
          "amount": 0,
          "spent_output_id": "<nil>",
          "arbitrary": "00333533383535",
          "input_id": "35cd86fb0a570dbf4fbff914f102574eb96d135f2ca8b1e71978945d3011360e",
          "witness_arguments": null,
          "asset_name": "",
          "asset_definition": "{}",
          "asset_decimals": 0
        }
      ],
      "outputs": [
        {
          "txtype": "control",
          "id": "e48cdfb44cfad0e3c94b6dbfe4c4f5f99df55dddf58663ea51fb5f5dcdf6b70f",
          "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "amount": 41250000000,
          "control_program": "0014f8e99d6431aada3d535a015ba1074f6d6a58c4f3",
          "address": "bm1qlr5e6ep34tdr6566q9d6zp60d449338nwuhkdw",
          "asset_name": "BTM",
          "asset_definition": "{}",
          "position": 0,
          "asset_decimals": 8
        }
      ]
    }
  ],
  "pagination": {
    "current": 1,
    "limit": 1,
    "total": 757258
  }
}
```

---

#### `asset/{asset_id}`

通过资产id或者地址获取账户资产，接收资产数量，发送资产数量和接收的交易。

##### 参数

`Object`:

- `String`- _asset_id_, asset id

##### 返回

`Object`:

- `String` - _total_amount_, issue total amount.
- `Integer` - _decimals_, decimals.
- `String` - _description_, asset description.
- `String` - _name_, asset name.
- `String` - _symbol_, asset symbol.
- `String` - _asset_id_, uuid of asset.
- `String` - _logo_, asset's logo.
- `String` - _reissue_, reissue.
- `Integer` - _issuse_timestamp_, latest transaction amount.
- `Integer` - _quorum_, asset's sign number.
- `Bool` - _is_bap2_, Bap2 protocol.
- `String` - _turnover_, asset's turnover amount.
- `String` - _decode_program_, the result of decode issue program.
- `String` - _issuance_program_, program of issue.

##### 例子

获取地址为61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3的资产信息：

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/asset/61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3" -H "accept: application/json"

// Result
{
  "asset_id": "61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3",
  "issuance_program": "03423604cda069ae20ba090ba17eee6c73a8261b6672599d8af87b14ad51a6d741489c32d6b54340e45151ad",
  "decode_program": [
    "DATA_3 423604",
    "BLOCKHEIGHT ",
    "GREATERTHAN ",
    "VERIFY ",
    "TXSIGHASH ",
    "DATA_32 ba090ba17eee6c73a8261b6672599d8af87b14ad51a6d741489c32d6b54340e4",
    "1 01",
    "1 01",
    "CHECKMULTISIG "
  ],
  "description": "",
  "total_amount": "1000000000000000",
  "turnover": "1000000000000000",
  "name": "Decentralized  Community Asset",
  "symbol": "DCA",
  "issue_timestamp": 1564385961,
  "reissue": "false",
  "logo": "https://bycoin.oss-cn-shanghai.aliyuncs.com/bystack/asset/dca.png",
  "decimals": 8,
  "quorum": 1,
  "is_bap2": false
}
```

---

#### `list-asset`

在比原链上获取issued资产和BTM

##### 参数

**无**:

##### 返回

**Object**:

- `Array of Object` - _assets_, asset object:

  - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
  - `Array of String` - _decode_program_, decode arguments.
  - `Integer` - _total_amount_, total amount.
  - `String` - _name_, asset name.
  - `String` - _decimals_, decimal of asset.
  - `Object` - _description_, issue description'.
  - `String` - _symbol_, symbol.
  - `Integer` - _address_count_, address count.
  - `Integer` - _issue_timestamp_, issue timestamp.
  - `String` - _reissue_, is reissue.
  - `String` - _logo_, asset logo.
  - `Integer` - _quorum_, number of quorum.
  - `Integer` - _is_bap2_, protocal of bap2.
  - `String` - _asset_id_, asset id.
  - `String` - _turnover_, turnover of asset.
  - `Integer` - _confirmations_, the number comfirmed.

##### 例子

在比原链网络上获取issued资产：

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/assets?page=2&limit=1'

// Result
[
    {
        "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "issuance_program": "",
        "decode_program": null,
        "description": "Bytom Official Issue",
        "total_amount": "210000000000000000",
        "turnover": "209999999846677374",
        "name": "BTM",
        "symbol": "BTM",
        "issue_timestamp": 1524499200,
        "reissue": "",
        "logo": "",
        "decimals": 8,
        "quorum": 0,
        "is_bap2": false,
        "address_count": 320765
    },
    {
        "asset_id": "bd18639abbffa3e184d4e0add8cbc2ce1e9eb3f35d3d32a1e19018aa94441d2a",
        "issuance_program": "ae2065b4a4dcb5308e7114ecb67c2c48b1c2ac9d03519bf21093cb2b0241a34603f15151ad",
        "decode_program": [
            "TXSIGHASH ",
            "DATA_32 65b4a4dcb5308e7114ecb67c2c48b1c2ac9d03519bf21093cb2b0241a34603f1",
            "1 01",
            "1 01",
            "CHECKMULTISIG "
        ],
        "description": "",
        "total_amount": "2100000000000000",
        "turnover": "2096248700000000",
        "name": "BQB",
        "symbol": "BQB",
        "issue_timestamp": 1546072313,
        "reissue": "",
        "logo": "",
        "decimals": 8,
        "quorum": 0,
        "is_bap2": false,
        "address_count": 38142
    },
    {
        "asset_id": "61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3",
        "issuance_program": "03423604cda069ae20ba090ba17eee6c73a8261b6672599d8af87b14ad51a6d741489c32d6b54340e45151ad",
        "decode_program": [
            "DATA_3 423604",
            "BLOCKHEIGHT ",
            "GREATERTHAN ",
            "VERIFY ",
            "TXSIGHASH ",
            "DATA_32 ba090ba17eee6c73a8261b6672599d8af87b14ad51a6d741489c32d6b54340e4",
            "1 01",
            "1 01",
            "CHECKMULTISIG "
        ],
        "description": "",
        "total_amount": "1000000000000000",
        "turnover": "1000000000000000",
        "name": "Decentralized  Community Asset",
        "symbol": "DCA",
        "issue_timestamp": 1564385961,
        "reissue": "false",
        "logo": "https://bycoin.oss-cn-shanghai.aliyuncs.com/bystack/asset/dca.png",
        "decimals": 8,
        "quorum": 1,
        "is_bap2": false,
        "address_count": 3574
    },
    {
        "asset_id": "375d9174951417fca654f4ec78660786bdfdb59795781b61dad9b61b1c174e1a",
        "issuance_program": "03a16d04cda069ae207c38e244b6e0274a9e70d4addd5b259841045198780208c28c31d4131ea81ea95151ad",
        "decode_program": [
            "DATA_3 a16d04",
            "BLOCKHEIGHT ",
            "GREATERTHAN ",
            "VERIFY ",
            "TXSIGHASH ",
            "DATA_32 7c38e244b6e0274a9e70d4addd5b259841045198780208c28c31d4131ea81ea9",
            "1 01",
            "1 01",
            "CHECKMULTISIG "
        ],
        "description": "",
        "total_amount": "40000000000000000",
        "turnover": "39999999821000000",
        "name": "Bing  home token",
        "symbol": "BHT",
        "issue_timestamp": 1566352092,
        "reissue": "false",
        "logo": "https://bycoin.oss-cn-shanghai.aliyuncs.com/bystack/asset/bht.png",
        "decimals": 8,
        "quorum": 1,
        "is_bap2": true,
        "address_count": 1211
    },
]
```

---

#### `asset/{asset_id}/addresses`

获取资产下地址的排名。

##### 参数

**可选**:

- `String`- _asset_id_, asset id.

**可选**:

- `Integer`- _page_, page nunber of data.
- `Integer`- _limit_, number of data per page.

##### 返回

**`可选`**:

- `Array of Object` - _addresses_, address object:

  - `String` - _address_id_, address.
  - `String` - _asset_id_, asset id.
  - `String` - _asset_name_, asset name.
  - `String` - _balance_, address balance.
  - `String` - _receive_, address reveived asset total amount.
  - `String` - _sent_, address sent asset total amount.
  - `Integer` - _join_timestamp_, first time create address.
  - `Integer` - _s_timestamp_, latest transaction timestamp.
  - `Integer` - _decimals_, the asset's decimals.
- `Array of Object` -_pagination_, pagination info.

  - `Integer`- _current_, current number of page.
  - `Integer`- _limit_, number of data per page.
  - `Integer`- _total_, the number of total.

##### 例子

获取资产id是61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3的所有地址资产排名：

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/asset/61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3/addresses?page=1&limit=3" -H "accept: application/json"

// Result
{
  "addresses": [
    {
      "address_id": "bm1qlr6n07hcykllthlq3er78zsnexxsm432lm8hxd",
      "asset_id": "61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3",
      "asset_name": "DCA",
      "balance": "28001325000000",
      "receive": "28001325000000",
      "sent": "0",
      "join_timestamp": 1565321323,
      "s_timestamp": 1567600432,
      "decimals": 8
    },
    {
      "address_id": "bm1q0g7cpwfl5wu28dew0aav4qyrky03xmscukxarm",
      "asset_id": "61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3",
      "asset_name": "DCA",
      "balance": "27679475000000",
      "receive": "27679475000000",
      "sent": "0",
      "join_timestamp": 1568179361,
      "s_timestamp": 1568179361,
      "decimals": 8
    },
    {
      "address_id": "bm1qlqvsfdxfgetdrxs0y2vaekvyp7twta42fwgze9",
      "asset_id": "61f01005b8ae38976b73f362cd9e54409899fff6a388818f0fb0f01ab5953af3",
      "asset_name": "DCA",
      "balance": "18461875000000",
      "receive": "18461875000000",
      "sent": "0",
      "join_timestamp": 1565321323,
      "s_timestamp": 1567685431,
      "decimals": 8
    }
  ],
  "pagination": {
    "current": 1,
    "limit": 3,
    "total": 3574
  }
}
```

---

#### `daily/kline/{pair}`

获取btm日常k线的收盘价，主要的交易对有btm_btc, btm_eth, btm_usd, btm_cny.

##### 参数

**`可选`**:

- `String`- _pair_, btm exchange pair, Pair include btm_btc,btm_eth,btm_usd,btm_cny.

**可选**:

- `Integer`- _from_, start timestamp of statistic.
- `Integer`- _to_, end timestamp of statistic.

##### 返回

**`Object`**:

- `Array` :

  - `Array` - [price,date]

##### 例子

获取48小时btm_cny的价格:

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/daily/kline/btm_btc" -H "accept: application/json"

// Result
[
  [
    0.00001485,
    1558656000
  ],
  [
    0.00001498,
    1558742400
  ],
  [
    0.00001464,
    1558828800
  ],
  [
    0.00001473,
    1558915200
  ],
  [
    0.00001453,
    1559001600
  ],
]
```

---

#### `daily/miner`

获取比原链网络挖矿每日统计数据

##### 参数

**可选**:

- `Integer`- _from_, start timestamp of statistic.
- `Integer`- _to_, end timestamp of statistic.

##### 返回

**`可选`**:

- `Array` :

  - `Array of Object`

    - `String` - _address_, address.
    - `Integer` - _fee_, transaction fee.
    - `Integer` - _mined_block_count_, mined block count.
    - `String` - _name_, miner name.
    - `Integer` - _start_timestamp_, mined start timestamp.
    - `Integer` - _end_timestamp_, mined end timestamp.
    - `Integer` - _profit_, profit.
    - `Float` - _percent_, percent of total miner:

##### 例子

获取比原链网络今日挖矿数据：

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/daily/miner" -H "accept: application/json"

// Result
[
  [
    {
      "address": "bm1qcxg0w7c70tdd46t7dxn204mkyeyudcz063s49e",
      "start_timestamp": 1567180800,
      "end_timestamp": 1567267199,
      "fee": 14470000,
      "mined_block_count": 5,
      "percent": 0.008532423208191127,
      "profit": 206264470000,
      "name": "uupool"
    },
    {
      "address": "bm1q08rnqaf67l5fhkt60lq43n07xqe36az8gwlfqx",
      "start_timestamp": 1567180800,
      "end_timestamp": 1567267199,
      "fee": 1188228797,
      "mined_block_count": 303,
      "percent": 0.5170648464163823,
      "profit": 12499938228797,
      "name": "antpool"
    },
    {
      "address": "bm1qlr5e6ep34tdr6566q9d6zp60d449338nwuhkdw",
      "start_timestamp": 1567180800,
      "end_timestamp": 1567267199,
      "fee": 354302200,
      "mined_block_count": 80,
      "percent": 0.13651877133105803,
      "profit": 3300354302200,
      "name": "matpool"
    },
    {
      "address": "bm1q3yt265592czgh96r0uz63ta8fq40uzu5a8c2h0",
      "start_timestamp": 1567180800,
      "end_timestamp": 1567267199,
      "fee": 662329595,
      "mined_block_count": 174,
      "percent": 0.29692832764505117,
      "profit": 7178162329595,
      "name": "f2pool"
    },
    {
      "address": "bm1qrwhwspf4mva328xtaeed9fjmgj2u8mqywv887z",
      "start_timestamp": 1567180800,
      "end_timestamp": 1567267199,
      "fee": 114134004,
      "mined_block_count": 24,
      "percent": 0.040955631399317405,
      "profit": 990114134004,
      "name": "beepool"
    }
  ],
  [
    {
      "address": "bm1qcxg0w7c70tdd46t7dxn204mkyeyudcz063s49e",
      "start_timestamp": 1567267200,
      "end_timestamp": 1567353599,
      "fee": 21500000,
      "mined_block_count": 9,
      "percent": 0.014802631578947368,
      "profit": 371271500000,
      "name": "uupool"
    },
    {
      "address": "bm1qj7h0lvlvmel3m8nje8c96n7jzu038xgrfqp7a4",
      "start_timestamp": 1567267200,
      "end_timestamp": 1567353599,
      "fee": 0,
      "mined_block_count": 1,
      "percent": 0.001644736842105263,
      "profit": 41250000000,
      "name": "bm1qj7h0..."
    },
    {
      "address": "bm1qrwhwspf4mva328xtaeed9fjmgj2u8mqywv887z",
      "start_timestamp": 1567267200,
      "end_timestamp": 1567353599,
      "fee": 11286000,
      "mined_block_count": 18,
      "percent": 0.029605263157894735,
      "profit": 742511286000,
      "name": "beepool"
    },
    {
      "address": "bm1qlr5e6ep34tdr6566q9d6zp60d449338nwuhkdw",
      "start_timestamp": 1567267200,
      "end_timestamp": 1567353599,
      "fee": 223142600,
      "mined_block_count": 100,
      "percent": 0.16447368421052633,
      "profit": 4125223142600,
      "name": "matpool"
    },
    {
      "address": "bm1q08rnqaf67l5fhkt60lq43n07xqe36az8gwlfqx",
      "start_timestamp": 1567267200,
      "end_timestamp": 1567353599,
      "fee": 817950197,
      "mined_block_count": 313,
      "percent": 0.5148026315789473,
      "profit": 12912067950197,
      "name": "antpool"
    },
    {
      "address": "bm1q3yt265592czgh96r0uz63ta8fq40uzu5a8c2h0",
      "start_timestamp": 1567267200,
      "end_timestamp": 1567353599,
      "fee": 504517200,
      "mined_block_count": 167,
      "percent": 0.2746710526315789,
      "profit": 6889254517200,
      "name": "f2pool"
    }
  ],
]
```

---

#### `daily/total`

获取比原网络基本数据每日统计

##### 参数

**可选**:

- `Integer`- _from_, start timestamp of statistic.
- `Integer`- _to_, end timestamp of statistic.

##### 返回

**`Object`**:

- `Array` :

  - `Array of Object`

    - `Integer` - _start_timestamp_, mined start timestamp.
    - `Integer` - _end_timestamp_, mined end timestamp.
    - `Integer` - _confirmed_block_count_, confirmed block count.
    - `Integer` - _issue_count_, new issue count.
    - `Integer` - _mined_btm_amount_, mined BTM amount.
    - `Integer` - _new_address_count_, new address count.
    - `Integer` - _new_asset_count_, new asset count.
    - `Integer` - _orphan_block_count_, orphan block count.
    - `Integer` - _retire_count_, retire transaction count.
    - `Integer` - _transaction_amount_, transaction amount(BTMZ).
    - `Integer` - _transaction_count_, transaction count.
    - `Integer` - _transaction_fee_, transaction fee.
    - `Float` - _transaction_gas_, transaction gas.
    - `Integer` - _average_block_time_, average block time.

##### 例子

获取今日比原网络基本数据统计:

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/daily/total'

// Result
[
  {
    "start_timestamp": 1575734400,
    "end_timestamp": 1575820799,
    "confirmed_block_count": 585,
    "issue_count": 0,
    "mined_btm_amount": 24131250000000,
    "new_address_count": 341,
    "new_asset_count": 0,
    "orphan_block_count": 0,
    "retire_count": 146,
    "transaction_amount": 561460475827734,
    "transaction_count": 1004,
    "transaction_fee": 2130905820,
    "transaction_gas": 10654529,
    "average_block_time": 2.4615384615384617
  },
  {
    "start_timestamp": 1575475200,
    "end_timestamp": 1575561599,
    "confirmed_block_count": 561,
    "issue_count": 0,
    "mined_btm_amount": 23141250000000,
    "new_address_count": 378,
    "new_asset_count": 0,
    "orphan_block_count": 2,
    "retire_count": 150,
    "transaction_amount": 1340257197596519,
    "transaction_count": 988,
    "transaction_fee": 2263809599,
    "transaction_gas": 11319047,
    "average_block_time": 2.5668449197860963
  },
]
```

---

#### `stat/diffculty`

获取比原链网络挖矿难度统计

##### 参数

**可选**:

- `Integer`- _from_, start timestamp of statistic.
- `Integer`- _to_, end timestamp of statistic.

##### 返回

**`可选`**:

- `Array` :

  - `Array of Object`

    - `String` - _change_time_, detail time of diffculty change.
    - `Integer` - _diffculty_, diffculty.
    - `Float` - _change_rate_, change rate.

##### 例子

获取比原链网络区块从1565740800到1566259200的挖矿难度统计:

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/stat/difficulty'

// Result
[
   {
    "change_time": 1567181217,
    "difficulty": 66210054449,
    "change_rate": -0.05010851607842358
  },
  {
    "change_time": 1567243213,
    "difficulty": 66947989577,
    "change_rate": 0.011145363557560786
  },
]
```

---

#### `stat/miner/day`

获取比原链网络挖矿24小时统计

##### 参数

**无**:

##### 返回

**`Object`**:

- `Array` :

  - `Array of Object`

    - `String` - _address_, miner address.
    - `String` - _name_, miner name.
    - `Integer` - _mined_block_count_, mined block count.
    - `Integer` - _profit_, miner profit.
    - `Integer` - _fee_, transaction fee.
    - `Float` - _percent_, percent in total.
    - `Float` - _hash_rate_, hash rate.

##### 例子

获取比原链网络24小时挖矿统计:

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/stat/miner/day'

// Result
[
  {
    "address": "bm1q08rnqaf67l5fhkt60lq43n07xqe36az8gwlfqx",
    "fee": 1010985276,
    "mined_block_count": 323,
    "percent": 0.5483870967741935,
    "profit": 13324760985276,
    "name": "antpool",
    "hash_rate": 260532752.63059652
  },
  {
    "address": "bm1qrwhwspf4mva328xtaeed9fjmgj2u8mqywv887z",
    "fee": 36645000,
    "mined_block_count": 20,
    "percent": 0.03395585738539898,
    "profit": 825036645000,
    "name": "beepool",
    "hash_rate": 16132058.986414647
  },
  {
    "address": "bm1q3yt265592czgh96r0uz63ta8fq40uzu5a8c2h0",
    "fee": 609482197,
    "mined_block_count": 127,
    "percent": 0.21561969439728354,
    "profit": 5239359482197,
    "name": "f2pool",
    "hash_rate": 102438574.56373301
  },
  {
    "address": "bm1qcxg0w7c70tdd46t7dxn204mkyeyudcz063s49e",
    "fee": 2745000,
    "mined_block_count": 3,
    "percent": 0.0050933786078098476,
    "profit": 123752745000,
    "name": "uupool",
    "hash_rate": 2419808.8479621974
  },
  {
    "address": "bm1qlr5e6ep34tdr6566q9d6zp60d449338nwuhkdw",
    "fee": 2122787205,
    "mined_block_count": 116,
    "percent": 0.1969439728353141,
    "profit": 4787122787205,
    "name": "matpool",
    "hash_rate": 93565942.12120496
  }
]
```

---

#### `stat/hash-rate`

统计比原链网络hash率

##### 参数

**可选**:

- `Integer`- _from_, start timestamp of statistic.
- `Integer`- _to_, end timestamp of statistic.

##### 返回

**`可选`**:

- `Array` :

  - `Array` - [timetamp,hash_rate].

##### 例子

获取比原链区块时间从1566040800到1566259200的hash率：

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/stat/hash-rate?from=1566040800&to=1566259200" -H "accept: application/json"

// Result
[
    [
    1566057600,
    397711751.0443408
  ],
  [
    1566144000,
    418943795.39227307
  ]
]
```

---

#### `stat/total`

总统计Bytom网络基本数据

##### 参数

**可选**:

- `Integer`- _from_, start timestamp of statistic.
- `Integer`- _to_, end timestamp of statistic.

##### 返回

**`Object`:**

- `Integer` - _confirmed_block_count_, confirmed block count.
- `Integer` - _orphan_block_count_, orphan block count.
- `Integer` - _transaction_count_, transaction count.
- `Integer` - _transaction_amount_, transaction amount(BTM).
- `Integer` - _transaction_fee_,  transaction fee.
- `Float` - _transaction_gas_, transaction gas.
- `Integer` - _new_asset_count_, new asset count.
- `Integer` - _mined_btm_amount_, mined btm amount.
- `Integer` - _issue_count_, issue count.
- `Integer` - _retire_count_, retire count.
- `Integer` - _start_timestamp_, mined start timestamp.
- `Integer` - _end_timestamp_, mined end timestamp.

##### 例子

总统计比原链网络区块高度从1566040800到1566259200的基本数据：

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/stat/total?from=1566040800&to=1566259200" -H "accept: application/json"

// Result
{
  "start_timestamp": 1566057600,
  "end_timestamp": 1566230399,
  "confirmed_block_count": 1134,
  "issue_count": 10,
  "mined_btm_amount": 46777500000000,
  "new_address_count": 833,
  "new_asset_count": 6,
  "orphan_block_count": 0,
  "retire_count": 307,
  "transaction_amount": 2570728393393808,
  "transaction_count": 2056,
  "transaction_fee": 4619497086,
  "transaction_gas": 23097484
}
```

---

#### `kline/{pair}`

获取btm最近48小时的价格k线，交易对包括 btm_btc, btm_eth, btm_usd, btm_cny

##### 参数

**必选**

- `String`- _pair_, Pair include btm_btc,btm_eth,btm_usd,btm_cny.

##### 返回

**`Object`**:

- `Array` :

  - `Array of Object`

    - `Float64` - _close_, close price.
    - `Integer` - _date_, close date.

##### 例子

获取48小时btm_cny的价格:

```json
// Request
curl -X GET "https://blockmeta.com/api/v3/kline/btm_cny" -H "accept: application/json"

// Result
[
   {
    "close": 0.563004,
    "date": 1575687600
  }...
]
```

---

#### `nodes`

获取比原链所有节点所在的国家，包括cn, sg, jp, es, de, us, kr, ca, ru, uk

##### 参数

**可选:**

- `String`- _country_, country include cn,sg,jp,es,de,us,kr,ca,ru,uk.
- `Integer`- _page_, page number of data.
- `Integer`- _limit_, number of data per page.

##### Returns

**`Object`:**

- `Array of Object` - _nodes_, nodes object:

  - `String` - _address_, host:port.
  - `String` - _status_, network status.
  - `Integer` - _height_, block height.
  - `String` - _status_time_, datetime.
  - `Integer` - _rtt_, Round Trip Time.
  - `String` - _network_, mainnet testnet.
  - `String` - _version_, bytom version.
  - `Boolean` - _id_seed_, seed node or not.
  - `Object` - _coordinate_, coordinate:

    - `Float` - _longitude_, longitude
    - `Float` - _latitude_, latitude.
  - `Integer` - _country_, country name.
  - `Integer` - _symbol_, country symbol.
  - `String` - _name_, node name.
- `Array of Object` -_pagination_, pagination info.

  - `Integer`- _current_, current number of page.
  - `Integer`- _limit_, number of data per page.
  - `Integer`- _total_, the number of total.

##### 例子

获取节点信息：

```json
// Request
curl -X GET --header 'Accept: application/json' 'https://blockmeta.com/api/v3/nodes?page=1&limit=2'

// Result
{
  "pagination": {
    "current": 1,
    "limit": 2,
    "total": 49
  },
  "nodes": [
    {
      "address": "193.112.67.165:46657",
      "status": "active",
      "version": "1.0.8+56443ac4",
      "status_time": "2019-12-09T03:00:11Z",
      "network": "mainnet",
      "country": "China",
      "symbol": "cn,",
      "total": "",
      "volume": "",
      "name": "EONE",
      "height": 353871,
      "rtt": 81474984,
      "coordinate": {
        "longitude": 116.3883,
        "latitude": 39.9289
      },
      "is_seed": false
    },
    {
      "address": "118.25.5.22:46657",
      "status": "active",
      "version": "1.0.8+8db7fe73",
      "status_time": "2019-12-09T03:00:10Z",
      "network": "mainnet",
      "country": "China",
      "symbol": "cn,",
      "total": "",
      "volume": "",
      "name": "邵贤军",
      "height": 353871,
      "rtt": 98061529,
      "coordinate": {
        "longitude": 116.3883,
        "latitude": 39.9289
      },
      "is_seed": false
    }
  ]
}
```
**

## Vapor Blockmeta API

## API 接口

Default JSON-RPC endpoints:

| Client | URL |
| --- | --- |
| Base URL | [https://vapor.blockmeta.com/api/v1](https://vapor.blockmeta.com/api/v1) |


A complete request example via `curl`:

## API

The complete request and response are as follows:

```
// curl -X GET url/method
curl -X GET "https://vapor.blockmeta.com/api/v1/address/vp1qfk9kgj6mt9ga4wfnz7zqq6zkys9t84lj5t53x5" -H "accept: application/json"

// response
{
  "code": 200,
  "data": {
    "address": [
      {
        "address_id": "vp1qfk9kgj6mt9ga4wfnz7zqq6zkys9t84lj5t53x5",
        "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "asset_name": "BTM",
        "decimals": 8,
        "balance": 11730661615088,
        "receive": 23461428747242,
        "sent": 11730767132154,
        "timestamp": 1563946177000
      }
    ]
  },
  "msg": "ok"
}
```

## API methods

- Block About
  - [`block`](#eb1f8cd6) 
  - [`blocks`](#57ec8edb) 
  - [`block/height/{height}`](#ef0d0f0e)
- Transaction About
  - [`tx`](#ef0d0f0e)
  - [`tx/hash/{hash}`](#ef0d0f0e)
  - [`tx/height/{height}`](#b048553c)
  - [`txs`](#5315307a)
  - [`vote/txs`](#2d163be9)
  - `[cross-chain/txs](#12f060af)`
- Address About
  - [`address/{address_id}`](#088f25a6)
  - [`address/{address_id}/cross-chain-tx`](#0a77cb47)
  - [`address/{address_id}/trx/{asset_id}`](#cdaf1bbb)
  - [`address/{address_id}/vote-tx`](#400bb486)
  - [`addresses`](#e746dc7e)
- Asset About
  - [`asset/{asset_id}`](#3dd6f042)
  - [`asset/{asset_id}trxs`](#19997ed5)
- Statistic About
  - [`stat`](#e03a8cdf)
  - [`stat/trx/daily`](#fc472ae2)
- Node About
  - [`en/node/{name}`](#578c92cc)
  - [`node/{pub_key}`](#113a49b9)
  - [`node/{pub_key}/info`](#qs0Yv)
  - [`node/{pub_key}/vote`](#UXyok)
  - [`nodes`](#99677c8c)
  - [`nodes/details`](#a531c096)
  - [`zn/node/{name}`](#578c92cc)

---

## `block`

Get the latest block

### Parameters

None

### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Object` - _block_, block detail.
    - `String`- _hash_, hash of block.
    - `String`- _blocker_, the public key who product the block.
    - `String`- _previous_block_hash_, previous block hash.
    - `String`- _transaction_merkle_root_, merkle root of transaction.
    - `String`- _transaction_status_hash_, merkle root of transaction status.
    - `Integer`- _size_, size of block.
    - `Integer`- _version_, version of block.
    - `Integer`- _height_, height of block.
    - `Integer`- _timestamp_, timestamp of block.
    - `String`- _miner_address_, the address of miner.
    - `Integer`- _transaction_count_, the count of transaction in the block.
    - `String`- _chain_status_, mainchain or orphan.
    - `Array` - _witness_, the block witness.
    - `String`- _name_, blocker name.
    - `String`- _name_en_, blocker english name.
    - `String`- _logo_, blocker logo.
- `String` - _msg_, error message.

### Example

get latest block:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/block" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "block": {
      "hash": "2e5159b6bf5266db2bff816cd7d1c7cd7dd8812ffeb1a2830894164c89f7c2dc",
      "blocker": "e7f458ee8d2ba19b0fdc7410d1fd57e9c2e1a79377c661d66c55effe49d7ffc920e40510442d4a10b7bea06c09fb0b41f52601135adaaa7136204db36106c093",
      "previous_block_hash": "618480716ddc8e07e2e8f6fac38c3630da518f88a0bd72cc67f9af17c7da3d14",
      "transaction_status_hash": "c9c377e5192668bc0a367e4a4764f11e7c725ecced1d7b6a492974fab1b6d5bc",
      "transaction_merkle_root": "5444006d0429ce7e5831cf398cb8d1111cd41dc51234b015f8f6a3c98af14b80",
      "size": 918,
      "version": 1,
      "height": 5507997,
      "timestamp": 1566378131000,
      "miner_address": "vp1qn5h4469cmksadpuxn042398kdzda48reu8ar2n",
      "transaction_count": 1,
      "chain_status": "mainnet",
      "witness": [
        "",
        "",
        "",
        "d5e650af2dcef9edbc5d53007a028ba681e4f46002683cd77b2b4b19bfb975e83e0d3164972445c87e4dc53d95685919f5ff887f8d2b877d81b315435b50f008",
        "",
        "",
        "14f75dc3f0eb34a6fc111268a1f9fd24514baf1e64be379a844aa15cc2c039b033243dbfbbb199fa19b543dbc20b9e5b2b63cca6ec91d5d2dbf023a140e4ce06",
        "",
        "618865db3da31bbd197389b49d943d722e91eeb9dc515fa1f75e724bd20acf31234ee83c2040ee6edc987111b88c2dbdb1eebaeaeb5195cc1a77a985c040850a",
        "3f35dbdd982b04d51bc880565cdd39a901d9ef56cdbde4ccbb067e42db7170a22e4ae3b619f8c94006ef3cfa06c0551d4484c5635b5e354cf3525a924f673a0d"
      ],
      "name": "",
      "name_en": "",
      "logo": ""
    }
  },
  "msg": "ok"
}
```

---

#### `blocks`

Get blocklist that was sorted by height

##### Parameters

Optional:

- `Integer`- _page_, page number of data.
- `Integer`- _limit_, number of data per page.

##### Returns

`Object`:

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, blocks detail.
  - `Array of Object` - _lists_, block list.
    - `String`- _hash_, hash of block.
    - `String`- _blocker_, the public key who product the block.
    - `String`- _previous_block_hash_, previous block hash.
    - `String`- _transaction_merkle_root_, merkle root of transaction.
    - `String`- _transaction_status_hash_, merkle root of transaction status.
    - `Integer`- _size_, size of block.
    - `Integer`- _version_, version of block.
    - `Integer`- _height_, height of block.
    - `Integer`- _timestamp_, timestamp of block.
    - `String`- _miner_address_, the address of miner.
    - `Integer`- _transaction_count_, the count of transaction in the block.
    - `String`- _chain_status_, mainchain or orphan.
    - `Array` - _witness_, the block witness.
    - `String`- _name_, blocker name.
    - `String`- _name_en_, blocker english name.
    - `String`- _logo_, blocker logo.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example
Get blocks when the page is 1 and limit is 1:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/blocks?page=1&limit=1" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "lists": [
      {
        "hash": "99b644981e52011daec6b6dcfe4e810c872e744bb06376c43feca82ae659d3b9",
        "blocker": "0f8669abbd3cc0a167156188e428f940088d5b2f36bb3449df71d2bdc5e077814ea3f68628eef279ed435f51ee26cff00f8bd28fabfd500bedb2a9e369f5c825",
        "previous_block_hash": "5a623c59817b7f7bd029de40760eaef357d7fb68891afead3dac1062b985d96f",
        "transaction_status_hash": "c9c377e5192668bc0a367e4a4764f11e7c725ecced1d7b6a492974fab1b6d5bc",
        "transaction_merkle_root": "009a33cd6215c2b4e3d7e23bd89f8e8c3c94c9c293979129b6b2e51748676976",
        "size": 1686,
        "version": 1,
        "height": 5509933,
        "timestamp": 1566379099000,
        "miner_address": "vp1ql4dakjlqhndda7xh0smz38j847e265fft3gz4u",
        "transaction_count": 1,
        "chain_status": "mainnet",
        "witness": [
          "6b08ed9d96eecfa97c99a58aa5b00919b818aece97b1dfd1dea8fb89734306f337d07baa08779943c71b04894cb345ecd10db5e66e091ab431b862b79c1e8208",
          "ca03d6dc4920cf3a6119ce34523d3ee8e57622e2aea2fc58d40c019d46bf0b7ded39e3f47e26cd4f01f9cca85f668d6c38605c7acc6488014858a9654e1bca0b",
          "2a590b6bc425b3a7a61d094ee377828c253f35f6676a585ccb95c430628628a0217af0cdd7f9a573e352f0e0df3536ad26051a41f390ec82cab7dba0cfbbb60d",
          "555558e4baba020c3abd3b3a5c56d9b98e05d306b86a6db14534bcc138fcca35e5b9388ba3b717a7faa910da6223fd68d4d87893d8d5ebd30d2fdbf93a115a0f",
          "d26627b56877a6502251beff968ed3cd93c14673f83b32caf3f998613c9ea77119ed180bf4ec1820fe2d89f0485263435cfa06f8f8287259fdbf3ea23f46fe0a",
          "f5467d24de5c47acc4c0897ad081954e7f203a0ecaa20a9d8909cfd5385c4d9bb64606074de8a15c820c21a4a6c99645f7a9979a9b82a1bdfa655596c05aa10b",
          "b1f416372b217b04fac236aa980aa4603500327f79a16b9366b7c1e512f3495309714764986d401bb8a6838ec7cd1b87591930b78e9545e2f2338a319a269b01",
          "2b488aa0eeacda5eae089a839e57199a3b691e6ce4656049697c18c41f4c8291a71e3f74ef0ecd3dbbbd533c14a9b8ac2de9a6ba476560e7b59777a93a44fb02",
          "60555a5285eafd5162c8117038f874202e3a76d48a10e5bb037fc2a2228b5b21d97f2646f05ae2696f163e25dd88ffd5e151253a949a2ef6d971ee8d0e669401",
          "aa94165b1aa9aea45abc678cb2c288fc21d7cba82a173b7c5071b01f1b56508870e01d7a287ed661d4034c5e847a1fa6ae8eb37b2ce7fa880464ed9cacbf200b"
        ],
        "name": "MatPool",
        "name_en": "MatPool",
        "logo": "https://api.bystack.com/supernode/v1/uploads/1562316066.53449061_14.png"
      }
    ],
    "pagination": {
      "current": 1,
      "limit": 1,
      "total": 5509933,
    }
  },
  "msg": "ok"
}
```

---

#### `block/height/{height}`

Get block by block height
##### Parameters

Optional:

- `String`- _height_, block height.
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Object` - _block_, block detail.
    - `String`- _hash_, hash of block.
    - `String`- _blocker_, the public key who product the block.
    - `String`- _previous_block_hash_, previous block hash.
    - `String`- _transaction_merkle_root_, merkle root of transaction.
    - `String`- _transaction_status_hash_, merkle root of transaction status.
    - `Integer`- _size_, size of block.
    - `Integer`- _version_, version of block.
    - `Integer`- _height_, height of block.
    - `Integer`- _timestamp_, timestamp of block.
    - `String`- _miner_address_, the address of miner.
    - `Integer`- _transaction_count_, the count of transaction in the block.
    - `String`- _chain_status_, mainchain or orphan.
    - `Array` - _witness_, the block witness.
    - `String`- _name_, blocker name.
    - `String`- _name_en_, blocker english name.
    - `String`- _logo_, blocker logo.
- `String` - _msg_, error message.

##### Example

Get block when the height is 123:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/block/height/123" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "block": {
      "hash": "b5ca3311d47d99d981216d9deedc3b181665d8c2da45d94129f9f6206f07f3f6",
      "blocker": "fc10ec35cb7b27f9deaef5332eb9f41b8e19751ba8666877b73a7570c0c20b4510b2ac5c0bf589abfa69051874f833ddf294121c16024342dc13d05f3cd9679c",
      "previous_block_hash": "6b9ac010d6db11ebd17a75370bb88ea38ee1b97c729db06bfb73a8cf5378c4da",
      "transaction_status_hash": "c9c377e5192668bc0a367e4a4764f11e7c725ecced1d7b6a492974fab1b6d5bc",
      "transaction_merkle_root": "fe84ad31de4507e1b792e801af16ea8b678c2ffba769b14069a6e3f456d9ab88",
      "size": 518,
      "version": 1,
      "height": 123,
      "timestamp": 1563602590000,
      "miner_address": "vp1qfnvlnrl27eac9ts0kfz2axkptltn7g2zx050ep",
      "transaction_count": 1,
      "chain_status": "mainnet",
      "witness": [
        "663e83f10040edd4c8d5c32c9e70ff60843c33cf97b115f1c7b91e1f0cd186a68f83c21f63f11ab8fc7918cda30552cf08d8460e119d337b23d85c46f2b92306",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "name": "",
      "name_en": "",
      "logo": ""
    }
  },
  "msg": "ok"
}
```

---

#### `tx`

Get the most advanced five transactions
##### Parameters

None
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _transactions_, transaction object:
    - `String` - _tx_id_, transaction id, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _trx_amount_, the amount of transaction.
    - `Integer` - _trx_fee_, the fee of transaction.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `Integer` - _coinbase_, the flag of coinbase transaction.
    - `Boolean` - _is_cross_chain_, the flag of cross chain transaction.
    - `Boolean` - _is_vote_, the flag of vote transaction.
    - `Integer` - _index_id_, index in block.
    - `Array of Object` - _inputs_, object of inputs for the transaction.
      - `String` - _type_,  the type of input action, available option include: 'spend', 'issue', 'coinbase'.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
      - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
      - `String` - _address_, address of account, it only exist when type is 'spend'.
      - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
      - `String` - _input_id_, hash of input action.
      - `Array of String` - _witness_arguments_, witness arguments.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
    - `Array of Object` - _outputs_, object of outputs for the transaction.
      - `String` - _type_, the type of output action, available option include: 'retire', 'control'.
      - `String` - _id_, outputid related to utxo.
      - `Integer` - _position_, position of outputs.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _control_program_, control program of account.
      - `String` - _address_, address of account.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
- `String` - _msg_, error message.

##### Example

Get transactions when the page is 1 and limit is 1:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/tx" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "transactions": [
      {
        "tx_id": "89fde2896a02574f596419e89b4bbe069640f87d617e727d68761823e7d9d71c",
        "timestamp": 1566379624500,
        "block_hash": "8ddc95db0ee6a0e129b7749167f7c5d6777397783d7fc63061212bdadeb1ee01",
        "block_height": 5510984,
        "trx_amount": 0,
        "trx_fee": 0,
        "status_fail": false,
        "is_vote": false,
        "is_cross_chain": false,
        "coinbase": 1,
        "size": 0,
        "chain_status": "mainnet",
        "index_id": 5518860,
        "inputs": [
          {
            "type": "coinbase",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "arbitrary": "0035353130393834",
            "input_id": "06eaa4ee2b94261e9d2d9d8c2884fdf976ac1d65506fb8739b6806d24ac55844",
            "witness_arguments": [],
            "decimals": 8,
            "symbol": "BTM"
          }
        ],
        "outputs": [
          {
            "type": "control",
            "id": "beb7af5ff5c803745317d397fda20d5bd42ebf720580327b78a768bcd51ad0f6",
            "position": 0,
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "control_program": "00142e36e94edbc4138a84e825d1d5390ee185257dcc",
            "address": "vp1q9cmwjnkmcsfc4p8gyhga2wgwuxzj2lwvzrqh3c",
            "decimals": 8,
            "symbol": "BTM"
          }
        ]
      },
      {
        "tx_id": "0a26935b85a882a37b7e7f7f0a6cfc2ceff3b6eb912ca01e79b9098e129c9ab9",
        "timestamp": 1566379624000,
        "block_hash": "60e0072077dac74c513d1066c06c58f77374da1cb39ce7b1d68238ac3712ddbc",
        "block_height": 5510983,
        "trx_amount": 0,
        "trx_fee": 0,
        "status_fail": false,
        "is_vote": false,
        "is_cross_chain": false,
        "coinbase": 1,
        "size": 0,
        "chain_status": "mainnet",
        "index_id": 5518859,
        "inputs": [
          {
            "type": "coinbase",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "arbitrary": "0035353130393833",
            "input_id": "504120b3c6a2d20bc63172e644de150d55e1e397b46a85e9891e32a2e5cbee2f",
            "witness_arguments": [],
            "decimals": 8,
            "symbol": "BTM"
          }
        ],
        "outputs": [
          {
            "type": "control",
            "id": "c1bedae7e13fc0a305eaef15d0f85cc00062d5a4154e2e4ade14b7fb2b636ab4",
            "position": 0,
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "control_program": "00142e36e94edbc4138a84e825d1d5390ee185257dcc",
            "address": "vp1q9cmwjnkmcsfc4p8gyhga2wgwuxzj2lwvzrqh3c",
            "decimals": 8,
            "symbol": "BTM"
          }
        ]
      },
      {
        "tx_id": "368dfb861902c77915ef8fc182b51ade0154fc024a9457e0a6405228b5540ee6",
        "timestamp": 1566379623500,
        "block_hash": "aaea9333b838215100c65818a1fef8729548d6f22d0354b26267a2f496f7089e",
        "block_height": 5510982,
        "trx_amount": 0,
        "trx_fee": 0,
        "status_fail": false,
        "is_vote": false,
        "is_cross_chain": false,
        "coinbase": 1,
        "size": 0,
        "chain_status": "mainnet",
        "index_id": 5518858,
        "inputs": [
          {
            "type": "coinbase",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "arbitrary": "0035353130393832",
            "input_id": "dc01b5190a0a72bbae7240cd311817d71fa5792064312299c57119326e7debf8",
            "witness_arguments": [],
            "decimals": 8,
            "symbol": "BTM"
          }
        ],
        "outputs": [
          {
            "type": "control",
            "id": "5e4543adb84e7590572f886b253fea063de6d3ce6541dda882ce5263c8ec01b0",
            "position": 0,
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "control_program": "00142e36e94edbc4138a84e825d1d5390ee185257dcc",
            "address": "vp1q9cmwjnkmcsfc4p8gyhga2wgwuxzj2lwvzrqh3c",
            "decimals": 8,
            "symbol": "BTM"
          }
        ]
      },
      {
        "tx_id": "c975c3c8aee4274e57d07e65598504cb93cad090323d1f6bf6869ac43ed800ff",
        "timestamp": 1566379623000,
        "block_hash": "0c7fd6c774febacaee167647eb75e1b24d02f8301fef3ebc3f72530ffe5cec71",
        "block_height": 5510981,
        "trx_amount": 0,
        "trx_fee": 0,
        "status_fail": false,
        "is_vote": false,
        "is_cross_chain": false,
        "coinbase": 1,
        "size": 0,
        "chain_status": "mainnet",
        "index_id": 5518857,
        "inputs": [
          {
            "type": "coinbase",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "arbitrary": "0035353130393831",
            "input_id": "97da4b1bfade7ae0139dc6c4a52b576ba6d0e05deca4fd2e8396c5c772c4fefd",
            "witness_arguments": [],
            "decimals": 8,
            "symbol": "BTM"
          }
        ],
        "outputs": [
          {
            "type": "control",
            "id": "801669e897dbf9d60f722860b7253948a69c3a795c5a3c0a3d4a5a7e5c47dc4c",
            "position": 0,
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "control_program": "00142e36e94edbc4138a84e825d1d5390ee185257dcc",
            "address": "vp1q9cmwjnkmcsfc4p8gyhga2wgwuxzj2lwvzrqh3c",
            "decimals": 8,
            "symbol": "BTM"
          }
        ]
      },
      {
        "tx_id": "9af9e071b9b9a23130e481eb669e9b1715e5e43d02a8a5d2762d50a6b5af997f",
        "timestamp": 1566379622500,
        "block_hash": "f40636c01edf732348abe182111e4139d1d5c2d7cc06ddbd76e35db9ade36dca",
        "block_height": 5510980,
        "trx_amount": 0,
        "trx_fee": 0,
        "status_fail": false,
        "is_vote": false,
        "is_cross_chain": false,
        "coinbase": 1,
        "size": 0,
        "chain_status": "mainnet",
        "index_id": 5518856,
        "inputs": [
          {
            "type": "coinbase",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "arbitrary": "0035353130393830",
            "input_id": "7d9d6053c087d20dc8b8aeb8960236c8c24a424198842d911388b5235e424702",
            "witness_arguments": [],
            "decimals": 8,
            "symbol": "BTM"
          }
        ],
        "outputs": [
          {
            "type": "control",
            "id": "90a0052c255bad2be48667f015a3b596db3a28a185093e8e2da9c52d86bbce43",
            "position": 0,
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "control_program": "00142e36e94edbc4138a84e825d1d5390ee185257dcc",
            "address": "vp1q9cmwjnkmcsfc4p8gyhga2wgwuxzj2lwvzrqh3c",
            "decimals": 8,
            "symbol": "BTM"
          }
        ]
      }
    ]
  },
  "msg": "ok"
}
```

---

#### `tx/hash/{hash}`

Get transaction detail by transaction id(hash)
##### Parameters

`Object`:

- `String`- _hash_, tranasction id.
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Object` - _transactions_, transaction object:
    - `String` - _tx_id_, transaction id, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _trx_amount_, the amount of transaction.
    - `Integer` - _trx_fee_, the fee of transaction.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `Integer` - _coinbase_, the flag of coinbase transaction.
    - `Boolean` - _is_cross_chain_, the flag of cross chain transaction.
    - `Boolean` - _is_vote_, the flag of vote transaction.
    - `Integer` - _index_id_, index in block.
    - `Array of Object` - _inputs_, object of inputs for the transaction.
      - `String` - _type_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
      - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
      - `String` - _address_, address of account, it only exist when type is 'spend'.
      - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
      - `String` - _input_id_, hash of input action.
      - `Array of String` - _witness_arguments_, witness arguments.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
    - `Array of Object` - _outputs_, object of outputs for the transaction.
      - `String` - _type_, the type of output action, available option include: 'retire', 'control'.
      - `String` - _id_, outputid related to utxo.
      - `Integer` - _position_, position of outputs.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _control_program_, control program of account.
      - `String` - _address_, address of account.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
- `String` - _msg_, error message.

##### Example

get transaction when hash is 9af9e071b9b9a23130e481eb669e9b1715e5e43d02a8a5d2762d50a6b5af997f:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/tx/hash/9af9e071b9b9a23130e481eb669e9b1715e5e43d02a8a5d2762d50a6b5af997f" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "transaction": {
      "tx_id": "9af9e071b9b9a23130e481eb669e9b1715e5e43d02a8a5d2762d50a6b5af997f",
      "timestamp": 1566379622500,
      "block_hash": "f40636c01edf732348abe182111e4139d1d5c2d7cc06ddbd76e35db9ade36dca",
      "block_height": 5510980,
      "trx_amount": 0,
      "trx_fee": 0,
      "status_fail": false,
      "is_vote": false,
      "is_cross_chain": false,
      "coinbase": 1,
      "size": 0,
      "chain_status": "mainnet",
      "index_id": 5518856,
      "inputs": [
        {
          "type": "coinbase",
          "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "amount": 0,
          "arbitrary": "0035353130393830",
          "input_id": "7d9d6053c087d20dc8b8aeb8960236c8c24a424198842d911388b5235e424702",
          "witness_arguments": [],
          "decimals": 8,
          "symbol": "BTM"
        }
      ],
      "outputs": [
        {
          "type": "control",
          "id": "90a0052c255bad2be48667f015a3b596db3a28a185093e8e2da9c52d86bbce43",
          "position": 0,
          "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "amount": 0,
          "control_program": "00142e36e94edbc4138a84e825d1d5390ee185257dcc",
          "address": "vp1q9cmwjnkmcsfc4p8gyhga2wgwuxzj2lwvzrqh3c",
          "decimals": 8,
          "symbol": "BTM"
        }
      ]
    }
  },
  "msg": "ok"
}
```

---

#### `tx/height/{height}`

Get transactions by block height
##### Parameters

`Object`:

- `Integer`- _height_, block height.
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Object` - _transactions_, transaction object:
    - `String` - _tx_id_, transaction id, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _trx_amount_, the amount of transaction.
    - `Integer` - _trx_fee_, the fee of transaction.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `Integer` - _coinbase_, the flag of coinbase transaction.
    - `Boolean` - _is_cross_chain_, the flag of cross chain transaction.
    - `Boolean` - _is_vote_, the flag of vote transaction.
    - `Integer` - _index_id_, index in block.
    - `Array of Object` - _inputs_, object of inputs for the transaction.
      - `String` - _type_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
      - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
      - `String` - _address_, address of account, it only exist when type is 'spend'.
      - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
      - `String` - _input_id_, hash of input action.
      - `Array of String` - _witness_arguments_, witness arguments.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
    - `Array of Object` - _outputs_, object of outputs for the transaction.
      - `String` - _type_, the type of output action, available option include: 'retire', 'control'.
      - `String` - _id_, outputid related to utxo.
      - `Integer` - _position_, position of outputs.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _control_program_, control program of account.
      - `String` - _address_, address of account.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
- `String` - _msg_, error message.

##### Example

get transactions when height is 13:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/tx/height/13" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "transactions": [
      {
        "tx_id": "657067c03470ca68195cd685ca3946dca46c274ec20246b48e02bf87c1b44fc3",
        "timestamp": 1563602153000,
        "block_hash": "7f56f25687acde9c5484fdad3db8a8382d7d34a61d013b7318f8bdde4e7b6279",
        "block_height": 13,
        "trx_amount": 0,
        "trx_fee": 0,
        "status_fail": false,
        "is_vote": false,
        "is_cross_chain": false,
        "coinbase": 1,
        "size": 0,
        "chain_status": "mainnet",
        "index_id": 13,
        "inputs": [
          {
            "type": "coinbase",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "arbitrary": "003133",
            "input_id": "75a6a7c5ec3f0416486b8f0b5daac0c00ac57c541346b0cbb593708f74d43b1a",
            "witness_arguments": [],
            "decimals": 8,
            "symbol": "BTM"
          }
        ],
        "outputs": [
          {
            "type": "control",
            "id": "8b85a8035af73682d10b9e86f4da7bb5bdd7afa729e894348e7d78985b411dd3",
            "position": 0,
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "control_program": "00144cd9f98feaf67b82ae0fb244ae9ac15fd73f2142",
            "address": "vp1qfnvlnrl27eac9ts0kfz2axkptltn7g2zx050ep",
            "decimals": 8,
            "symbol": "BTM"
          }
        ]
      }
    ]
  },
  "msg": "ok"
}
```

---

#### `txs`

get transactions by pagination
##### Parameters

Optional:

- `Integer`- _page_, page number of data, default 1.
- `Integer`- _limit_, number of data per page, default 20.
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _lists_, transactions object:
    - `String` - _tx_id_, transaction id, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _trx_amount_, the amount of transaction.
    - `Integer` - _trx_fee_, the fee of transaction.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `Integer` - _coinbase_, the flag of coinbase transaction.
    - `Boolean` - _is_cross_chain_, the flag of cross chain transaction.
    - `Boolean` - _is_vote_, the flag of vote transaction.
    - `Integer` - _index_id_, index in block.
    - `Array of Object` - _inputs_, object of inputs for the transaction.
      - `String` - _type_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
      - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
      - `String` - _address_, address of account, it only exist when type is 'spend'.
      - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
      - `String` - _input_id_, hash of input action.
      - `Array of String` - _witness_arguments_, witness arguments.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
    - `Array of Object` - _outputs_, object of outputs for the transaction.
      - `String` - _type_, the type of output action, available option include: 'retire', 'control'.
      - `String` - _id_, outputid related to utxo.
      - `Integer` - _position_, position of outputs.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _control_program_, control program of account.
      - `String` - _address_, address of account.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get transactions when page is 1 and limit is 1:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/txs?page=1&limit=1" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "lists": [
      {
        "tx_id": "8d74b47b21b2c84bec3cd422a19f4ad2115212bccfd37dd0e5c1cc0a75132cf6",
        "timestamp": 1566435344000,
        "block_hash": "c56002b4383febc2eb807deef4294a7954761d8d17236e8996b2945345fb9ff1",
        "block_height": 5622362,
        "trx_amount": 0,
        "trx_fee": 0,
        "status_fail": false,
        "is_vote": false,
        "is_cross_chain": false,
        "coinbase": 1,
        "size": 0,
        "chain_status": "mainnet",
        "index_id": 5631455,
        "inputs": [
          {
            "type": "coinbase",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "arbitrary": "0035363232333632",
            "input_id": "0113c1e03914cf4fdda9b6eb5ab37a019d3591e9c8da4092d50c99422998eb65",
            "witness_arguments": [],
            "decimals": 8,
            "symbol": "BTM"
          }
        ],
        "outputs": [
          {
            "type": "control",
            "id": "38cc18206a4a075ea1fb4ff75ba9986826039336e8efd82c15b27c22f4bc7588",
            "position": 0,
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "control_program": "0014a99f1a09aca63445964664b73c2cb696481460f2",
            "address": "vp1q4x035zdv5c6yt9jxvjmnct9kjeypgc8jp99hug",
            "decimals": 8,
            "symbol": "BTM"
          }
        ]
      }
    ],
    "pagination": {
      "current": 1,
      "limit": 1,
      "total": 5631455,
    }
  },
  "msg": "ok"
}
```

---

#### `vote/txs`

get vote transactions by pagination
##### Parameters

Optional:

- `Integer`- _page_, page number of data, default 1.
- `Integer`- _limit_, number of data per page, default 20.
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _vote_trx_list_, vote transactions object:
    - `String` - _tx_id_, transaction id, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _vote_amount_, the amount of vote.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `String` - _voter_, voter.
    - `String` - _voted_pub_key_, Who is voting for.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get transactions when page is 1 and limit is 1:

```javascript
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/vote/txs?page=1&limit=1" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "pagination": {
      "current": 1,
      "limit": 1,
      "total": 3548,
    },
    "vote_trx_list": [
      {
        "tx_id": "4bd4a3a5b01b3c8ff8fe8fe9b2bc34fbe5c3b868ecf30f162b1c6607d1770ca7",
        "timestamp": 1563607361500,
        "block_hash": "334f9033bedefb4b1ffc8419faeb4907e9494f74936b22b6f61f31517b8e44fd",
        "block_height": 826,
        "status_fail": false,
        "vote_amount": 1000000000000,
        "voter": "vp1qwelekdhu00twq0ehws5d8gh7wvuv2xr7ujqmtv",
        "voted_pub_key": "0f8669abbd3cc0a167156188e428f940088d5b2f36bb3449df71d2bdc5e077814ea3f68628eef279ed435f51ee26cff00f8bd28fabfd500bedb2a9e369f5c825",
        "size": 0,
        "type": "vote",
        "chain_status": "mainnet"
      }
    ]
  },
  "msg": "ok"
}
```

---

#### `cross-chain/txs`

get cross chain transactions by pagination
##### Parameters

Optional:

- `Integer`- _page_, page number of data, default 1.
- `Integer`- _limit_, number of data per page, default 20.
- `Integer`- direction, 0:cross in, 1:cross out
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _crosschain_trx_list_, vote transactions object:
    - `String` - _tx_id, vapor transaction id_, hash of the transaction.
    - `String` - _main_chain_tx_id_, bytom transaction id, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _cross_amount_, the amount of cross.
    - `Integer` - _trx_fee_, transaction fee.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `String` - _from_, from address.
    - `String` - _to_, to address.
    - `Boolean` - _cross_in_, true: from bytom to vapor; false: from vapor to bytom.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get transactions when page is 1,limit is 1:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/cross-chain/txs?page=1&limit=1" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "crosschain_trx_list": [
      {
        "tx_id": "d66a87bd5606ce796d92dcf22313b9eeb7b6e1bc11c714de93b9165a7431bfee",
        "main_chain_tx_id": "",
        "timestamp": 1566433284000,
        "block_hash": "42c1666adc64bac39327b001a77423a84ea62ae2c8134e652c74b0186088b85e",
        "block_height": 5618242,
        "trx_fee": 2245000,
        "cross_amount": 2000000000,
        "from": "vp1qg8mhs5x6dfurfts35cd5jvrccmlk5z595y4lzh",
        "to": "bm1qg8mhs5x6dfurfts35cd5jvrccmlk5z59l99z8p",
        "size": 0,
        "chain_status": "mainnet",
        "cross_in": false,
        "status_fail": false
      }
    ],
    "fed_bytom_addr": "-",
    "pagination": {
      "current": 1,
      "limit": 1,
      "total": 1583,
    }
  },
  "msg": "ok"
}
```

---

#### `cross-chain/all/txs`

get multi-asset cross-chain transactions by pagination
##### Parameters

Optional:

- `Integer`- _page_, page number of data, default 1.
- `Integer`- _limit_, number of data per page, default 20.
- `Integer`- direction, 0:cross in, 1:cross out
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _crosschain_trx_list_, vote transactions object:
    - `String` - source_tx_hash_, source transaction id_, hash of the transaction.
    - `String` - dest_tx_hash, destination transaction id, hash of the transaction.
    - `Integer` - decimals, asset decimals.
    - `String` - symbol, asset decimals.
    - `String` - asset_id, asset id.
    - `Integer` - amount, the amount of cross.
    - `Integer` - source_timestamp, source transatction timestamp.
    - `Integer` - dest_timestamp, destination transaction timestamp.
    - `String` - from_address, from address.
    - `String` - to_address, to address.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get transactions when page is 1 and limit is 1 and direction is 1:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/cross-chain/all/txs?page=1&limit=3&direction=1" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "crosschain_trx_list": [
      {
        "source_tx_hash": "88cc227a34a639c4280b76181a265d4c9a8afcb30a2e4d7e6a97a4c3f1d6e377",
        "dest_tx_hash": "",
        "amount": 2200000000,
        "from_address": "vp1q8kw95s4mz69hsy3xs443h2lt9hq320806074mf",
        "to_address": "bm1q8kw95s4mz69hsy3xs443h2lt9hq320803wwg7l",
        "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "symbol": "BTM",
        "source_timestamp": 1568003501,
        "dest_timestamp": 0,
        "decimals": 8
      },
      {
        "source_tx_hash": "7ac14523d379803de13930a1c5ee3cc6733dd918ef5bdff8ffa1c268f627c974",
        "dest_tx_hash": "",
        "amount": 3500000000,
        "from_address": "vp1qhqf8akwk57htmagx93ne99sunx9psz2sjfsap7",
        "to_address": "bm1qhqf8akwk57htmagx93ne99sunx9psz2segqqyg",
        "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "symbol": "BTM",
        "source_timestamp": 1568000991,
        "dest_timestamp": 0,
        "decimals": 8
      },
      {
        "source_tx_hash": "0fc94cbd68709ada1fd2b1b6451da80f4641261f6353de0659a6615ca8dcbdfc",
        "dest_tx_hash": "",
        "amount": 1395300000000,
        "from_address": "vp1qp0kx26u2lj87ppdrzjlamqcuqvzzkg5vfwss84",
        "to_address": "bm1qp0kx26u2lj87ppdrzjlamqcuqvzzkg5vz0qdzr",
        "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "symbol": "BTM",
        "source_timestamp": 1567997769,
        "dest_timestamp": 0,
        "decimals": 8
      }
    ],
    "fed_bytom_addr": "-",
    "pagination": {
      "current": 1,
      "limit": 3,
      "total": 420,
    }
  },
  "msg": "ok"
}
```

---

#### `address/{address_id}`

Get address which asset balance and received asset amount and sent asset amount.
##### Parameters

`Object`:

- `String`- _address_id_, address
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _address_, address list.
    - `String` - _address_id_, address.
    - `String` - _asset_id_, asset id.
    - `String` - _asset_name_, asset name.
    - `Integer` - _decimals_, asset decimals.
    - `Integer` - _balance_, address balance.
    - `Integer` - _receive_, address reveived asset total amount.
    - `Integer` - _sent_, address sent asset total amount.
    - `Integer` - _timestamp_, first time create address.
- `String` - _msg_, error message.

##### Example

get address info when address_id is vp1qfk9kgj6mt9ga4wfnz7zqq6zkys9t84lj5t53x5:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/address/vp1qfk9kgj6mt9ga4wfnz7zqq6zkys9t84lj5t53x5" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "address": [
      {
        "address_id": "vp1qfk9kgj6mt9ga4wfnz7zqq6zkys9t84lj5t53x5",
        "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "asset_name": "BTM",
        "decimals": 8,
        "balance": 11730661615088,
        "receive": 23461428747242,
        "sent": 11730767132154,
        "timestamp": 1563946177000
      }
    ]
  },
  "msg": "ok"
}
```

---

#### `address/{address_id}/cross-chain-tx`

Get address that all cross-chain transactions
##### Parameters

`Object`:

- `String`- _addres_id_, address

Optional:

- `Integer`- _page_, page number of data, default 1.
- `Integer`- _limit_, number of data per page, default 20.
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _transactions_, vote transactions object:
    - `String` - _tx_id_, vapor transaction id, hash of the transaction.
    - `String` - _main_chain_tx_id_, bytom transaction id, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _cross_amount_, the amount of cross.
    - `Integer` - _trx_fee_, transaction fee.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `String` - _from_, from address.
    - `String` - _to_, to address.
    - `Boolean` - _cross_in_, true: from bytom to vapor; false: from vapor to bytom.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

Get address's cross-chain transaction info when  address_id is vp1qfk9kgj6mt9ga4wfnz7zqq6zkys9t84lj5t53x5:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/address/vp1qfk9kgj6mt9ga4wfnz7zqq6zkys9t84lj5t53x5/cross-chain-tx" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "pagination": {
      "current": 1,
      "limit": 20,
      "total": 1,
    },
    "transactions": [
      {
        "tx_id": "c9ea098ac81a463c100d08bb37ffa8f1a5600b600067954053bd5b5eac0bab48",
        "main_chain_tx_id": "246c05f2461840e637d65dd7e26b7a48fabf9fd3cd0a2e8d946440b714dc9b6e",
        "timestamp": 1563946177000,
        "block_hash": "fa8f61899b88e4e11f17cc9277b90c3bffdc16dec451c714d114cd471b1d8c36",
        "block_height": 646115,
        "trx_fee": 0,
        "cross_amount": 11610900000000,
        "from": "bm1qfk9kgj6mt9ga4wfnz7zqq6zkys9t84ljl2yvrz",
        "to": "vp1qfk9kgj6mt9ga4wfnz7zqq6zkys9t84lj5t53x5",
        "size": 0,
        "chain_status": "mainnet",
        "cross_in": true,
        "status_fail": false
      }
    ]
  },
  "msg": "ok"
}
```

---

#### `address/{address_id}/trx/{asset_id}`

Get address all asset transactions
##### Parameters

`Object`:

- `String`- _addres_id_, address.
- `String`- _asset_id_, asset id.

Optional:

- `Integer`- _page_, page number of data, default 1.
- `Integer`- _limit_, number of data per page, default 20.
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _transactions_, vote transactions object:
    - `String` - _tx_id, transaction id_, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _trx_amount_, the amount of transaction.
    - `Integer` - _trx_fee_, the fee of transaction.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `Integer` - _coinbase_, the flag of coinbase transaction.
    - `Boolean` - _is_cross_chain_, the flag of cross chain transaction.
    - `Boolean` - _is_vote_, the flag of vote transaction.
    - `Integer` - _index_id_, index in block.
    - `Array of Object` - _inputs_, object of inputs for the transaction.
      - `String` - _type_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `Object` - _issuance_program_, issuance program, it only exist when type is 'issue'.
      - `Object` - _control_program_, control program of account, it only exist when type is 'spend'.
      - `String` - _address_, address of account, it only exist when type is 'spend'.
      - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
      - `String` - _input_id_, hash of input action.
      - `Array of String` - _witness_arguments_, witness arguments.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
    - `Array of Object` - _outputs_, object of outputs for the transaction.
      - `String` - _type_, the type of output action, available option include: 'retire', 'control'.
      - `String` - _id_, outputid related to utxo.
      - `Integer` - _position_, position of outputs.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _control_program_, control program of account.
      - `String` - _address_, address of account.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get address's asset transaction info when address_id is vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff and asset_id is ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff and page is 1 and limit is 1:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/address/vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff/trx/ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff?page=1&limit=1" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "pagination": {
      "current": 1,
      "limit": 1,
      "total": 77,
    },
    "transactions": [
      {
        "tx_id": "559fcb5800becda0b962f17aabe9e470926e02ceb631eafd859b08ca8cb9a12d",
        "timestamp": 1566392309500,
        "block_hash": "01883c5ec1d19f0cff85ab251cf359381ab3ba15bd6461b2ebd30a4d9d447f26",
        "block_height": 5536311,
        "trx_amount": 4993200000000,
        "trx_fee": 4490000,
        "status_fail": false,
        "is_vote": false,
        "is_cross_chain": true,
        "coinbase": 0,
        "size": 0,
        "chain_status": "mainnet",
        "index_id": 5545299,
        "inputs": [
          {
            "type": "spend",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 3990198653000,
            "control_program": "0014db8041d56dc2956103a85344330cbaf365de9871",
            "address": "vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff",
            "spent_output_id": "c17d49cc0806f4edcaadf8573ac53b347ae2dc2372ac398da87823eacd0e52a1",
            "input_id": "c5ad4c49ef8181edf7a02bdbc7fa03dd7a8034464a6acef318402b779351e634",
            "witness_arguments": [
              "4310bfd2a78c586142e391499eef8de8fe07bd00db4efa1abc26c1d8acecaeea2d925182ef9e57bcd121816e5ffd68032f180d23c361fbc567a443f5b1086a07",
              "7e046ece232ced9211bf4261c98579a4fcb66778e3e1279682d3a676924cb9d5"
            ],
            "decimals": 8,
            "symbol": "BTM"
          },
          {
            "type": "spend",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 999999551000,
            "control_program": "0014db8041d56dc2956103a85344330cbaf365de9871",
            "address": "vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff",
            "spent_output_id": "31d56663755d38f7006799bbe958b5f01308390ae4b4622663909b5c44206ef2",
            "input_id": "621b5c8e56d88c9646c3d2b121308268031eefddbabe77e48e1200ec36979cdd",
            "witness_arguments": [
              "757a1adced039b93547fe76fde6101a2ace0d0f174f214e781a6f2bc85b174db995d059e44f5ac5cbc2933a8ed218da45ff77b2f5e55912a7a95914b7d467d09",
              "7e046ece232ced9211bf4261c98579a4fcb66778e3e1279682d3a676924cb9d5"
            ],
            "decimals": 8,
            "symbol": "BTM"
          },
          {
            "type": "spend",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 631025134,
            "control_program": "0014db8041d56dc2956103a85344330cbaf365de9871",
            "address": "vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff",
            "spent_output_id": "bbe7e659b5faa79ea76929f0fdd00802c1c1bd719a7d25e561491fb39f57a0a8",
            "input_id": "bb3eb0853efa5050a06d77017c8ee7c2ebcbf306155bb9015f81aea19afda009",
            "witness_arguments": [
              "ccbd678c4826c0f976f9a974c4cc71459483a71562143862209f83b335491967b7075b9a64c315866f374957a3426b259e9c205a461538da3fb6571770b14607",
              "7e046ece232ced9211bf4261c98579a4fcb66778e3e1279682d3a676924cb9d5"
            ],
            "decimals": 8,
            "symbol": "BTM"
          },
          {
            "type": "spend",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 630816018,
            "control_program": "0014db8041d56dc2956103a85344330cbaf365de9871",
            "address": "vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff",
            "spent_output_id": "f1f1657b4b210f98e3837032ee492d4e5b10a9c0c25c3fa77b0f10e13b56c936",
            "input_id": "f659a7e147bac7f3b2928b61bc19b4e8b11c490363bdc2c9c3d4b651a485d3e8",
            "witness_arguments": [
              "2a57cf4abe640384c84fb9a3c3e18769f9e7aee917fcecaab3b0524244a9b703e33b56157dc9e70ee669f37957189455e09153635dfe07c9f0c830502fae1e09",
              "7e046ece232ced9211bf4261c98579a4fcb66778e3e1279682d3a676924cb9d5"
            ],
            "decimals": 8,
            "symbol": "BTM"
          },
          {
            "type": "spend",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 630542993,
            "control_program": "0014db8041d56dc2956103a85344330cbaf365de9871",
            "address": "vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff",
            "spent_output_id": "7d40293aed3d887a6eb327d792770c7d37e7165a7a4e70ff0563420e36f66708",
            "input_id": "ce76c6a730dff87fa33f28b7666cefa770dc68a0af54408de7f9238ee41bf245",
            "witness_arguments": [
              "3eaabed617ce4718ec39645c0bf2a560bd1d6f9cf74b833ef28e02829b6253eab424f9dcd55c379d81c869e3b7d5c4314b5c607c4017576d272b538c7b630704",
              "7e046ece232ced9211bf4261c98579a4fcb66778e3e1279682d3a676924cb9d5"
            ],
            "decimals": 8,
            "symbol": "BTM"
          }
        ],
        "outputs": [
          {
            "type": "cross_chain_out",
            "id": "f700fddae4e5e5dcf755955ce04b0b8a5898dd9874f7f87f3c5a05067150bfff",
            "position": 0,
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 4993200000000,
            "control_program": "0014db8041d56dc2956103a85344330cbaf365de9871",
            "address": "bm1qmwqyr4tdc22kzqag2dzrxr967djaaxr3atl9vl",
            "decimals": 8,
            "symbol": "BTM"
          },
          {
            "type": "control",
            "id": "a99cb12b6535d27c105f7f289e7e79fc554e3049401f70c7aeb077782d5f47a0",
            "position": 1,
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 21344157,
            "control_program": "0014db8041d56dc2956103a85344330cbaf365de9871",
            "address": "vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff",
            "decimals": 8,
            "symbol": "BTM"
          }
        ]
      }
    ]
  },
  "msg": "ok"
}
```

---

#### `address/{address_id}/vote-tx`

Get address all vote transactions

##### Parameters

`Object`:

- `String`- _addres_id_, address.

Optional:

- `Integer`- _page_, page number of data, default 1.
- `Integer`- _limit_, number of data per page, default 20.

##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _transactions_, vote transactions object:
    - `String` - _tx_id_, transaction id, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _vote_amount_, the amount of vote.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `String` - _voter_, voter.
    - `String` - _voted_pub_key_, Who is voting for.
    - `String` - _type_, vote or veto.
    - `Integer` - _timestamp_, transaction timestamp.
    - `String` - _name_en_, the english name is voting for.
    - `String` - _name_, the name is voting for.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get address's asset transaction info when  address_id is vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff and page is 1 and limit is 1:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/address/vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff/vote-tx?page=1&limit=1" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "pagination": {
      "current": 1,
      "limit": 1,
      "total": 13,
    },
    "transactions": [
      {
        "tx_id": "a4442e2dd653052754844369703b89c8d8de78cb1e31ec8bf997b60898a5ae73",
        "timestamp": 1566391821500,
        "block_hash": "7a05a42a0c782e5c5fe1c25ecd89c0dead08abf41c94649e527bb36f072c9da7",
        "block_height": 5535335,
        "status_fail": false,
        "vote_amount": 1000000000000,
        "voter": "vp1qmwqyr4tdc22kzqag2dzrxr967djaaxr3k20cff",
        "voted_pub_key": "ff103f4c001098cad409b1b4510df7a5f808ad6759ec4588626498555b252733d80a8190b387b554c638b20e700048423851d5c3c0012bb43ac0b3736e5abb74",
        "size": 0,
        "type": "veto",
        "chain_status": "mainnet",
        "name": "三一牛币圈",
        "name_en": "三一牛币圈"
      }
    ]
  },
  "msg": "ok"
}
```

---

#### `addresses`

Get address all asset balance and received asset amount and sent asset amount.

##### Parameters

`Object`:

- `String`- _addres_id_, address.

Optional:

- `Integer`- _page_, page number of data, default 1.
- `Integer`- _limit_, number of data per page, default 20.

##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _lists_, address object:
    - `String` - _address_id_, address id.
    - `String` - _asset_id_list_, first asset id.
    - `String` - _asset_name_list_, first asset name.
    - `Integer` - _asset_decimals_list_, first asset decimals.
    - `Integer` - _asset_balance_list_, asset address first asset balance.
    - `Integer` - _asset_receive_list_, address reveived first asset total amount.
    - `Integer` - _asset_sent_list_, address sent first asset total amount.
    - `Integer` - _timestamp_, first time create address.
    - `Array of Object` - _asset_class_, asset list.
      - `Integer` - _asset_id_, asset id.
      - `String` - _asset_name_, asset name.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get address info when page is 1 and limit is 2:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/addresses?page=1&limit=2" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "lists": [
      {
        "address_id": "vp1qwy8kny9npdatlkxhvwtr62dhclhlhak3j5nca0",
        "asset_balance_list": 705224512829,
        "asset_class": [
          {
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "asset_name": "BTM"
          }
        ],
        "asset_decimals_list": 8,
        "asset_id_list": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "asset_name_list": "BTM",
        "asset_receive_list": 705224512829,
        "asset_sent_list": 0
      },
      {
        "address_id": "vp1q3yjvcnektk98de30w3l6xv5x2yeg9mwxglr3ez",
        "asset_balance_list": 608741676,
        "asset_class": [
          {
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "asset_name": "BTM"
          }
        ],
        "asset_decimals_list": 8,
        "asset_id_list": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "asset_name_list": "BTM",
        "asset_receive_list": 608741676,
        "asset_sent_list": 0
      }
    ],
    "pagination": {
      "current": 1,
      "limit": 2,
      "total": 2430,
    }
  },
  "msg": "ok"
}
```

---

#### `asset/{asset_id}`

Get asset all amount and holders and transfers in vapor network.
##### Parameters

`Object`:

- `String`- _asset_id_, asset id.
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Integer` - _vapor_amount_, asset circulation totalcoin in vapor network.
  - `Integer` - _vapor_holders_, asset holders in vapor network.
  - `Integer` - _vapor_transfers_, asset transaction count in vapor network.
- `String` - _msg_, error message.

##### Example

get asset all amount,holders,transders in vapor network when  asset_id is  ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/asset/ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "vapor_amount": 16201042913883400,
    "vapor_holders": 2432,
    "vapor_transfers": 5637676
  },
  "msg": "ok"
}
```

---

#### `address/{address_id}/trx`

Get address all cross chain transactions
##### Parameters

`Object`:

- `String`- _addres_id_, address

Optional:

- `Integer`- _page_, page number of data, default 1.
- `Integer`- _limit_, number of data per page, default 20.
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _transactions_, vote transactions object:
    - `String` - _tx_id, transaction id_, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _trx_amount_, the amount of transaction.
    - `Integer` - _trx_fee_, the fee of transaction.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `Integer` - _coinbase_, the flag of coinbase transaction.
    - `Boolean` - _is_cross_chain_, the flag of cross chain transaction.
    - `Boolean` - _is_vote_, the flag of vote transaction.
    - `Integer` - _index_id_, index in block.
    - `Array of Object` - _inputs_, object of inputs for the transaction.
      - `String` - _type_, the type of input action, available option include: 'spend', 'issue', 'coinbase'.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `Object` - _issuance_program_, issuance program*, it only exist when type is 'issue'.
      - `Object` - _control_program_, control program of account*, it only exist when type is 'spend'.
      - `String` - _address_, address of account*, it only exist when type is 'spend'.
      - `String` - _spent_output_id_, the front of outputID to be spent in this input, it only exist when type is 'spend'.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _arbitrary_, arbitrary infomation can be set by miner, it only exist when type is 'coinbase'.
      - `String` - _input_id_, hash of input action.
      - `Array of String` - _witness_arguments_, witness arguments.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
    - `Array of Object` - _outputs_, object of outputs for the transaction.
      - `String` - _type_, the type of output action, available option include: 'retire', 'control'.
      - `String` - _id_, outputid related to utxo.
      - `Integer` - _position_, position of outputs.
      - `String` - _asset_id_, asset id.
      - `String` - _asset_alias_, name of asset.
      - `Object` - _asset_definition_, definition of asset(json object).
      - `Integer` - _amount_, amount of asset.
      - `String` - _account_id_, account id.
      - `String` - _account_alias_, name of account.
      - `Object` - _control_program_, control program of account.
      - `String` - _address_, address of account.
      - `String` - _asset_name_, asset name.
      - `String` - _asset_decimals_, decimal of asset.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get asset transaction info when asset_id si ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff and page is 1 and limit is 1:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/asset/ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff/trxs?page=1&limit=1" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "pagination": {
      "current": 1,
      "limit": 1,
      "total": 5647807,
    },
    "transactions": [
      {
        "tx_id": "ddfbaa0e9b82e05c600b357e3181efddbd17644b7274869ae800b3a5b1b62d59",
        "timestamp": 1566443519000,
        "block_hash": "dda3d29c16e422b676e315aa5eba7e9a034ed316b26fcc2e14eb4a45121f4e5a",
        "block_height": 5638705,
        "trx_amount": 0,
        "trx_fee": 0,
        "status_fail": false,
        "is_vote": false,
        "is_cross_chain": false,
        "coinbase": 1,
        "size": 0,
        "chain_status": "mainnet",
        "index_id": 5647807,
        "inputs": [
          {
            "type": "coinbase",
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "arbitrary": "0035363338373035",
            "input_id": "e4a2034251750855d2f5418afc6b1ca3bdddd89f4ec9a849f737b614a345056a",
            "witness_arguments": [],
            "decimals": 8,
            "symbol": "BTM"
          }
        ],
        "outputs": [
          {
            "type": "control",
            "id": "b1c4351147016c84576a022926b507efafcf33918d357f02f0f50c1c7f53539e",
            "position": 0,
            "asset_id": "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "amount": 0,
            "control_program": "0014b5dadc3e717d9892bdb0594a5933863df16c14c4",
            "address": "vp1qkhddc0n30kvf90dst999jvux8hckc9xyxwujna",
            "decimals": 8,
            "symbol": "BTM"
          }
        ]
      }
    ]
  },
  "msg": "ok"
}
```

---

#### `stat`

Get address count, asset count, top height, max transactions per second, transaction daily count and total count
##### Parameters

None
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Integer` - _address_count_, the sum of address number.
  - `Integer` - _asset_count_, the sum of asset number.
  - `String` - _height_, top height.
  - `Integer` - _max_tps_, max tps.
  - `Integer` - _trx_daily_count_, the sum of transaction number(one day).
  - `Integer` - _trx_total_count_, the sum of all transaction number.
- `String` - _msg_, error message.
##### Example

get stat:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/stat" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "address_count": 2432,
    "asset_count": 125,
    "height": 5639154,
    "max_tps": 8513,
    "trx_daily_count": 174033,
    "trx_total_count": 5648262
  },
  "msg": "ok"
}
```

---

#### `stat/trx/daily`

Get daily trading volume
##### Parameters

Optional:

- `Integer`- _days_, number of day.
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _days_trx_count_, transaction count object.
    - `Integer` - _date_time_, statistic time.
    - `Integer` - _trx_count_, that day's transaction count.
- `String` - _msg_, error message.

##### Example

get history transaction count:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/stat/trx/daily?days=12" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "days_trx_count": [
      {
        "date_time": 1565193600000,
        "trx_count": 172888
      },
      {
        "date_time": 1565280000000,
        "trx_count": 172906
      },
      {
        "date_time": 1565366400000,
        "trx_count": 173045
      },
      {
        "date_time": 1565452800000,
        "trx_count": 173044
      },
      {
        "date_time": 1565539200000,
        "trx_count": 172779
      },
      {
        "date_time": 1565625600000,
        "trx_count": 172453
      },
      {
        "date_time": 1565712000000,
        "trx_count": 172918
      },
      {
        "date_time": 1565798400000,
        "trx_count": 172914
      },
      {
        "date_time": 1565884800000,
        "trx_count": 172947
      },
      {
        "date_time": 1565971200000,
        "trx_count": 172919
      },
      {
        "date_time": 1566057600000,
        "trx_count": 172910
      },
      {
        "date_time": 1566144000000,
        "trx_count": 173327
      },
      {
        "date_time": 1566230400000,
        "trx_count": 172997
      },
      {
        "date_time": 1566316800000,
        "trx_count": 174009
      }
    ]
  },
  "msg": "ok"
}
```

---

#### `en/node/{name}`.   `zn/node/{name}`.

Get super node info by name

##### Parameters

`Object`:

- `String`- _name_, address

Optional:

- `Integer`- _page_, page number of data, default 1.
- `Integer`- _limit_, number of data per page, default 20.

##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _node_infos_, super node object:
    - `String` - _uuid_, node uuid.
    - `String` - _name_, node name.
    - `String` - _location_, node location.
    - `String` - _name_en_, node english name.
    - `String` - _location_en_, node english location.
    - `String` - _homepage_, node homepage.
    - `String` - _homepage_en_, node english homepage
    - `String` - _pub_key_, node public key.
    - `String` - _introduce_, node introduce.
    - `String` - _introduce_en_, node english introduce.
    - `String` - _node_type_en_, node type english introduce.
    - `String` - _node_type_, node type(Exchange,Wallet,Investment institution, Investor, DApp development team, KOL, Web portal, Marketing company, Development team, BP/miners, Blockchain education institutions, Others).
    - `String` - _reward_, distribution ratio.
    - `String` - _expected_return_, vote expected return.
    - `String` - _logo_, node log url.
    - `String` - _social_list_, contact information.
    - `String` - _social_list_en_, english contact information.
    - `String` - _declaration_, election manifesto.
    - `String` - _declaration_en_, english election manifesto.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get super node which name include ma when name is ma:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/en/node/ma" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "node_infos": [
      {
        "uuid": "4817e7c299d5a6e5bf72b7f54e08ebce",
        "name": "MatPool",
        "location": "中国",
        "name_en": "MatPool",
        "location_en": "China",
        "homepage": "https://matpool.io/",
        "homepage_en": "",
        "pub_key": "0f8669abbd3cc0a167156188e428f940088d5b2f36bb3449df71d2bdc5e077814ea3f68628eef279ed435f51ee26cff00f8bd28fabfd500bedb2a9e369f5c825",
        "introduce": "MatPool是国内领先的区块链信息服务商巴比特旗下矿池产品，前 Facebook 早期工程师金磊担任项目负责兼 CTO，巴比特合伙人李宗乘出任首席运营官 COO，这是一个成长中的矿池，其背后团队由区块链、人工智能资深开发人员组成。矿池不仅支持POW、PoS、DPoS、PBFT等共识机制主链挖矿，还将提供AI云算力服务业务。",
        "introduce_en": "MatPool是国内领先的区块链信息服务商巴比特旗下矿池产品，前 Facebook 早期工程师金磊担任项目负责兼 CTO，巴比特合伙人李宗乘出任首席运营官 COO，这是一个成长中的矿池，其背后团队由区块链、人工智能资深开发人员组成。矿池不仅支持POW、PoS、DPoS、PBFT等共识机制主链挖矿，还将提供AI云算力服务业务。",
        "node_type": "区块生产者/矿工",
        "node_type_en": "BP/miners",
        "reward": "90%",
        "expected_return": "4.7560%",
        "logo": "https://api.bystack.com/supernode/v1/uploads/1562316066.53449061_14.png",
        "social_list": "微信*xiaxxxxxxxxxxxx\nQQ群*https://jq.qq.com/?_wv=1027&k=5f1IVQ9\n链节点*https://www.chainnode.com/user/572758",
        "social_list_en": "WeChat*xiaxxxxxxxxxxxx\nQQ Group*https://jq.qq.com/?_wv=1027&k=5f1IVQ9\nChainNode*https://www.chainnode.com/user/572758",
        "declaration": "MatPool作为巴比特旗下矿池，第一，MatPool拥有多种媒体宣发途径，会通过巴比特、链节点等平台为Bystack提供流量支持；第二，MatPool将作为社区 KOL 参与社区节点共建计划，为社群成员普及Btm及Bystack发展前景，促进社群成员对Bystack的深刻认识；第三MatPool作为作为一个多币种的矿池平台，支持更多PoS、DPoS、PBFT等依托权益证明共识机制的主链，因此能够促进Bystack与其他优质项目各方面的合作，包括技术，应用和社群等各方面的交流合作，促进Bystack的良性发展。MatPool希望成为维护Bystack区块链网络的共识节点，助力Bystack的大规模商业区块链应用落地",
        "declaration_en": "MatPool作为巴比特旗下矿池，第一，MatPool拥有多种媒体宣发途径，会通过巴比特、链节点等平台为Bystack提供流量支持；第二，MatPool将作为社区 KOL 参与社区节点共建计划，为社群成员普及Btm及Bystack发展前景，促进社群成员对Bystack的深刻认识；第三MatPool作为作为一个多币种的矿池平台，支持更多PoS、DPoS、PBFT等依托权益证明共识机制的主链，因此能够促进Bystack与其他优质项目各方面的合作，包括技术，应用和社群等各方面的交流合作，促进Bystack的良性发展。MatPool希望成为维护Bystack区块链网络的共识节点，助力Bystack的大规模商业区块链应用落地"
      },
      {
        "uuid": "53e311d1a75213d9d6097c1c1d8f11ae",
        "name": "麦子钱包",
        "location": "新加坡",
        "name_en": "MathWallet",
        "location_en": "Singapore",
        "homepage": "http://mathwallet.org",
        "homepage_en": "",
        "pub_key": "c3da521c8f0d7dd5cfb28def43c8360c81d8f4b24bf6dac20bb653654957262df6bf6875a1350effada299939a8a74574399cac8b7ad0bbffde2f68a7982a59f",
        "introduce": "麦子钱包是一个多平台的跨链钱包，产品包括 APP 钱包、网页钱包、浏览器插件钱包、硬件钱包等，且支持18个公链生态，支持去中心化的跨链交易，并构建了一个多链的 DApp 生态系统。麦子也是多个公链社区的POS节点。",
        "introduce_en": "麦子钱包是一个多平台的跨链钱包，产品包括 APP 钱包、网页钱包、浏览器插件钱包、硬件钱包等，且支持18个公链生态，支持去中心化的跨链交易，并构建了一个多链的 DApp 生态系统。麦子也是多个公链社区的POS节点。",
        "node_type": "钱包",
        "node_type_en": "Wallet",
        "reward": "60%",
        "expected_return": "5.3859%",
        "logo": "https://api.bystack.com/supernode/v1/uploads/1562315854.84656481_2.png",
        "social_list": "微信*mathwallet666\nTelegram*https://t.me/mathwallet",
        "social_list_en": "WeChat*mathwallet666\nTelegram*https://t.me/mathwallet",
        "declaration": "2019/6 - 参与测试网络 2019/7 - 社群宣传、并参与正式网络 2019/8 - 支持BTM钱包，麦子钱包与您一起共建互信网络。",
        "declaration_en": "2019/6 - 参与测试网络 2019/7 - 社群宣传、并参与正式网络 2019/8 - 支持BTM钱包，麦子钱包与您一起共建互信网络。"
      }
    ],
    "pagination": {
      "current": 1,
      "limit": 20,
      "total": 2,
    }
  },
  "msg": "ok"
}
```

---

#### `node/{pub_key}`

Get super node info by public key

##### Parameters

`Object`:

- `String`- _pub_key_, node's public

Optional:

- `Integer`- _page_, page number of node's vote, default 1.
- `Integer`- _limit_, number of node's vote per page, default 20.

##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Integer` - _blocker_count_, the height of the block when calculate blocker reward.
  - `Integer` - _blocker_reward_, blocker reward in 'blocker_count' height.
  - `Integer` - _node_pay_amount_, payment amount for voter.
  - `Integer` - _staking_calc_time_, the time of the node when calculate staking reward.
  - `Integer` - _staking_reward_, staking reward on 'staking_calc_time'.
  - `Integer` - _vote_total_count_, total votes for all addresses.
  - `Object` - _super_node_detail_, super node object:
    - `String` - _uuid_, node uuid.
    - `String` - _name_, node name.
    - `String` - _location_, node location.
    - `String` - _name_en_, node english name.
    - `String` - _location_en_, node english location.
    - `String` - _homepage_, node homepage.
    - `String` - _homepage_en_, node english homepage
    - `String` - _pub_key_, node public key.
    - `String` - _introduce_, node introduce.
    - `String` - _introduce_en_, node english introduce.
    - `String` - _node_type_en_, node type english introduce.
    - `String` - _node_type_, node type(Exchange,Wallet,Investment institution, Investor, DApp development team, KOL, Web portal, Marketing company, Development team, BP/miners, Blockchain education institutions, Others).
    - `String` - _reward_, distribution ratio.
    - `String` - _expected_return_, vote expected return.
    - `String` - _logo_, node log url.
    - `String` - _social_list_, contact information.
    - `String` - _social_list_en_, english contact information.
    - `String` - _declaration_, election manifesto.
    - `String` - _declaration_en_, english election manifesto.
  - `Object` - _super_node_, object of super node's data which on chain.
    - `String` - _name_, node name.
    - `String` - _location_, node location.
    - `String` - _name_en_, node english name.
    - `String` - _location_en_, node english location.
    - `String` - _address_, node address.
    - `String` - _pub_key_, node public key.
    - `Integer` - _first_timestamp_, first time of producting block.
    - `Integer` - _last_timestamp_, latest time of producting block.
    - `Integer` - _vote_count_, number of votes.
    - `Integer` - _product_blocks_, numbers of prodcuting block.
    - `String` - _ratio_, vote real return.
    - `Integer` - _last_pay_time_, last payment time.
  - `Array of Object` - _vote_list_, vote transactions object:
    - `String` - _tx_id, transaction id_, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _vote_amount_, the amount of vote.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `String` - _voter_, voter.
    - `String` - _voted_pub_key_, Who is voting for.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get super node when  pub_key is 1bec3a35da038ec7a76c40986e80b5af2dcef60341970e3fc58b4db0797bd4ca9b2cbf3d7ab820832e22a80b5b86ae1427f7f706a7780089958b2862e7bc0842:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/node/1bec3a35da038ec7a76c40986e80b5af2dcef60341970e3fc58b4db0797bd4ca9b2cbf3d7ab820832e22a80b5b86ae1427f7f706a7780089958b2862e7bc0842?page=1&limit=1" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "blocker_count": 565626,
    "blocker_reward": 5380765069188,
    "node_pay_amount": 2877072094158,
    "pagination": {
      "current": 1,
      "limit": 1,
      "total": 205,
    },
    "staking_calc_time": 0,
    "staking_reward": 0,
    "super_node": {
      "name": "火币矿池",
      "location": "中国",
      "name_en": "Huobi Pool",
      "location_en": "China",
      "address": "vp1q4x035zdv5c6yt9jxvjmnct9kjeypgc8jp99hug",
      "pub_key": "1bec3a35da038ec7a76c40986e80b5af2dcef60341970e3fc58b4db0797bd4ca9b2cbf3d7ab820832e22a80b5b86ae1427f7f706a7780089958b2862e7bc0842",
      "first_timestamp": 1563661126500,
      "last_timestamp": 1566524121500,
      "vote_count": 2162497886200000,
      "product_blocks": 572545,
      "ratio": "4.7367",
      "last_pay_time": 1566436625000
    },
    "super_node_detail": {
      "uuid": "3e50e6a0ac90a441a660c1383a2947b0",
      "name": "火币矿池",
      "location": "中国",
      "name_en": "Huobi Pool",
      "location_en": "China",
      "homepage": "https://www.huobipool.com",
      "homepage_en": "",
      "pub_key": "1bec3a35da038ec7a76c40986e80b5af2dcef60341970e3fc58b4db0797bd4ca9b2cbf3d7ab820832e22a80b5b86ae1427f7f706a7780089958b2862e7bc0842",
      "introduce": "火币矿池拥有两大业务，POW矿池与EOS超级社区。 POW矿池致力于为矿工提供收益更多更快、交易更便捷的一站式挖矿服务，独具3大优势：独家套保服务，可提前获取收益；挖矿手续费低，点卡可直接抵扣；直通火币交易平台，一键交易。 EOS超级社区致力于为用户提供专业投票、海量资讯和积分理财一站式服务，具备3大亮点：拥有全球最大最专业的EOS投票平台，作为EOS链上投票平台，安全高效；覆盖全球海量渠道，囊括EOS资讯；发行火币矿池全球生态通证，积分可以为您喜欢的DAPP进行投票。 EOS超级社区，连接用户和全球EOS节点，为构筑EOS繁荣生态提供平台支撑。 火币品牌在全球区块链领域拥有优异的知名度和口碑。",
      "introduce_en": "火币矿池拥有两大业务，POW矿池与EOS超级社区。 POW矿池致力于为矿工提供收益更多更快、交易更便捷的一站式挖矿服务，独具3大优势：独家套保服务，可提前获取收益；挖矿手续费低，点卡可直接抵扣；直通火币交易平台，一键交易。 EOS超级社区致力于为用户提供专业投票、海量资讯和积分理财一站式服务，具备3大亮点：拥有全球最大最专业的EOS投票平台，作为EOS链上投票平台，安全高效；覆盖全球海量渠道，囊括EOS资讯；发行火币矿池全球生态通证，积分可以为您喜欢的DAPP进行投票。 EOS超级社区，连接用户和全球EOS节点，为构筑EOS繁荣生态提供平台支撑。 火币品牌在全球区块链领域拥有优异的知名度和口碑。",
      "node_type": "门户网站",
      "node_type_en": "Web portal",
      "reward": "85%",
      "expected_return": "2.3553%",
      "logo": "https://api.bystack.com/supernode/v1/uploads/1562137632.8043804.png",
      "social_list": "微信客服*Huobipool02（备注BTM）\nTelegram*https://t.me/joinchat/IIM1LRITqjScyUEKpZNedQ",
      "social_list_en": "WeChat*Huobipool02（备注BTM）\nTelegram*https://t.me/joinchat/IIM1LRITqjScyUEKpZNedQ",
      "declaration": "火币矿池目前已完成POW系统升级，多方面优化用户体验，多币种挖矿，包含LTC、ETH、ETC、DCR。火币矿池开启“双挖”模式，挖BTC、BCH、LTC、ETH、ETC、DCR同时可挖HPT，持有HPT获得权益派发包括EOS、TRX、CMT、ONG，欢迎您来体验！我们让挖矿更简单！火币矿池共筑区块链繁荣生态。",
      "declaration_en": "火币矿池目前已完成POW系统升级，多方面优化用户体验，多币种挖矿，包含LTC、ETH、ETC、DCR。火币矿池开启“双挖”模式，挖BTC、BCH、LTC、ETH、ETC、DCR同时可挖HPT，持有HPT获得权益派发包括EOS、TRX、CMT、ONG，欢迎您来体验！我们让挖矿更简单！火币矿池共筑区块链繁荣生态。"
    },
    "vote_list": [
      {
        "tx_id": "6f8a7354592d5f2cf2a53926390330bbb2cd288872408b618b21d36d2f8874e1",
        "timestamp": 1566518490500,
        "block_hash": "494a78b9cd21166b6153385d139087f39fddd677939166041f331d3376474bca",
        "block_height": 5788590,
        "status_fail": false,
        "vote_amount": 3000000000000,
        "voter": "vp1q9mrdy6f0r9j0uc4mlkt8lv8fsxd3skxh2v9z9e",
        "voted_pub_key": "1bec3a35da038ec7a76c40986e80b5af2dcef60341970e3fc58b4db0797bd4ca9b2cbf3d7ab820832e22a80b5b86ae1427f7f706a7780089958b2862e7bc0842",
        "size": 0,
        "type": "veto",
        "chain_status": "mainnet"
      }
    ],
    "vote_total_count": 15634838021494996
  },
  "msg": "ok"
}
```

---

#### `node/{pub_key}/info`

Get super node info by public key

##### Parameters

`Object`:

- `String`- _pub_key_, node's public

##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Integer` - _blocker_count_, the height of the block when calculate blocker reward.
  - `Integer` - _blocker_reward_, blocker reward in 'blocker_count' height.
  - `Integer` - _node_pay_amount_, payment amount for voter.
  - `Integer` - _staking_calc_time_, the time of the node when calculate staking reward.
  - `Integer` - _staking_reward_, staking reward on 'staking_calc_time'.
  - `Integer` - _vote_total_count_, total votes for all addresses.
  - `String` - connection_status, node connetction status.
  - `Object` - _super_node_detail_, super node object:
    - `String` - _uuid_, node uuid.
    - `String` - _name_, node name.
    - `String` - _location_, node location.
    - `String` - _name_en_, node english name.
    - `String` - _location_en_, node english location.
    - `String` - _homepage_, node homepage.
    - `String` - _homepage_en_, node english homepage
    - `String` - _pub_key_, node public key.
    - `String` - _introduce_, node introduce.
    - `String` - _introduce_en_, node english introduce.
    - `String` - _node_type_en_, node type english introduce.
    - `String` - _node_type_, node type(Exchange,Wallet,Investment institution, Investor, DApp development team, KOL, Web portal, Marketing company, Development team, BP/miners, Blockchain education institutions, Others).
    - `String` - _reward_, distribution ratio.
    - `String` - _expected_return_, vote expected return.
    - `String` - _logo_, node log url.
    - `String` - _social_list_, contact information.
    - `String` - _social_list_en_, english contact information.
    - `String` - _declaration_, election manifesto.
    - `String` - _declaration_en_, english election manifesto.
  - `Object` - _super_node_, object of super node's data which on chain.
    - `String` - _name_, node name.
    - `String` - _location_, node location.
    - `String` - _name_en_, node english name.
    - `String` - _location_en_, node english location.
    - `String` - _address_, node address.
    - `String` - _pub_key_, node public key.
    - `Integer` - _first_timestamp_, first time of producting block.
    - `Integer` - _last_timestamp_, latest time of producting block.
    - `Integer` - _vote_count_, number of votes.
    - `Integer` - _product_blocks_, numbers of prodcuting block.
    - `String` - _ratio_, vote real return.
    - `Integer` - _last_pay_time_, last payment time.
- `String` - _msg_, error message.

##### Example

get super node when  pub_key is 1bec3a35da038ec7a76c40986e80b5af2dcef60341970e3fc58b4db0797bd4ca9b2cbf3d7ab820832e22a80b5b86ae1427f7f706a7780089958b2862e7bc0842:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/node/1bec3a35da038ec7a76c40986e80b5af2dcef60341970e3fc58b4db0797bd4ca9b2cbf3d7ab820832e22a80b5b86ae1427f7f706a7780089958b2862e7bc0842/info" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "blocker_count": 565626,
    "blocker_reward": 5380765069188,
    "node_pay_amount": 2877072094158,
    "staking_calc_time": 0,
    "staking_reward": 0,
    "super_node": {
      "name": "火币矿池",
      "location": "中国",
      "name_en": "Huobi Pool",
      "location_en": "China",
      "address": "vp1q4x035zdv5c6yt9jxvjmnct9kjeypgc8jp99hug",
      "pub_key": "1bec3a35da038ec7a76c40986e80b5af2dcef60341970e3fc58b4db0797bd4ca9b2cbf3d7ab820832e22a80b5b86ae1427f7f706a7780089958b2862e7bc0842",
      "first_timestamp": 1563661126500,
      "last_timestamp": 1566524121500,
      "vote_count": 2162497886200000,
      "product_blocks": 572545,
      "ratio": "4.7367",
      "last_pay_time": 1566436625000
    },
    "super_node_detail": {
      "uuid": "3e50e6a0ac90a441a660c1383a2947b0",
      "name": "火币矿池",
      "location": "中国",
      "name_en": "Huobi Pool",
      "location_en": "China",
      "homepage": "https://www.huobipool.com",
      "homepage_en": "",
      "pub_key": "1bec3a35da038ec7a76c40986e80b5af2dcef60341970e3fc58b4db0797bd4ca9b2cbf3d7ab820832e22a80b5b86ae1427f7f706a7780089958b2862e7bc0842",
      "introduce": "火币矿池拥有两大业务，POW矿池与EOS超级社区。 POW矿池致力于为矿工提供收益更多更快、交易更便捷的一站式挖矿服务，独具3大优势：独家套保服务，可提前获取收益；挖矿手续费低，点卡可直接抵扣；直通火币交易平台，一键交易。 EOS超级社区致力于为用户提供专业投票、海量资讯和积分理财一站式服务，具备3大亮点：拥有全球最大最专业的EOS投票平台，作为EOS链上投票平台，安全高效；覆盖全球海量渠道，囊括EOS资讯；发行火币矿池全球生态通证，积分可以为您喜欢的DAPP进行投票。 EOS超级社区，连接用户和全球EOS节点，为构筑EOS繁荣生态提供平台支撑。 火币品牌在全球区块链领域拥有优异的知名度和口碑。",
      "introduce_en": "火币矿池拥有两大业务，POW矿池与EOS超级社区。 POW矿池致力于为矿工提供收益更多更快、交易更便捷的一站式挖矿服务，独具3大优势：独家套保服务，可提前获取收益；挖矿手续费低，点卡可直接抵扣；直通火币交易平台，一键交易。 EOS超级社区致力于为用户提供专业投票、海量资讯和积分理财一站式服务，具备3大亮点：拥有全球最大最专业的EOS投票平台，作为EOS链上投票平台，安全高效；覆盖全球海量渠道，囊括EOS资讯；发行火币矿池全球生态通证，积分可以为您喜欢的DAPP进行投票。 EOS超级社区，连接用户和全球EOS节点，为构筑EOS繁荣生态提供平台支撑。 火币品牌在全球区块链领域拥有优异的知名度和口碑。",
      "node_type": "门户网站",
      "node_type_en": "Web portal",
      "reward": "85%",
      "expected_return": "2.3553%",
      "logo": "https://api.bystack.com/supernode/v1/uploads/1562137632.8043804.png",
      "social_list": "微信客服*Huobipool02（备注BTM）\nTelegram*https://t.me/joinchat/IIM1LRITqjScyUEKpZNedQ",
      "social_list_en": "WeChat*Huobipool02（备注BTM）\nTelegram*https://t.me/joinchat/IIM1LRITqjScyUEKpZNedQ",
      "declaration": "火币矿池目前已完成POW系统升级，多方面优化用户体验，多币种挖矿，包含LTC、ETH、ETC、DCR。火币矿池开启“双挖”模式，挖BTC、BCH、LTC、ETH、ETC、DCR同时可挖HPT，持有HPT获得权益派发包括EOS、TRX、CMT、ONG，欢迎您来体验！我们让挖矿更简单！火币矿池共筑区块链繁荣生态。",
      "declaration_en": "火币矿池目前已完成POW系统升级，多方面优化用户体验，多币种挖矿，包含LTC、ETH、ETC、DCR。火币矿池开启“双挖”模式，挖BTC、BCH、LTC、ETH、ETC、DCR同时可挖HPT，持有HPT获得权益派发包括EOS、TRX、CMT、ONG，欢迎您来体验！我们让挖矿更简单！火币矿池共筑区块链繁荣生态。"
    },
    "vote_total_count": 15634838021494996,
    "connection_status": "healthy"
  },
  "msg": "ok"
}
```

---


#### `node/{pub_key}/vote`

Get super node vote info by public key

##### Parameters

`Object`:

- `String`- _pub_key_, node's public

Optional:

- `Integer`- _page_, page number of node's vote, default 1.
- `Integer`- _limit_, number of node's vote per page, default 20.

##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _vote_list_, vote transactions object:
    - `String` - _tx_id, transaction id_, hash of the transaction.
    - `Integer` - _timestamp_, transaction timestamp.
    - `Integer` - _block_height_, block height.
    - `String` - _block_hash_, transaction hash of the transaction.
    - `Integer` - _vote_amount_, the amount of vote.
    - `Integer` - _size_, size of transaction.
    - `Boolean` - _status_fail_, whether the state of the request has failed.
    - `Integer` - _chain_status_, mainnet or orphan.
    - `String` - _voter_, voter.
    - `String` - _voted_pub_key_, Who is voting for.
  - `Array of Object` - _pagination_, pagination info.
    - `Integer`- _current_, current number of page.
    - `Integer`- _limit_, number of data per page.
    - `Integer`- _total_, the number of total blocks.
- `String` - _msg_, error message.

##### Example

get super node when  pub_key is 0f8669abbd3cc0a167156188e428f940088d5b2f36bb3449df71d2bdc5e077814ea3f68628eef279ed435f51ee26cff00f8bd28fabfd500bedb2a9e369f5c8:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/node/0f8669abbd3cc0a167156188e428f940088d5b2f36bb3449df71d2bdc5e077814ea3f68628eef279ed435f51ee26cff00f8bd28fabfd500bedb2a9e369f5c825/vote?page=1&limit=1" -H "accept: application/json"

// Result
{
  "code": 200,
  "msg": "ok",
  "data": {
    "vote_list": [
      {
        "tx_id": "762e744b6ee1cc8de98a9496ed02b1433f0e4df037d6a8972a23f893fcfcd558",
        "timestamp": 1575867213000,
        "block_hash": "2798329d1ad01485b6789b41679a06f9bac3dac7aa95545b62b23930176e3d3f",
        "block_height": 24186489,
        "status_fail": false,
        "vote_amount": 2900000000,
        "voter": "vp1qt3wn0s38utnnwlrqg9fph8d0sujcpe9tpvq4mq",
        "voted_pub_key": "0f8669abbd3cc0a167156188e428f940088d5b2f36bb3449df71d2bdc5e077814ea3f68628eef279ed435f51ee26cff00f8bd28fabfd500bedb2a9e369f5c825",
        "size": 403,
        "type": "vote",
        "chain_status": "mainnet"
      },
      {
        "tx_id": "57f0111a906b46345c30b3ff24e43e6eaeb0d3eadcf95a4efec813cd53fa9fa9",
        "timestamp": 1575866746500,
        "block_hash": "9e0f263d0b4555394dafb981a265c8bb1edf58f75274bbe16179a36d0ef9a6d5",
        "block_height": 24185556,
        "status_fail": false,
        "vote_amount": 3000100000000,
        "voter": "vp1q9xfs8uuu2hhcjuq44n4xxm4fr2m9s3n3spkd63",
        "voted_pub_key": "0f8669abbd3cc0a167156188e428f940088d5b2f36bb3449df71d2bdc5e077814ea3f68628eef279ed435f51ee26cff00f8bd28fabfd500bedb2a9e369f5c825",
        "size": 340,
        "type": "veto",
        "chain_status": "mainnet"
      }
    ],
    "pagination": {
      "current": 1,
      "limit": 2,
      "total": 880,
    }
}
```

---


#### `nodes`

Get all super node
##### Parameters

None
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Object` - _lists_, object of super node's data which on chain.
    - `String` - _name_, node name.
    - `String` - _location_, node location.
    - `String` - _name_en_, node english name.
    - `String` - _location_en_, node english location.
    - `String` - _address_, node address.
    - `String` - _pub_key_, node public key.
    - `Integer` - _first_timestamp_, first time of producting block.
    - `Integer` - _last_timestamp_, latest time of producting block.
    - `Integer` - _vote_count_, number of votes.
    - `Integer` - _product_blocks_, numbers of prodcuting block.
    - `String` - _ratio_, vote real return.
    - `Integer` - _last_pay_time_, last payment time.
    - `String` - address, host + port
    - `String` - status,  node status [unknown, healthy, congested,orphan,offline]
    - `Integer` - updated_at,  Recently detected time 
  - `Integer`- _node_total_, numbers of node.
  - `Integer`- _vote_total_count_, numbers of vote amount.
- `String` - _msg_, error message.

##### Example

get all super node:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/nodes" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "lists": [
      {
        "name": "火币矿池",
        "location": "中国",
        "name_en": "Huobi Pool",
        "location_en": "China",
        "address": "vp1q4x035zdv5c6yt9jxvjmnct9kjeypgc8jp99hug",
        "pub_key": "1bec3a35da038ec7a76c40986e80b5af2dcef60341970e3fc58b4db0797bd4ca9b2cbf3d7ab820832e22a80b5b86ae1427f7f706a7780089958b2862e7bc0842",
        "first_timestamp": 1563661126500,
        "last_timestamp": 1566523881500,
        "vote_count": 2162497886200000,
        "product_blocks": 572497,
        "type": "formal",
        "ratio": "4.7367",
        "last_pay_time": 1566436625000,
        "expected_return": "2.3553%",
        "node_reward": 5380765069188,
        "address": "52.194.77.99:56656",
        "status": "congested",
        "updated_at": 1568013934
      },
      {
        "name": "MatPool",
        "location": "中国",
        "name_en": "MatPool",
        "location_en": "China",
        "address": "vp1ql4dakjlqhndda7xh0smz38j847e265fft3gz4u",
        "pub_key": "0f8669abbd3cc0a167156188e428f940088d5b2f36bb3449df71d2bdc5e077814ea3f68628eef279ed435f51ee26cff00f8bd28fabfd500bedb2a9e369f5c825",
        "first_timestamp": 1563608517000,
        "last_timestamp": 1566523887500,
        "vote_count": 1135689295000000,
        "product_blocks": 600280,
        "type": "formal",
        "ratio": "4.7356",
        "last_pay_time": 1566444876500,
        "expected_return": "4.7560%",
        "node_reward": 5645129616208,
        "address": "52.144.83.66:56656",
        "status": "congested",
        "updated_at": 1568013934
      },
      {
        "name": "ZB",
        "location": "瑞士",
        "name_en": "ZB",
        "location_en": "Switzerland",
        "address": "vp1qkhddc0n30kvf90dst999jvux8hckc9xyxwujna",
        "pub_key": "27db67692ef909b2d652cae4fd1d26ad83fb9554ffe8271e8811495ab74e489360968dfb6d7d7416eb37ac5ca04d2cb6b8a2745b6e192521e95c6d238d946075",
        "first_timestamp": 1563782642500,
        "last_timestamp": 1566523893500,
        "vote_count": 1087959770000000,
        "product_blocks": 548269,
        "type": "formal",
        "expected_return": "4.9634%",
        "node_reward": 5150352197890,
        "address": "52.194.83.44:56656",
        "status": "congested",
        "updated_at": 1568013934
      },
      ],
    "node_total": 3,
    "vote_total_count": 3162497886200000
  },
  "msg": "ok"
}
```

---

#### `nodes/detail`

Get all super node detail
##### Parameters

None
##### Returns

`Object`:

- `Integer`- _code_, error code.
- `Object` - _data_, block details.
  - `Array of Object` - _nodes_detail_, super node object:
    - `String` - _uuid_, node uuid.
    - `String` - _name_, node name.
    - `String` - _location_, node location.
    - `String` - _name_en_, node english name.
    - `String` - _location_en_, node english location.
    - `String` - _homepage_, node homepage.
    - `String` - _homepage_en_, node english homepage
    - `String` - _pub_key_, node public key.
    - `String` - _introduce_, node introduce.
    - `String` - _introduce_en_, node english introduce.
    - `String` - _node_type_en_, node type english introduce.
    - `String` - _node_type_, node type(Exchange,Wallet,Investment institution, Investor, DApp development team, KOL, Web portal, Marketing company, Development team, BP/miners, Blockchain education institutions, Others).
    - `String` - _reward_, distribution ratio.
    - `String` - _expected_return_, vote expected return.
    - `String` - _logo_, node log url.
    - `String` - _social_list_, contact information.
    - `String` - _social_list_en_, english contact information.
    - `String` - _declaration_, election manifesto.
    - `String` - _declaration_en_, english election manifesto.
- `String` - _msg_, error message.

##### Example

get all super node detail:

```json
// Request
curl -X GET "https://vapor.blockmeta.com/api/v1/nodes/detail" -H "accept: application/json"

// Result
{
  "code": 200,
  "data": {
    "nodes_detail": [
      {
        "uuid": "4817e7c299d5a6e5bf72b7f54e08ebce",
        "name": "MatPool",
        "location": "中国",
        "name_en": "MatPool",
        "location_en": "China",
        "homepage": "https://matpool.io/",
        "homepage_en": "",
        "pub_key": "0f8669abbd3cc0a167156188e428f940088d5b2f36bb3449df71d2bdc5e077814ea3f68628eef279ed435f51ee26cff00f8bd28fabfd500bedb2a9e369f5c825",
        "introduce": "MatPool是国内领先的区块链信息服务商巴比特旗下矿池产品，前 Facebook 早期工程师金磊担任项目负责兼 CTO，巴比特合伙人李宗乘出任首席运营官 COO，这是一个成长中的矿池，其背后团队由区块链、人工智能资深开发人员组成。矿池不仅支持POW、PoS、DPoS、PBFT等共识机制主链挖矿，还将提供AI云算力服务业务。",
        "introduce_en": "MatPool是国内领先的区块链信息服务商巴比特旗下矿池产品，前 Facebook 早期工程师金磊担任项目负责兼 CTO，巴比特合伙人李宗乘出任首席运营官 COO，这是一个成长中的矿池，其背后团队由区块链、人工智能资深开发人员组成。矿池不仅支持POW、PoS、DPoS、PBFT等共识机制主链挖矿，还将提供AI云算力服务业务。",
        "node_type": "区块生产者/矿工",
        "node_type_en": "BP/miners",
        "reward": "90%",
        "expected_return": "4.7560%",
        "logo": "https://api.bystack.com/supernode/v1/uploads/1562316066.53449061_14.png",
        "social_list": "微信*xiaxxxxxxxxxxxx\nQQ群*https://jq.qq.com/?_wv=1027&k=5f1IVQ9\n链节点*https://www.chainnode.com/user/572758",
        "social_list_en": "WeChat*xiaxxxxxxxxxxxx\nQQ Group*https://jq.qq.com/?_wv=1027&k=5f1IVQ9\nChainNode*https://www.chainnode.com/user/572758",
        "declaration": "MatPool作为巴比特旗下矿池，第一，MatPool拥有多种媒体宣发途径，会通过巴比特、链节点等平台为Bystack提供流量支持；第二，MatPool将作为社区 KOL 参与社区节点共建计划，为社群成员普及Btm及Bystack发展前景，促进社群成员对Bystack的深刻认识；第三MatPool作为作为一个多币种的矿池平台，支持更多PoS、DPoS、PBFT等依托权益证明共识机制的主链，因此能够促进Bystack与其他优质项目各方面的合作，包括技术，应用和社群等各方面的交流合作，促进Bystack的良性发展。MatPool希望成为维护Bystack区块链网络的共识节点，助力Bystack的大规模商业区块链应用落地",
        "declaration_en": "MatPool作为巴比特旗下矿池，第一，MatPool拥有多种媒体宣发途径，会通过巴比特、链节点等平台为Bystack提供流量支持；第二，MatPool将作为社区 KOL 参与社区节点共建计划，为社群成员普及Btm及Bystack发展前景，促进社群成员对Bystack的深刻认识；第三MatPool作为作为一个多币种的矿池平台，支持更多PoS、DPoS、PBFT等依托权益证明共识机制的主链，因此能够促进Bystack与其他优质项目各方面的合作，包括技术，应用和社群等各方面的交流合作，促进Bystack的良性发展。MatPool希望成为维护Bystack区块链网络的共识节点，助力Bystack的大规模商业区块链应用落地"
      },
      {
        "uuid": "492d8e5ac3967b7d3a71f3c1347cfd87",
        "name": "Stake.One",
        "location": "中国",
        "name_en": "Stake.One",
        "location_en": "China",
        "homepage": "-",
        "homepage_en": "",
        "pub_key": " ",
        "introduce": "Stake.One是由原OK资本商务负责人、CoinAll币全副总裁王一丁创立、由了得资本创始人易理华、创世资本创始人孙泽宇投资的一家专注于POS Staking服务的POS矿池。Stake.One依托多年行业经验及行业资源，与各大公链项目共同在交易所、市场、社群层面建设和拓展其生态。",
        "introduce_en": "Stake.One是由原OK资本商务负责人、CoinAll币全副总裁王一丁创立、由了得资本创始人易理华、创世资本创始人孙泽宇投资的一家专注于POS Staking服务的POS矿池。Stake.One依托多年行业经验及行业资源，与各大公链项目共同在交易所、市场、社群层面建设和拓展其生态。",
        "node_type": "区块生产者/矿工",
        "node_type_en": "BP/miners",
        "reward": "70%",
        "expected_return": "",
        "logo": "https://api.bystack.com/supernode/v1/uploads/1563498745.9475577stake.png",
        "social_list": "-",
        "social_list_en": "-",
        "declaration": "Stake.One将在Staking方向同了得资本、创世资本、MXC交易所、LBank交易所战略合作，深度参与Bystack生态的共建，在市场、社群、交易所等多个方面共同推动比原长期稳步的发展。",
        "declaration_en": "Stake.One将在Staking方向同了得资本、创世资本、MXC交易所、LBank交易所战略合作，深度参与Bystack生态的共建，在市场、社群、交易所等多个方面共同推动比原长期稳步的发展。"
      },
      ]
  },
  "msg": "ok"
}
```

