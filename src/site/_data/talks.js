const { GraphQLClient } = require('graphql-request');

// const endpoint = 'https://api.graph.cool/simple/v1/ffconf';

// const client = new GraphQLClient(endpoint, { headers: {} });

const query = `query {
  allSessions(orderBy:order_ASC) {
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

const data = require('./_talks.json');
const p = () => new Promise(resolve => resolve(data));

module.exports = () => {
  return new Promise((resolve, reject) => {
    // client
    //   .request(query)
    p()
      .then(res => {
        resolve(
          res.allSessions.sort((a, b) => {
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
