const path = require("path")
const webpack = require("webpack")
module.exports = {

    entry: './src/client/index.js',
    module: {
        rules: [ // babel loader allow to use webpack to our js files 
                {
            test: '/\.js$/', // any file ends with js
            exclude:  /node_modules/,
            loader: "babel-loader"
                }
        ]
}

}