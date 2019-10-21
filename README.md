# graphql 上传文件

## 简介
1. 该 demo 借鉴了[apollo-server-koa-demo](https://github.com/bluedusk/apollo-server-koa-demo) 和 [apollo-upload-examples](https://github.com/jaydenseric/apollo-upload-examples)，实现了上传文件功能。

2. index.js 使用了 ApolloServer，server 使用了 koa-middleware-apollo

3. egg.js项目使用 egg-graphql 加载 schema.graphql、connector、resolver的同时，集成 koa-middleware-apollo ，项目启动未报错，前台 Docs 中没有出现通过中间件加载的 schema。

4. demo目的在于学习schema加载方式，使用中间件，目前只测试了singleUpload方法。

5. 测试工具 Altair Graphql Client，使用方式请自行查询官方文档。