const express = require('express');
const { GraphQLClient } = require('graphql-request');
const router = express.Router();
const { json } = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('./cors');
const LRU = require('lru-cache');
const cache = LRU({ max: 500 });

const endpoint = 'https://api.graph.cool/simple/v1/ffconf';

const client = new GraphQLClient(endpoint, { headers: {} });

module.exports = router;

router.use(cors);
router.use(cookieParser());
router.use(json());

router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);

  if (req.method === 'GET') {
    const cached = cache.get(req.path);
    if (cached) {
      return res.send(cached);
    }
  }

  next();
});

router.use('/user', require('./user'));
router.use('/session', require('./session'), (req, res) => {
  if (res.locals.data) {
    cache.set(req.baseUrl + req.path, res.locals.data);
    return res.json(res.locals.data);
  }

  res.json({ error: 'no data' });
});

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
      cache.set(req.path, results.allEvents);
      res.status(200).json(results.allEvents);
    })
    .catch(next);
});

router.get('/event/:year?', (req, res, next) => {
  const { year } = req.params;

  client
    .request(
      `{
        Event(year:${year}) {
          sessions(orderBy:order_ASC) {
            slug
            order
            time
            title
            description
            speaker {
              name
              twitter
              photo
              bio
            }
          }
        }
      }`
    )
    .then(results => {
      cache.set(req.path, results.Event.sessions);
      res.status(200).json(results.Event.sessions);
    })
    .catch(next);
});

router.use((error, req, res, next) => {
  if (error.response) {
    error = error.response;
  }
  res.status(400).json(error);
});
