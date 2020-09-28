var express = require('express');
var router = express.Router();

let localfilepath='admin/'
/* GET home page. */
router.get('/', function(req, res) {

/*   const User = require('../models/User')
  var mgUsers = User.find().then((result) => {
    res.render('index', { title: 'rjrosa', users: result });
  })
 */
        res.render(localfilepath+'index')
});

router.get('/login', function(req, res, next) {
  res.render(localfilepath  +'login', { title: 'admin area', subtitle:'login area' });
});

router.post('/login', function(req, res, next) {
  res.render(localfilepath  +'login', { title: 'admin area', subtitle:'this was a login post' });
});

router.get('/dashboard', function(req, res, next) {
  res.render(localfilepath+'dashboard', { title: 'admin area', subtitle: 'Dashboard' });
});


module.exports = router;
