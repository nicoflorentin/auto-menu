const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minlegth : 5
  },
  description: {
    type: String,
    require: true,
  },

  category: {
    type: String,
    require: true,
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
    require: true,
  },
  vegetarian: {
    type: Boolean,
     require: true,
  },

});

dishSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

module.exports = mongoose.model("Dish", dishSchema)
