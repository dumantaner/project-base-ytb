var express = require("express");
const config = require("../config/index");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Taner Duman" , config});
});

module.exports = router;
