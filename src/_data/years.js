const talks = require('./talks');

module.exports = async () => {
  const sessions = await talks();

  const res = Array.from(
    new Set(
      sessions.reduce((acc, curr) => {
        const res = curr.event.year;

        if (Array.isArray(res)) {
          return [...res, ...acc];
        }

        return [res, ...acc];
      }, [])
    )
  ).sort();
  return res;
};
