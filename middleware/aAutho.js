
const adminVars = require("../routes/adminWebvars")


module.exports = (req, res, next) => {
  if (req.query.autho === "true") {
    next();
  } else console.log("mentira");
  res.render(adminVars.localFilepath + "login", {
    title: adminVars.title,
    subtitle: "loginArea",
  });
};
