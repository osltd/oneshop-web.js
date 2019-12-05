const request = require('../helpers/request');

class Shop {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Retrieve shop settings
     */
    settings(){
        return request.get(`${this.base_url}/shops/session`);
    }
    
}

module.exports = Shop;