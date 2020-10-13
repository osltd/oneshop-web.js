"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../helpers/request");
const os_module_1 = require("../helpers/os_module");
class Shop extends os_module_1.default {
    constructor(baseUrl) {
        super(baseUrl);
    }
    /**
     * Retrieve shop settings
     *
     * Examples:
     *
     *  os.shop.settings();
     *
     */
    settings() {
        return request_1.get({ url: `${this.baseUrl}/shops/session` });
    }
}
exports.default = Shop;
