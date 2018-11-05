const express = require('express');
const { GraphQLClient } = require('graphql-request');
const jwt = require('jwt-decode');
const router = express.Router();
const LRU = require('lru-cache');
const cache = LRU({ max: 500 });

const endpoint = 'https://api.graph.cool/simple/v1/ffconf';

const client = new GraphQLClient(endpoint, { headers: {} });

module.exports = router;

const getToken = req => {
  let token = req.cookies.token;

  if (!token && req.headers.authorization) {
    const [, t] = req.headers.authorization.split(' ');
    token = t;
  }

  return token;
};

router.get('/', (req, res, next) => {
  const token = getToken(req);

  if (!token) {
    return res.status(400).json({ error: 'invalid token' });
  }

  let userId = null;
  try {
    const parsed = jwt(token);
    userId = parsed.userId;
  } catch (e) {
    return res.status(400).json({ error: 'invalid token' });
  }

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const query = `query getUser($userId:ID!) {
    User(id:$userId) {
      email
      avatar
    }
  }`;

  client
    .request(query, { userId })
    .then(results => res.json(results.User))
    .catch(next);
});

router.delete('/', (req, res) => {
  res.cookie('token', '', { expires: new Date() });
  res.status(200).json(true);
});

router.get('/notes/:slug', (req, res, next) => {
  const token = getToken(req);
  const { userId } = jwt(token);

  const note = cache.get(`note-${userId}-${req.params.slug}`);

  res.status(note ? 200 : 404).json(note || {});
  return;

  const query = `query getNotesForSlug($slug:String!){
    allNotes(filter:{session:{slug:$slug}}) {
      contents
      rating
      id
    }
  }`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  client
    .request(query, { slug: req.params.slug })
    .then(results => res.json(results.User.note))
    .catch(next);
});

router.post('/notes/:slug', (req, res, next) => {
  const token = getToken(req);
  const { userId } = jwt(token);

  cache.set(`note-${userId}-${req.params.slug}`, req.body);

  return res.json(true);

  const query = `query sessions($slug:String!) {
    allSessions(filter:{slug:$slug}) {
      id
    }
  }`;

  const mutation = `mutation createNote($contents: String!, $sessionId: ID!, $userId: ID!, $rating: Int!) {
    createNote(
      contents: $contents,
      sessionId: $sessionId,
      userId: $userId,
      rating: $rating
    ) {
      id
    }
  }
  `;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  client
    .request(query, { slug: req.params.slug })
    .then(results => {
      const sessionId = results.allSessions[0].id;
      return client.request(mutation, {
        sessionId,
        userId,
        contents: req.body.contents || '',
        rating: req.body.rating || 0,
      });
    })
    .then(() => {
      res.json(true);
    })
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
