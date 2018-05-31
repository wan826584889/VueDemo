<template>
<div class="cont">
    <h2 v-for="(val,ind) in data" :key="ind">
        {{val}}
    </h2>
</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'app',
  data () {
    return {
        data:[]
    }
  },
  mounted(){
      this.data = this.$route.params.arr
  }
}
</script>