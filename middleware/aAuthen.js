const adminVars = require("../routes/adminWebvars");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var User = require("../models/User");

module.exports = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((result) => {
      if (result !== null) {
        bcrypt
          .compare(req.body.pwd, result.pwd)
          .then((match) => {
            if (match === true) {
              console.log(result._id);
              let id = result._id;
              let user = result.user;
              let status = result.status;
              let payload = {
                id,
                user,
                status,
              };
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
            res.json({ confirmation: "FAIL", message: "error:" + err });
          });
      } else {
        res.json({ confirmation: "FAIL", message: "no userfound" });
      }
    })
    .catch((err) => {
      res.json({ confirmation: "fail", message: "error:" + err });
    });
};
