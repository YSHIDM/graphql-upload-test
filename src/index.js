import Koa from "koa";
import { ApolloServer } from "apollo-server-koa";
// import { resolvers } from "./types2/resolvers";
// import { typeDefs } from "./types2/typeDefs";
const { schema } = require('./schema')

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
