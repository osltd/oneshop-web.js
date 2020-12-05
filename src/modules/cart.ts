import { get, create, remove } from '../helpers/request';
import OS from '../helpers/os_module';
import { QuotationInfo } from '../helpers/interfaces';


interface CartItemRequest {
    get    : { (cart_id:string):Promise<unknown> };
    put    : { (cart_id:string, item:{ id:string; qty:number }):Promise<unknown> };
    remove : { (cart_id:string, item_id:string ):Promise<unknown> }; 
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
            get : (cart_id) => get({ url: `${this.baseUrl}/carts/${cart_id}/items`, query : {}}),

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
            put : (cart_id, context) => create({ url : `${this.baseUrl}/carts/${cart_id}/items`, body : context || {}}),
            
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
            remove : (cart_id, item_id) => remove({ url : `${this.baseUrl}/carts/${cart_id}/items/${item_id}` })
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

    /**
     * Get Cart Preview
     * 
     * Examples:
     * 
     *  os.cart.preview();
     * 
     */
    preview(context:QuotationInfo){
        return create({ url : `${this.baseUrl}/carts/${context.items}/previews`, body : context })
    }
    
}