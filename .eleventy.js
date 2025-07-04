const util = require('util');
const { basename } = require('path');
const markdownIt = require('markdown-it');
const undefsafe = require('undefsafe');
const { format } = require('date-fns');
const parse = require('date-fns/parse');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const Talks = require('./src/_data/talks');
const fs = require('fs');
const liveYears = require('./graphql/data/events.json')
  .filter((_) => _.live !== false)
  .map((_) => _.year);
const currentYear = require('./graphql/data/events.json')
  .filter((_) => _.live === false)
  .pop();

const options = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdown = markdownIt(options)
  .use(require('./lib/markdown-it-named-headings'))
  .use(require('markdown-it-attrs'))
  .use(require('markdown-it-implicit-figures'), {
    figcaption: true,
    lazyLoading: true,
  });
const now = Date.now();
const livePosts = (p) => p.date <= now;
const shuffle = (a) => a.sort((a, b) => (Math.random() < 0.5 ? -1 : 1));

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary('md', markdown);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter('pathExists', (path) => {
    return fs.existsSync(`./src/${path}`);
  });

  eleventyConfig.addFilter('fileExists', (path) => {
    return fs.existsSync(path);
  });

  eleventyConfig.addFilter('readFile', (path) => {
    return fs.readFileSync(path, 'utf8');
  });

  eleventyConfig.addFilter('formatSessionSummary', (content) => {
    const parts = content.split('---');
    if (parts.length !== 2) return { summary: '', content: content };

    // The summary is the last part, and the main content is everything before it
    const summary = parts[1].trim();
    const mainContent = parts[0].trim();

    return {
      summary,
      content: mainContent,
    };
  });

  eleventyConfig.addFilter('inThePast', (year) => {
    return year <= new Date().getFullYear();
  });

  eleventyConfig.addFilter('toFlickrLink', (url) => {
    const id = url.split('/').pop().split('_').shift();
    return `http://flickr.com/photo.gne?id=${id}`;
  });
  eleventyConfig.addFilter('kebab', require('./src/_filters/kebab'));
  eleventyConfig.addFilter('slugify', require('slugify'));
  eleventyConfig.addFilter('firstOf', (s) => {
    if (Array.isArray(s)) {
      return s.slice(0, 1);
    }

    return s.split(',')[0];
  });
  eleventyConfig.addFilter('markdown', (s = '') => markdown.render(s));
  eleventyConfig.addFilter('niceDomain', (s) => new URL(s).hostname);
  eleventyConfig.addFilter('format', (s, fmt) =>
    format(s, fmt || 'dddd D MMM YYYY')
  );
  eleventyConfig.addFilter('cleanUsername', (s) => {
    if (!s) return 'UNKNOWN';
    if (s[0] === '@') s = s.slice(1);
    return s.toLowerCase().replace(/@.*$/, '');
  });
  eleventyConfig.addFilter('pubDate', (s) => parse(s).toUTCString());
  eleventyConfig.addFilter('filename', (s) => {
    if (s) return basename(s);
  });
  eleventyConfig.addFilter('stringify', require('./src/_filters/stringify'));
  eleventyConfig.addFilter('repeat', (s, n) => {
    if (Array.isArray(s)) {
      return Array.from({ length: n }, () => s).flat();
    }
    return s.repeat(n);
  });

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
    return source.filter((source) => {
      const res = undefsafe(source, prop);
      return res == value;
    });
  });

  eleventyConfig.addFilter('length', (source) => source.length);

  eleventyConfig.addFilter('jsonEscape', (source) => {
    return (source || '').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  });

  eleventyConfig.addFilter('liveTalks', (talks) => {
    return talks.filter((talk) =>
      liveYears.includes(parseInt(talk.event.year, 10))
    );
  });

  eleventyConfig.addFilter('deTwitterify', (src) => {
    return `/images/posts/photos/${src.split('/').pop()}`;
  });

  // dump filter
  eleventyConfig.addFilter('dump', (src) => util.inspect(src));
  eleventyConfig.addFilter('keys', (src) => Object.keys(src));

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
  eleventyConfig.addShortcode(
    'involved',
    function (name, url, image, sub, what) {
      return `
    <header>
      <img width="36" height="36" src="/images/involved/${image}" />
      <span>${url ? `<a href="${url}">${name}</a>` : name}<br />
        ${sub}</span>
    </header>
    <p>${what}</p>`;
    }
  );

  eleventyConfig.addShortcode('ffconf', () => `FFConf`);
  eleventyConfig.addShortcode('year', () => new Date().getFullYear());

  eleventyConfig.addShortcode('social', function (handle) {
    if (handle.includes('@')) {
      // masto
      const [name, host] = handle.split('@');
      // ire@front-end.social
      return `<li><a class="masto" target="_blank" title="${handle}" href="https://${host}/@${name}">${handle}</a></li>`;
    } else {
      return `<li><a target="_blank" title="@${handle}" href="https://twitter.com/${handle}">@${handle}</a></li>`;
    }
  });

  // static passthroughs
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/_headers');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/details-sw.js');
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/game');
  eleventyConfig.addPassthroughCopy('src/*.html');
  // eleventyConfig.addPassthroughCopy('src/browserconfig.xml');

  eleventyConfig.addCollection('randomLatest', async function (collection) {
    const talks = await Talks().then((talks) =>
      talks.filter((talk) => liveYears.includes(parseInt(talk.event.year, 10)))
    );
    const n = liveYears.length;
    const first = shuffle(
      talks.filter((_) => _.event.year == liveYears[n - 1])
    )[0];
    const second = shuffle(
      talks.filter((_) => _.event.year == liveYears[n - 2])
    )[0];
    return [first, second];
  });

  eleventyConfig.addCollection('posts', function (collection) {
    return collection
      .getAllSorted()
      .filter(function (item) {
        return (
          item.inputPath.includes('/articles/') &&
          item.inputPath.endsWith('.md')
        );
      })
      .pop();
  });

  let allArticles = null;

  eleventyConfig.addCollection('articles', function (collection) {
    const res = collection.getAllSorted().filter(function (item) {
      return (
        item.inputPath.includes('/articles/') && item.inputPath.endsWith('.md')
      );
    });

    const others = require('./src/articles/articles.json').posts.map((post) => {
      return {
        data: { ...post, tags: ['write up'], date: new Date(post.date) },
        date: new Date(post.date),
        url: post.url,
      };
    });

    allArticles = [...res, ...others]
      .sort((a, b) => {
        return new Date(a.data.date).getTime() < new Date(b.data.date).getTime()
          ? 1
          : -1;
      })
      .filter(livePosts);

    return allArticles;
  });

  eleventyConfig.addCollection('currentYear', () => currentYear);

  eleventyConfig.addCollection('articleList', function (collection) {
    const res = allArticles.map(({ url, data }) => {
      const { title, date, tags, by } = data;
      return {
        url,
        data: {
          by,
          title,
          date,
          tags,
        },
      };
    });
    return res;
  });

  // eleventyConfig.setBrowserSyncConfig({
  //   ghostMode: false,
  // });

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
