import OS from "./src/helpers/os_module";
import Article from "./src/modules/article";
import Cart from "./src/modules/cart";
import Consumer from "./src/modules/consumer";
import Merchandise from "./src/modules/merchandise";

export default class Oneshop extends OS{

    baseUrl?    : string;
    article     : Article;
    cart        : Cart;
    consumer    : Consumer;
    merchandise : Merchandise;

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