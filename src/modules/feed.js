const request = require('../helpers/request');

class Feed {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Retrieve feeds
     */
    get(query){
        return request.get(`${this.base_url}/feeds`, query || {});
    }
    
}

module.exports = Feed;