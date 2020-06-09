<!--  -->
<template>
  <div>
    <div>
      <div  class="search">
        <input type="text" class="ip" v-model="msg">
      </div>
      <ul>
        <li class="item" v-for="item in mvlist">
          <div class="img">
            <img :src="item.img | wh()" alt="">
          </div>

          <div class="info">
            <div class="title">{{item.nm}}</div>
            <div class="time">{{item.rt}}</div>
            <div class="name">主演：{{item.star}}</div>
            <div class="playing">放映时间：{{item.comingTitle}}</div>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getSearchData} from '../../network/movie'
export default {
  data () {
    return {
      mvlist:[],
      msg:'',
      isload:true
    };
  },

  components: {},

  computed: {},

  methods: {
    getSearchData(id,kw){
      getSearchData(id,kw).then(res => {
        // console.log(res.data.data.movies.list);
        this.mvlist = res.data.data.movies.list
      })
    }
  },

  filters:{
    wh(url){
      return url.replace(/w\.h/,'120.100')
    }
  },
  watch: {
    msg(val){
      const id = 10
      const kw = val
      this.getSearchData(id,kw)
      console.log(kw);
      
    }
  },
}

</script>
<style  scoped>
.search{
  padding: 20px 10px;
  border-bottom: 2px solid #ccc;
}
.ip{
  width: 100%;
  padding: 5px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
}


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
</style>