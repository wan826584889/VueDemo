<template>
<div class="cont">
    <h2 v-for="(val,ind) in data" @click="clickT()" :key="ind">
        {{val}}
    </h2>
    <span v-if="num!=0">{{num}}</span>
</div>

</template>

<script>
import axios from 'axios'
import bus from './bus.js'

export default {
    name: 'app',
  data () {
    return {
        data:[],
        num:0
    }
  },
  methods:{
      clickT(){
        this.num++
      }
  },
  mounted(){
      axios.get('/data').then(res=>{
        this.data=res.data[0].arr
      })
      this.data = this.$route.params.arr
  },
  watch:{
      num(n){
          bus.$emit('date',n)
      }
  }
}
</script>