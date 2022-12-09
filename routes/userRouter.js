const controller = require("../controllers/controller");
const userRoutes = require("express").Router();

userRoutes.post("/user", controller.addUser);
userRoutes.get("/user/:email", controller.getAnUser);

module.exports = userRoutes;
