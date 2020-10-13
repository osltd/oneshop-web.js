"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../helpers/request");
const os_module_1 = require("../helpers/os_module");
class Validation extends os_module_1.default {
    constructor(baseUrl) {
        super(baseUrl);
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
    create(context) {
        return request_1.create({ url: `${this.baseUrl}/validations`, body: context });
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
     *  // if passwd and confpasswd are exists, will also reset the password
     *  // otherwise, will only activate the account
     *
     *  os.validation.consume(
     *      1234,
     *      {code:'123456',passwd:'ILoveCoding3000',confpasswd:'ILoveCoding3000'}
     *  )
     *
     */
    consume(validation_id, context) {
        return request_1.update({ url: `${this.baseUrl}/validations/${validation_id}`, body: context });
    }
}
exports.default = Validation;
