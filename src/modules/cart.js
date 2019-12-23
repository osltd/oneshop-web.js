const request = require('../helpers/request');

class Cart {
    
    constructor(base_url){
        this.base_url = base_url;
        // cart items
        this.item = {
            /**
             * Get items of cart
             * 
             * Examples:
             * 
             *  os.cart.item.get('32412')
             * 
             */
            get : (cartId) => request.get(`${this.base_url}/carts/${cartId}/items`, {}),

            /**
             * Add item to cart
             * @param {String} cartId
             * @param {Object} context
             * @param {String} context[id] (merchandise_id)
             * @param {Integer} context[qty]
             * 
             * Examples:
             * 
             *  os.cart.item.add('32412',{id:'233',qty:6});
             * 
             */
            add : (cartId, context) => request.post(`${this.base_url}/carts/${cartId}/items`, context),
            
            /**
             * Removes an item from the cart
             * @param {String} cartId
             * @param {String} itemId
             * 
             * Examples:
             * 
             *  os.cart.item.remove('32412','233');
             * 
             */
            remove : (cartId, itemId) => request.delete(`${this.base_url}/carts/${cartId}/items/${itemId}`)
        }
    }

    /**
     * Create Cart
     * 
     * Examples:
     * 
     *  os.cart.create();
     * 
     */
    create(){
        return request.post(`${this.base_url}/carts`, {});
    }

}

module.exports = Cart;