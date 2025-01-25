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

  const jobs = records
    .map((_) => {
      if (!_.from) {
        _.from = _.timestamp;
      }

      _.promote = _.promote === 'Yes';

      if (_.from.includes('/')) {
        // fix the date to be in the format of yyyy-mm-dd
        const [date, time = '00:00:00'] = _.from.split(' ');

        const [day, month, year] = date.split('/');
        _.from = `${year}-${month}-${day} ${time}`;
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

      // if listing is older than 2 years
      if (
        new Date(_.from) < new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 2)
      ) {
        return false;
      }

      return true;

      // also if expired
    })
    .sort((a, b) => {
      // two part sort, first by promoted and date, then if it's not promoted, just by date
      if (a.promote && !b.promote) {
        return -1;
      } else if (!a.promote && b.promote) {
        return 1;
      } else {
        return new Date(b.from) - new Date(a.from);
      }
    });

  writeFileSync(resolve('src', '_data', 'jobs.json'), JSON.stringify(jobs));
}

main().catch((E) => console.log(E));
