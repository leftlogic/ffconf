const express = require('express');
const { GraphQLClient } = require('graphql-request');
const router = express.Router();

const endpoint = 'https://api.graph.cool/simple/v1/ffconf';

const client = new GraphQLClient(endpoint, { headers: {} });

module.exports = router;

router.get('/', (req, res, next) => {
  console.log(req.cookies);
  res.status(400).send(false);
});

router.delete('/', (req, res) => {
  res.cookie('token', '', { expires: new Date() });
  res.status(200).json(true);
});

router.post('/', (req, res, next) => {
  const { email, password } = req.body;

  const query = `mutation {
    authenticateUser(email: "${email}", password: "${password}") {
      token
    }
  }`;

  client
    .request(query)
    .catch(() => {
      const query = `mutation {
        signupUser(email: "${email}", password: "${password}") {
          id
          token
        }
      }`;
      return client.request(query);
    })
    .then(reply => {
      let root = reply.signupUser ? 'signupUser' : 'authenticateUser';
      res.cookie('token', reply[root].token, { httpOnly: true });
      res.status(root === 'signupUser' ? 201 : 200).send(true);
    })
    .catch(e => {
      next({ error: e.response.errors[0].functionError });
    });
});
