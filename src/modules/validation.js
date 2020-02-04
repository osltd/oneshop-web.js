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
     *  os.validation.create({email:'test@oneshop.cloud',type:'LINK'})
     * 
     */
    create(context){
        return request.post(`${this.base_url}/validations`, context);
    }

    /**
     * Consume validation to activate account or reset password
     * @param {Object} context
     * @param {String} context[code]
     * @param {String} context[passwd] (Optional)
     * @param {String} context[confpasswd] (Optional)
     * 
     * Examples:
     * 
     *  // create validation by 'email'
     * 
     *  os.validation.consume(
     *      1234, 
     *      {code:'123456',passwd:'ILoveCoding3000',confpasswd:'ILoveCoding3000'}
     *  )
     * 
     */
    consume(validationId, context){
        return request.put(`${this.base_url}/validations/${validationId}`, context);
    }
    
}

module.exports = Validation;