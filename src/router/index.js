import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/components/home/Home')
    },
    {
    	path:'/search',
    	name:'search',
    	component:()=>import('@/components/search/Search')
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:()=>import('@/components/home/FoodDetail')
    },
    {
      path:'/speak',
      name:'speak',
      component:()=>import('@/components/speak/Speak')
    },
    {
      path:'/speak/:id',
      name:'speakDetail',
      component:()=>import('@/components/speak/SpeakDetail')
    },
    {
      path:'/forum',
      name:'forum',
      component:()=>import('@/components/speak/Forum')
    },
    {
      path:'/about',
      name:'about',
      component:()=>import('@/components/about/About'),
      /* children:[
        {
          path:'/',
          component:()=>import('@/components/about/AboutStore')
        },
        {
          path:'suggest',
          component:()=>import('@/components/about/AboutSuggest'),
					beforeEnter: (to, from, next) => {
						next(vm => {
							vm.activeTab = 1;
						})
					}
        }
      ] */
    },
		 {
		  path:'/user',
		  name:'user',
		  component:()=>import('@/components/user/Index'),
			children:[
				{
					path:'',
					component:()=>import('@/components/user/User')
				},
				{
					path:'login',
					component:()=>import('@/components/user/Login')
				},
			]
		},
  ],
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})
