"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../helpers/request");
const os_module_1 = require("../helpers/os_module");
class Cart extends os_module_1.default {
    constructor(baseUrl) {
        super(baseUrl);
        this.item = {
            /**
             * Get items of cart
             *
             * Examples:
             *
             *  os.cart.item.get('32412')
             *
             */
            get: (cart_id) => request_1.get({ url: `${this.baseUrl}/carts/${cart_id}/items`, query: {} }),
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
            put: (cart_id, context) => request_1.create({ url: `${this.baseUrl}/carts/${cart_id}/items`, body: context || {} }),
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
            remove: (cart_id, item_id) => request_1.remove({ url: `${this.baseUrl}/carts/${cart_id}/items/${item_id}` })
        };
    }
    /**
     * Create Cart
     *
     * Examples:
     *
     *  os.cart.create();
     *
     */
    create() {
        return request_1.create({ url: `${this.baseUrl}/carts`, body: {} });
    }
}
exports.default = Cart;
