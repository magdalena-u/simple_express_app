const express = require("express");
const mainRoute = require("./routes");

const app = express();

app.use(mainRoute);

app.listen(3000);