const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
    clean: true,//清空上一次输出结果
  },
  //加载器
  module: {
    rules: [
      //loader配置
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.js$/,//匹配js文件
        exclude: /node_modules/,//不处理node_modules文件夹中的js文件
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  plugins: [
    //插件配置
    new ESLintPlugin({
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public", "index.html")
    }),
    //将css提取到单独的文件中
    new MiniCssExtractPlugin()
  ],
  //模式
  mode: "production",
  devtool:"source-map"
}