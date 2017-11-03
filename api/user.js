const express = require('express');
const { GraphQLClient } = require('graphql-request');
const router = express.Router();

const endpoint = 'https://api.graph.cool/simple/v1/ffconf';

const client = new GraphQLClient(endpoint, { headers: {} });

module.exports = router;

router.post('/', (req, res) => {
  console.log(req.body.username);
  res.status(400).send({ error: 'failed' });
});
