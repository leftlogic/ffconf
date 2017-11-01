const express = require('express');
const { GraphQLClient } = require('graphql-request');
const router = express.Router();

const endpoint = 'https://api.graph.cool/simple/v1/ffconf';

const client = new GraphQLClient(endpoint, { headers: {} });

module.exports = router;

router.get('/', (req, res, next) => {
  client
    .request(
      `{
          allEvents {
            year
            url
            sessions {
              title
              description
            }
          }
      }`
    )
    .then(results => {
      res.status(200).json(results.allEvents);
    })
    .catch(next);
});

router.get('/:year/:slug?', (req, res, next) => {
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
    .catch(next);
});

router.use((error, req, res, next) => {
  if (error.response) {
    error = error.response;
  }
  res.status(400).json(error);
});
