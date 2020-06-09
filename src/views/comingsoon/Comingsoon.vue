<!--  -->
<template>
  <div>
    <Loading v-if="isload"></Loading>
    <Scroll v-else @scroll="scroll" @pullingDown="pullingDown">
      <div>
        <movielist>
          <movieitems :mlist="movielist"></movieitems>
        </movielist>
      </div>
    </Scroll>
  </div>
</template>

<script>
import {getComingingSoonData} from '../../network/movie'

import movielist from '../playingnow/cpns/movielist'
import movieitems from '../playingnow/cpns/movieitems'

import Scroll from '../../until/Scroller'

export default {
  data () {
    return {
      movielist:[],
      isload:true
    };
  },

  components: {
    movielist,
    movieitems,
    Scroll
  },

  computed: {},

  methods: {
    getComingingSoonData(id){
      getComingingSoonData(id).then(res =>{
        console.log(res);
        this.isload = false
        this.movielist = res.data.data.comingList
      })
    },
    scroll(pos){
      console.log(111111);
    },
    pullingDown(){
      console.log("pullingDown");
    }
  },

  created() {
    const id = "cityId="+this.$store.state.CityId
    this.getComingingSoonData(id)
  },
}

</script>
<style scoped>

</style>