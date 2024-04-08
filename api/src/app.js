const cors = require("cors");
const middleware = require("./utils/middleware");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./utils/config");
const logger = require("./utils/logger");

const dishRouter = require("./controllers/dishController");
const sinTokenRouter = require("./controllers/sinTokenControllers");
const userRouter = require("./controllers/createUserController");
const loginRouter = require("./controllers/loginController");
const categoriesRouter = require("./controllers/categoriesController");
const restaurantRouter = require("./controllers/restaurantController");
const publicRestaurantRouter = require("./controllers/publicRestaurantController");

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    logger.info("✅ connected database");
  })
  .catch((error) => {
    logger.error("❌ Error connecting database", error.message);
  });

app.use(express.json());
app.use(cors());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use("/api/sinjwt", sinTokenRouter);
app.use("/api/dish", dishRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/user", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/restaurant", restaurantRouter)
app.use("/restaurant/edit", restaurantRouter)
app.use("/menu", publicRestaurantRouter)


app.use(middleware.unknownEndpoint);
app.use(middleware.responseHandler);
app.use(middleware.errorHandler);

module.exports = app;
