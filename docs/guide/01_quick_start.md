# Quick Start

## HTTP Request Format

### Base URL

https://www.bystack.com/api/v1

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


## Access process

![](../img/01/quick_start.png)

### 1、Apply for access

refer to Contract us 

### 2、Verify

after application，verify the information of applicant

### 3、Create Access Token


After passing the verify, an Access Token can be generated and a certain Gas fee will be given for testing

Every time you call the API, you need to put the access token in the HTTP header

```
{
  "Authorization": "Bearer access_token"
}
```

### 4、Create the platform user

call ``/create-account``, create the platform user, return the user account and address

**Request URL**

```
POST /create-account
```

**Request Parameter**

|  Parameter  | Type  | description| optional |
|  ----  | ----  | ----  | ----  |
| user_id  | uint64 | the user name of your platform | no |

**Return**

```
{
  "code": 200,
  "message": "",
  "data": {
    "address": "0x1d15a32E7BC025F150e5C462C2CA14c960fd896d"
  }
}
```

### 5、Issue Assets

Issue assets for designated users, and distribute assets to designated user addresses

**Request URL**

```
POST /create-asset
```

**Request Parameter**

|  Parameter  | Type  | description| optional |
|  ----  | ----  | ----  | ----  |
| address  | string | the assets owner | no |
| name  | string | assets name | no |
| symbol  | string | assets symbol,the abbreviation for assets name | no |
| description  | string | assets description | yes |

**Return**

```
{
  "code": 200,
  "message": "",
  "data": {
    "asset_id": "0x0b45Ad27866C8E05ED610cd8A0ec78de94B18202-b3"
  }
}
```