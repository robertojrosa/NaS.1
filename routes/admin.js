var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
const User = require("../models/User");

const localFilepath = "admin/";
const webArea = "admin area";

/* GET home page. */
router.get("/", function (req, res) {
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
            if (err) res.send("did not go through");
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

router.get("/dashboard", function (req, res, next) {
  res.render(localFilepath + "dashboard", {
    title: "admin area",
    subtitle: "Dashboard",
  });
});

module.exports = router;
