const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    target: ['node'],
    entry: './src/app.js',
    resolve: {
        fallback: {
            'fs': false,
            'tls': false,
            'net': false,
            'path': false,
            'zlib': false,
            'http': false,
            'https': false,
            'stream': false,
            'crypto': false,
            'crypto-browserify': require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify

        },
    },
    output: {
        chunkFormat: 'commonjs',
        filename: 'lap.js',
        path: path.resolve(__dirname, 'static'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: './assets/index.html'
    })]
};
