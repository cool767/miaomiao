<!--  -->
<template>
  <div>
    <div class="msgbox">
      <h2>{{title}}</h2>
      <p>{{content}}</p>
      <div class="btn">
        <div class="cancal" @click="handleCancal">{{cancal}}</div>
        <div class="ok" @click="handleOk">{{ok}}</div>
      </div>
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

  methods: {
    handalCancal(){

    },
    handleOk(){

    }
  }
}

</script>
<style  scoped>
.msgbox{
  width: 180px;
  height: 120px;
  padding: 5px;
  box-shadow: 3px 3px 3px #ccc;
  text-align: center;
  position: absolute;
  left: 50%;top: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  z-index: 1;
}
h2{
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  line-height: 30px;
}
.btn{
  border-top: 1px solid #ccc;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.cancal,.ok{
  text-align: center;
  flex: 1;
  border-left: 1px solid #ccc;
  padding: 5px 0;
}
.cancal{
  border: none;
}
</style>