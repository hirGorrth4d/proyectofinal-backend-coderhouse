const mongodbContainer = require('../../db/mongodbContainer');
const Cart = require('../../classes/CartContainer');
const config = require('../../../../config');

class CarritoDaoMongo extends mongodbContainer {
    constructor(){
        super(config.mongodb.connection, "ecommerce", "carritos")
    }
    async deleteCartItem(cartId, item){
        try {
            return await this.mongo
                .db(this.db)
                .collection(this.collection)
                .updateOne({id:cartId}, {$pull: {productos: {id: item}}})
        } catch (err) {
            throw err
        };
    }

    async addCartItem(cartId, item){
        try {
            const cart = await this.mongo.db(this.db).collection(this.collection).updateOne({id:cartId}, {$push: {productos: item}})
            if( cart.matchedCount)return cartId
            else{
                return await this.addProduct(JSON.parse(JSON.stringify(new Cart([item]))))
            }
        } catch (err) {
            throw err
        };
    }
}

export default CarritoDaoMongo