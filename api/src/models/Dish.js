const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minlength: 3,
  },
  description: {
    type: String,
    require: true,
    minlength: 5,
  },

  category: {
    type: String,
    require: true,
    minlength: 3,
  },
  price: {
    type: Number,
    require: true,
  },

  image: {
    type: String,
  },

  celiac: {
    type: Boolean,
    default: false,
    require: true,
  },
  vegetarian: {
    type: Boolean,
    default: false,
    require: true,
  },

  archived: {
    type: Boolean,
    default: false,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

dishSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Dish", dishSchema);
