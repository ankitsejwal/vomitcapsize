const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.set(expressLayouts);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(4000);
