const dishRouter = require("express").Router();
const User = require("../models/User");
const Dish = require("../models/Dish");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

//Ruta GET para traer todos los platos con token
dishRouter.get("/", async (request, response, next) => {
  try {
    const codeToken = jwt.verify(request.token, config.SECRET);
    console.log("token", codeToken);
    const userId = codeToken.id;

    const user = await User.findById(userId).populate("restaurant");
    if (!user.restaurant) {
      return next(new Error("Restaurant not found"));
    }

    const restaurantId = user.restaurant.id;

    const { name, category, archived, celiac, vegetarian, price } = request.query;

    const filter = { restaurant: restaurantId };

    if (name) filter.title = { $regex: RegExp(name, "i") };
    if (category) filter.category = category;
    if (archived !== undefined) {
      filter.archived = archived === "true";
    }
    if (celiac !== undefined) {
      filter.celiac = celiac === "true";
    }
    if (vegetarian !== undefined) {
      filter.vegetarian = vegetarian === "true";
    }
    if (price) filter.price = { $lte: parseFloat(price) };

    const dish = await Dish.find(filter).populate("user", { name: 1 });

    request.data = dish;
    request.statusCode = 200;
    next();
  } catch (error) {
    next(new Error("jwt must be provided"));
  }
});

//Ruta GET para traer todos los platos por ID
dishRouter.get("/:id", async (request, _response, next) => {
  try {
    const id = request.params.id;
    const codeToken = jwt.verify(request.token, config.SECRET);
    const userId = codeToken.id;

    const findDish = await Dish.findById(id).populate("restaurant");
    if (!findDish) {
      return next(new Error("Dish not found"));
    }

    if (findDish.restaurant.owner.toString() !== userId) {
      return next(
        new Error("User does not have permission to access this dish")
      );
    }

    request.data = findDish;
    request.statusCode = 200;
    next();
  } catch (error) {
    next(error);
  }
});

//Ruta POST para crear platos
dishRouter.post("/", async (request, response, next) => {
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

    const user = await User.findById(userId).populate("restaurant");

    if (!user.restaurant) {
      next(new Error("The user does not have an associated restaurant"));
    }

    const dish = new Dish({
      title,
      description,
      category,
      price,
      image,
      celiac,
      vegetarian,
      archived,
      restaurant: user.restaurant,
      owner: userId,
    });

    const saveDish = await dish.save();

    user.restaurant.dishes = user.restaurant.dishes.concat(saveDish._id);
    await user.restaurant.save();

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

    const dishDb = await Dish.findById(dishId).populate("restaurant");

    if (!dishDb) {
      next(new Error("Dish not found"));
    }

    if (dishDb.restaurant.owner.toString() !== userId) {
      return next(new Error("User does not have permission to edit this dish"));
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

    const deleteDish = await Dish.findById(id).populate("restaurant");
    if (!deleteDish) {
      next(new Error("Dish not found"));
    }

    if (deleteDish.restaurant.owner.toString() !== userId) {
      next(new Error("User does not have permission to delete this dish"));
    }

    deleteDish.archived = true;
    await deleteDish.save();

    const deletedDish = await Dish.findByIdAndDelete(id);

    request.data = deletedDish;
    request.statusCode = 204;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = dishRouter;
