<!--  -->
<template>
  <div class="warpper" ref="warpper">
    <slot></slot>
  </div>
</template>

<script>
import bscroll from 'better-scroll'
export default {
  data () {
    return {
      scroll:''
    };
  },

  components: {},

  computed: {},

  methods: {
     
  },
  mounted() {
    this.$nextTick(()=> {
      this.scroll = new bscroll(this.$refs.warpper,{
            tap:true,
            probeType:1,
            pullUpLoad:true,
          })

      this.scroll.on('scroll',(postion)=>{
        this.$emit('scroll',postion)
      })

      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingDown')
        this.scroll.finishPullUp()
      })
    
    })

    
  },
}

</script>
<style  scoped>
.warpper{
  height: 440px;
  overflow: hidden;
}
</style>