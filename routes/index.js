var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Intro page' });
});
router.get('/nas1', function(req, res, next) {
  res.render('nas1', { title: 'Basic card game' });
});

module.exports = router;
