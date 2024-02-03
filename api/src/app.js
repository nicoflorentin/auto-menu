const middleware = require("./utils/middleware");
const express = require("express");
const app = express();

app.use(express.json());
app.use(middleware.requestLogger);

module.exports = app;
