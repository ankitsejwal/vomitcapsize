const express = require("express");
const home = require("./router/home");

const app = express();

app.use("/api/", home);

app.listen(4000);
