import { get, create, remove, update } from '../helpers/request';
import OS from '../helpers/os_module';


interface Profile {
    get:Function;
    update:Function;
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
    signUp(context){
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
    login(context){
        return create({ url: `${this.baseUrl}/sessions`, body : context });
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
     *  os.consumer.checkout({
     *      items : "R1g0GTJc9tGp3443",
     *      coupons : "OneshopDevRocks",
     *      notes : "Please provide me a double layer packing, thank you!",
     *      shipping : {
     *          address : "1/F, Camelpaint Building, Block 1, 62 Hoi Yuen Road, Kwun Tong",
     *          country : "HK"
     *      },
     *      contact : {
     *          email : "hello@oneshop.team",
     *          first_name : "Peter",
     *          last_name : "Chan",
     *          phone : "+85261234567"
     *      },
     *      payment : {
     *          card : "4242424242424242",
     *          exp_date : "03/23",
     *          csc : "123"
     *      }
     *  })
     * 
     */
    checkout(context) {
        return create({ url : `${this.baseUrl}/payments`, body : context});
    }
    
}