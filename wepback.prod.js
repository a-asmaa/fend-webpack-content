const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    module: {
        rules: [ // babel loader allow to use webpack to our js files 
                { // transfer e6s to vanilla js 
                    test: '/\.js$/', // any file ends with js
                    exclude:  /node_modules/,
                    loader: "babel-loader"
                }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        })
    ]

}