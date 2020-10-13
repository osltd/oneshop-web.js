import { get } from '../helpers/request';
import OS from '../helpers/os_module';

export default class Shop extends OS {
    
    constructor(baseUrl:string){
        super(baseUrl);
    }

    /**
     * Retrieve shop settings
     * 
     * Examples:
     * 
     *  os.shop.settings();
     * 
     */
    settings(){
        return get({ url : `${this.baseUrl}/shops/session` });
    }

}