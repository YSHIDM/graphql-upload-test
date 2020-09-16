const Koa = require('koa');
const { ApolloServer } = require("apollo-server-koa");
// const { resolvers } = require("./types2/resolvers");
// const { typeDefs } = require("./types2/typeDefs");
const schema = require('./schema')

const app = new Koa();

const server = new ApolloServer({
    // typeDefs,
    // resolvers,
    // mocks: true
    schema
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
