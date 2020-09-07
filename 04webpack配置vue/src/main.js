//终端中要输入：npx webpack ./src/main.js ./dist/bundle.js
//1.commonjs模块化规范
const {add,mul}=require('./js/math.js');   //打包的时候打包该入口文件就可，会自动识别有没有其他依赖文件
console.log(add(20,30));
console.log(mul(20,30));

//2.ES6模块化规范
import {name,height} from "./js/info.js";
console.log(name);
console.log(height);

//3.依赖css文件,还必须有两个loader
require('./css/normal.css');

//4.依赖less文件
require('./css/special.less');

document.writeln('<h2>这个与write的区别是可以换行</h2>');

//5.使用vue进行开发
import Vue from 'vue';
//import App from './vue/app.js'; 
import App from './vue/app.vue';    //同样需要相应的loader
//以下内容可以打包到另外的js文件或者vue文件
// const App={      //定义一个组件
//     //以下会自动替换到html结构中，不用在html中写出并反复修改
//     //切记template中必须有一个根标签！！！！！！！极易忘！！！！！！！！
//     template:` 
//     <div>
//     <h2>{{message}}  {{name}}</h2>
//     <button @click="btn">按钮</button>
//     </div>     
//     `,
//     data(){
//         return {
//             message:'hello webpack',
//             name:"cyj"
//         }  
//     },
//     methods:{
//         btn(){

//         }
//     }
// }
const app=new Vue({
    el:'#app',
    template:'<App></App>',
    components:{
        App    //注册组件,ES6增强语法
    }
})