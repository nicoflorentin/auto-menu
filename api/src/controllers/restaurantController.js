const restaurantRouter = require("express").Router();
const Restaurant = require("../models/Restaurant");

//Ruta sin importancia, es solo para mi
restaurantRouter.get("/", async (_request, response, next) => {
  try {
    const restaurants = await Restaurant.findOne({});
    response.json(restaurants);
  } catch (error) {
    next(error);
  }
});

restaurantRouter.put("/:id", async (request, _response, next) => {
  const restaurantId = request.params.id;
  const { name, description, image } = request.body;

  try {
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      next(new Error("Restaurant not found"));
    }

    if (name) restaurant.name = name;
    if (description) restaurant.description = description;
    if (image) restaurant.image = image;

    const updatedRestaurant = await restaurant.save();

    request.data = updatedRestaurant;
    request.statusCode = 201;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = restaurantRouter;
