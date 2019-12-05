'use strict'

class Oneshop {

    constructor(base_url){
        this.setShopBaseURL(base_url);
    }

    loadModules(){
        // file upload
        this.signature = new (require('./src/modules/signature'))(this.getShopDomain());
        // shop
        this.shop = new (require('./src/modules/shop'))(this.getShopDomain());
        // consumer
        this.consumer = new (require('./src/modules/consumer'))(this.getShopDomain());
        // article
        this.article = new (require('./src/modules/article'))(this.getShopDomain());
        // merchandise
        this.merchandise = new (require('./src/modules/merchandise'))(this.getShopDomain());
    }

    setShopBaseURL(base_url){
        // try to detect window
        var window = window || undefined;
        // using base url
        if(base_url && !/^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/.test(base_url)){
            throw `${base_url} is not a valid domain. e.g. your_shop_name.oneshop.host`;
        } else 
        // no base url specify
        if(window != undefined && !base_url){
            base_url = (window.location || {}).host;
        } 
        // set base url
        this.BASE_URL = `https://${base_url}/api`;
        // reload modules
        this.loadModules();
    }

    getShopDomain(){
        return this.BASE_URL;
    }

}

module.exports = Oneshop;