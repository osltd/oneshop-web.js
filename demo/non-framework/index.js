const express                   = require('express');
const app                       = express();
const fs                        = require('fs');
const mime                      = require('mime-types')
const { createProxyMiddleware } = require('http-proxy-middleware');

// proxy all api to `https://starter.oneshop.host/api`
app.use(
    '/api', 
    createProxyMiddleware(
        '/api', 
        { 
            // Replace it with your Oneshop web domain
            target: 'https://starter.oneshop.host/', 
            changeOrigin: true 
        }
    )
);

app.use('*', (req, res) => {
    // get file path
    const path = `${__dirname}/src/${req.params[0] == "/" ? 'index.html' : req.params[0].substr(1)}`;
    // read file
    fs.readFile(path, (err, data) => {
        // error on loading file
        if(err) {
            res.status(404).end('Page not found');
        } else {
            // set header
            res.status(200);
            res.setHeader('Content-type', mime.lookup(path.split("/").pop()));
            res.end(data.toString('utf-8'));
        }
    });
});



app.listen(3000);
