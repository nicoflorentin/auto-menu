const middleware = require("./utils/middleware");
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const config = require("./utils/config")


mongoose.connect(config.MONGO_URI)
.then(() =>{
    console.log("✔ Data base connect")
})
.catch(() => {
    console.log("✖ Error");
})

app.use(express.json());
app.use(middleware.requestLogger);

module.exports = app;
