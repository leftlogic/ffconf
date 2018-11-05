const express = require('express');
const { GraphQLClient } = require('graphql-request');
const jwt = require('jwt-decode');
const router = express.Router();

const endpoint = 'https://api.graph.cool/simple/v1/ffconf';

const client = new GraphQLClient(endpoint, { headers: {} });

module.exports = router;

router.get('/', (req, res, next) => {
  res.status(400).send(false);
});

router.delete('/', (req, res) => {
  res.cookie('token', '', { expires: new Date() });
  res.status(200).json(true);
});

router.get('/notes', (req, res, next) => {
  const userId = jwt(req.cookies.token).userId;
  const query = `query {
    User(id:"${userId}") {
      note {
        id
        contents
        session {
          title
          slug
        }
      }
    }
  }`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${req.cookies.token}`,
    },
  });

  client
    .request(query)
    .then(results => res.json(results.User.note))
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { email, password } = req.body;

  const query = `mutation auth($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`;

  client
    .request(query, { password, email })
    .catch(() => {
      const query = `mutation signIn($email: String!, $password: String!) {
        signupUser(email: $email, password: $password) {
          id
          token
        }
      }`;
      return client.request(query, { password, email });
    })
    .then(reply => {
      let root = reply.signupUser ? 'signupUser' : 'authenticateUser';
      res.cookie('token', reply[root].token, { httpOnly: false });
      res
        .status(root === 'signupUser' ? 201 : 200)
        .send({ token: reply[root].token });
    })
    .catch(e => {
      next({ error: e.response.errors[0].functionError });
    });
});
