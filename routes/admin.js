var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var User = require("../models/User");

const localFilepath = "admin/";
const webArea = "adminArea";

// load module
var aAutho = require("../middleware/aAutho");
var regNewUser = require("../middleware/registerNewUser");
var checkNewUser = require("../middleware/checkNewUser");

router.get("/", aAutho, function (req, res) {
  res.render(localFilepath + "dashboard");
});

router.get("/dashboard", aAutho, function (req, res) {
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
        bcrypt
          .compare(req.body.pwd, result.pwd)
          .then((match) => {
            if (match === true) {
              res.json({
                confirmation: "SUCCESS",
                message: "MATCH",
                match: match,
              });
            } else {
              res.json({
                confirmation: "FAIL",
                message: "NO MATCH",
                match: match,
              });
            }
          })
          .catch((err) => {
            res.json({ confirmation: "FAIL", message: err });
          });
      } else {
        res.json({ confirmation: "FAIL", message: "no userfound" });
      }
    })
    .catch((err) => {
      res.json({ confirmation: "fail", message: err });
    });
});

router.get("/register", function (req, res) {
  console.log(req.body);
  res.render(localFilepath + "register", {
    title: webArea,
    subtitle: "registration",
  });
});

router.post("/register", checkNewUser, regNewUser);

module.exports = router;
