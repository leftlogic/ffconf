const { createTestClient } = require('apollo-server-testing');
const { server } = require('../../graphql');

const query = `query {
  events(orderBy:year_ASC) {
    year
  }
}`;

const client = createTestClient(server);

module.exports = () => {
  return new Promise((resolve, reject) => {
    client
      .query({ query })
      .then(({ data }) => {
        resolve(data.events.map((_) => parseInt(_.year, 10)));
      })
      .catch(reject);
  });
};
