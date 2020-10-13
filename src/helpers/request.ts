// use qs as query stringifier
import { stringify } from "qs";

// define request structure
interface RequestPayload {
    method : string;
    url : string;
    body? : Object;
    query? : Object;
}

const makeRequest = (req : RequestPayload) => new Promise((resolve, reject) => {
    // setup payload
    let payload:any = {
        method  : req.method,
        headers : { 
            "Content-Type"  : "application/json"
        }
    };
    // setup url
    req.url = req.url + (Object.keys(req.query || {}).length ? `?${stringify(req.query)}` : "");
    // has body?
    if(/^POST|PUT$/i.test(req.method)){
        payload.body = JSON.stringify(req.body);
    }
    // make request
    fetch(req.url, payload)
    // got response
    .then(response => {
        // error occurred
        if(response.status > 200){
            // setup error message container
            let messages:string[] = [];
            // result container
            let result:any = {};
            // get response body
            response.text().then(body => {
                // try to parse body
                try{ result = JSON.parse(body) } catch(e) { result = result || {} }
                // handle error
                if(/^401 Unauthorized$/.test(body)){
                    messages.push(`You don have permission to perform this task. ${req.method.toUpperCase()} ${req.url}`);
                } else if(typeof result == 'object' && Array.isArray(result.messages)){
                    messages = result.messages;
                }
                reject({
                    code    : (response || {}).status || 500,
                    message : messages
                });
            });
        } else { 
            // setup result container
            let result:any = {};
            // get response text value
            response.text().then(body => {
                // parse json
                try{ result = JSON.parse(body) } catch(e) { result = null } finally { result = result || {}}
                // done
                resolve(/^GET$/i.test(req.method) && Array.isArray((result.data || {}).rows) ? result.data.rows : (result.data || (result.messages || true)));
            });
        }
    });
});


// define payload structure
interface Payload {
    url:string;
    body?:object;
    query?:object;
}

// expose methods
export const create = (pl:Payload) => makeRequest({method : 'POST', url : pl.url, body : pl.body, query : {}});
export const get    = (pl:Payload) => makeRequest({method : 'GET', url : pl.url, body : pl.body, query : {}});
export const update = (pl:Payload) => makeRequest({method : 'PUT', url : pl.url, body : pl.body, query : {}});
export const remove = (pl:Payload) => makeRequest({method : 'DELETE', url : pl.url, body : pl.body, query : {}});