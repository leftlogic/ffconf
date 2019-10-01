const { ApolloServer, gql } = require('apollo-server-micro');
const { readFileSync } = require('fs');
const resolvers = require('./resolvers');

const typeDefs = gql(readFileSync(__dirname + '/schema.graphql', 'utf8'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

if (module.parent) {
  module.exports = {
    resolvers,
    server
  };
} else {
  module.exports = server.createHandler({ path: '/' });
}

// if (!module.parent) {
//   app.listen({ port }, () => {
//     console.log(
//       `🚀📈 Server ready at http://localhost:${port}${server.graphqlPath}`
//     );
//   });
// }

// const port = process.env.PORT || 7000;

// if (!module.parent) {
//   app.listen({ port }, () => {
//     console.log(
//       `🚀📈 Server ready at http://localhost:${port}${server.graphqlPath}`
//     );
//   });
// }
