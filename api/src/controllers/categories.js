const categoriesRouter = require("express").Router();

const categories = [
	{
		value: "platosPrincipales",
		label: "Platos Principales",
	},
	{
		value: "bebidas",
		label: "Bebidas",
	},
	{
		value: "entrantes",
		label: "Entrantes",
	},
	{
		value: "postres",
		label: "Postres",
	},
];

//Ruta GET para traer todos los platos por categorias
categoriesRouter.get("/", async (request, _response, next) => {
	request.data = categories;
	request.statusCode = 200;
	next();
});

module.exports = categoriesRouter