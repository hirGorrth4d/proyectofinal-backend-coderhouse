const memoryContainer = require('../../db/memoryContainer');

class CarritoDaoMemory extends memoryContainer{
    async save(carrito= {
        productos: []
    }){
        return super.save(carrito)
    }
}

export default CarritoDaoMemory