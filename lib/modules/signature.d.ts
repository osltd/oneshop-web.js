import OS from '../helpers/os_module';
export default class Signature extends OS {
    constructor(baseUrl: string);
    /**
     * Creates signature for upload files
     * @param {Object} context
     * @param {String} context[extension] (mime type: image/png, video/mp4, ...)
     *
     * Examples:
     *
     *  os.signature.create({extension:'video/mp4'});
     *
     */
    create(context: {
        extension: string;
    }): Promise<unknown>;
}
