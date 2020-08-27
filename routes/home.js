const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { message: "Hi this has to be done!" });
});

module.exports = router;
