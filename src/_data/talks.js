const { createTestClient } = require('apollo-server-testing');
const { server } = require('../../graphql');

const query = `query {
  sessions(orderBy:order_ASC) {
    title
    slug
    time
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

const client = createTestClient(server);

module.exports = () => {
  return new Promise((resolve, reject) => {
    client
      .query({ query })
      .then(({ data }) => {
        resolve(
          data.sessions.sort((a, b) => {
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
