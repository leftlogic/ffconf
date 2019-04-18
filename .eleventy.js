var env = process.env.ELEVENTY_ENV;
let markdownIt = require('markdown-it');
let options = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdown = markdownIt(options);

module.exports = function(eleventyConfig) {
  // Add filters to Nunjucks
  eleventyConfig.addFilter('kebab', require('./src/site/_filters/kebab'));
  eleventyConfig.addFilter('markdown', s => markdown.render(s));
  eleventyConfig.addFilter(
    'stringify',
    require('./src/site/_filters/stringify')
  );

  // eleventyConfig.addFilter(
  //   'dateDisplay',
  //   require('./src/site/_filters/dates.js')
  // );
  // eleventyConfig.addFilter(
  //   'section',
  //   require('./src/site/_filters/section.js')
  // );
  // eleventyConfig.addFilter('squash', require('./src/site/_filters/squash.js'));

  // Assemble some collections
  // eleventyConfig.addCollection(
  //   'tagList',
  //   require('./src/site/_filters/getTagList.js')
  // );
  // eleventyConfig.addCollection('posts', function(collection) {
  //   return collection.getFilteredByGlob('src/site/blog/*.md').reverse();
  // });

  // static passthroughs
  eleventyConfig.addPassthroughCopy('src/site/fonts');
  eleventyConfig.addPassthroughCopy('src/site/images');
  // eleventyConfig.addPassthroughCopy('src/site/manifest.json');
  // eleventyConfig.addPassthroughCopy('src/site/browserconfig.xml');

  // minify the html output
  // const htmlmin = require('html-minifier');
  // eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
  //   if (outputPath.endsWith('.html')) {
  //     let minified = htmlmin.minify(content, {
  //       useShortDoctype: true,
  //       removeComments: false, // we need comments to identify the expcerpt split marker.
  //       collapseWhitespace: true,
  //     });
  //     return minified;
  //   }
  //   return content;
  // });

  // other config settings

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
