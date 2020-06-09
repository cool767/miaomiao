import Vue from 'vue';
import Msgbox from './Messagebox';

export const messageBox = (function () {

  let defaults = {
    title : '',
    content : '',
    cancal:'',
    ok:''
  }
  const mycpn = Vue.extend(Msgbox)
  
  return function (opts) {
    for(let attr in opts){
      defaults[attr] = opts[attr]
    }

   


    
    const vm = new mycpn({
      el: document.createElement('div'),
      data:{
        title: defaults.title,
        content: defaults.content,
        cancal: defaults.cancal,
        ok: defaults.ok
      },
      methods: {
        handleCancal(){
          defaults.handleCancal && defaults.handleCancal.call(this)
          document.body.removeChild(vm.$el)
        },

        handleOk(){
          defaults.handleOk && defaults.handleOk.call(this)
          document.body.removeChild(vm.$el)
        }
      },
    })


    document.body.appendChild( vm.$el )
  }
})()