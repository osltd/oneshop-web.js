const path   = require('path');
const Terser = require('terser-webpack-plugin');

var MODE = /^prod$/.test(process.env.MODE || "prod") ? 'production' : 'development';

module.exports = {
    mode         : MODE,
    entry        : {
        sdk : ['./index.js']
    },
    output       : {
        path          : path.resolve(__dirname, 'dist'),
        filename      : /^production$/.test(MODE) ? 'oneshop-sdk.min.js' : 'oneshop-sdk.dev.js',
        library       : 'Oneshop', // The library name
        libraryTarget : "umd"
    }, 
    optimization : /^production$/.test(MODE) ? {
        minimizer: [
          new Terser() // Uglify with support to ES6
        ]
    } : {}
}