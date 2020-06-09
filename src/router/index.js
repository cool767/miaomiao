import Vue from 'vue'
import VueRouter from 'vue-router'
const Movie = () => import('../views/movie/index')
const Cinema = () => import('../views/cinema/index')
const Mine = () => import('../views/mine/index')
const City =() =>import("../views/city/City")
const Playingnow = () => import("../views/playingnow/playingnow")
const Comingsoon = () => import("../views/comingsoon/Comingsoon")
const Search = () => import("../views/search/search")





Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      redirect:'/movie'
    },
    {
      path:"/movie",
      component:Movie,
      children:[
        {
          path: '',
          redirect:'playingnow'
        },
        {
          path:'city',
          component:City
        },
        {
          path: 'playingnow',
          component: Playingnow
        },
        {
          path: 'comingsoon',
          component: Comingsoon
        },
        {
          path:'search',
          component: Search
        }
      ]
    },
    {
      path:"/cinema",
      component:Cinema
    },
    {
      path:"/mine",
      component:Mine
    }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
