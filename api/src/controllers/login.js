const User = require("../models/User");
const loginRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../utils/config");


loginRouter.post("/", async (request, response, next) => {
  const { username, password } = request.body;

  const user = await User.findOne({ username: username });
  const isPassword =
    user === null
      ? false
      : await bcrypt.compare(password, user.passwordHash);

  if (!(user && isPassword)) {
    return response.status(401).json({
      error: "Incorrect user or password",
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  try {
    const token = jwt.sign(userForToken, config.SECRET, {});
    response
      .status(200)
      .send({ token, username: user.username, name: user.name });
  } catch (error) {
    next(error);
  }
});

module.exports = loginRouter;
