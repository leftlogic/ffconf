const express = require('express');
const { GraphQLClient } = require('graphql-request');
const router = express.Router();

const endpoint = 'https://api.graph.cool/simple/v1/ffconf';

const client = new GraphQLClient(endpoint, { headers: {} });

module.exports = router;

router.get('/', (req, res) => {
  client
    .request(
      `{
  allEvents() {
    sessions {
      title
      description
    }
  }
    }`
    )
    .then(results => {
      res.status(200).json(results);
    })
    .catch(e => {
      res.status(400).json(e.message);
    });
});

router.get('/:year/:slug?', (req, res) => {
  const filter = [];
  const { year, slug = false } = req.params;
  filter.push(`year: ${year}`);
  if (slug) {
    filter.push(`slug: ${slug}`);
  }
  client
    .request(
      `{
  allEvents(filter:{ ${filter.join(' ')} }) {
    sessions {
      title
      description
    }
  }
    }`
    )
    .then(results => res.status(200).json(results.allEvents[0].sessions))
    .catch(e => res.status(400).json(e.response || e.message));
});
