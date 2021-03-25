const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './node_modules/mocha/index.js',
    output: {
        path: path.resolve(__dirname,'Resources'),
        library: {
            name: 'Mocha',
            type: 'commonjs2'
        },
        filename: 'mocha.js'
    },
    externals: {
        'process': {
            root: 'process'
        }
    },
    resolve: {
        descriptionFiles:["package.json"],
        alias: {
            "debug": path.resolve(__dirname,'debug-patch.js'), 
            "./browser-entry.js": path.resolve(__dirname,'mocha-bootstrap.js'),
            "stream": false
        }
    }

  };
  