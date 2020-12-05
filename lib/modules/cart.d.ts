import OS from '../helpers/os_module';
import { QuotationInfo } from '../helpers/interfaces';
interface CartItemRequest {
    get: {
        (cart_id: string): Promise<unknown>;
    };
    put: {
        (cart_id: string, item: {
            id: string;
            qty: number;
        }): Promise<unknown>;
    };
    remove: {
        (cart_id: string, item_id: string): Promise<unknown>;
    };
}
export default class Cart extends OS {
    item: CartItemRequest;
    constructor(baseUrl: string);
    /**
     * Create Cart
     *
     * Examples:
     *
     *  os.cart.create();
     *
     */
    create(): Promise<unknown>;
    /**
     * Get Cart Preview
     *
     * Examples:
     *
     *  os.cart.preview();
     *
     */
    preview(context: QuotationInfo): Promise<unknown>;
}
export {};
