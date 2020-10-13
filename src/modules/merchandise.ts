import { get } from '../helpers/request';
import OS from '../helpers/os_module';

interface MerchandisesQuery {
    ids?:string;
    collections?:string;
    collection_names?:string;
    shops?:string;
    type?:string;
    skus?:string;
    tags?:string;
    instock?:boolean;
    locale?:string;
    keywords?:string;
    ordering?:string;
    page?:number;
}


export default class Merchandise extends OS {
    
    constructor(baseUrl:string){
        super(baseUrl);
    }

    /**
     * Retrieve merchandises
     * @param {Object} query
     * @param {String} query[ids]
     * @param {String} query[keywords]
     * @param {String} query[tags]
     * @param {String} query[shops]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL merchandises
     * 
     *  os.merchandise.get({page:'1'}) 
     * 
     *  // Get specified merchandises with filters
     * 
     *  os.merchandise.get({
     *      ids:'43,54,123',
     *      shops:'443,121,93',
     *      tags:'tag1,tag2'
     *      keyword:'love',page:'1'
     *  }) 
     * 
     */
    get(query?:MerchandisesQuery){
        return get({ url : `${this.baseUrl}/merchandises`, query : query || {}});
    }

}