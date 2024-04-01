const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
  entry:"./src/main.js",//相对于命令运行的目录
  output:{
    path:undefined,//开发模式没有文件输出
    filename:"static/js/main.js"
  },
  //加载器
  module:{
    rules:[
      //loader配置
      {
        test:/\.css$/,
        use:[
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
  plugins:[
    //插件配置
    //eslint语法检查
    new ESLintPlugin({
      context:path.resolve(__dirname,"../src"),
    }),
    //自动在index.html中引入打包后的js文件，并且保留index.html原有的结构
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,"../public","index.html")
    }),
    //将css提取到单独的文件中
    new MiniCssExtractPlugin()
  ],
  devServer:{
    host:"localhost",
    port:"3000",
    open:true,//自动打开浏览器
  },
  //模式
  mode:"development",
  devtool:"cheap-module-source-map"
}