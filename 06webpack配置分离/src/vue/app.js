//还可以用.vue文件
export default {      //定义一个组件
    //以下会自动替换到html结构中，不用在html中写出并反复修改
    //切记template中必须有一个根标签！！！！！！！极易忘！！！！！！！！
    template:` 
    <div>
    <h2>{{message}}  {{name}}</h2>
    <button @click="btn">按钮</button>
    </div>     
    `,
    data(){
        return {
            message:'hello webpack',
            name:"cyj"
        }  
    },
    methods:{
        btn(){

        }
    }
}