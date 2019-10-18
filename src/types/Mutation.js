const { GraphQLUpload } = require('apollo-server-koa')
const { GraphQLList, GraphQLObjectType, GraphQLNonNull } = require('graphql')
const promisesAll = require('promises-all')
const { FileType } = require('./File')
const fs = require('fs');
const path = require('path');

exports.MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    singleUpload: {
      description: 'Stores a single file.',
      type: GraphQLNonNull(FileType),
      args: {
        file: {
          description: 'File to store.',
          type: GraphQLNonNull(GraphQLUpload)
        }
      },
      resolve: async (parent, { file }, { storeUpload }) => {
        console.log('file', file)
        let f = await Promise.all(file)

        f[0].createReadStream().pipe(fs.createWriteStream(path.join(__dirname, '../../images/', f[0].filename)))
        // File upload property ‘stream’ is deprecated. Use ‘createReadStream()’ instead.
        // f[0].stream.pipe(fs.createWriteStream(__dirname+'/'+f[0].filename)) // 不建议
        console.log('ok')
        return {
          id: '1',
          path: __dirname + '/' + f[0].filename,
          filename: f[0].filename,
          mimetype: f[0].mimetype
        }
      }
    },
    multipleUpload: {
      description: 'Stores multiple files.',
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(FileType))),
      args: {
        files: {
          description: 'Files to store.',
          type: GraphQLNonNull(GraphQLList(GraphQLNonNull(GraphQLUpload)))
        }
      },
      async resolve(parent, { files }, { storeUpload }) {
        const { resolve, reject } = await promisesAll.all(
          files.map(storeUpload)
        )

        if (reject.length)
          reject.forEach(({ name, message }) =>
            console.error(`${name}: ${message}`)
          )

        return resolve
      }
    }
  })
})
