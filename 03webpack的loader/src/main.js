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
