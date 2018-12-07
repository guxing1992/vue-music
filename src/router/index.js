import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/pages/rank/Rank'
import Recommand from '@/components/pages/recommand/Recommand'
import Search from '@/components/pages/search/Search'
import Singer from '@/components/pages/singer/Singer'
import SingerDetail from '@/components/pages/singer-detail/SingerDetail'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/',
      name: 'Index',
      redirect: '/recommand'
    },
    {
      path: '/recommand',
      name: 'Recommand',
      component: Recommand
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
})
