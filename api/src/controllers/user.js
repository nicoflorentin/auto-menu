const User = require("../models/User");
const userRouter = require("express").Router();
const bcrypt = require("bcrypt");


userRouter.get("/", async (_request, response) => {
  const user = await User.find({}).populate("dishes");
  response.json(user);
});

userRouter.post("/", async (request, response, next) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    name: body.name,
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
