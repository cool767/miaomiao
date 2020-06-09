<!--  -->
<template>
  <div>
    <div id="loading">
			  <div class="loading-main">
				    <div class="loading-circle">
			    </div>
				    <p>加载中</p>
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

  methods: {}
}

</script>
<style  scoped>
#loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .8);
}
.loading-main {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
  background: rgba(0, 0, 0, .6);
  border-radius: 4px;
}
.loading-circle {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, .8);
  border-radius: 23px;
  /*剪裁绝对定位元素。注意参数是上右下左*/
  clip: rect(0px 23px 46px 0px); 
  position: absolute;
  top: 10px;
  left: 50%;
  margin-left: -20px;
  /*渐变类型 起始点 起点颜色 终点颜色  如left top就是左上角 -webkit-mask-image：css遮罩*/
  -webkit-mask-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgb(255, 255, 255)), to(rgba(255, 255, 255, 0)));
  -webkit-animation: loading 1.2s linear infinite;
}
.loading-main p {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0px;
  color: #fff;
}
@-webkit-keyframes loading {
  0% { -webkit-transform: rotate(0deg) }
  50% { -webkit-transform: rotate(180deg)}
  100% { -webkit-transform: rotate(360deg) }
}
</style>