const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", "./public");

app.get("/", (req, res) => {
  res.render("index", { message: "Hi this has to be done!" });
});

app.listen(4000);
