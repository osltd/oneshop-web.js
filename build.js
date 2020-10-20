let webpackConfig = require('./webpack.config');
let rm            = require('rimraf');
let path          = require('path');
let webpack       = require('webpack');
let AWS           = require('aws-sdk');
let fs            = require('fs');

// load .env
require('dotenv').config();

AWS.config.update({
    accessKeyId     : process.env.AWS_ACCESS_ID,
    secretAccessKey : process.env.AWS_ACCESS_KEY,
    region          : process.env.AWS_REGION
});

// push build to s3
const pushToS3 = () => {
    // read build
    fs.readFile(`${__dirname}/dist/oneshop-sdk-min.js`, function (err, data) {
        // error on reading file
        if (err) throw err;
        // upload to S3
        new AWS.S3()
        .putObject({
            Bucket      : process.env.AWS_BUCKET,
            Key         : 'oneshop-sdk-min.js',
            Body        : data.toString('utf-8'),
            ContentType : 'application/javascript'
        }, function (err, data) {
            console.log(err ? err : 'Successfully uploaded sdk to remote.');
        });
    });
};

// compile callback
const compileCallback = (er, stats) => {
    if (er) throw er
    stats = Array.isArray(stats.stats) ? stats.stats : [stats]
    stats.forEach((item) => {
        // log to console
        process.stdout.write(item.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
    });
    console.log('Build complete.\n');
    pushToS3();
};

// remove old src
rm(path.resolve(__dirname, './dist'), err => {
    if (err) throw err
    let compiler = webpack(webpackConfig)
    // compile
    compiler.run(compileCallback)
});

