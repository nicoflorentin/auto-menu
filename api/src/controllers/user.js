const User = require("../models/User");
const userRouter = require("express").Router();
const bcrypt = require("bcrypt");

userRouter.get("/", async (_request, response) => {
  const user = await User.find({}).populate("dishes");
  response.json(user);
});

userRouter.post("/", async (request, response, next) => {
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
    request.data = savedUser;
    request.statusCode = 201;
    next();
  } catch (error) {
    next(new Error("The user already exists or data is missing"));
  }
});

module.exports = userRouter;
