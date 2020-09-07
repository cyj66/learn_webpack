const UglyfyjsWebpackPlugin=require("uglifyjs-webpack-plugin");
const webpackMerge=require('webpack-merge');
const baseConfig = require("./base.config");

module.exports=webpackMerge(baseConfig,{
    plugins:[
        new UglyfyjsWebpackPlugin()    //开发时不用这个，不好调试，最终打包再用
      ]
    }  
)