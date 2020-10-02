var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
const User = require('../models/User')


const localfilepath='admin/'

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

router.post('/login', function(req, res) {
  console.log(req.body)
  res.render(localfilepath  +'login', { title: 'admin area', subtitle:'this was a login post' });
});

router.get('/register', function(req, res) {
  console.log(req.body)
  res.render(localfilepath  +'register', { title: 'admin area', subtitle:'registration' });
});

router.post ('/register', (req,res)=> {
  var existing = User.findOne({'email' : req.body.email}).then((result) => {
    if(result !== null)
      res.render(localfilepath + 'login', {title:'admin area', subtitle:'login',sysmsg: "email already registered, please login"}) 
    else
      res.send('found none')
    })
//  bcrypt.hash(req.body.pwd,10, (err,hash)=>{
  
  })


router.get('/dashboard', function(req, res, next) {
  res.render(localfilepath+'dashboard', { title: 'admin area', subtitle: 'Dashboard' });
});

module.exports = router;
