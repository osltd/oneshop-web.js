import { create, update } from '../helpers/request';
import OS from '../helpers/os_module';

export default class Validation extends OS {
    
    constructor(baseUrl:string){
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
    create(context: { email:string; type:string; }){
        return create({ url : `${this.baseUrl}/validations`, body: context});
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
    consume(validation_id:string, context : { code:string, passwd?:string; confpasswd?:string }){
        return update({ url : `${this.baseUrl}/validations/${validation_id}`, body:context });
    }

}