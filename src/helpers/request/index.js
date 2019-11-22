const qs      = require('qs');

const makeRequest = (method, url, body, query) => new Promise((resolve, reject) => {
    // setup payload
    let payload = {
        url    : url + (Object.keys(query || {}).length ? `?${qs.stringify(query)}` : ""),
        method : method,
        headers : { "Content-Type"  : "application/json"}
    };
    // has body?
    if(/^POST|PUT$/i.test(method)){
        payload.body = JSON.stringify(body);
    }
    // make request
    fetch(payload)
    // got response
    .then(response => {
        // error occurred
        if(response.status > 200){
            // setup error message container
            let messages = [];
            // get response body
            response.text().then(body => {
                // try to parse body
                try{ body = JSON.parse(body) } catch(e) { body = body || '' }
                // handle error
                if(/^401 Unauthorized$/.test(body)){
                    messages.push('Permission denied: Wrong credentials.');
                } else if(typeof body == 'object' && Array.isArray(body.messages)){
                    messages = body.messages;
                }
                reject({
                    code    : (response || {}).status || 500,
                    message : messages
                });
            });
        } else { 
            // setup result container
            let result = {};
            response.text().then(body => {
                // parse json
                try{ result = JSON.parse(body) } catch(e) { result = null } finally { result = result || {}}
                // done
                resolve(/^GET$/i.test(method) && Array.isArray((result.data || {}).rows) ? result.data.rows : (result.data || (result.messages || true)));
            });
        }
    });
});




module.exports =  {
    /**
    * @param {url}
    * @param {body}
    * @param {user,pass}
    */
    post   : (url, body) => makeRequest('POST', url, body, {}),
    /**
    * @param {url}
    * @param {query}
    * @param {user,pass}
    */
    get    : (url, query) => makeRequest('GET', url, {}, query),
    /**
    * @param {url}
    * @param {body}
    * @param {user,pass}
    */
    put    : (url, body) => makeRequest('PUT', url, body, {}),
    /**
    * @param {url}
    * @param {user,pass}
    */
    delete : (url) => makeRequest('DELETE', url, {}, {})
};
