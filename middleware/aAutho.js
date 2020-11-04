/* var express = require("express");
var router = express.Router();
 */
const localFilepath = "admin/";
const webArea = "adminArea";

module.exports = (req, res, next) => {
  if (req.query.autho === "true") {
    next();
  } else console.log("mentira");
  res.render(localFilepath + "login", {
    title: "admin area",
    subtitle: "loginArea",
  });
};
