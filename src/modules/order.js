const request = require('../helpers/request');

class Order {
    
    constructor(base_url){
        this.base_url = base_url;
        /**
         * Retrieve order history
         * @param {Object} query 
         * @param {String} query[page]
         * 
         * Examples:
         * 
         *  os.order.history.get({page:'1'});
         * 
         */
        this.history = {
            get : (query) => request.get(`${this.base_url}/backlogs`, query || {})
        }
    }

    /**
     * Create order with payment credentials
     * @param {Object} context
     * @param {Array} context[items]
     * @param {String} context[coupons]
     * @param {Object} context[contact]
     * @param {String} context[notes]
     * @param {Object} context[payment]
     * @param {String} context[shipping]
     * 
     * Examples:
     * 
     *  os.order.create({
     *      coupons:'ONESHOP10OFF',
     *      notes:'Please check the package pack well.',
     *      shipping:'1/F Block 1, Camcam Paint Building, 62 Hoi Yuen Road, Kwun Tong',
     *      items:[{
     *          id:'08h25glao8h03ipwui9202ty48jfhum4x',
     *          qty:5,
     *          courier:"80h2480-29gh82gh-13081y4f-98h21"
     *      }],
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
    create(context){
        return request.post(`${this.base_url}/orders`, context);
    }

}

module.exports = Order;