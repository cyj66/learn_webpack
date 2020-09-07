//该文件名固定
//node自带核心模块，可以获取绝对路径，注意：要使用node自带包需在终端输入npm init,最后会生成package.json文件
//
const path=require("path");    
module.exports={
    entry:'./src/main.js',     //入口
    output:{                  //出口
        path:path.resolve(__dirname,'dist'),  //必须动态绑定绝对路径,该函数拼接路径,__dir保存的是路径
        filename:'bundle.js',
        publicPath:'dist/'   //大于limit的图片在file-loader下会打包到dist文件下，需要给url再加个dist路径
    },
    module: {    //去官网复制
        rules: [    
          {
            test: /\.css$/i,   //以.css结尾的正则表达式,匹配这种格式的文件
            use: ['style-loader','css-loader']
            //css-loader只负责将css文件进行加载,style-loder负责将样式添加到dom中
            //使用多个loader时从右向左读  
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
          },
          {
            test: /\.(png|jpg|gif)$/,    //jpg和jpeg没区别
            use: [
              {
                loader: 'url-loader',       
                options: {             //除了引入loader还可传入其他参数
                  limit: 150000,         //当加载的图片小于limit会将图片编译成base64格式,大于limit时url-loader会失效，需要file-loader
                  name:'img/[name].[hash:8].[ext]'   //中括号里面表示变量
                }
              }
            ]
          },
          {                 //配合babel-loader,可以将ES6转化为ES5
            test: /\.js$/,         
            exclude: /(node_modules|bower_components)/,    //排除，不需要作转换
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
        ],
      },
}