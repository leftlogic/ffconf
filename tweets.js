const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const urls = require('./src/site/_data/twitter-urls.json');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const parse = require('date-fns/parse');

const mock = {
  url: 'https://twitter.com/miss_jwo/status/1060964945716805633',
  author_name: 'Jenny Wong 🐝',
  author_url: 'https://twitter.com/miss_jwo',
  html:
    '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Hey <a href="https://twitter.com/hashtag/FFConf?src=hash&amp;ref_src=twsrc%5Etfw">#FFConf</a>, slides are now online ➡️  <a href="https://t.co/k21cAmlBdg">https://t.co/k21cAmlBdg</a>  ( you can also see previous deck editions too )<br><br>I will be using the transcript to do some more in-depth explanations of the thought process behind some of the ideas and share more stuff with the community.</p>&mdash; Jenny Wong 🐝 (@miss_jwo) <a href="https://twitter.com/miss_jwo/status/1060964945716805633?ref_src=twsrc%5Etfw">November 9, 2018</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n',
  width: 550,
  height: null,
  type: 'rich',
  cache_age: '3153600000',
  provider_name: 'Twitter',
  provider_url: 'https://twitter.com',
  version: '1.0',
};

console.clear();

function getId(url) {
  return url.split('/').pop();
}

async function getJSON(id) {
  // return mock;

  const url = `https://cdn.syndication.twimg.com/tweets.json?ids=${id}&lang=en&suppress_response_codes=true&theme=light&tz=GMT%2B0100`;

  const res = await fetch(url, {
    headers: {},
  });

  const json = await res.json();

  let body = json[id];
  // body = body.replace(/<a class="calltoaction".*<\/a>/is, ''); // remove call to action
  // body = body.replace(
  //   /<div class="TweetInfo">.*?<\/blockquote>/is,
  //   '</blockquote>'
  // );

  const $ = cheerio.load(body);

  // const date = body.match(/datetime="(.*?)"/)[1];
  const date = $('time').attr('datetime');
  $('.EmbeddedTweet-ancestor').remove();
  $('.CallToAction').remove();
  $('.TweetInfo').remove();

  const images = $('.MediaCard-mediaAsset img')
    .map((i, el) => {
      const $el = $(el);
      const url = $el.attr('data-image') + '.jpg';
      return url;
    })
    .get();

  const avatar = $('img.Avatar').attr('data-src-2x');
  const username = $('.TweetAuthor-screenName').text();
  const tweetUrl = $('blockquote').attr('cite');

  return {
    source: json[id],
    images,
    body: $('.e-entry-content').html(),
    date,
    url: tweetUrl,
    avatar,
    username,
  };
}

function getContent(json) {
  const { html, author_name: name, author_url: url } = json;

  const username = url.split('/').pop();

  const $ = cheerio.load(html);
  const body = $('blockquote > p').html();
  const date = $('blockquote > a').text();

  console.log({
    body,
    date: parse(date),
    name,
    username,
  });
}

async function main() {
  const content = await Promise.all(
    urls.map(url => {
      const id = getId(url);
      return getJSON(id);
    })
  );

  await writeFile('./src/site/_data/tweets.json', JSON.stringify(content));
}

main();
