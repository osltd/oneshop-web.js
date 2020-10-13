import { get } from '../helpers/request';
import OS from '../helpers/os_module';

export default class Voucher extends OS {
    
    constructor(baseUrl:string){
        super(baseUrl);
    }

    /**
     * Check does voucher exists with codes provided
     * @param {Object} query
     * @param {String} query[codes]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional (except'codes' value)
     * 
     *  // Get ALL vouchers (coupons) 
     * 
     *  os.voucher.get({codes:'ONESHOP10OFF',page:'1'}) 
     * 
     */
    get(query?: { codes:string; page:number }){
        return get({ url : `${this.baseUrl}/vouchers`, query : query || {}});
    }

}