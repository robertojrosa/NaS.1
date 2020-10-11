var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
const User = require("../models/User");

const localFilepath = "admin/";
const webArea = "admin area";

/* GET home page. */
router.get("/", function (req, res) {
  /*   const User = require('../models/User')
    var mgUsers = User.find().then((result) => {
      res.render('index', { title: 'rjrosa', users: result });
    })
   */
  res.render(localFilepath + "index");
});

router.get("/login", function (req, res, next) {
  res.render(localFilepath + "login", {
    title: webArea,
    subtitle: "login area",
  });
});

router.post("/login", function (req, res) {
  console.log(req.body);
  res.render(localFilepath + "login", {
    title: webArea,
    subtitle: "this was a login post",
  });
});

router.get("/register", function (req, res) {
  console.log(req.body);
  res.render(localFilepath + "register", {
    title: webArea,
    subtitle: "registration",
  });
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((result) => {
    if (result !== null) {
      res.render(localFilepath + "login", {
        title: webArea,
        subtitle: "login",
        sysmsg: "email already registered, please login",
      });
    } else {
      bcrypt.hash(req.body.pwd, 10, (err, hash) => {
        console.log(hash);
      });
      var postUser = new User({
        email: req.body.email,
        pwd: res.send("found none"),
      });
    }
  });
});

router.get("/dashboard", function (req, res, next) {
  res.render(localFilepath + "dashboard", {
    title: "admin area",
    subtitle: "Dashboard",
  });
});

module.exports = router;
