const User = require("../models/User");
const Restaurant = require("../models/Restaurant");
const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const validator = require("validator");

//Ruta sin importancia, es solo para mi
userRouter.get("/", async (_request, response) => {
  const user = await User.find({}).populate("restaurant", { name: 1 });
  response.json(user);
});

userRouter.post("/", async (request, _response, next) => {
  const { password, username, name } = request.body;
  try {
    if (!validator.isEmail(username, { allow_underscores: true })) {
      return next(new Error("the email address is not valid"));
    }

    const passwordValidator = {
      minLength: 8,
      minNumbers: 1,
      minSymbols: 1,
    };

    if (!validator.isStrongPassword(password, passwordValidator)) {
      return next(
        new Error(
          "Restaurant Password does not meet minimum requirements found"
        )
      );
    }

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
