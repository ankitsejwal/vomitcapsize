const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/:paragraph", (req, res) => {
  const paragraph = req.params.paragraph;

  res.send(req.query);
});

router.post("/", (req, res) => {
  const para = "The month is the next";

  function converToCapital() {}
});

module.exports = router;
