import { get, create, remove } from '../helpers/request';
import OS from '../helpers/os_module';


interface CartItemRequest {
    get:Function;
    add:Function;
    remove:Function; 
}


export default class Cart extends OS {
    
    // define properties
    item:CartItemRequest;

    constructor(baseUrl:string){
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
            get : (cartId) => get({ url: `${this.baseUrl}/carts/${cartId}/items`, query : {}}),

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
            add : (cartId, context) => create({ url : `${this.baseUrl}/carts/${cartId}/items`, body : context || {}}),
            
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
            remove : (cartId, itemId) => remove({ url : `${this.baseUrl}/carts/${cartId}/items/${itemId}` })
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
        return create({ url : `${this.baseUrl}/carts`, body : {}});
    }
    
}