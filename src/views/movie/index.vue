<!--  -->
<template>
  <div id="movie">
    <MovieBar></MovieBar>
    <Tabbar></Tabbar>



    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Tabbar from '../../components/context/Tabbar/tabbar'
import MovieBar from './cpns/moviebar'

import { messageBox } from '../../components/JS/Msgbox.js'
import { getNowCityData } from '../../network/movie'



export default {
  name:"movie",
  data () {
    return {
      nowCity:{}
    };
  },

  components: {
    Tabbar,
    MovieBar,
  },

  computed: {},
  methods: {
    getNowCityData(){
      getNowCityData().then(res => {
        this.nowCity = res.data.data
        console.log(res.data);
        if(res.data.data.id == window.localStorage.getItem('cityid')){
          return;
        }else{
          if(res.data.msg == 'ok'){
            messageBox({
              title : '定位',
              content :res.data.data.nm,
              cancal:'取消',
              ok:'切换城市',
              handleOk(){
                window.localStorage.setItem('citynm',res.data.data.nm)
                window.localStorage.setItem('cityid',res.data.data.id)
                window.location.reload()
              }
            })
         }
        }
        
      })
    }
  },

  mounted() {
    this.getNowCityData()


    
  },

}

</script>
<style  scoped>
#movie{
  margin-top: 80px;
  margin-bottom: 50px;
}
</style>