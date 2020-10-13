"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../helpers/request");
const os_module_1 = require("../helpers/os_module");
class Merchandise extends os_module_1.default {
    constructor(baseUrl) {
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
    get(query) {
        return request_1.get({ url: `${this.baseUrl}/merchandises`, query: query || {} });
    }
}
exports.default = Merchandise;
