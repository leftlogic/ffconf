const talks = require('./_talks.json').sessions;

module.exports = () => {
  const res = Array.from(
    new Set(
      talks.reduce((acc, curr) => {
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
