const Koa = require('Koa');
const bodyParser = require('koa-bodyparser');
// const { errorHandler, execute } = require('graphql-api-koa');
const { graphqlUploadKoa } = require('graphql-upload');
const schema = require('./schema');
const { resolvers } = require("./types2/resolvers");
const { typeDefs } = require("./types2/typeDefs");
const { basicGraphqlServer } = require('@crystallize/koa-middleware-apollo')
const middleware = basicGraphqlServer({
  // typeDefs,
  // resolvers,

  schema,
  // debug: true,
  // context: ({ ctx }) => {
  //  const { user } = ctx.state

  //  return { user }
  // }
})

new Koa()
  // .use(errorHandler())
  .use(bodyParser())
  .use(graphqlUploadKoa({ maxFileSize: 10000000, maxFiles: 10 }))
  // .use(execute({ schema }))
  .use(middleware)
  .listen(3001)