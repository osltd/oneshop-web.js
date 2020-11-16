"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../helpers/request");
const os_module_1 = require("../helpers/os_module");
class Collection extends os_module_1.default {
    constructor(baseUrl) {
        super(baseUrl);
    }
    /**
     * Retrieve shop or channel's collections
     * @param {Object} query
     * Examples:
     *
     *  os.collection.get({ ids: "1234,4321,7489", tags:"cups" });
     *
     */
    get(query) {
        return request_1.get({ url: `${this.baseUrl}/collections`, query: query || {} });
    }
}
exports.default = Collection;
