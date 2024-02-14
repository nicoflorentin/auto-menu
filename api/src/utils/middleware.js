const logger = require("./logger");

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

// Middleware para extraer el token
const tokenExtractor = (request, response, next) => {
  const authorization = request.get("authorization");

  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    request.token = authorization.substring(7);
  } else {
    request.token = null;
  }
  console.log("Token in tokenExtractor:", request.token);
  next();
};

// Middleware para manejar rutas desconocidas
const unknownEndpoint = (request, response, next) => {
  !request.route ? next(new Error("unknown route")) : next();
};

// Middleware para manejar errores
const errorHandler = (error, request, response, next) => {
  logger.error(error);

  if (
    error.name === "ValidatorError" ||
    error.name === "CastError" ||
    error.name === "secretOrPrivateKey" ||
    error.name === "ReferenceError" ||
    error.message === "The user already exists or data is missing" ||
    error.message === "Missing data, error creating"
  ) {
    statusCode = 400;
  } else if (
    error.message === "jwt must be provided" ||
    error.message === "Incorrect user or password"
  ) {
    statusCode = 401;
  }

  response.status(statusCode).json({ error: true, message: error.message });
};

// Middleware para manejar respuestas exitosas
const responseHandler = (request, response, next) => {
  if (request.statusCode) {
    response
      .status(request.statusCode)
      .json({ error: false, data: request.data });
  } else {
    next();
  }
};

module.exports = {
  requestLogger,
  errorHandler,
  responseHandler,
  unknownEndpoint,
  tokenExtractor,
};
