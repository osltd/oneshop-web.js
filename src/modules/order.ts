import { get, create } from '../helpers/request';
import OS from '../helpers/os_module';
import { OrderInfo } from '../helpers/interfaces';

interface OrderHistory {
    get: { (query?:{ page?:number, start_time?:string, end_time?:string }):Promise<unknown> };
}

export default class Order extends OS {
    
    history:OrderHistory;

    constructor(baseUrl:string){
        super(baseUrl);
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
            get : (query?) => get({ url : `${this.baseUrl}/orders/histories`, query : query || {}})
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
    place(context:OrderInfo){
        return create({ url : `${this.baseUrl}/orders`, body: context });
    }

}