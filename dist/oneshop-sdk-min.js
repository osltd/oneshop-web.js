!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Oneshop=t():e.Oneshop=t()}(window,(function(){return function(e){var t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this.baseUrl=e||""}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.update=t.get=t.create=void 0;const s=e=>new Promise((t,r)=>{let s={method:e.method,headers:{"Content-Type":"application/json"}},o=e.url+(null!=e.query?`?${(e=>{return Object.keys(e).reduce((t,r)=>(t.push(`${r}=${e[r]}`),t),[]).join("&")})(e.query)}`:"");/^POST|PUT$/i.test(e.method)&&(s.body=JSON.stringify(e.body)),fetch(o,s).then(s=>{if(s.status>200){let t=[],o={};s.text().then(u=>{try{o=JSON.parse(u)}catch(e){o=o||{}}/^401 Unauthorized$/.test(u)?t.push(`You don have permission to perform this task. ${e.method.toUpperCase()} ${e.url}`):"object"==typeof o&&Array.isArray(o.messages)&&(t=o.messages),r({code:(s||{}).status||500,message:t})})}else{let r={};s.text().then(s=>{try{r=JSON.parse(s)}catch(e){r=null}finally{r=r||{}}t(/^GET$/i.test(e.method)&&Array.isArray((r.data||{}).rows)?r.data.rows:r.data||r.messages||!0)})}})});t.create=e=>s({method:"POST",url:e.url,body:e.body,query:e.query||{}}),t.get=e=>s({method:"GET",url:e.url,body:e.body,query:e.query||{}}),t.update=e=>s({method:"PUT",url:e.url,body:e.body,query:e.query||{}}),t.remove=e=>s({method:"DELETE",url:e.url,body:e.body,query:e.query||{}})},function(e,t,r){e.exports=r(3)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(0),o=r(4),u=r(5),n=r(6),i=r(7),a=r(8),l=r(9),c=r(10),d=r(11),f=r(12),h=r(13);class p extends s.default{constructor(e){super(e),this.setShopBaseURL(e||""),this.article=new o.default(this.getShopDomain()),this.cart=new u.default(this.getShopDomain()),this.consumer=new n.default(this.getShopDomain()),this.merchandise=new i.default(this.getShopDomain()),this.order=new a.default(this.getShopDomain()),this.shipping_method=new l.default(this.getShopDomain()),this.shop=new c.default(this.getShopDomain()),this.signature=new d.default(this.getShopDomain()),this.validation=new f.default(this.getShopDomain()),this.voucher=new h.default(this.getShopDomain())}setShopBaseURL(e){this.baseUrl=e?`${e}/api`:"/api"}getShopDomain(){return this.baseUrl}}t.default=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(1),o=r(0);class u extends o.default{constructor(e){super(e)}get(e){return s.get({url:`${this.baseUrl}/articles`,query:e||{}})}}t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(1),o=r(0);class u extends o.default{constructor(e){super(e),this.item={get:e=>s.get({url:`${this.baseUrl}/carts/${e}/items`,query:{}}),put:(e,t)=>s.create({url:`${this.baseUrl}/carts/${e}/items`,body:t||{}}),remove:(e,t)=>s.remove({url:`${this.baseUrl}/carts/${e}/items/${t}`})}}create(){return s.create({url:`${this.baseUrl}/carts`,body:{}})}preview(e){return s.create({url:`${this.baseUrl}/carts/${e.items}/previews`,body:e})}}t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(1),o=r(0);class u extends o.default{constructor(e){super(e),this.profile={get:e=>s.get({url:`${this.baseUrl}/consumers/session`,query:e||{}}),update:e=>s.update({url:`${this.baseUrl}/consumers/session`,body:e})}}signUp(e){return s.create({url:`${this.baseUrl}/consumers`,body:e})}logout(){return s.remove({url:`${this.baseUrl}/consumers/session`})}login(e){return s.create({url:`${this.baseUrl}/sessions`,body:e})}checkout(e){return s.create({url:`${this.baseUrl}/payments`,body:e})}}t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(1),o=r(0);class u extends o.default{constructor(e){super(e)}get(e){return s.get({url:`${this.baseUrl}/merchandises`,query:e||{}})}}t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(1),o=r(0);class u extends o.default{constructor(e){super(e),this.history={get:e=>s.get({url:`${this.baseUrl}/orders/histories`,query:e||{}})}}place(e){return s.create({url:`${this.baseUrl}/orders`,body:e})}}t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(1),o=r(0);class u extends o.default{constructor(e){super(e)}get(e){return s.get({url:`${this.baseUrl}/shipping_methods`,query:e||{}})}}t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(1),o=r(0);class u extends o.default{constructor(e){super(e)}settings(){return s.get({url:`${this.baseUrl}/shops/session`})}}t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(1),o=r(0);class u extends o.default{constructor(e){super(e)}create(e){return s.create({url:`${this.baseUrl}/signatures`,body:{extension:e.extension}})}}t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(1),o=r(0);class u extends o.default{constructor(e){super(e)}create(e){return s.create({url:`${this.baseUrl}/validations`,body:e})}consume(e,t){return s.update({url:`${this.baseUrl}/validations/${e}`,body:t})}}t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(1),o=r(0);class u extends o.default{constructor(e){super(e)}get(e){return s.get({url:`${this.baseUrl}/vouchers`,query:e||{}})}}t.default=u}])}));