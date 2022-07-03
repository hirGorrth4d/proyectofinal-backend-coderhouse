const express = require("express");
const {Router} = express;
const routerCart = new Router();

const carrito = require("../controllers/cartController");


routerCart.get("/", carrito.getCarrito);
routerCart.post("/", carrito.addCarrito);
routerCart.post("/:id/productos/:idCarrito", carrito); // ????
routerCart.post("/:id/productos", carrito); // ??
routerCart.put("/", carrito.updateCarrito)//?
routerCart.delete("/:id", carrito.deleteCarrito)//?
module.exports = routerCart