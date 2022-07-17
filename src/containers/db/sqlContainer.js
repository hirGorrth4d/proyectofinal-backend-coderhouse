const knex = require('knex');
const config = require('../../../config');

class SqlContainer {
    constructor (tabla){
        this.tabla = tabla
        this.knex = knex(config.sql)
    }
    async getAll() {
        try {
            const data = await this.knex.from(this.tabla).select("*")
            return data
        } catch (err) {
            throw err
        };
    }
    async getById(id){
        try {
            const data = await this.knex.from(this.tabla).select("*").where("id", "=", id)
            return data
        } catch (err) {
            throw err
        };
    }
    async addProdcut(prod){
        try {
            await this.knex(this.tabla).insert(prod)
        } catch (err) {
            throw err
        };
    }
    async updateProduct(id, updatedProd){
        try {
            await this.knex(this.tabla).where("id", "=", id).update(updatedProd)
        } catch (err) {
            throw err
        };
    }
    async deleteById(id){
        try {
            await this.knex(this.tabla).where("id", "=", id).del()
        } catch (err) {
            throw err
        };
    }
}

export default SqlContainer