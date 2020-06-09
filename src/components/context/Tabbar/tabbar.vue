<!--  -->
<template>
  <div>
    <div class="tabbar">
      <router-link to="/movie" tag="div" class="tabitem">
        <div class="image iconfont icon-xingzhuang-copy"></div>
        <div class="text">首页</div>
      </router-link>

      <router-link to="/cinema" tag="div" class="tabitem">
        <div class="image iconfont icon-dianying"></div>
        <div class="text">影院</div>
      </router-link>

      <router-link to="/mine" tag="div" class="tabitem">
        <div class="image iconfont icon-default"></div>
        <div class="text">我的</div>
      </router-link>
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
.tabbar{
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  font-size: 14px;
  box-shadow: 2px -3px 5px #ccc;
}
.tabitem{
  flex: 1;
  text-align: center;
  padding: 5px 0;
}
.tabbar .router-link-active{
  color: red;
}
</style>