const dishRouter = require("express").Router();
const Dish = require("../models/Dish");

//Ruta GET para traer todos los platos
dishRouter.get("/", async (_request, response) => {
  const dish = await Dish.find({});
  response.json(dish);
});

//Ruta POST para crear platos
dishRouter.post("/", async (request, response, next) => {
  const body = request.body;

  if (
    !body.title ||
    !body.description ||
    !body.category ||
    !body.price ||
    !body.image ||
    body.celiac == undefined ||
    body.vegetarian == undefined
  ) {
    return response.status(400).json({ error: "Missing data, error creating" });
  }

  const dish = new Dish({
    title: body.title,
    description: body.description,
    category: body.category,
    price: body.price,
    image: body.image,
    celiac: body.celiac,
    vegetarian: body.vegetarian,
  });

  try {
    const saveDish = await dish.save();
    response.json(saveDish);
  } catch (error) {
    next(error);
  }

  //Ruta Patch
  dishRouter.patch(() => {

  })

  //Ruta DELETE
  dishRouter.delete(() => {
    
  })
});

module.exports = dishRouter;
