<!--  -->
<template>
    <Loading v-if="isload"></Loading>

    <Scroll v-else>
      <div>
        <movielist>
          <movieitems :mlist="movielist"></movieitems>
        </movielist>
      </div>
    </Scroll>
</template>

<script>
import {getPlayingNowData} from '../../network/movie'

import movielist from './cpns/movielist'
import movieitems from './cpns/movieitems'

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
    // 获取页面数据
    getPlayingNowData(id){
      getPlayingNowData(id).then(res => {
        // console.log(res.data.data.movieList);
        this.isload = false
        this.movielist = res.data.data.movieList
      })
    }
  },

  created() {
    const id = "cityId="+this.$store.state.CityId
    this.getPlayingNowData(id)
  },
}

</script>
<style  scoped>

</style>