var express = require("express");
var router = express.Router();

var User = require("../models/User");

const adminVars = require("./adminWebvars")
// load module
var aAutho = require("../middleware/aAutho");
var aAuthen = require("../middleware/aAuthen");
var regNewUser = require("../middleware/registerNewUser");
var checkNewUser = require("../middleware/checkNewUser");


router.get("/", aAutho, function (req, res) {
  res.render(adminVars.localFilepath + "dashboard", {
    title: adminVars.title,
    subtitle: "Dashboard",
  });
});

router.get("/dashboard", aAutho, function (req, res) {
  res.render(adminVars.localFilepath + "dashboard", {
    title: adminVars.title,
    subtitle: "Dashboard",
  });
});

router.get("/login", function (req, res) {
  res.render(adminVars.localFilepath + "login", {
    title: adminVars.title,
    subtitle: "loginArea",
  });
});

router.post("/login", aAuthen, function (req, res) {
  
});

router.get("/register", function (req, res) {
  console.log(req.body);
  res.render(adminVars.localFilepath + "register", {
    title: adminVars.title,
    subtitle: "registration",
  });
});

router.post("/register", checkNewUser, regNewUser);

module.exports = router;
