'use strict'


/**
 * Define root class
 */
class Oneshop {

    constructor(shop_domain){
        // set shop domain
        this.setShopDomain(shop_domain);
    }

    loadModules(){
        // load modules
        this.signature = new (require('/src/modules/signature.js')(this.getShopDomain()));
    }

    /**
     * Set shop domain
     * @param {String} shop_domain 
     */
    setShopDomain(shop_domain){
        if(!shop_domain || /^[a-zA-Z0-9\.\-]$/i.test()){
            throw 'Domain name could not contain any symbol except . and -';
        }
        this.shop_domain = `${shop_domain}/api`;
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