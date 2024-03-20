const path = require('path');
module.exports={
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"main.js"
  },
  //加载器
  module:{
    rules:[
      //loader配置
    ]
  },
  plugins:[
    //插件配置
  ],
  mode:"development"
}