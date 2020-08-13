var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'rjrosa' });
});
router.get('/nas1', function(req, res, next) {
  res.render('nas1', { title: 'rjrosa', subtitle:'simple card game' });
});
router.get('/sockettest', function(req, res, next) {
  res.render('socket', { title: 'rjrosa', subtitle: 'socket test' });
});


module.exports = router;
