const firebaseContainer = require('../../db/firebaseContainer');
const Cart = require('../../classes/CartContainer');
const { FieldValue } = require("firebase-admin/firestore");

class CarritoDaoFirebase extends firebaseContainer {
    constructor(){
        super("carritos")
    }
    async deleteCartItem( cartId, itemId){
        try {
            const ref = this.collection.doc(cartId)
            const doc = await ref.get()
            const deleteItem = doc.data().productos.find(x=>x.id ===itemId)
            if(!deleteItem)return new Error("no existe ese item")
            else{
                return await ref.update({
                    productos: FieldValue.arrayRemove(deleteItem)
                })
            }
        } catch (err) {
            throw err
        };
    }
    async addCartItem(cartId, item){
        try {
            const ref = this.collection.doc(cartId)
            const doc = await ref.get()
            if (doc.exists){
                await ref.update({
                    productos: FieldValue.arrayUnion(item)
                })
                return cartId
            }else {
                return await this.addProduct(new Cart([item]))
            }
        } catch (err) {
            throw err
        };
    }
}

export default CarritoDaoFirebase