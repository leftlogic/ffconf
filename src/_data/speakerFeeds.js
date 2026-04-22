const feeds = require('./feeds.json');
const talks = require('./talks');
const liveYears = require('../../graphql/data/events.json')
  .filter((_) => _.live !== false)
  .map((_) => _.year);

const normalise = (s) =>
  (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

module.exports = async () => {
  const allTalks = (await talks()).filter((t) =>
    liveYears.includes(parseInt(t.event.year, 10))
  );

  const feedByName = new Map();
  for (const f of feeds) {
    feedByName.set(normalise(f.name), f);
  }

  const matched = [];

  for (const talk of allTalks) {
    if (!talk.speaker) continue;
    const key = normalise(talk.speaker.name);
    let feed = feedByName.get(key);

    if (!feed) {
      for (const f of feeds) {
        const fk = normalise(f.name);
        if (
          fk.includes(key) ||
          key.includes(fk) ||
          fk.split(' ').every((part) => key.includes(part))
        ) {
          feed = f;
          break;
        }
      }
    }

    if (!feed) continue;

    matched.push({
      name: talk.speaker.name,
      photo: talk.speaker.photo,
      bio: talk.speaker.bio || '',
      homepage: feed.homepage,
      feed: feed.feed,
      talk: {
        title: talk.title,
        slug: talk.slug,
        description: talk.description || '',
        year: talk.event.year,
        tags: talk.tags || [],
      },
    });
  }

  matched.sort((a, b) => {
    if (a.talk.year !== b.talk.year) return b.talk.year - a.talk.year;
    return a.name.localeCompare(b.name);
  });

  const years = Array.from(new Set(matched.map((m) => m.talk.year))).sort(
    (a, b) => b - a
  );
  const tags = Array.from(
    new Set(matched.flatMap((m) => m.talk.tags))
  ).sort();

  return { entries: matched, years, tags };
};
