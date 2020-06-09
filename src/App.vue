<template>
 <div>
   <Topnav></Topnav>
  <keep-alive>
      <router-view/>
  </keep-alive>

 </div>
</template>
<script>
import Topnav from './components/context/Topnav/Topnav'
export default {
  data() {
    return {
      
    }
  },
  components:{
    Topnav,
  }
}
</script>

<style lang="scss">
@import "./assets/css/base.css";

</style>
