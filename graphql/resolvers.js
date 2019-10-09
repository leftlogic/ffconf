const events = require('./data/events.json');
const sessions = require('./data/sessions.json');
const speakers = require('./data/speakers.json');

function get(source, key, match) {
  return source.find(_ => _[key] === match);
}

function getAll(source, key, match) {
  return source.filter(_ => _[key] === match);
}

function order(field, direction) {
  direction = direction === 'ASC' ? -1 : 1;
  return (a, b) => {
    // console.log(a[field], field, direction);

    return a[field] < b[field] ? direction : direction * -1;
  };
}

const Types = {
  Speaker: {
    session: parent => get(sessions, 'speakerId', parent.id),
    websites: parent =>
      Object.entries(get(speakers, 'id', parent.id).websites || {}).map(
        ([title, url]) => ({ title, url })
      )
  },
  Session: {
    event: parent => {
      return get(events, 'id', parent.eventId);
    },
    speaker: parent => {
      return get(speakers, 'id', parent.speakerId);
    }
  },
  Event: {
    sessions: (parent, { where, orderBy }) => {
      let s = Array.from(sessions);
      if (parent && parent.id) {
        s = getAll(sessions, 'eventId', parent.id);
      }

      if (where) {
        if (where.id) {
          s = s.filter(_ => _.id === where.id);
        }

        if (where.slug) {
          s = s.filter(_ => _.slug === where.slug);
        }
      }

      if (orderBy) {
        return s.sort(order(...orderBy.split('_')));
      }

      return s;
    }
  }
};

const Query = {
  tags: () => {
    return Array.from(
      new Set(sessions.reduce((acc, curr) => [...curr.tags, ...acc], []))
    ).sort();
  },
  speaker: (parent, { id, twitter }) => {
    if (id) {
      return get(speakers, 'id', id);
    }

    return get(speakers, 'twitter', twitter);
  },
  event: (parent, { year }) => {
    return get(events, 'year', parseInt(year, 10));
  },
  events: (parent, { where, orderBy }) => {
    let e = events;
    if (where) {
      e = events.filter(_ => parseInt(_.year, 10) === parseInt(where.year, 10));
    }

    return e.sort(order(...(orderBy || 'id_ASC').split('_')));
  },
  sessions: Types.Event.sessions
};

module.exports = {
  ...Types,
  Query
};
