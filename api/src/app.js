const cors = require("cors")
const middleware = require("./utils/middleware");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./utils/config");
const logger = require("./utils/logger");

const dishRouter = require("./controllers/dish");
const userRouter = require("./controllers/user")

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    logger.info("✅ connected database");
  })
  .catch((error) => {
    logger.error("❌ Error connecting database", error.message);
  });

app.use(express.json());
app.use(cors())
app.use(middleware.requestLogger);


app.use("/api/dish", dishRouter);
app.use("/api/user", userRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
