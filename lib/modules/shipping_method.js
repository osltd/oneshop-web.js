"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../helpers/request");
const os_module_1 = require("../helpers/os_module");
class ShippingMethod extends os_module_1.default {
    constructor(baseUrl) {
        super(baseUrl);
    }
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
    get(query) {
        return request_1.get({ url: `${this.baseUrl}/shipping_methods`, query: query || {} });
    }
}
exports.default = ShippingMethod;
