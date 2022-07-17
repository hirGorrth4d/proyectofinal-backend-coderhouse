const fs = require('fs');
const config = require('../../../config');

class FileContainer {
    constructor(ruta){
        this.ruta = `${config.fileSystem.path}/${ruta}`
    }
    async getAll(){
        try {
            const objects = await fs.readFile(this.ruta, "utf-8")
            return JSON.parse(objects)
        } catch (err) {
            return []
        };
    }
    async getById(id){
        const objects = await this.getAll()
        const objectID = objects.find(x => x.id ===id)
        if (!objectID){
            throw new Error ("Error al encontrar producto")
        } else {
            return objectID
        }
    }
    async addProduct(prod){
        const objects = await this.getAll()
        let newID
        if (objects.length ===0) {
            newID = 1
        } else {
            newID = objects[objects.length - 1].id + 1
        }
        const newObject = {...prod, id: newID}
        objects.push(newObject)
        try {
            await fs.writeFile(this.ruta, JSON.stringify(objects, null, 2))
            return newObject
        } catch (err) {
            throw new Error (`Error al guardar: ${err}`)
        };
    }
    async updateProduct(updatedProd) {
        const objects = await this.getAll()
        const product = objects.findIndex(x => x.id=== updatedProd.id)
        if (product < 0) {
            throw new Error ("error al encontrar producto")
        } else {
            objects[product] = updatedProd
            try {
                await fs.writeFile(this.ruta, JSON.stringify(objects, null, 2))
            } catch (err) {
                throw new Error (" error al actualizar " + err)
            };
        }
    }
    async deleteById(id){
        const objects = await this.getAll()
        const product = objects.findIndex(x => x.id === id)
        if (product < 0){
            throw new Error ("error al encontrar producto")
        } else {
            objects.splice(product, 1)
            try {
                await fs.writeFile(this.ruta, JSON.stringify(objects, null, 2))
            } catch (err) {
                throw new Error (`Error al borrar ${err}`)
            };
        }
    }

    async deleteAll() {
        try {
            await fs.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (err) {
            throw new Error (`Error al borrar ${err}`)
        };
    }
}

export default FileContainer