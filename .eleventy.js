const { basename } = require('path');
const markdownIt = require('markdown-it');
const undefsafe = require('undefsafe');
const format = require('date-fns/format');
const pluginRss = require('@11ty/eleventy-plugin-rss');
let env = process.env.ELEVENTY_ENV;

const options = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdown = markdownIt(options);

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
  eleventyConfig.addFilter('kebab', require('./src/site/_filters/kebab'));
  eleventyConfig.addFilter('markdown', s => markdown.render(s));
  eleventyConfig.addFilter('format', (s, fmt) =>
    format(s, fmt || 'dddd D MMM YYYY')
  );
  eleventyConfig.addFilter('filename', s => {
    if (s) return basename(s);
  });
  eleventyConfig.addFilter(
    'stringify',
    require('./src/site/_filters/stringify')
  );

  eleventyConfig.addFilter('shuffle', a =>
    a.sort((a, b) => (Math.random() < 0.5 ? -1 : 1))
  );

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

  // static passthroughs
  eleventyConfig.addPassthroughCopy('src/site/fonts');
  eleventyConfig.addPassthroughCopy('src/site/images');
  eleventyConfig.addPassthroughCopy('src/site/css');
  // eleventyConfig.addPassthroughCopy('src/site/manifest.json');
  // eleventyConfig.addPassthroughCopy('src/site/browserconfig.xml');

  eleventyConfig.addCollection('articles', function(collection) {
    const res = collection.getAllSorted().filter(function(item) {
      return (
        item.inputPath.includes('/articles/') && item.inputPath.endsWith('.md')
      );
    });

    const others = require('./src/site/articles/articles.json').posts.map(
      post => {
        return {
          data: { ...post, tags: ['write up'] },
          url: post.url,
        };
      }
    );

    return [...res, ...others].sort((a, b) => {
      return new Date(a.data.date).getTime() < new Date(b.data.date).getTime()
        ? 1
        : -1;
    });
  });

  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false,
  });

  // make the prime target act like prod
  env = env == 'prime' ? 'prod' : env;
  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      // data: `_data/${env}`,
    },
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
