import OS from '../helpers/os_module';
export default class ShippingMethod extends OS {
    constructor(baseUrl: string);
    /**
      * Retrieve articles
      * @param {Object} query
      * @param {String} query[ids]
      *
      * Examples:
      *
      *  // ALL filtering value are optional
      *
      *  // Get ALL shipping methods
      *
      *  os.shipping_methods.get({ids:'1,3,7'});
      *
      */
    get(query?: {
        ids: string;
    }): Promise<unknown>;
}
