const {MongoClient} = require('mongodb');
const config = require('../../../config');
require("dotenv").config()


class MongoDBContainer {
    constructor(db, collection) {
        this.mongo = new MongoClient(config.mongodb.connection)
        this.db = db
        this.collection = collection
    }

    async connect(){
        try {
            await this.mongo.connect()
            console.log("MongoDB connected");
        } catch (err) {
            throw err
        };
    }
    async getAll() {
        try {
            const data = await this.mongo
                .db(this.db)
                .collection(this.collection)
                .find({})
                .toArray()
            return data
        } catch (err) {
            throw err
        };
    }
    async getById(id){
        try {
            const data = await this.mongo
                .db(this.db)
                .collection(this.collection)
                .findOne({id:id})
            return data
        } catch (err) {
            throw err
        };
    }
    async addProduct(prod){
        try {
            await this.mongo
                .db(this.db)
                .collection(this.collection)
                .insertOne(prod)
            return prod.id
        } catch (err) {
            throw err
        };
    }
    async updateProduct(id, updatedProd){
        try {
            return await this.mongo
                .db(this.db)
                .collection(this.collection)
                .updateOne({id:id}, {$set: updatedProd})
        } catch (err) {
            throw err
        };
    }
    async deleteById(id){
        try {
            return await this.mongo
                .db(this.db)
                .collection(this.collection)
                .deleteOne({id: id})
        } catch (err) {
            throw err
        };
    }
}

export default MongoDBContainer