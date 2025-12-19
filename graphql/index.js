const { createYoga, createSchema } = require('graphql-yoga');
const { readFileSync } = require('fs');
const path = require('path');
const resolvers = require('./resolvers');

const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');

const schema = createSchema({ typeDefs, resolvers });

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/',
  landingPage: true,
});

module.exports = yoga;
module.exports.resolvers = resolvers;
module.exports.yoga = yoga;
module.exports.schema = schema;
