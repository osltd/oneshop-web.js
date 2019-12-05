const request = require('../helpers/request');

class Voucher {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Check does voucher exists with codes provided
     * @param {Object} query
     * @param {String} query[codes]
     */
    get(query){
        return request.get(`${this.base_url}/vouchers`, query || {});
    }

}

module.exports = Voucher;