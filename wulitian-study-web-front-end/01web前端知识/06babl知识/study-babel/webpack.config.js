const path = require('path');
const webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './index.js',
        app2: './index2.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new htmlWebpackPlugin({title: "Webpack App"})
    ],
    devtool: 'source-map',
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        }
    },
    devServer: {
        port: 9000,
        hot: true,
        compress: true,
        client: {
            overlay: true,
        },
        static: {
            directory: path.join(__dirname, 'src'),
        }
    },
    cache: true,
};