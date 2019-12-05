const request = require('../helpers/request');

class Article {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Retrieve articles
     */
    get(query){
        return request.get(`${this.base_url}/articles`, query || {});
    }
    
}

module.exports = Article;