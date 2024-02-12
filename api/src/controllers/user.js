const User = require("../models/User");
const userRouter = require("express").Router();
const bcrypt = require("bcrypt");


userRouter.get("/", async (_request, response) => {
  const user = await User.find({}).populate("dishes");
  response.json(user);
});

userRouter.post("/", async (request, response, next) => {
  const { password, username, name } = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  try {
    const savedUser = await user.save();
    response.json(savedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
