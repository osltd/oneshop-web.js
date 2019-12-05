const request = require('../helpers/request');

class Article {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Retrieve shop settings
     */
    get(query){
        return request.get(`${this.base_url}/articles`, query || {});
    }
    
}

module.exports = Article;