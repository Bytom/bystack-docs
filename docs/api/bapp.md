# BApp API

## BApp SDK initialization

This documentation aims to help developers of decentralized application (DApp) to leverage the DApp SDK.

In general, DApps need a host environment and the user's wallet to interact with. Just like for example Byone chrome-extension, Bycoin is providing this environment within the Bycoin wallet app.

The Bycoin DApp browser lets your DApp interact in even more complex ways, than for would be possible with other tools like Byone chrome-extension.

### Detect Bycoin and Bytom injection

In order to use the bycoin and bytom api call, add the eventListener into the document is essential.

```javascript
document.addEventListener('chromeBytomLoaded', function () {
  //detect and use the relevant window.bytom and window.bycoin.
 })
```

### Access Account information

When you’re ready to request the user to access the account information, you can call this simple method:

```javascript
bytom.enable()
```

This promise-returning function resolves with the current account information, which can be used as general account references when sending transactions.

Over time, this method is intended to grow to include various additional parameters to help your site request all the setup it needs from the user during setup.

Since it returns a promise, if you’re in an async function, you may log in like this:

```javascript
const default_ account = await bytom.enable()
```

