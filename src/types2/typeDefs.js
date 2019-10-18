import { gql } from "apollo-server-koa";

// # 
export const typeDefs = gql`
# scalar Upload
  type Query {
    hello: String!
    author: Author!
    book: Book!
  }
  type Mutation{
    singleUpload(file: Upload!): File!
  }
  type File {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
  }
  type Author {
    name: String!
    age: Int!
    books: [Book!]
  }
  type Book {
    name: String!
    price: Int!
    author: Author!
  }
`;
