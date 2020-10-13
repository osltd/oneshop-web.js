import { get, create, remove, update } from '../helpers/request';
import OS from '../helpers/os_module';
import { OrderInfo } from '../helpers/interfaces';

interface Profile {
    get    : { ( query:any ) : Promise<unknown> };
    update : { ( context:{ tags?:string; passwd?:string; confpasswd?:string; [customProfileKey:string]:any } ) : Promise<unknown> };
}

export default class Consumer extends OS {
    
    profile:Profile;

    constructor(baseUrl:string){
        super(baseUrl);

        /**
         * Profile of consumer
         */
        this.profile = {

            /**
             * Retrieve consumer's profile
             * 
             * Examples:
             * 
             *  os.consumer.profile.get()
             * 
             */
            get : (query) => get({url: `${this.baseUrl}/consumers/session`, query : query || {}}),

            /**
             * Update user profile
             * @param {Object} context 
             * @param {String} context[any_field] // custom values you want e.g context[gender], context[phone]
             * 
             * Examples:
             * 
             *  os.consumer.profile.update(
             *  field_1:'value_1',
             *  field_2:'value_2',
             *  ...);
             */
            update : (context) => update({ url : `${this.baseUrl}/consumers/session`, body : context })

        };

    }

    /**
     * Signing up as shop consumer
     * @param {Object} context
     * @param {String} context[first_name]
     * @param {String} context[last_name]
     * @param {String} context[email]
     * @param {String} context[phone]
     * @param {String} context[passwd]
     * @param {String} context[confpasswd]
     * 
     * Examples:
     * 
     *  os.consumer.signUp({confpasswd:'12345678',passwd:'12345678',first_name:'One',last_name:'Shop',
     *  phone:'+85299887766',email:'test@oneshop.cloud'});
     * 
     */
    signUp(context: { email?:string; phone?:string; passwd:string; confpasswd:string; first_name:string; last_name:string, [customProfileKey:string] : any }){
        return create({url: `${this.baseUrl}/consumers`, body: context});
    }

    /**
     * Logout your account
     * 
     * Examples:
     * 
     *  os.consumer.logout();
     * 
     */
    logout(){
        return remove({url : `${this.baseUrl}/consumers/session`});
    }

    /**
     * Login
     * @param {Object} context 
     * @param {String} context[email]
     * @param {String} context[phone]
     * @param {String} context[passwd]
     * 
     * 
     * Examples:
     * 
     *  // Either 'phone' or 'email'  together with 'passwd' value to get token (session key)
     * 
     *  // 'phone' + 'passwd'
     * 
     *  os.consumer.login({phone:'+85299887766',passwd:'12ab5678ij'});
     * 
     *  // 'email' + 'passwd'
     * 
     *  os.consumer.login({email:'test@oneshop.cloud',passwd:'12ab5678ij'});
     * 
     * 
     */
    login(credential:{ email?:string; phone?:string; passwd:string }){
        return create({ url: `${this.baseUrl}/sessions`, body : credential });
    }


    /**
     * Checkout
     * @param {Object} context 
     * @param {String} context[items] // Cart ID
     * @param {String} context[coupons] // Coupons code separated by commas
     * @param {String} context[notes]
     * @param {Object} context[payment]
     * @param {String} context[payment][card]
     * @param {String} context[payment][exp_date]
     * @param {String} context[payment][csc]
     * @param {Object} context[contact]
     * @param {String} context[shipping][address]
     * @param {String} context[shipping][country]
     * 
     * Examples:
     * 
     *  os.order.create({
     *      coupons:'ONESHOP10OFF',
     *      notes:'Please check the package pack well.',
     *      shippings : {
     *          1234(shop id) : 'os-ship-a422-ad9g-2f42-akf0' (shipping method id)
     *      }
     *      shipping:{
     *          address : '1/F Block 1, Camcam Paint Building, 62 Hoi Yuen Road, Kwun Tong',
     *          country : 'HK'
     *      },
     *      items:"h03ifhum4x",
     *      contact:{
     *          first_name:'One',
     *          last_name:'Shop',
     *          email:'test@oneshop.cloud',
     *          phone:'+85293456789',
     *          address:'1/f, Block 1, Camel Paint Building, 62 Hoi Yuen Road, Kwun Tong'
     *      },
     *      payment:{
     *          card:'4242424242424242',
     *          csc:'123',
     *          exp_date:'01/23'
     *      }
     *  })
     * 
     */
    checkout(context:OrderInfo) {
        return create({ url : `${this.baseUrl}/payments`, body : context});
    }
    
}