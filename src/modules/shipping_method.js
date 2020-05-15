const request = require('../helpers/request');

class ShippingMethods {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Retrieve articles
     * @param {Object} query 
     * @param {String} query[ids] // article (post) id(s)
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL articles
     * 
     *  os.shipping_methods.get({ids:'1,3,7'});
     * 
     */
    get(query){
        return request.get(`${this.base_url}/shipping_methods`, query || {});
    }
    
}

module.exports = ShippingMethods;