function add(num1,num2){
	return num1+num2;
}
function mul(num1,num2){
	return num1*num2;
}

//CommonJS,浏览器不认识，得用webpack打包
module.exports={add,mul};