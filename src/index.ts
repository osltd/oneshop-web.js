import OS from "./helpers/os_module";

// load modules
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

export default class Oneshop extends OS{

    article         : Article;
    cart            : Cart;
    consumer        : Consumer;
    merchandise     : Merchandise;
    order           : Order;
    shipping_method : ShippingMethod;
    shop            : Shop;
    signature       : Signature;
    validation      : Validation;
    voucher         : Voucher;

    constructor(baseUrl:string){
        super(baseUrl)
        // set shop base URL
        this.setShopBaseURL(baseUrl || "");
        // setup modules
        this.article = new Article(baseUrl);
        this.cart = new Cart(baseUrl);
        this.consumer = new Consumer(baseUrl);
        this.merchandise = new Merchandise(baseUrl);
        this.order = new Order(baseUrl);
        this.shipping_method = new ShippingMethod(baseUrl);
        this.shop = new Shop(baseUrl);
        this.signature = new Signature(baseUrl);
        this.validation = new Validation(baseUrl);
        this.voucher = new Voucher(baseUrl);
    }

    setShopBaseURL(baseUrl:string){
        // set base url
        this.baseUrl = baseUrl ? `${baseUrl}/api` : `/api`;
    }

    getShopDomain(){
        return this.baseUrl;
    }

}