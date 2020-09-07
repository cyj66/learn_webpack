<template>
    <div>
        <h2 class="red">{{message}}</h2>
        <button @click="btn">按钮</button>
        <h2>{{name}}</h2>
        <Cpn></Cpn>
    </div> 
</template>

<script>
import Cpn from "./cpn.vue"
export default {
    name:"App",   //要给名字
    data(){
        return {
            message:'hello webpack',
            name:"cyj"
        }  
    },
    methods:{
        btn(){

        }
    },
    components:{
        Cpn
    }
}
</script>

<style>
    .red{
        color:blue;
    }
</style>