const { GraphQLUpload } = require('graphql-upload');
export const resolvers = {
  // Upload: GraphQLUpload,
  Query: {
    hello: () => "hello dan"
  },
  Mutation: {
    async singleUpload(parent, { file }, { storeUpload }) {
      console.log(123456789)
      console.log(parent, file, storeUpload)
      let f = await Promise.all(file)

      console.log('file.createReadStream', f[0])

      f[0].createReadStream().pipe(fs.createWriteStream(__dirname + '/a.jpg'))

      console.log('ok')
      return {
        id: '1',
        path: 'ssss',
        filename: 'hhh',
        mimetype: 'type'
      }
    },
  }
};
