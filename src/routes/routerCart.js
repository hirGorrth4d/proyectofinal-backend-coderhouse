const express = require("express");
const {Router} = express;
const routerCart = new Router();

const carrito = require("../controllers/cartController");


routerCart.get("/", carrito.getCarrito);
routerCart.post("/", carrito.addCarrito);


module.exports = routerCart