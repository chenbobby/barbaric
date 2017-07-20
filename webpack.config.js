const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');



module.exports = (env) => {
    
    let config = {

        entry: {
            index: './client/index.js'
        },

        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'server/static')
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        },

        devtool: 'inline-source-map',

        plugins: [
            new HtmlWebpackPlugin({
                template: './client/index.ejs',
                favicon: './client/icon.png',
                inlineSource: '.(js)$'
            }),
            new HtmlWebpackInlineSourcePlugin()
        ]
    }


    return config;
}
