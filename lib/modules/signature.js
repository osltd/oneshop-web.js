"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../helpers/request");
const os_module_1 = require("../helpers/os_module");
class Signature extends os_module_1.default {
    constructor(baseUrl) {
        super(baseUrl);
    }
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
    create(context) {
        return request_1.create({ url: `${this.baseUrl}/signatures`, body: { extension: context.extension } });
    }
}
exports.default = Signature;
