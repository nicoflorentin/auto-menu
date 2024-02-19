const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minlength: 3,
    required: true,
  },

  name: String,

  passwordHash: {
    type: String,
    minlength: 3,
    required: true,
  },

  dishes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dish"
  }]
  
});

userSchema.plugin(uniqueValidator)

const User = mongoose.model("User", userSchema);

module.exports = User;