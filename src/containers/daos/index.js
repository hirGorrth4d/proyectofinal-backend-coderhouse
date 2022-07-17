require("dotenv").config()
const ProductDaoMongodb = require('./producto/productoDaoMongo');
const ProductDaoFirebase = require('./producto/productoDaoFirebase');
const CarritoDaoMongodb = require('./carrito/CarritoDaoMongo');
const CarritoDaoFirebase = require('./carrito/CarritoDaoFirebase');
const ProductoDaoMemory = require('./producto/productoDaoMemory');
const CarritoDaoMemory = require('./carrito/CarritoDaoMemory');

let productDao
let carritoDao

switch (process.env.PERS) {
    case "mongodb":
        productDao = new ProductDaoMongodb()
        carritoDao = new CarritoDaoMongodb()
    break
    case "firebase":
        productDao = new ProductDaoFirebase()
        carritoDao = new CarritoDaoFirebase()
    break
    default: 
        productDao = new ProductoDaoMemory()
        carritoDao = new CarritoDaoMemory()
}

module.exports = {
    productDao, 
    carritoDao
}