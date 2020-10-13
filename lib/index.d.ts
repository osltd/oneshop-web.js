import OS from "./helpers/os_module";
import Article from "./modules/article";
import Cart from "./modules/cart";
import Consumer from "./modules/consumer";
import Merchandise from "./modules/merchandise";
import Order from "./modules/order";
import ShippingMethod from "./modules/shipping_method";
import Shop from "./modules/shop";
import Signature from "./modules/signature";
import Validation from "./modules/validation";
import Voucher from "./modules/voucher";
export default class Oneshop extends OS {
    article: Article;
    cart: Cart;
    consumer: Consumer;
    merchandise: Merchandise;
    order: Order;
    shipping_method: ShippingMethod;
    shop: Shop;
    signature: Signature;
    validation: Validation;
    voucher: Voucher;
    constructor(baseUrl: string);
    setShopBaseURL(baseUrl: string): void;
    getShopDomain(): string | undefined;
}
