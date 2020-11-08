var User = require("../models/User");

const adminVars = require("../routes/adminWebvars")


module.exports = (req, res, next) => {
  console.log("eval existing and password");
  User.findOne({ email: req.body.email }).then((result) => {
    if (result !== null) {
      res.render(adminVars.localFilepath + "login", {
        title: adminVars.webArea,
        subtitle: "login",
        sysmsg: "email already registered, please login",
      });
    } else if (req.body.pwd !== req.body.pwd_check)
      res.render(localFilepath + "register", {
        title: adminVars.wewebArea,
        subtitle: "login",
        sysmsg: "passwords do not match",
      });
    else next();
  });
};
