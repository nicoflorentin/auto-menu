const User = require("../models/User");
const loginRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../utils/config");

loginRouter.post("/", async (request, _response, next) => {
  const { username, password } = request.body;

  try {
    const tokenDuration = 6 * 60 * 60;
    const user = await User.findOne({ username });
    console.log("Datos de usuario", user);

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      next(new Error("Incorrect user or password"));
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(userForToken, config.SECRET, { expiresIn: tokenDuration });
    request.data = { token, username: user.username, name: user.name, restaurantId: user.restaurant._id };
    request.statusCode = 200;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = loginRouter;
