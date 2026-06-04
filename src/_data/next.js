const { date } = require('./tickets');

module.exports = {
  url: `https://${date.getFullYear()}.ffconf.org`,
  date,
  cfpOpen: true
};