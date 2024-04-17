const restaurantRouter = require("express").Router();
const Restaurant = require("../models/Restaurant");
const User = require("../models/User")
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

//Ruta sin importancia, es solo para mi
restaurantRouter.get("/", async (_request, response, next) => {
  try {
    const restaurants = await Restaurant.findOne({});
    response.json(restaurants);
  } catch (error) {
    next(error);
  }
});

//Ruta para traer restaurantes por Id
restaurantRouter.get("/:id", async (request, _response, next) => {
    const id = request.params.id; 
  try {
    const codeToken = jwt.verify(request.token, config.SECRET);
    const userId = codeToken.id;
    
    const restaurants = await Restaurant.findById(id);

    if(!restaurants){
      return next(new Error("Restaurant not found"))
    }

    if(restaurants.owner.toString()!== userId){
      return next(new Error("User does not have permission to access this restaurant"));
    }
    request.data = restaurants;
    request.statusCode = 200;
    next();
  } catch (error) {
    next(error);
  }
});

//Ruta para editar restaurantes
restaurantRouter.put("/:id", async (request, _response, next) => {
  const restaurantId = request.params.id;
  const { name, description, image, profileImage} = request.body;

  try {
    const codeToken = jwt.verify(request.token, config.SECRET);
    const userId = codeToken.id;

    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      next(new Error("Restaurant not found"));}

    if(restaurant.owner.toString()!== userId){
      return next(new Error("User does not have permission to edit this restaurant"));
    }

    if (name) restaurant.name = name;
    if (description) restaurant.description = description;
    if (image) restaurant.image = image;
    if (profileImage) restaurant.profileImage = profileImage

    const updatedRestaurant = await restaurant.save();

    request.data = updatedRestaurant;
    request.statusCode = 201;
    next();
  } catch (error) {
    next(error);
  }
});



module.exports = restaurantRouter;
