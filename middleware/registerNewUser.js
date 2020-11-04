var User = require("../models/User");
var bcrypt = require("bcrypt");

let localFilepath = "admin/";
let webArea = "adminArea";

module.exports = (req, res) => {
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
        return;
      }
    });
  });
};
