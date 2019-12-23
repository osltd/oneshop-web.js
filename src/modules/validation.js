const request = require('../helpers/request');

class Validation {
    
    constructor(base_url){
        this.base_url = base_url;
    }

    /**
     * Creates a validation request for validate new created account and password recovery
     * @param {Object} context
     * @param {String} context[email]
     * @param {String} context[type] (link, code)
     * 
     * Examples:
     * 
     *  // create validation by 'email'
     * 
     *  os.validation.create({email:'test@oneshop.cloud',type:'LINK',null})
     * 
     */
    create(context){
        return request.post(`${this.base_url}/validations`, context);
    }
    
}

module.exports = Validation;