var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Intro page' });
});
router.get('/nas1', function(req, res, next) {
  res.render('nas1', { title: 'Basic card game' });
});
router.get('/sockettest', function(req, res, next) {
  res.render('socket', { title: 'Socket test' });
});

module.exports = router;
