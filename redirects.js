const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const Talks = require('./src/_data/talks');

const main = async () => {
  const files = await readdir(__dirname + '/redirects');
  const contents = await Promise.all(
    files.map((filename) => {
      return readFile(__dirname + '/redirects/' + filename, 'utf8').then(
        (url) => {
          return `/${filename.trim()} ${url.trim()} 302`;
        }
      );
    })
  );

  const talks = await Talks();
  const years = new Set();

  // add the api
  contents.push(
    '/graphql https://ffconf-graphql.isthe.link/ 200',
    '/api /api/index.json 200',
    '/api/help /api/help/index.json 200',
    ...talks.map((_) => {
      years.add(_.event.year);
      return `/api/session/${_.slug} /api/session/${_.slug}/index.json 200`;
    }),
    ...Array.from(years).map(
      (year) => `/api/event/${year} /api/event/${year}/index.json 200`
    ),
    '/api/* /api/404.json 404',
    '/* /404 404'
  );

  await writeFile(__dirname + '/dist/_redirects', contents.join('\n'));
};

main();
