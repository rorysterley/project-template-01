'use strict';

var bodyparser = require('body-parser');

module.exports = function(app) {
  app.use(bodyparser.json());

  // GET
  app.get('/test', function(req, res) {
    res.json({ 'test': 'hello world2' });
  });
};
