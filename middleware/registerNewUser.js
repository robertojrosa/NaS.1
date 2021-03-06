var User = require("../models/User");
var bcrypt = require("bcrypt");
const adminWebvars = require("../routes/adminWebvars");

const adminVars = require("../routes/adminWebvars")

module.exports = (req, res) => {
  bcrypt.hash(req.body.pwd, 10, (err, hash) => {
    let postUser = new User({
      email: req.body.email,
      pwd: hash,
    });
    postUser.save((err) => {
      if (err) res.json({ confirmation: "fail", message: err.message });
      else {
        res.render(adminVars.localFilepath + "login", {
          title: adminVars.webArea,
          subtitle: "login",
          sysmsg: "NEW user created",
        });
        return;
      }
    });
  });
};
