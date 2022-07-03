const express = require("express");
const {Router} = express;
const routerProduct = new Router();

const producto = require("../controllers/productController");


routerProduct.get("/", producto.getCarrito);
routerProduct.post("/", producto.addCarrito);


module.exports = routerProduct