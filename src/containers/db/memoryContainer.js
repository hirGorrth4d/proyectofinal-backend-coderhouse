class MemoryContainer{
    constructor () {
        this.contenedor = []
    }

    getAll() {
        return this.contenedor
    }
    getById(id){
        const prod = this.contenedor.find(x => x.id ==id)
        if (!prod){
            throw new Error ("Error al encontrar producto")
        } else {
            return prod
        }
    }
    addProduct(prod) {
        this.contenedor.push(prod)
        return this.contenedor
    }
    countCart() {
        let cart = this.contenedor.length
        return cart
    }
}