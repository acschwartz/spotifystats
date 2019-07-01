var express = require('express');
var router = express.Router();

var artists_short_term = require('../data/artists_short_term.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', artists: artists_short_term.items });
});

module.exports = router;
