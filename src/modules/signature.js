const Module = require('./module');


class Signature extends Module{
    
    constructor(endpoint){
        super(endpoint);
    }

    get(){
        return this.request.get(`${this.endpoint}/signatures`);
    }

}

module.exports = Signature;