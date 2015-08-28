var http = require('http');
var fs = require('fs');
var parse = require('url').parse;

var cache = {};

var year = process.env.YEAR || 2015;

function redirect(res, url) {
  res.writeHead(302, { location: url, 'content-type': 'text/html' });
  res.end('<title>Redirecting...</title><meta http-equiv="refresh" content="0; url=' + url + '">');
}

http.createServer(function (req, res) {
  var url = parse(req.url);
  var file = url.pathname.replace(/\./g, '').replace(/^\//, ''); // poor man's sanity

  // keeps our dyno awake via the main site
  if (url === 'ping') {
    res.writeHead(204);
    res.end();
  }

  if (cache[file] === undefined) {
    // one off readsync - quick and dirty
    try {
      cache[file] = fs.readFileSync('./redirects/' + file, 'utf8').split('\n')[0].trim();
    } catch (e) {
      cache[file] = null; // don't bother looking again until restart
      console.warn('failed redirect on ' + file);
    }
  }

  if (cache[file]) {
    return redirect(res, cache[file]);
  }

  redirect(res, 'http://' + year + '.ffconf.org' + req.url);
}).listen(process.env.PORT || 8000);