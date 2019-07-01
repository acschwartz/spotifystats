var express = require('express');
var router = express.Router();

var artists_short_term = require('../data/artists_short_term.json');
var artists_medium_term = require('../data/artists_medium_term.json');
var artists_long_term = require('../data/artists_long_term.json');

/* GET home page. */
router.get('/artists/short', function(req, res, next) {
  res.render('index', { title: 'Artists: Short Term', artists: artists_short_term.items });
});

router.get('/artists/medium', function(req, res, next) {
  res.render('index', { title: 'Artists: Medium Term', artists: artists_medium_term.items });
});

router.get('/artists/long', function(req, res, next) {
  res.render('index', { title: 'Artists: Long Term', artists: artists_long_term.items });
});

module.exports = router;
