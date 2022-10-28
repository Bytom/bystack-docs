# 网关 API

## 如何使用网关 API

### Base URL

| Client | URL |
| --- | --- |
| Base URL | https://www.bystack.com/api/v1 |


### HTTP返回格式

```
{
  "code": 200,
  "msg": "",
  "data": {}
}
```

|  参数  | 类型  | 描述|
|  ----  | ----  | ----  |
| code  | int | HTTP状态码 |
| message  | string | HTTP状态信息 |
| data  | json object | 返回详细数据 |

### Access token使用说明

每次调用API时，需将access token放在header中

```
{
  "Authorization": "Bearer access_token"
}
```

## API method

### 创建链上账户

创建链上账户，返回账户地址

### 参数

- `uint64` - _user_id_, user_id跟bystack账户对应。一般为平台上的用户名（唯一）

### 返回值

- `Int` - _code_, http状态码
- `String` - _message_, http状态信息
- `Json object` - _data_, 返回详细数据
	- `String` - _address_, 新创建的账户地址

### 示例

```javascript
// Request
curl -X POST create-account -d '{"user_id": "1"}'

// Response
{
  "code": 200,
  "message": "",
  "data": {
    "address": "0x1d15a32E7BC025F150e5C462C2CA14c960fd896d"
  }
}
```

### 查询账户信息

用user_id查询账户地址

### 参数

- `uint64` - _user_id_,user_id跟bystack账户对应。一般为平台上的用户名（唯一）

### 返回值

- `Int` - _code_, http状态码
- `String` - _message_, http状态信息
- `Json object` - _data_, 返回详细数据
	- `String` - _address_, 查询地址

### 示例

```javascript
// Request
curl -X GET /account/1

// Response
{
  "code": 200,
  "message": "",
  "data": {
    "address": "0x1d15a32E7BC025F150e5C462C2CA14c960fd896d"
  }
}
```

### 发行资产

为指定用户发行资产，资产发行到指定用户地址上

### 参数

- `String` - _address_, 资产发行到该地址
- `String` - _name_, 资产名称
- `String` - _symbol_, 资产符号，一般为name的首字符缩写
- `String` - _description_, 资产描述

### 返回值

- `Int` - _code_, http状态码
- `String` - _message_, http状态信息
- `Json object` - _data_, 返回详细数据
	- `String` - _asset_id_, 新创建资产id

### 示例

```javascript
// Request
curl -X POST /create-asset -d '{"address": "0x1d15a32E7BC025F150e5C462C2CA14c960fd896d","name": "test1","symbol": "TEST1",,"description": ""}'

// Response
{
  "code": 200,
  "message": "",
  "data": {
    "asset_id": "0x0b45Ad27866C8E05ED610cd8A0ec78de94B18202-b3"
  }
}
```

### 查询资产信息

通过asset_id获取资产信息

### 参数

- `String` - _asset_,资产id

### 返回值

- `Int` - _code_, http状态码
- `String` - _message_, http状态信息
- `Json object` - _data_, 返回详细数据
	- `String` - _asset_id_, 资产id
	- `String` - _tx_hash_, 资产上链hash
	- `String` - _name_, 资产名称
	- `String` - _symbol_, 资产符号，一般为name的首字符缩写
	- `String` - _descrition_, 资产描述
	- `String` - _status_,资产上链状态：building, submitted, succeeded, failed
	- `uint64` - _timestamp_,资产上链时间
	- `String` - _cost_, 消耗手续费

### 示例

```javascript
// Request
curl -X GET /asset/0x0b45Ad27866C8E05ED610cd8A0ec78de94B18202-b3

// Response
{
  "code": 200,
  "message": "",
  "data": {
    "asset_id": "0x0b45Ad27866C8E05ED610cd8A0ec78de94B18202-b3",
    "tx_hash":"",
    "name": "Test1",
    "symbol": "TEST1",
    "description": "",
    "status": "successed",
    "timestamp":128712123,
    "cost":"0.1"
  }
}
```

### 资产转移

资产从一个账户转移给另一个账户

### 参数

- `String` - _from_address_, 资产发送地址
- `String` - _to_address_, 资产接收地址
- `String` - _asset_id_, 待转移资产id

### 返回值

- `Int` - _code_, http状态码
- `String` - _message_, http状态信息
- `Json object` - _data_, 返回详细数据
	- `String` - _gw_id_, 网关id，和资产转移行为对应，可用户查询资产转移状态

### 示例

```javascript
// Request
curl -X POST /transfer-asset -d '{"from_address": "0x5780f035A15ef7201ec1aaC7fC4Aa26Fc242b46A","to_address": "0xA46E01606f9252fa833131648f4D855549BcE9D9","asset_id": "0x0b45Ad27866C8E05ED610cd8A0ec78de94B18202-b3"}'

// Response
{
  "code": 200,
  "message": "",
  "data": {
    "gw_id": "abc0192dab55631d8"
  }
}
```

### 查询资产转移

用gw_id查询资产转移交易状态

### 参数

- `String` - _gw_id_, 网关id，由/transfer-asset返回

### 返回值

- `Int` - _code_, http状态码
- `String` - _message_, http状态信息
- `Json object` - _data_, 返回详细数据
	- `String` - _tx_hash_, 交易hash
	- `String` - _from_address_,资产发送地址
	- `String` - _to_address_, 资产接收地址
	- `String` - _asset_id_, 转移的资产id
	- `String` - _status_, 资产转移状态, building, submitted, succeeded, failed
	- `uint64` - _timestamp_, 上链时间戳
	- `String` - _cost_, 消耗手续费

### 示例

```javascript
// Request
curl -X GET /tx/abc0192dab55631d8

// Response
{
  "code": 200,
  "message": "",
  "data": {
    "tx_hash": "0xfaa0ec9c6a774b381bc3c4bbcf0a93d678672b97f04b4d26d5c2610366012716",
    "from_address":"0x5780f035A15ef7201ec1aaC7fC4Aa26Fc242b46A",
    "to_address":"0xA46E01606f9252fa833131648f4D855549BcE9D9",
    "asset_id":"0x27B4bd40d7AaBB98b4A2682A9CfaBD6d7292276a#b4",
    "timestamp":"1660113187",
    "status":"succeeded",
    "cost":""
  }
}
```