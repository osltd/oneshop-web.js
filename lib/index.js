"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_module_1 = require("./helpers/os_module");
// load modules
const article_1 = require("./modules/article");
const cart_1 = require("./modules/cart");
const consumer_1 = require("./modules/consumer");
const merchandise_1 = require("./modules/merchandise");
const order_1 = require("./modules/order");
const shipping_method_1 = require("./modules/shipping_method");
const shop_1 = require("./modules/shop");
const signature_1 = require("./modules/signature");
const validation_1 = require("./modules/validation");
const voucher_1 = require("./modules/voucher");
class Oneshop extends os_module_1.default {
    constructor(baseUrl) {
        super(baseUrl);
        // set shop base URL
        this.setShopBaseURL(baseUrl || "");
        // setup modules
        this.article = new article_1.default(this.getShopDomain());
        this.cart = new cart_1.default(this.getShopDomain());
        this.consumer = new consumer_1.default(this.getShopDomain());
        this.merchandise = new merchandise_1.default(this.getShopDomain());
        this.order = new order_1.default(this.getShopDomain());
        this.shipping_method = new shipping_method_1.default(this.getShopDomain());
        this.shop = new shop_1.default(this.getShopDomain());
        this.signature = new signature_1.default(this.getShopDomain());
        this.validation = new validation_1.default(this.getShopDomain());
        this.voucher = new voucher_1.default(this.getShopDomain());
    }
    setShopBaseURL(baseUrl) {
        // set base url
        this.baseUrl = baseUrl ? `${baseUrl}/api` : `/api`;
    }
    getShopDomain() {
        return this.baseUrl;
    }
}
exports.default = Oneshop;
