const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { readFileSync } = require('fs');
const resolvers = require('./resolvers');

const typeDefs = gql(readFileSync(__dirname + '/schema.graphql', 'utf8'));

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.disable('x-powered-by');
server.applyMiddleware({ app, path: '/' });

module.exports = {
  resolvers,
  server
};

const port = process.env.PORT || 7000;

if (!module.parent) {
  app.listen({ port }, () => {
    console.log(
      `🚀📈 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
}
