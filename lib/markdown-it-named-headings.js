var slugify = require('slugify');
var unidecode = require('unidecode');

module.exports = function plugin(md) {
  md.core.ruler.push('named_headings', namedHeadings.bind(null, md));
};

function namedHeadings(md, state) {
  var ids = {};

  state.tokens.forEach(function (token, i) {
    if (token.type === 'heading_open') {
      var text = md.renderer.render(state.tokens[i + 1].children, md.options);
      var id = slugify(unidecode(text.replace(/<!--(?!>)[\S\s]*?-->/g, '')), {
        lower: true,
        // slugify's `remove` option *replaces* its default strip regex, so we
        // have to repeat the default here, otherwise characters like / and ?
        // survive into the id. The second half drops the punctuation slugify
        // would otherwise keep.
        remove: /[^\w\s$*_+~.()'"!\-:@]+|[(),:]/g,
      });
      var uniqId = uncollide(ids, id);
      ids[uniqId] = true;
      setAttr(token, 'id', uniqId);
    }
  });
}

function uncollide(ids, id) {
  if (!ids[id]) {
    return id;
  }
  var i = 1;
  while (ids[id + '-' + i]) {
    i++;
  }
  return id + '-' + i;
}

function setAttr(token, attr, value, options) {
  var idx = token.attrIndex(attr);

  if (idx === -1) {
    token.attrPush([attr, value]);
  } else if (options && options.append) {
    token.attrs[idx][1] = token.attrs[idx][1] + ' ' + value;
  } else {
    token.attrs[idx][1] = value;
  }
}
