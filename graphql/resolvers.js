const events = require('../data/events.json');
const sessions = require('../data/sessions.json');
const speakers = require('../data/speakers.json');

function get(source, key, match) {
  return source.find(_ => _[key] === match);
}

function getAll(source, key, match) {
  return source.filter(_ => _[key] === match);
}

const Types = {
  Speaker: {
    session: parent => get(sessions, 'speakerId', parent.id),
    websites: parent =>
      Object.entries(get(speakers, 'id', parent.id).websites || {}).map(
        ([title, url]) => ({ title, url })
      ),
  },
  Session: {
    event: parent => {
      return get(events, 'id', parent.eventId);
    },
    speaker: parent => {
      console.log(parent);
      return get(speakers, 'id', parent.speakerId);
    },
  },
  Event: {
    sessions: parent => getAll(sessions, 'eventId', parent.id),
  },
};

const Query = {
  speaker: (parent, { id, twitter }) => {
    if (id) {
      return get(speakers, 'id', id);
    }

    return get(speakers, 'twitter', twitter);
  },
  event: (parent, { year }) => {
    return get(events, 'year', parseInt(year, 10));
  },
  sessions: (parent, { where }) => {
    if (where) {
      return [];
    }

    return sessions;
  },
};

module.exports = {
  ...Types,
  Query,
};
