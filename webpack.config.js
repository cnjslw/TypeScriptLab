const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: "bundle.js"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node-moudules/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin(),
    ],

    resolve: {
        extensions: ['.ts', '.js'],
    }
};