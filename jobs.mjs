import { parse } from 'csv-parse/sync';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import fetch from 'node-fetch';
import slugify from 'slugify';

const url =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSW2DHW7Optt8J5aRYmYyHF3Vkx5ixbgnX8ZVcDBXNeE_0WRkcigY3PYVbQUfpvj_yrtNdAvK4jjbW3/pub?output=csv';

async function main() {
  const res = await fetch(url);
  const text = await res.text();
  const records = parse(text, {
    columns: [
      'timestamp',
      'email',
      'title',
      'description',
      'city',
      'country',
      'type',
      'company',
      'url',
      'from',
      'promote',
      'salary',
      'approved',
    ],
    skip_empty_lines: true,
    from: 2,
  });

  writeFileSync(
    resolve('src', '_data', 'jobs.json'),
    JSON.stringify(
      records
        .map((_) => {
          if (_.from) {
            // _.from = new Date(_.from);
          } else {
            _.from = _.timestamp;
          }

          _.type = _.type.split(', ');

          _.slug = slugify(
            `${_.company} - ${_.title} ${new Date(_.from).getFullYear()}-${
              new Date(_.from).getMonth() + 1
            }`,
            { lower: true }
          );

          if (!_.approved || _.approved.toLowerCase() === 'n') {
            _.approved = false;
          } else {
            _.approved = true;
          }

          if (!_.url.startsWith('http')) {
            _.url = 'https://' + _.url;
          }

          return _;
        })
        .filter((_) => {
          if (!_.approved) {
            return false;
          }

          return true;

          // also if expired
        })
    )
  );
}

main().catch((E) => console.log(E));
