const cors = require("cors")
const middleware = require("./utils/middleware");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./utils/config");
const logger = require("./utils/logger");

const dishRouter = require("./controllers/dishController");
const sinTokenRouter = require("./controllers/sinTokenControllers")
const userRouter = require("./controllers/user")
const loginRouter = require("./controllers/loginController")
const categoriesRouter = require('./controllers/categoriesController')
const filterRouter = require ("./controllers/filterController");

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
app.use(middleware.tokenExtractor)

app.use("/api/sinjwt", sinTokenRouter);
app.use("/api/dish", dishRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/filter", filterRouter)
app.use("/api/user", userRouter);
app.use("/api/login", loginRouter);


app.use(middleware.unknownEndpoint);
app.use(middleware.responseHandler);
app.use(middleware.errorHandler);

module.exports = app;
