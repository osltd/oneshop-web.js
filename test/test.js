const Oneshop = require('../index');

const OS = new Oneshop("oneshopacademy.oneshop.host");

OS.signature.get().then(data => console.log(data)).catch(error => console.log(error));

OS.article.get().then(data => console.log(data)).catch(error => console.log(error));