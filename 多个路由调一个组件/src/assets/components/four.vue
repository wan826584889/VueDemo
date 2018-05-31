<template>
    <Cont  :cont='item'/>
</template>

<script>
import Cont from './cont'
export default{
    name:'app',
    data(){
        return{
            item:[]
        }
    },
    components:{
        Cont
    },
        mounted(){
        this.item = this.$route.params.arr
    }
}

</script>
