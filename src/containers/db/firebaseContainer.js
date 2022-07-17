
const admin = require('firebase-admin');
const config = require('../../../config');

const serviceAccount = config.firebase

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
})



console.log("Firebase Conectado");

class FirebaseContainer {
    constructor(collectionName) {
        this.db = admin.firestore()
        this.collection = this.db.collection(collectionName)
    }
    async getAll() {
        try {
            const snapshot = await this.collection.get()
            const docs = snapshot.docs()
            const data = docs.map(x =>{
                return {id: x.id, ...x.data()}
            })
            return data
        } catch (err) {
            throw err
        };
    }
    async getById(id){
        try {
            const ref = this.collection.doc(id)
            const doc = await ref.get()
            return {id: doc.id, ...doc.data()}
        } catch (err) {
            throw err
        };
    }
    async addProduct(prod){
        try {
            await this.collection.doc(data.id).create(JSON.parse(JSON.stringify(prod)))
            return prod.id
        } catch (err) {
            throw err
        };

    }
    async updateProduct(id, updatedProd){
        try {
            const doc = this.collection.doc(id)
            return await doc.update(updatedProd)
        } catch (err) {
            throw err
        };
    }
    async deleteById(id){
        try {
            const doc = this.query.doc(id)
            return await doc.delete()
        } catch (err) {
            throw err
        };
    }
}

export default FirebaseContainer