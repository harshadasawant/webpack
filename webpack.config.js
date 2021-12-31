const path = require("path");
const HtmlWebpackPulgin = require('html-webpack-plugin');
module.exports={
    
    entry :"./src/index.js",
    module:
    {
        rules :[
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
              test:/\.(js)$/,
              use:"babel-loader",
          }
        ]
    },
    output :{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    plugins:[new HtmlWebpackPulgin()],
    mode:'development',
};