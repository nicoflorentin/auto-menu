const publicRestaurantRouter = require("express").Router();
const Restaurant = require("../models/Restaurant");

publicRestaurantRouter.get("/:name", async (request, _response, next) => {
  try {
    const restaurantName = request.params.name;

    const restaurant = await Restaurant.find({ name: restaurantName }).populate("dishes", {archived: 0});
    if (!restaurant) {
      next(new Error("Restaurant not found"));
    }

    request.data = restaurant;
    request.statusCode = 200;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = publicRestaurantRouter;

