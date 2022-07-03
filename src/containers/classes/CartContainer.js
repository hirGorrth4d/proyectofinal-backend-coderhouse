class CartContainer {
    constructor(id, producto) {
        this.id = id,
        this.productos = producto
    }

    getTimeStamp() {
        const date = Date.now()
        const today = new Date(date)
        const timestamp = today.toUTCString()
        return timestamp
    }
    getById(id){
        
    }
}