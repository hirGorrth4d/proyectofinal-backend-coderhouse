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
    updateProduct(updatedProd){
        const obj = this.contenedor.findIndex(x => x.id ==id);
        if (obj == -1) {
            throw new Error ("error al actualizar")
        } else {
            this.contenedor[obj] = updatedProd
            return updatedProd
        }
    }
    deleteById(id){
        this.contenedor.filter(x => x.id !== id)
    }
    deleteAll() {
        this.contenedor = []
    }
}