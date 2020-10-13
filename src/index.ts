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

    constructor(baseUrl?:string){
        super(baseUrl)
        // set shop base URL
        this.setShopBaseURL(baseUrl || "");
        // setup modules
        this.article = new Article(this.getShopDomain());
        this.cart = new Cart(this.getShopDomain());
        this.consumer = new Consumer(this.getShopDomain());
        this.merchandise = new Merchandise(this.getShopDomain());
        this.order = new Order(this.getShopDomain());
        this.shipping_method = new ShippingMethod(this.getShopDomain());
        this.shop = new Shop(this.getShopDomain());
        this.signature = new Signature(this.getShopDomain());
        this.validation = new Validation(this.getShopDomain());
        this.voucher = new Voucher(this.getShopDomain());
    }

    setShopBaseURL(baseUrl:string):void{
        // set base url
        this.baseUrl = baseUrl ? `${baseUrl}/api` : `/api`;
    }

    getShopDomain():any{
        return this.baseUrl;
    }

}