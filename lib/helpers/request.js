"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryStringify = (query) => {
    let queryKeys = Object.keys(query);
    let queries = queryKeys.reduce((queryStrings, key) => {
        queryStrings.push(`${key}=${query[key]}`);
        return queryStrings;
    }, []);
    return queries.join("&");
};
const makeRequest = (req) => new Promise((resolve, reject) => {
    // setup payload
    let payload = {
        method: req.method,
        headers: {
            "Content-Type": "application/json"
        }
    };
    // setup url
    req.url = req.url + (Object.keys(req.query || {}).length ? `?${queryStringify(req.query)}` : "");
    // has body?
    if (/^POST|PUT$/i.test(req.method)) {
        payload.body = JSON.stringify(req.body);
    }
    // make request
    fetch(req.url, payload)
        // got response
        .then(response => {
        // error occurred
        if (response.status > 200) {
            // setup error message container
            let messages = [];
            // result container
            let result = {};
            // get response body
            response.text().then(body => {
                // try to parse body
                try {
                    result = JSON.parse(body);
                }
                catch (e) {
                    result = result || {};
                }
                // handle error
                if (/^401 Unauthorized$/.test(body)) {
                    messages.push(`You don have permission to perform this task. ${req.method.toUpperCase()} ${req.url}`);
                }
                else if (typeof result == 'object' && Array.isArray(result.messages)) {
                    messages = result.messages;
                }
                reject({
                    code: (response || {}).status || 500,
                    message: messages
                });
            });
        }
        else {
            // setup result container
            let result = {};
            // get response text value
            response.text().then(body => {
                // parse json
                try {
                    result = JSON.parse(body);
                }
                catch (e) {
                    result = null;
                }
                finally {
                    result = result || {};
                }
                // done
                resolve(/^GET$/i.test(req.method) && Array.isArray((result.data || {}).rows) ? result.data.rows : (result.data || (result.messages || true)));
            });
        }
    });
});
// expose methods
exports.create = (pl) => makeRequest({ method: 'POST', url: pl.url, body: pl.body, query: {} });
exports.get = (pl) => makeRequest({ method: 'GET', url: pl.url, body: pl.body, query: {} });
exports.update = (pl) => makeRequest({ method: 'PUT', url: pl.url, body: pl.body, query: {} });
exports.remove = (pl) => makeRequest({ method: 'DELETE', url: pl.url, body: pl.body, query: {} });
