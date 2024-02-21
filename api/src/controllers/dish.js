const dishRouter = require("express").Router();
const sinToken = require("express").Router();
const Dish = require("../models/Dish");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const _ = require('lodash');

//Ruta GET para traer todos los platos sin token
sinToken.get("/", async (request, _response, next) => {
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

    const userId = codeToken.id;

    const dish = await Dish.find({ user: userId }).populate("user", {
      name: 1,
    });
    request.data = dish;
    request.statusCode = 200;
    next();
  } catch (error) {
    next(new Error("jwt must be provided"));
  }
});

//Ruta GET para traer todos los platos por categorias
dishRouter.get("/categories", async (_request, response, next) => {
  try {
    const categories = await Dish.distinct("category");

    const camelCaseCategories = categories.map((category) => {
      const camelCaseValue = _.camelCase(category);
      return { value: camelCaseValue, label: category };
    });

    response.json(camelCaseCategories);
  } catch (error) {
    next(error);
  }
});

//Ruta GET para traer todos los platos por ID
dishRouter.get("/:id", async (request, _response, next) => {
  try {
    const id = request.params.id;
    const codeToken = jwt.verify(request.token, config.SECRET);
    const userId = codeToken.id;

    const findDishId = await Dish.findById(id);
    if (!findDishId) {
      next(new Error("Dish not found"));
    }

    if (findDishId.user.toString() !== userId) {
      next(new Error("User does not have permission to access this dish"));
    }

    request.data = findDishId;
    request.statusCode = 200;
    next();
  } catch (error) {
    next(error);
  }
});

//Ruta POST para crear platos
dishRouter.post("/", async (request, _response, next) => {
  try {
    const codeToken = jwt.verify(request.token, config.SECRET);
    console.log("token", codeToken);

    const userId = codeToken.id;

    const {
      title,
      description,
      category,
      price,
      image,
      celiac,
      vegetarian,
      archived,
    } = request.body;
    const user = await User.findById(userId);

    const dish = new Dish({
      title,
      description,
      category,
      price,
      image,
      celiac,
      vegetarian,
      archived,
      user: user._id,
    });

    const saveDish = await dish.save();
    user.dishes = user.dishes.concat(saveDish._id);
    await user.save();
    request.data = saveDish;
    request.statusCode = 201;
    next();
  } catch (error) {
    next(error);
  }
});

//Ruta PUT para modificar platos
dishRouter.put("/:id", async (request, _response, next) => {
  try {
    const codeToken = jwt.verify(request.token, config.SECRET);
    const userId = codeToken.id;

    const dishId = request.params.id;
    const {
      title,
      description,
      category,
      price,
      image,
      celiac,
      vegetarian,
      archived,
    } = request.body;

    const dishDb = await Dish.findOne({ _id: dishId });

    if (!dishDb) {
      next(new Error("Dish not found"));
    }

    if (dishDb.user.toString() !== userId) {
      next(new Error("User does not have permission to edit this dish"));
    }

    const dish = {
      title,
      description,
      category,
      price,
      image,
      celiac,
      vegetarian,
      archived,
    };
    const updateDish = await Dish.findByIdAndUpdate(dishDb, dish, {
      new: true,
    });
    request.data = updateDish;
    request.statusCode = 201;
    next();
  } catch (error) {
    next(error);
  }
});

//Ruta DELETE para eliminar platos
dishRouter.delete("/:id", async (request, _reponse, next) => {
  try {
    const id = request.params.id;
    const codeToken = jwt.verify(request.token, config.SECRET);
    const userId = codeToken.id;

    const deleteDish = await Dish.findById(id);
    if (!deleteDish) {
      next(new Error("Dish not found"));
    }

    if (deleteDish.user.toString() !== userId) {
      next(new Error("User does not have permission to delete this dish"));
    }

    const deletedDish = await Dish.findByIdAndDelete(id);
    request.data = deletedDish;
    request.statusCode = 204;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = { dishRouter, sinToken };
