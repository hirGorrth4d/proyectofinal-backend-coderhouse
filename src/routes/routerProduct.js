const express = require("express");
const {Router} = express;
const productRoute = new Router();

const product = require("../controllers/productController");


productRoute.get("/", product.getCarrito);
productRoute.post("/", product.addCarrito);


module.exports = productRoute