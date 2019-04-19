const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
  playground: true,
});

server.express.disable('x-powered-by');

module.exports = {
  resolvers,
  GraphQLServer,
  server,
};

const port = process.env.PORT;

if (!module.parent) {
  server.start({ port }, url => {
    console.log(`🚀📈 Server ready at http://localhost:${url.port}`);
  });
}
