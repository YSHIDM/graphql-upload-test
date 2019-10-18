const { GraphQLSchema } = require('graphql')
const { MutationType } = require('./types/Mutation')
const { QueryType } = require('./types/Query')

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})
