const server = require('./index');
require('http')
  .createServer(server)
  .listen(process.env.PORT || 3333);
