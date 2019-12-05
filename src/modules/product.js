const request = require('../helpers/request');

class Product {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Retrieve your products
     * @param {Object} query
     * @param {String} query[ids]
     * @param {String} query[keywords]
     * @param {String} query[tags]
     */
    get(query){
        return request.get(`${this.base_url}/products`, query || {});
    }
    
}

module.exports = Product;