const webpackMerge=require('webpack-merge');
const baseConfig = require("./base.config");

module.exports=webpackMerge(baseConfig,{
    //最终编译打包则以下这个不需要
    devServer:{
      contentBase:'./dist',
      inline:true   //进行实时监听
    }
})