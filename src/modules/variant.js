const request = require('../helpers/request');

class Variant {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Retrieve variants of a product
     * @param {Integer} productId
     * @param {Object} query 
     * 
     * Examples:
     *  
     *  // Filter values are optional
     * 
     *  // Get ALL variants within the related product
     * 
     *  os.creator.variant.get(2354,null)
     * 
     *  // Get specified variants within the related product using filters
     * 
     *  os.variant.get(2354,{description:'love'})
     * 
     */
    get(productId, query){
        return request.get(`${this.baseURL}/products/${productId}`, query || {})
    }
    
}

module.exports = Variant;