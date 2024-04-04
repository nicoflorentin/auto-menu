const User = require("../models/User");
const Restaurant = require("../models/Restaurant");
const userRouter = require("express").Router();
const bcrypt = require("bcrypt");

//Ruta sin importancia, es solo para mi
userRouter.get("/", async (_request, response) => {
  const user = await User.find({}).populate("restaurant", { name: 1 });
  response.json(user);
});

userRouter.post("/", async (request, _response, next) => {
  const { password, username, name } = request.body;
  try {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      name,
      passwordHash,
    });

    const savedUser = await user.save();

    const newRestaurant = new Restaurant({ owner: savedUser._id });
    await newRestaurant.save();

    savedUser.restaurant = newRestaurant._id;
    await savedUser.save();

    request.data = savedUser;
    request.statusCode = 201;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
