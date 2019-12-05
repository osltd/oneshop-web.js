const request = require('../helpers/request');

class Commodity {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Retrieve your shops products
     * @param {Object} query
     * @param {String} query[ids]
     * @param {String} query[keywords]
     * @param {String} query[tags]
     */
    get(query){
        return request.get(`${this.base_url}/commodities`, query || {});
    }
    
}

module.exports = Commodity;