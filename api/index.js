const express = require('express');
const { GraphQLClient } = require('graphql-request');
const router = express.Router();
const cors = require('./cors');

const endpoint = 'https://api.graph.cool/simple/v1/ffconf';

const client = new GraphQLClient(endpoint, { headers: {} });

module.exports = router;

router.use(cors);

router.get('/', (req, res, next) => {
  client
    .request(
      `{
          allEvents(orderBy:year_ASC) {
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

router.get('/:year?', (req, res, next) => {
  const { year } = req.params;
  client
    .request(
      `{
        Event(year:${year}) {
          sessions(orderBy:order_ASC) {
            slug
            order
            title
            description
          }
        }
      }`
    )
    .then(results => res.status(200).json(results.Event.sessions))
    .catch(next);
});

router.get('/:slug?', (req, res, next) => {
  const { slug } = req.params;
  client
    .request(
      `{
        Session(slug:"${slug}") {
          title
          slug
          description
          time
          event {
            year
          }
          slides
          video
        }
      }`
    )
    .then(results => res.status(200).json(results.Session))
    .catch(next);
});

router.use((error, req, res, next) => {
  if (error.response) {
    error = error.response;
  }
  res.status(400).json(error);
});
