const server = require('./index');
require('http')
  .createServer(server)
  .listen(process.env.PORT || 7000);
