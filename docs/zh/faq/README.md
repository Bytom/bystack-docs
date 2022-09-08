---
sidebar: auto
---

# FAQ


## 1. 如何连接远程全节点服务器

远程服务需要本地生成的Access-token，可以通过以下两种方式获得access-token：

```
./bytomcli create-access-token test
```

或者:

```
curl -X POST create-access-token -d '{"id":"test"}'`
```

如下：

```
"created_at": "2018-05-18T16:00:25.284677605+08:00",
"id": "test", //账户
"token":"test:fe50927ddaa5bcca77021e9f50fa5ef236a6140c012d1fe2eb9241f61a9228e4, //密码
```

postman的方式，设置Authorization为Basic Auth，然后填写账户名和密码

Java代码调用如下：

```
String auth = Username + ":" + Password;
byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
String authHeader = "Basic " + new String(encodedAuth);
Map<String, String> header = new LinkedHashMap<String, String>();
header.put("Authorization", authHeader);
```

## 2. 错误：{"status":"fail","msg":"tx rejected: checking result 0: checking output source: checking value source: checking mux source 0: checking value source: checking issuance program: pushing initial argument 0: run limit exceeded"}

交易费gas给少了

## 3. reservation found outputs already reserved

表示该账户的utxo被暂时缓存，建议隔几分钟后再发该交易，一般是交易密码错误

## 4. build里面那个ttl是干嘛用的？

ttl表示utxo的缓存时间， reservation found outputs already reserved, 这个错误对应的时间，time_range 是为了延迟交易上链的一个时间戳，ttl 为 0 的话会采用默认的时间，大概2两个块的时间（五分钟），超过ttl不能重新 build-transaction

## 5. 一笔交易最大可以支持多少上链数据？

上链数据和gas上限有关，现在比原链数据上限为175000字节 = 170 KB

## 6. 如何配置区块数据到指定位置

```
./bytomd node --mining --home <config_and_data_path>
```


















## 为什么不能把 `palette.styl` 和 `index.styl` 合并到一个 API?

`palete.styl` 负责全局颜色设置。在编译期间，主题颜色常量应该首先由预处理器解析，然后应用于全局上下文。

但对于 `index.styl`，它的工作是重写应用的默认样式。根据 CSS 的优先级原则，后一种样式具有更高的优先级，因此应该在 CSS 文件的末尾生成。

描述 stylus 编译器编译顺序的简单图表如下：

@flowstart
stage1=>operation: palette.styl
stage2=>operation: 默认 app 样式
stage3=>operation: index.styl

stage1->stage2->stage3
@flowend

<br>

## `clientDynamicModules` 和 `enhanceAppFiles` 的区别是什么?

让我们先来回顾一下，`clientDynamicModules` 和 `enhanceAppFiles` 都可以在编译期间通过动态 JavaScript 代码生成模块。

不同之处在于，当应用在客户端初始化时，`enhanceAppFiles` 生成的文件会自动加载和使用；而 `clientDynamicModules` 生成的文件则需要用户自己引入 `@dynamic/xxx`。

```js
module.exports = (options, ctx) => ({
  // 被入口文件自动引入
  enhanceAppFiles: {
    name: 'constans-a',
    content: `...`
  },

  // 需要引入 '@dynamic/constans-b' 后使用
  clientDynamicModules() {
    return {
      name: 'constans-b',
      content: `...`
    }
  }
})
```

## 什么时候需要使用 `enhanceAppFiles`?

1. 当你需要在客户端自动执行一些代码时；
2. 当你不需要复用这个模块时。

**比如：**

- [@vuepress/plugin-register-components](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components/index.js#L24)：在客户端自动注册组件
- [@vuepress/plugin-google-analytics](https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/plugin-google-analytics/enhanceAppFile.js)：自动配置 Google Analytics

## 什么时候需要使用 `clientDynamicModules`?

1. 当你需要生成一个在特定时间被调用的动态模块时；
2. 当你需要复用这个模块。

**比如：**

- [@vuepress/plugin-blog](https://github.com/vuepressjs/vuepress-plugin-blog/blob/master/src/node/index.ts#L208)：使用编译期元数据生成一些博客相关的动态模块并通过 `enhanceAppFiles` 将他们在客户端初始化

