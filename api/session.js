const express = require('express');
const { GraphQLClient } = require('graphql-request');
const jwt = require('jwt-decode');
const router = express.Router();
module.exports = router;

const endpoint = 'https://api.graph.cool/simple/v1/ffconf';
const client = new GraphQLClient(endpoint, { headers: {} });

const clean = s => s.replace(/"/g, `\\"`).replace(/\n/g, '\\n');

const querySession = slug => `{
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
    speaker {
      name
      twitter
      photo
      bio
    }
  }
}`;

// TODO I know this should be part of the `querySession` but it's for a workshop
// so it's contrived.
const querySessionNotes = (slug, userId) => `{
  Session(slug:"${slug}") {
    sessionId:id
    note(filter:{
      user:{
        id:"${userId}"
      }
    }) {
      id
      contents
      rating
    }
  }
}`;

const mutateCreateNote = ({
  userId,
  sessionId,
  contents,
  rating,
}) => `mutation {
  createNote(
    userId: "${userId}"
    sessionId: "${sessionId}"
    contents: "${clean(contents)}"
    rating: ${rating}
  ) {
    id
  }
}`;

const mutateUpdateNote = ({ id, contents, rating }) => `mutation {
  updateNote(
    id: "${id}"
    contents: "${clean(contents)}"
    rating: ${rating}
  ) {
    id
  }
}`;

router.get('/:slug', (req, res, next) => {
  const { slug } = req.params;
  client
    .request(querySession(slug))
    .then(results => {
      res.locals.data = results.Session;
      next();
    })
    .catch(next);
});

router.get('/:slug/notes', (req, res, next) => {
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${req.cookies.token}`,
    },
  });

  const userId = jwt(req.cookies.token).userId;

  client
    .request(querySessionNotes(req.params.slug, userId))
    .then(results => res.status(200).json(results.Session.note))
    .catch(e => {
      console.log(e);
      next(e);
    });
});

router.post('/:slug/notes', (req, res, next) => {
  const { slug } = req.params;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${req.cookies.token}`,
    },
  });

  client
    .request(querySessionNotes(slug))
    .then(results => {
      const note = results.Session.note[0] || {};
      note.rating = parseInt(req.body.rating, 10);
      note.contents = req.body.contents;
      if (!note.id) {
        note.sessionId = results.Session.sessionId;
        note.userId = jwt(req.cookies.token).userId;
        return client.request(mutateCreateNote(note));
      }
      return client.request(mutateUpdateNote(note));
    })
    .then(() => res.json(true))
    .catch(e => {
      console.log(e);
      next(e);
    });
});
