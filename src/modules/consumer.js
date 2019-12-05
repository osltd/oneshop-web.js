const request = require('../helpers/request');

class Consumer {
    
    constructor(base_url){
        this.base_url = base_url;

        /**
         * Profile of consumer
         */
        this.profile = {

            /**
             * Retrieve consumer's profile
             */
            get : (query) => request.get(`${this.base_url}/consumers/session`, query),

            /**
             * Update user profile
             * @param {Object} context
             * @param {String} content[any_field_name_you_want]
             */
            update : (context) => request.put(`${this.base_url}/consumers/session`, context)

        };

    }

    /**
     * Signing up as shop consumer
     * @param {Object} context
     * @param {String} context[first_name]
     * @param {String} context[last_name]
     * @param {String} context[email]
     * @param {String} context[phone]
     * @param {String} context[passwd]
     * @param {String} context[confpasswd]
     */
    signUp(context){
        return request.post(`${this.base_url}/consumers`, context);
    }

    /**
     * Logout your account
     */
    logout(){
        return request.delete(`${this.base_url}/consumers/session`);
    }

    /**
     * Login
     * @param {Object} context 
     * @param {String} context[email]
     * @param {String} context[phone]
     * @param {String} context[passwd]
     * 
     */
    login(context){
        return request.post(`${this.base_url}/sessions`, context);
    }
    
}

module.exports = Consumer;