const { basename } = require('path');
const markdownIt = require('markdown-it');
const undefsafe = require('undefsafe');
const format = require('date-fns/format');
const parse = require('date-fns/parse');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const Talks = require('./src/_data/talks');
let env = process.env.ELEVENTY_ENV;

const options = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdown = markdownIt(options);

const shuffle = a => a.sort((a, b) => (Math.random() < 0.5 ? -1 : 1));

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter('toFlickrLink', url => {
    const id = url
      .split('/')
      .pop()
      .split('_')
      .shift();
    return `http://flickr.com/photo.gne?id=${id}`;
  });
  eleventyConfig.addFilter('kebab', require('./src/_filters/kebab'));
  eleventyConfig.addFilter('markdown', s => markdown.render(s));
  eleventyConfig.addFilter('format', (s, fmt) =>
    format(s, fmt || 'dddd D MMM YYYY')
  );
  eleventyConfig.addFilter('pubDate', s => parse(s).toUTCString());
  eleventyConfig.addFilter('filename', s => {
    if (s) return basename(s);
  });
  eleventyConfig.addFilter('stringify', require('./src/_filters/stringify'));

  eleventyConfig.addFilter('shuffle', shuffle);

  eleventyConfig.addFilter('sortBy', (source, prop) => {
    let m = 1;
    if (prop.startsWith('-')) {
      prop = prop.slice(1);
      m = -1;
    }
    return Array.from(source).sort((a, b) => {
      return undefsafe(a, prop) < undefsafe(b, prop) ? -m : m;
    });
  });

  eleventyConfig.addFilter('filter', (source, prop, value) => {
    return source.filter(source => {
      const res = undefsafe(source, prop);
      return res === value;
    });
  });

  eleventyConfig.addFilter('jsonEscape', source =>
    source.replace(/"/g, '\\"').replace(/\n/g, '\\n')
  );

  eleventyConfig.addFilter('unique', (source, prop) => {
    const res = Array.from(
      new Set(
        source.reduce((acc, curr) => {
          const res = undefsafe(curr, prop);

          if (Array.isArray(res)) {
            return [...res, ...acc];
          }

          return [res, ...acc];
        }, [])
      )
    ).sort();

    return res;
  });

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode('involved', function(
    name,
    url,
    image,
    sub,
    what
  ) {
    return `
    <header>
      <img src="/images/involved/${image}" />
      <span>${url ? `<a href="${url}">${name}</a>` : name}<br />
        ${sub}</span>
    </header>
    <p>${what}</p>`;
  });

  // static passthroughs
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/_headers');
  // eleventyConfig.addPassthroughCopy('src/browserconfig.xml');

  eleventyConfig.addCollection('randomLatest', async function(collection) {
    const talks = await Talks();
    const year = new Date().getFullYear();
    const first = shuffle(talks.filter(_ => _.event.year == year - 1))[0];
    const second = shuffle(talks.filter(_ => _.event.year == year - 2))[0];
    return [first, second];
  });

  eleventyConfig.addCollection('articles', function(collection) {
    const res = collection.getAllSorted().filter(function(item) {
      return (
        item.inputPath.includes('/articles/') && item.inputPath.endsWith('.md')
      );
    });

    const others = require('./src/articles/articles.json').posts.map(post => {
      return {
        data: { ...post, tags: ['write up'] },
        url: post.url,
      };
    });

    return [...res, ...others].sort((a, b) => {
      return new Date(a.data.date).getTime() < new Date(b.data.date).getTime()
        ? 1
        : -1;
    });
  });

  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false,
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
