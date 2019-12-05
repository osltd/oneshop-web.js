const request = require('../helpers/request');

class Cart {
    
    constructor(base_url){
        this.base_url = base_url;
        // cart items
        this.item = {
            /**
             * Get items of cart
             */
            get : (cartId) => request.get(`${this.base_url}/carts/${cartId}/items`, {}),

            /**
             * Add item to cart
             * @param {String} cartId
             * @param {Object} context
             * @param {String} context[id] (merchandise_id)
             * @param {Integer} context[qty]
             */
            add : (cartId, context) => request.post(`${this.base_url}/carts/${cartId}/items`, context),
            
            /**
             * Removes an item from the cart
             * @param {String} cartId
             * @param {String} itemId
             */
            remove : (cartId, itemId) => request.delete(`${this.base_url}/carts/${cartId}/items/${itemId}`)
        }
    }

    /**
     * Create Cart
     */
    create(){
        return request.post(`${this.base_url}/carts`, {});
    }

}

module.exports = Cart;