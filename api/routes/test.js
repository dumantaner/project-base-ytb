var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next)=> {
  res.send("welcome to test page ....");
});

module.exports = router;
