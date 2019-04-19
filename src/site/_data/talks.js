const { GraphQLClient } = require('graphql-request');

// const endpoint = 'https://api.graph.cool/simple/v1/ffconf';
const endpoint = 'http://localhost:7000';

const client = new GraphQLClient(endpoint, { headers: {} });

const query = `query {
  sessions(orderBy:order_ASC) {
    title
    slug
    description
    video
    audio
    slides
    order
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

// const data = require('./_talks.json');
// const p = () => new Promise(resolve => resolve(data));

module.exports = () => {
  return new Promise((resolve, reject) => {
    client
      .request(query)
      // p()
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
