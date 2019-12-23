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
         *  os.order.get({page:'1'});
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
     *          id:625,
     *          product:{
     *              id:'cad28564dee135464dab',
     *              name:'Banana'
     *          },
     *          sku:'tk_1',
     *          option:'color:Color,yellow:Yellow',
     *          quantity:5,
     *          photos:[ 
     *              { 
     *                  url:'https://assets.oneshop.cloud/..png',
     *                  ext:'png'
     *              }
     *          ]
     *      }],
     *      contact:{
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