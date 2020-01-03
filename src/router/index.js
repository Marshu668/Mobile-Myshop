import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'
import Member from '../components/Member/member.vue'
import Shopcar from '../components/Shopcar/shopcar.vue'
import Search from '../components/Search/search.vue'
import BuyGoods from '../components/Home/buyGoods/BuyGoods.vue'
import MyComment from '../components/myCommon/myComment.vue'
import Newlist from '../components/Home/newlist/Newlist.vue'
import PhotoList from '../components/Photo/PhotoList.vue'
import GoodsList from '../components/Home/buyGoods/GoodsList.vue'

// store  VUEX文件引入
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [{
      path: 'goods',
      component: GoodsList
    }]
  },
  {
    path: '/member',
    component: Member
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/search',
    component: Search
  },
  //  新闻页面
  {
    path: '/newlist',
    component: Newlist
  },
  {
    path: '/buyGoods',
    component: BuyGoods
  },
  {
    path: '/myComment',
    component: MyComment
  },
  {
    path: '/photo/list',
    component: PhotoList
  }
]

const router = new VueRouter({
  routes
})

// 路由后置钩子
router.afterEach((to, from) => {
  console.log(to, from)
  console.log(store)
  store.commit('setFromUrl', from.path)
  store.commit('setToUrl', to.path)
})
export default router
