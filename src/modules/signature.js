const request = require('../helpers/request');

class Signature{
    
    constructor(base_url){
        this.base_url = base_url;
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
    create(context){
        return request.post(`${this.base_url}/signatures`, context);
    }

}

module.exports = Signature;