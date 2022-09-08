# Bycoin API

Bycoin Api call only supported under the bycoin dapp browser.

## Detect bycoin

You can detect bycoin browser by !!window.bycoin, it returns true if current browser is bycoin DApp browser.

## callAPI

We provide a serie of methods that enhance the capacity of your DApp. Each method has an apiName. Please use as follows:

`bycoin.callAPI(apiName, options, callback)`

| Params | Type | Description |
| --- | --- | --- |
| apiName | String | name of the method which you want to invoke, you will see the available apiNames below |
| options | Object | options depend on the specific method |
| callback | Function | callback of method |


```javascript
bycoin.callAPI(apiName, params, (error, result) => {
  if(error) {
    alert(error.message)
  } else {
    alert(result)
  }
})
```

## API

### navigator

#### navigator.getOrientation

Get the current orientation state of APP，return 'LANDSCAPE' or 'PORTRAIT'

```javascript
bycoin.callAPI('navigator.getOrientation', function(err, result) {
  console.log(result)
})
```

#### navigator.setOrientation

Set the orientation of APP, param is 'landscape' or 'portrait'

```javascript
bycoin.callAPI('navigator.setOrientation', 'landscape')
```

#### navigator.closeDapp

Close the current DApp window.

```javascript
bycoin.callAPI('navigator.closeDapp')
```

#### navigator.goBack

Navigate to the previous history of the current webpage, like history.go(-1). If there is no previous record, the method closes the current DApp window.

```javascript
bycoin.callAPI('navigator.goBack')
```

### native

#### native.alert

Displays a native alert dialog to show a message, like window.alert.

| Params | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| message | String | true | null | message to show |


```javascript
bycoin.callAPI('native.alert', 'winner winner, chicken dinner！')
```

#### native.confirm

Displays a native confirm dialog, like window.confirm. If the user clicked the cancel button, an error will be returned to the callback function.

| Params | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| title | String | true | null | dialog title |
| message | String | true | null | dialog content |
| cancelText | String | true | null | cancel button text |
| confirmText | String | true | null | confirm button text |


```javascript
bycoin.callAPI('native.confirm', {
  title: 'quick question',
  message: 'is Javascript the worst language?',
  cancelText: 'no',
  confirmText: 'yes',
}, function(err, result) {
  if(err) {
    console.log('no')
  } else {
    console.log('yes')
  }
})
```

#### native.toastInfo

Toast the information to users.

| Params | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| text | String | true | null | text to toast |


```javascript
bycoin.callAPI('native.toastInfo', '123456789')
```

#### native.saveImage

Save the image into local disc.

| Params | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| url | String | true | null | image url |


```javascript
bycoin.callAPI('native.saveImage', { url:"https://photo.16pic.com/00/53/34/16pic_5334613_b.jpg" },function (err, ret) {
     if(err) {
    alert(err)
  } else {
    alert('save image success.')
  }
  })
```

#### native.saveScreenshot

Save the current screenshot into local disc.

```javascript
bycoin.callAPI('native.saveScreenshot', function (err, ret) {
    if(err) {
        alert(err)
      } else {
        alert('save sreenshot success.')
      }
  })
```

#### native.selectPicture

Select a picture from library or take a photo. It will return image data in base64 (jpeg default).

| Params | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| maxWidth | Number | false | null | response will be corpped |
| maxHeight | Number | false | null | response will be corpped |
| quality | Number | false | 1 | quality of image, range of value is 0 to 1 |


response:

| property | Type | Description |
| --- | --- | --- |
| data | String | base64 data, default prefix 'data:image/jpeg;base64,' |
| width | Number | image width |
| height | Number | image height |
| fileSize | Number | file size (b) |


```javascript
bycoin.callAPI('native.selectPicture',{
  maxWidth: 400,
  maxHeight: 200
}, function (err, ret) {
  if(err) {
    alert(err.message)
  } else {
    document.getElementById('imgContainer').src = ret.data
  }
})
```

#### native.setClipboard

Sets a text to the user's clipboard.

| Params | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| text | String | true | null | text to set |


```javascript
bycoin.callAPI('native.setClipboard', 'are you ok?')
```

#### native.share

Opens the native share component.

| Params | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| title | String | true | null | title |
| message | String | true | null | content |
| url | String | true | null | link. If you want to share an image, set url to base64 data |


```javascript
bycoin.callAPI('native.share', {
    title: 'dapp example',
    message: 'this is example of dapp sdk',
    url: location.href,
  }, function (err, ret) {
    if(err) {
      alert(err.message)
    } else {
      alert('share success!')
    }
  })
```

#### native.scanQRCode

Opens a scanner to scan a QRCode. Returns String content of the QRCode.

```javascript
bycoin.callAPI('native.scanQRCode', function (err, text) {
    if(err) {
      alert(err.message)
    } else {
      alert(text)
    }
  })
```

### device

#### device.getCurrentLanguage

Gets the user's current language setting. If your DApp should support multiple languages, this information may be useful, but we have added the locale parameter to the DApp's url. In most cases you do not need to call this API.

Available locale:

- zh-CN
- en-US

```javascript
bycoin.callAPI('device.getCurrentLanguage', function(err, language) {
  if(err) {
    alert(err)
  } else {
    alert(language)
  }
})
```

#### device.getCurrentCurrency

Gets the user's current currency setting.

Available currencies:

- CNY
- USD
- BTC

```javascript
bycoin.callAPI('device.getCurrentCurrency', function(err, currency) {
  if(err) {
    alert(err)
  } else {
    alert(currency)
  }
})
```

