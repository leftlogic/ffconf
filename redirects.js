const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);

console.clear();

async function main() {
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

  await writeFile(__dirname + '/dist/_redirects', contents.join('\n'));
}

main();
