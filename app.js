const express = require("express");
const home = require("./routes/home");

const app = express();

app.use("/api/", home);

app.listen(4000);
