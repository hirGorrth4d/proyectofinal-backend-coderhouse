const mongodbContainer = require('../../db/mongodbContainer');
const config = require('../../../../config');

class ProductDaoMongodb extends mongodbContainer{
    constructor () {
        super(config.mongodb.connection, "ecommerce", "productos")
    }
}

export default ProductDaoMongodb