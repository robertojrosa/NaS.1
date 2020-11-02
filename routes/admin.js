var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var User = require("../models/User");


const localFilepath = "admin/";
const webArea = "adminArea";

// load module
var aAutho = require ("../middleware/aAutho")

router.get("/", aAutho, function (req, res) {
    res.render(localFilepath + "dashboard");
});

router.get("/dashboard", aAutho,  function (req, res) {
  res.render(localFilepath + "dashboard", {
    title: "admin area",
    subtitle: "Dashboard",
  });
});

router.get("/login", function (req, res) {
  res.render(localFilepath + "login", {
    title: webArea,
    subtitle: "loginArea",
  });
});

router.post("/login", function (req, res) {
  User.findOne({ email: req.body.email })
    .then((result) => {
      if (result !== null) {
        res.render(localFilepath + "login", {
          title: webArea,
          subtitle: "post login",
          sysmsg: "match found" 
        });
      } else {
        res.render(localFilepath + "login", {
          title: webArea,
          subtitle: "loginArea",
          sysmsg: "no match",
        });
      }
    })
    .catch((err) => {
      res.json({
        confirmation: Fail,
        message: err.message,
      });
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
  User.findOne({ email: req.body.email })
  .then((result) => {
    if (result !== null) {
      res.render(localFilepath + "login", {
        title: webArea,
        subtitle: "login",
        sysmsg: "email already registered, please login",
      });
    } else {
      if (req.body.pwd !== req.body.pwd_check)
        res.render(localFilepath + "register", {
          title: webArea,
          subtitle: "register",
          sysmsg: "passwords do not match",
        });
      else {
        bcrypt.hash(req.body.pwd, 10, (err, hash) => {
          let postUser = new User({
            email: req.body.email,
            pwd: hash,
          });
          postUser.save((err) => {
            if (err) res.json({ confirmation: "fail", message: err.message });
            else {
              res.render(localFilepath + "login", {
                title: webArea,
                subtitle: "login",
                sysmsg: "NEW user created",
              });
            }
          });
        });
      }
    }
  });
});

module.exports = router;
