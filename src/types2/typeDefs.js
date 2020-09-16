const { gql } = require('apollo-server-koa');
// # 
module.exports = gql`
# scalar Upload
  type Query {
    hello: String!
  }
  # type Mutation{
  #   singleUpload(file: Upload!): File!
  # }
  # type File {
  #   id: ID!
  #   path: String!
  #   filename: String!
  #   mimetype: String!
  # }
`;
