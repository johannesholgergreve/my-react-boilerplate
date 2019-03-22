const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}