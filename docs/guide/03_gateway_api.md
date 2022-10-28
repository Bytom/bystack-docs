# Gateway API

## How to use Gateway API

### Base URL

| Client | URL |
| --- | --- |
| Base URL | https://www.bystack.com/api/v1 |


### HTTP Return Format

```
{
  "code": 200,
  "msg": "",
  "data": {}
}
```

|  Parameter  | Type  | description|
|  ----  | ----  | ----  |
| code  | int | Status Code |
| message  | string | Status information |
| data  | json object | the return data |

### Access token

Every time you call the API, you need to put the access token in the HTTP  header

```
{
  "Authorization": "Bearer access_token"
}
```

## API method

### create account

Create an on-chain account and return the account address

### Parameters

- `uint64` - _user_id_, User's unique record

### Returns

- `Int` - _code_, http status code
- `String` - _message_, http status information
- `Json object` - _data_, return data
	- `String` - _address_, new address

### Example

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

### query account

query account address by user id

### Parameters

- `uint64` - _user_id_, User's unique record

### Returns

- `Int` - _code_, http status code
- `String` - _message_, http status information
- `Json object` - _data_, return data
	- `String` - _address_, user address

### Example

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

### create asset

issue new asset and send to the refer user address

### Parameters

- `String` - _address_, User's address
- `String` - _name_, asset name
- `String` - _symbol_, asset symbol
- `String` - _description_, asset description, optional

### Returns

- `Int` - _code_, http status code
- `String` - _message_, http status information
- `Json object` - _data_, return data
	- `String` - _asset_id_, asset id

### Example

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

### query asset

query asset by asset id

### Parameters

- `String` - _asset_, asset unique id

### Returns

- `Int` - _code_, http status code
- `String` - _message_, http status information
- `Json object` - _data_, return data
	- `String` - _asset_id_, asset id
	- `String` - _tx_hash_, the transation hash of the asset issue in blockchian
	- `String` - _name_, asset name
	- `String` - _symbol_, asset symbol
	- `String` - _descrition_, asset descrition
	- `String` - _status_, the blockchain status for the asset, building, submitted, succeeded, failed
	- `uint64` - _timestamp_, the timestamp when the asset issued
	- `String` - _cost_, gas fee

### Example

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

### transfer asset

transfer asset from one account to another account

### Parameters

- `String` - _from_address_, the sender account
- `String` - _to_address_, the receiver account
- `String` - _asset_id_, asset id

### Returns

- `Int` - _code_, http status code
- `String` - _message_, http status information
- `Json object` - _data_, return data
	- `String` - _gw_id_, the gateway action id, refer to the asset action

### Example

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

### query transaction

query transaction by gw id

### Parameters

- `String` - _gw_id_, gwid returned by transfer asset

### Returns

- `Int` - _code_, http status code
- `String` - _message_, http status information
- `Json object` - _data_, return data
	- `String` - _tx_hash_, the transation hash of the asset issue in blockchian
	- `String` - _from_address_, the sender account
	- `String` - _to_address_, the receiver account
	- `String` - _status_, the blockchain status for the asset transfer, building, submitted, succeeded, failed
	- `uint64` - _timestamp_, the timestamp when the asset transfer
	- `String` - _cost_, gas fee

### Example

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