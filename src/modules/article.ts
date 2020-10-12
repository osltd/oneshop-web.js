import { get } from '../helpers/request';
import OS from '../helpers/os_module';


export default class Article extends OS {
    
    constructor(base_url:string){
        super(base_url);
    }

    /**
     * Retrieve articles
     * @param {Object} query 
     * @param {String} query[ids] // article (post) id(s)
     * @param {String} query[keywords]
     * @param {String} query[tags]
     * @param {String} query[shops]
     * @param {String} query[statuses] // 'PUBLISHED' | 'SCHEDULE'
     * @param {String} query[page]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL articles
     * 
     *  os.article.get({page:'1'});
     * 
     *  // Get articles with filters
     * 
     *  os.article.get({ids:'1743,293,6652',keywords:'love',tags:'tag1,tag2',
     *  shops:'522',statuses:'PUBLISHED',page:'1'});
     * 
     */
    get(query){
        return get({ url : `${this.baseUrl}/articles`, query : query || {}});
    }
    
}