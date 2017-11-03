module.exports = (req, res, next) => {
  res.header({
    'Access-Control-Allow-Origin': req.headers.origin,
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Allow-Credentials': true,
  });

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  next();
};
