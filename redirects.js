const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const Talks = require('./src/site/_data/talks');

const main = async () => {
  const files = await readdir(__dirname + '/redirects');
  const contents = await Promise.all(
    files.map(filename => {
      return readFile(__dirname + '/redirects/' + filename, 'utf8').then(
        url => {
          return `/${filename.trim()} ${url.trim()} 307`;
        }
      );
    })
  );

  const talks = await Talks();

  // add the api
  contents.push(
    '/api /api/index.json',
    '/api/event/2018 /api/event/2018/index.json'
  );

  await writeFile(__dirname + '/dist/_redirects', contents.join('\n'));
};

main();
