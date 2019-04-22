// const { GraphQLClient } = require('graphql-request');
// const endpoint = 'http://localhost:7000';
// const client = new GraphQLClient(endpoint, { headers: {} });
const query = `query {
  sessions(orderBy:order_ASC) {
    title
    slug
    description
    video
    audio
    slides
    order
    tags
    event {
      year
    }
    speaker{
      name
      photo
      twitter
      bio
    }
  }
}`;

const client = { request: () => Promise.resolve(require('./_talks.json')) };

module.exports = () => {
  return new Promise((resolve, reject) => {
    client
      .request(query)
      .then(res => {
        resolve(
          res.sessions.sort((a, b) => {
            if (a.event.year === b.event.year) {
              return a.order < b.order ? -1 : 1;
            }

            return a.event.year > b.event.year ? -1 : 1;
          })
        );
      })
      .catch(reject);
  });
};
