'use strict'


/**
 * Define root class
 */
class Oneshop {

    constructor(shop_domain){
        // preset credentials if it has
        this.shop_domain = shop_domain;
    }

    loadModules(){
        // load modules
        //this.mall     = new (require('./src/roles/mall'))(this.getBaseURL(), this.getCredentials());
    }

    /**
     * Set shop domain
     * @param {String} shop_domain 
     */
    setShopDomain(shop_domain){
        this.shop_domain = shop_domain;
        this.loadModules();
    }


    /**
     * Returns the domain of shop
     */
    getShopDomain(){
        return this.shop_domain;
    }

}

module.exports = Oneshop;