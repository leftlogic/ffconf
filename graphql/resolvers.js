const events = require('./data/events.json');
const sessions = require('./data/sessions.json');
const speakers = require('./data/speakers.json');

function get(source, key, match) {
  return source.find((_) => _[key] === match);
}

function getAll(source, key, match) {
  return source.filter((_) => _[key] === match);
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
    session: (parent) => get(sessions, 'speakerId', parent.id),
    websites: (parent) =>
      Object.entries(get(speakers, 'id', parent.id).websites || {}).map(
        ([title, url]) => ({ title, url })
      ),
  },
  Session: {
    event: (parent) => {
      return get(events, 'id', parent.eventId);
    },
    speaker: (parent) => {
      return get(speakers, 'id', parent.speakerId);
    },
  },
  Event: {
    sessions: (parent, { where, orderBy, live }) => {
      let s = Array.from(sessions);
      if (parent && parent.id) {
        s = getAll(sessions, 'eventId', parent.id);
      }

      if (where) {
        if (where.tag) {
          s = s.filter((_) => _.tags.includes(where.tag));
        }

        if (where.id) {
          s = s.filter((_) => _.id === where.id);
        }

        if (where.slug) {
          s = s.filter((_) => _.slug === where.slug);
        }

        if (where.year) {
          s = s.filter((_) => get(events, 'id', _.eventId).year === where.year);
        }
      }

      if (live) {
        s = s.filter((_) => get(events, 'id', _.eventId).live !== false);
      }

      if (orderBy) {
        return s.sort(order(...orderBy.split('_')));
      }

      return s;
    },
  },
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
  events: (parent, { where, orderBy, live }) => {
    let e = events;
    if (where) {
      e = events.filter(
        (_) => parseInt(_.year, 10) === parseInt(where.year, 10)
      );
    }

    if (live) {
      e = e.filter((_) => _.live !== false);
    }

    return e.sort(order(...(orderBy || 'id_ASC').split('_')));
  },
  sessions: Types.Event.sessions,
};

module.exports = {
  ...Types,
  Query,
};
