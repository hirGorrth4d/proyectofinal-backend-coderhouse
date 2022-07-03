const fs =require("fs")
const {Carrito} = require('../classes/carrito')
const {Producto} = require('../classes/producto')
const carrito = new Carrito(__dirname + "/data/carrito.json")
const producto = new Producto(__dirname + "/data/productos.json")

const getCarrito = (req, res) => {
    const cart = carrito.getAll()
    res.json(cart)
}

const addCarrito = (req,res) =>{
    const products = req.body.products.map(Number)
    const allProducts = producto.getAll()
    const productFind = allProducts.flter((product) => {
        products.includes(product.id)
    })
    const cart = carrito.save({products: productFind})
    res.json(cart)
}

module.exports = {
    getCarrito,
    addCarrito
}