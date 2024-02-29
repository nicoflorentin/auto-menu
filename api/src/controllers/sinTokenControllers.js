const sinToken = require("express").Router();
const Dish = require("../models/Dish");

//Ruta GET para traer todos los platos sin token
sinToken.get("/", async (request, _response, next) => {
  const dish = await Dish.find({}).populate("user", { name: 1 });
  request.data = dish;
  request.statusCode = 200;
  next();
});

module.exports = sinToken;
