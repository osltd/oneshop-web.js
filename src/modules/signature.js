const request = require('../helpers/request');

class Signature{
    
    constructor(base_url){
        this.base_url = base_url;
    }

    get(){
        return request.get(`${this.base_url}/signatures`);
    }

}

module.exports = Signature;