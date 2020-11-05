const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(4000);
