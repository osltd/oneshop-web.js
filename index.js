'use strict'

class Oneshop {

    constructor(base_url){
        this.setShopBaseURL(base_url || "");
    }

    loadModules(){
        // file upload signature
        this.signature = new (require('./src/modules/signature'))(this.getShopDomain());
        // shop
        this.shop = new (require('./src/modules/shop'))(this.getShopDomain());
        // consumer
        this.consumer = new (require('./src/modules/consumer'))(this.getShopDomain());
        // article
        this.article = new (require('./src/modules/article'))(this.getShopDomain());
        // merchandise
        this.merchandise = new (require('./src/modules/merchandise'))(this.getShopDomain());
        // product variants
        this.variant = new (require('./src/modules/variant'))(this.getShopDomain());
        // validations
        this.validation = new (require('./src/modules/validation'))(this.getShopDomain());
        // order
        this.order = new (require('./src/modules/order'))(this.getShopDomain());
        // voucher
        this.voucher = new (require('./src/modules/voucher'))(this.getShopDomain());
        // cart
        this.cart = new (require('./src/modules/cart'))(this.getShopDomain());
        // shipping methods
        this.shipping_method = new (require('./src/modules/shipping_method'))(this.getShopDomain());
    }

    setShopBaseURL(base_url){
        // set base url
        this.BASE_URL = base_url ? `${base_url}/api` : `/api`;
        // reload modules
        this.loadModules();
    }

    getShopDomain(){
        return this.BASE_URL;
    }

}

module.exports = Oneshop;