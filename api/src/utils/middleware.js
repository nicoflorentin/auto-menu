const logger = require("./logger");

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

// Para los token 
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

//Para las rutas
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown route" });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.name);
  if (error.name === "ValidatorError") {
    return response.status(400).json({ error: error.message });
  }
  if (error.name === "CastError") {
    return response.status(400).json({ error: error.message });
  }
  if (error.name == "secretOrPrivateKey") { 
    return response.status(400).json({ error: error.message }); 
  }
  console.log('error')
  response.status(400).send({error: error.message})

  next();
};

const responseHandler = (request, response, next) => {
  response.status(200).json({error: false, data: request.data})
  next()
}

module.exports = {
  requestLogger,
  errorHandler,
  responseHandler,
  unknownEndpoint,
  tokenExtractor,
};
