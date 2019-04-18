/**
 * replace dots and slashes with dashes
 *
 * @param {String} str
 *s
 */
module.exports = str => {
  const re = /\/|\./gi;
  return str.replace(re, '-');
};
