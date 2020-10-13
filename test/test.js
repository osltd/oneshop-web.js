const Oneshop = require('../lib');
/**
 * 
 *  If you are using ReactJS to build the application
 *  we may leave the `baseUrl` blank and setup the proxy endpont at package.json
 * 
 *  package.json
 *  {
 *      ...
 *      proxy : "YOUR_ONESHOP_DOMAIN e.g. https://starter.oneshop.host"
 *  }
 *  
 */

// craete instance
const OS = new Oneshop.default();

// Get article
OS.article.get({ page : 1, tags : "oneshoprocks" });
