<!--  -->
<template>
    <Loading v-if="isload"></Loading>

  <div v-else class="citywarpper">
    <ul>
      <li v-for="item in cities" @click="jumpplayingnow(item.id,item.nm)">{{item.nm}}</li>
    </ul>
  </div>
</template>

<script>
import {getCityData} from '../../network/movie'

export default {
  data () {
    return {
      cities:[],
      isload:true
    };
  },

  components: {},

  computed: {},

  methods: {
    getCityData(){
      const cities = window.localStorage.getItem('cities')
      if(!this.cities){
        this.cities = JSON.parse(cities)
        this.isload = false
      }else{
        getCityData().then(res => {
          this.isload = false
          this.cities = res.data.data.cities
          window.localStorage.setItem('cities',JSON.stringify(this.cities))
        })
      }
      
    },
    // jumprouter
    jumpplayingnow(id,nm){
      this.$store.commit('CityInfo',{id,nm})
      this.$router.replace('/movie/playingnow')
      window.localStorage.setItem('cityid',id)
      window.localStorage.setItem('citynm',nm)
    }
  },

  created() {
    this.getCityData()
  },

}

</script>
<style  scoped>
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: rgb(240, 235, 235);
}
li{
  width: 30%;
  border: 1px solid #ccc;
  list-style: none;
  text-align: center;
  margin-top: 8px;
  background: #fff;
}

</style>