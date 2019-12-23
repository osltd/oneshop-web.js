const request = require('../helpers/request');

class Article {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Retrieve articles
     * @param {Object} query 
     * @param {String} query[ids] // article (post) id(s)
     * @param {String} query[keywords]
     * @param {String} query[tags]
     * @param {String} query[shops]
     * @param {String} query[statuses] // 'PUBLISHED' | 'SCHEDULE'
     * @param {String} query[page]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL articles form your own mall
     * 
     *  os.article.get({page:'1'});
     * 
     *  // Get articles with filters from your own mall
     * 
     *  os.article.get({ids:'1743,293,6652',keywords:'love',tags:'tag1,tag2',
     *  shops:'522',statuses:'PUBLISHED',page:'1'});
     * 
     */
    get(query){
        return request.get(`${this.base_url}/articles`, query || {});
    }
    
}

module.exports = Article;