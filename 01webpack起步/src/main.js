
//commonjs模块化规范
const {add,mul}=require('./math.js');   //打包的时候打包该入口文件就可，会自动识别有没有其他依赖文件
console.log(add(20,30));
console.log(mul(20,30));

//ES6模块化规范
import {name,height} from "./info.js";
console.log(name);
console.log(height);
