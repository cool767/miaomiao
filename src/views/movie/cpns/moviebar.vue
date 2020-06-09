<!--  -->
<template>
  <div class="warpper">
    <div class="city item">
      <router-link to="/movie/city">{{$store.state.citynm}}</router-link>
      <span class="xiala iconfont icon-xiala"></span>
    </div>
    <div class="playingnow item">
      <router-link to="/movie/playingnow" class="movie">正在热映</router-link>
    </div>
    <div class="playingnow item">
      <router-link to="/movie/comingsoon" class="movie">即将上映</router-link>
    </div>
    <div class="search item">
      <router-link to="/movie/search"><div class="iconfont icon-search"></div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style  scoped>
.warpper{
  display: flex;
  padding: 8px 0;
  box-shadow: 2px 2px 4px #ccc;
  font-size: 13px;
  font-weight:bold;
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  background: #fff;
}
.item{
  flex: 1;
  text-align: center;
}
.item .router-link-active{
  color: red;
}
.playingnow .router-link-active{
  border-bottom: 2px solid red;
}
.movie{
  padding: 5px 0;
}
.icon-xiala{
  width: 15px;
}


</style>