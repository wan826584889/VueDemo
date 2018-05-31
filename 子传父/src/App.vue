<template>
<div class="main">
  <header>
    <ul>
        <li v-for="(item,index) in data " @click="clickTab(item)">
          {{item.title}}
          <span v-if='index==2'>{{num}}</span>
        </li>
    </ul> 
  </header>
  <router-view></router-view>
  </div>
</template>


<script>
import axios from 'axios'
import bus from './assets/components/bus.js'

export default {
  name: 'app',
  data () {
    return {
      data:[],
      num:''
    }
  },
  methods:{
    init(){
      axios.get('/data').then(res=>{
        this.data=res.data
      })
    },
    clickTab(item){
      switch(item.id){
        case '1':
        this.$router.push({name:'index' , params:item});
        break;
        case '2':
        this.$router.push({name:'two' , params:item});
        break;
        case '3':
        this.$router.push({name:'three' , params:item});
        break;
        case '4':
        this.$router.push({name:'four' , params:item});
        break;
      }
    }
  },
  mounted(){
    this.init()
    bus.$on('date',data=>{
      this.num =data
    })
  },
  watch:{
    num(n){
     bus.$emit('da',this.num)
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/scss/App.css');
</style>
