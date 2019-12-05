const path   = require('path');
const Terser = require('terser-webpack-plugin');

var MODE = process.env.MODE || 'prod';

module.exports = {
    entry: {
        sdk : ['./index.js']
    },
    output: {
        path          : path.resolve(__dirname, 'dist'),
        filename      : /^prod$/.test(MODE) ? 'oneshop-sdk.min.js' : 'oneshop-sdk.dev.js',
        library       : 'Oneshop', // The library name
        libraryTarget : "umd"
    }, 
    optimization: /^prod$/.test(MODE) ? {
        minimizer: [
          new Terser() // Uglify with support to ES6
        ]
    } : {}
}