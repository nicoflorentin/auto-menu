const User = require("../models/User");
const loginRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../utils/config");

loginRouter.post("/", async (request, response, next) => {
  const body = request.body;

  const user = await User.findOne({ username: body.username });
  const password =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);

  if (!(user && password)) {
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
