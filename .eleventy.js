const { basename } = require('path');
const markdownIt = require('markdown-it');
const undefsafe = require('undefsafe');
let env = process.env.ELEVENTY_ENV;
const options = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdown = markdownIt(options);

module.exports = function(eleventyConfig) {
  // Add filters to Nunjucks
  eleventyConfig.addFilter('kebab', require('./src/site/_filters/kebab'));
  eleventyConfig.addFilter('markdown', s => markdown.render(s));
  eleventyConfig.addFilter('filename', s => {
    if (s) return basename(s);
  });
  eleventyConfig.addFilter(
    'stringify',
    require('./src/site/_filters/stringify')
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

  // static passthroughs
  eleventyConfig.addPassthroughCopy('src/site/fonts');
  eleventyConfig.addPassthroughCopy('src/site/images');
  // eleventyConfig.addPassthroughCopy('src/site/manifest.json');
  // eleventyConfig.addPassthroughCopy('src/site/browserconfig.xml');

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
