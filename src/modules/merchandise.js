const request = require('../helpers/request');

class Merchandise {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Retrieve merchandises
     * @param {Object} query
     * @param {String} query[ids]
     * @param {String} query[keywords]
     * @param {String} query[tags]
     * @param {String} query[shops]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL merchandises
     * 
     *  os.mall.merchandise.get({page:'1'}) 
     * 
     *  // Get specified merchandises with filters
     * 
     *  os.merchandise.get({ids:'43,54,123',shops:'443,121,93'',tags:'tag1,tag2'
     *  keyword:'love',page:'1'}) 
     * 
     */
    get(query){
        return request.get(`${this.base_url}/merchandises`, query || {});
    }
    
}

module.exports = Merchandise;