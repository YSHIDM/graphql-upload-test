const Koa = require('Koa');
const bodyParser = require('koa-bodyparser');
// const { errorHandler, execute } = require('graphql-api-koa');
const {graphqlUploadKoa} = require('graphql-upload');
const schema = require('./schema');
const {
 basicGraphqlServer,
 playground
} = require('@crystallize/koa-middleware-apollo')
const middleware = basicGraphqlServer({
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