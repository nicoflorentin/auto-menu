const User = require("../models/User");
const loginRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../utils/config");


loginRouter.post("/", async (request, _response, next) => {
  const { username, password } = request.body;

  const user = await User.findOne({ username: username });

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return next(new Error("Incorrect user or password"));
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  try {
    const token = jwt.sign(userForToken, config.SECRET, {});
    request.statusCode = 200;
    request.data = { token, username: user.username, name: user.name };
    next()
  } catch (error) {
    next(error);
  }
});

module.exports = loginRouter;
