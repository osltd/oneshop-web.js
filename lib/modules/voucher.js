"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../helpers/request");
const os_module_1 = require("../helpers/os_module");
class Voucher extends os_module_1.default {
    constructor(baseUrl) {
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
    get(query) {
        return request_1.get({ url: `${this.baseUrl}/vouchers`, query: query || {} });
    }
}
exports.default = Voucher;
