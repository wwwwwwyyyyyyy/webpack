const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "lib"),
    filename: "index.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true,
    port: 30000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.gif$/,
        type:"asset",
        parser:{
          dataUrlCondition:{
            maxSize:2*1024
          }
        },
        generator: {
          filename: 'images/[hash:6][ext]'
        }
      },
      { 
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash:6][ext]'
        }
    },
    {
      test: /\.js$/,
      use:["babel-loader"],
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
      ],
  },
};
