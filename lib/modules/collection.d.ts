import OS from '../helpers/os_module';
interface getCollectionQuery {
    ids?: string;
    tags?: string;
    slug?: string;
    shops?: string;
    locale?: string;
}
export default class Collection extends OS {
    constructor(baseUrl: string);
    /**
     * Retrieve shop or channel's collections
     * @param {Object} query
     * Examples:
     *
     *  os.collection.get({ ids: "1234,4321,7489", tags:"cups" });
     *
     */
    get(query: getCollectionQuery): Promise<unknown>;
}
export {};
