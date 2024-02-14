const dishRouter = require("express").Router();
const sinToken = require("express").Router();
const Dish = require("../models/Dish");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

//Ruta GET para traer todos los platos sin token
sinToken.get("/", async (request, response, next) => {
  const dish = await Dish.find({}).populate("user", { name: 1 });
  request.data = dish;
  request.statusCode = 200;
  next();
});

//Ruta GET para traer todos los platos con token
dishRouter.get("/", async (request, _response, next) => {
  try {
    const codeToken = jwt.verify(request.token, config.SECRET);
    console.log("token", codeToken);

    const userId = codeToken.id
    console.log("hola", userId.id);

    const dish = await Dish.find({ user: userId }).populate("user", { name: 1 });
    request.data = dish;
    request.statusCode = 200;
    next();
  } catch (error) {
    next(new Error("jwt must be provided"));
  }
});

//Ruta POST para crear platos
dishRouter.post("/", async (request, response, next) => {
  try {
    const codeToken = jwt.verify(request.token, config.SECRET);
    console.log("token", codeToken);

    const body = request.body;
    const user = await User.findById(body.userId);

    if (
      !body.title ||
      !body.description ||
      !body.category ||
      !body.price ||
      !body.image ||
      body.celiac == undefined ||
      body.vegetarian == undefined ||
      user == undefined
    ) {
      next(new Error("Missing data, error creating"));
    }

    const dish = new Dish({
      title: body.title,
      description: body.description,
      category: body.category,
      price: body.price,
      image: body.image,
      celiac: body.celiac,
      vegetarian: body.vegetarian,
      user: user._id,
    });

    const saveDish = await dish.save();
    user.dishes = user.dishes.concat(saveDish._id);
    await user.save();
    request.data = saveDish;
    request.statusCode = 201;
    next()
  } catch (error) {
    next(error);
  }

  //Ruta Patch
  dishRouter.patch(() => {});

  //Ruta DELETE
  dishRouter.delete(() => {});
});

module.exports = { dishRouter, sinToken };
