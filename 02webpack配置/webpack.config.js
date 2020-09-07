//该文件名固定
//node自带核心模块，可以获取绝对路径，注意：要使用node自带包需在终端输入npm init,最后会生成package.json文件
//
const path=require("path");    
module.exports={
    entry:'./src/main.js',     //入口
    output:{                  //出口
        path:path.resolve(__dirname,'dist'),  //必须动态绑定绝对路径,该函数拼接路径,__dir保存的是路径
        filename:'bundle.js'
    }
}