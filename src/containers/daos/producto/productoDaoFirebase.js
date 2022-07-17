const firebaseContainer = require('../../db/firebaseContainer');

class ProductDaoFirebase extends firebaseContainer{
    constructor(){
        super("productos")
    }
}

export default ProductDaoFirebase