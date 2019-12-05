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
     */
    get(query){
        return request.get(`${this.base_url}/merchandises`, query || {});
    }
    
}

module.exports = Merchandise;