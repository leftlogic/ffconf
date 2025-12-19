const { graphql } = require('graphql');
const { schema } = require('../../graphql');

const query = `query {
  sessions(orderBy:order_ASC, live:true) {
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
    speaker {
      name
      photo
      twitter
      bio
      websites {
        title
        url
      }
    }
  }
}`;

module.exports = async () => {
  const { data, errors } = await graphql({ schema, source: query });

  if (errors && errors.length) {
    const messages = errors.map((e) => e.message).join('; ');
    throw new Error(messages);
  }

  return data.sessions.sort((a, b) => {
    if (a.event.year === b.event.year) {
      return a.order < b.order ? -1 : 1;
    }

    return a.event.year > b.event.year ? -1 : 1;
  });
};
