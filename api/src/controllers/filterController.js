const filterRouter = require("express").Router();
const Dish = require("../models/Dish");

filterRouter.get("/", async (request, _response, next) => {
  try {
    const { category, archived, celiac, vegetarian, price } = request.query;

    const filter = {};
    if (category) filter.category = category;
    if (archived !== undefined) { filter.archived = archived === "true";}
    if (celiac !== undefined) { filter.celiac = celiac === "true"} 
    if (vegetarian !== undefined) { filter.vegetarian = vegetarian === "true"} 
    if (price) filter.price = { $lte: parseFloat(price) };

    const filteredDishes = await Dish.find(filter);
    request.data = filteredDishes;
    request.statusCode = 200;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = filterRouter;
