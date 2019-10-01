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

module.exports = server.createHandler({ path: '/' });
module.exports.resolvers = resolvers;
module.exports.server = server;
