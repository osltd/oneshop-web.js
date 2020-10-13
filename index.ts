import OS from "./src/helpers/os_module";

// load modules
import Article from "./src/modules/article";
import Cart from "./src/modules/cart";
import Consumer from "./src/modules/consumer";
import Merchandise from "./src/modules/merchandise";
import Order from "./src/modules/order";
import ShippingMethod from "./src/modules/shipping_method";
import Shop from "./src/modules/shop";
import Signature from "./src/modules/signature";
import Validation from "./src/modules/validation";

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

    constructor(baseUrl:string){
        super(baseUrl)
        this.setShopBaseURL(baseUrl || "");
    }

    loadModules(){
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
    }

    setShopBaseURL(baseUrl:string){
        // set base url
        this.baseUrl = baseUrl ? `${baseUrl}/api` : `/api`;
        // reload modules
        this.loadModules();
    }

    getShopDomain(){
        return this.baseUrl;
    }

}