<!--  -->
<template>
  <div>
    <div class="item" v-for="item in mlist">
      <div class="img">
        <img :src="item.img | wh()" alt="">
      </div>

      <div class="info">
        <div class="title">{{item.nm}}</div>
        <div class="time">{{item.rt}}</div>
        <div class="name">主演：{{item.star}}</div>
        <div class="playing">放映时间：{{item.comingTitle}}</div>
      </div>

      <div class="buy">
        <div class="btn">购买</div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  props:{
    mlist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {},
  filters:{
    wh(url){
      return url.replace(/w\.h/,'100.180')
    }
  }

}

</script>
<style  scoped>
.item{
  display: flex;
}
.img{
  flex: 1.5;
}
/* img{
  width: 88px;
  height: 130px;
} */



.info{
  flex: 3.8;
  font-size: 14px;
  padding: 3px 8px;
}

.title{
  font-weight: bold;
  margin-bottom: 9px;
}
.name{
  margin: 5px 0;
}
.buy{
  flex: 1.5;
  text-align: center;
  align-self: center;
}
.btn{
  width: 40px;
  height: 23px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid rgb(133, 5, 5);
  background: red;
}
</style>