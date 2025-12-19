const { graphql } = require('graphql');
const { schema } = require('../../graphql');

const query = `query {
  events(orderBy:year_ASC) {
    year
  }
}`;

module.exports = async () => {
  const { data, errors } = await graphql({ schema, source: query });

  if (errors && errors.length) {
    const messages = errors.map((e) => e.message).join('; ');
    throw new Error(messages);
  }

  return data.events.map((_) => parseInt(_.year, 10));
};
