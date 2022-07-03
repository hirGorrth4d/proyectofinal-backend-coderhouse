const {Carrito} = require("../containers/classes/CartContainer")
const {Producto} = require('../classes/producto')
const carrito = new Carrito(__dirname + "/data/carrito.json")
const producto = new Producto(__dirname + "/data/productos.json")

const getCarrito = (req, res) => {
    const cart = carrito.getAll()
    res.json(cart)
}

const addCarrito = (req,res) =>{
    const products = req.body.products
    const cart = carrito.addProduct(products)
    res.json(cart)
}



const updateCarrito = (req,res) => {

}

const deleteCarrito = (req,res) => {
    const id = parseInt(req.params.id)
    const cart = carrito.deleteById(id)
    res.json(cart)
}
module.exports = {
    getCarrito,
    addCarrito,
    updateCarrito,
    deleteCarrito
}