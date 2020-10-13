import OS from '../helpers/os_module';
export default class Shop extends OS {
    constructor(baseUrl: string);
    /**
     * Retrieve shop settings
     *
     * Examples:
     *
     *  os.shop.settings();
     *
     */
    settings(): Promise<unknown>;
}
