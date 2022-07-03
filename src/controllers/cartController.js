const {Carrito} = require('../classes/carrito')
const {Producto} = require('../classes/producto')
const carrito = new Carrito(__dirname + "/data/carrito.json")
const producto = new Producto(__dirname + "/data/productos.json")

const getCarrito = (req, res) => {
    
}

const addCarrito = (req,res) =>{
    
}

module.exports = {
    getCarrito,
    addCarrito
}