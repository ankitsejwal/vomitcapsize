const express = require("express");
const home = require("./routes/home");

const app = express();

app.set("view engine", "pug");
app.set("views", "./public");

app.use("/", home);

app.listen(4000);
