// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
import canvas from '@/utils/canvas'
import async from '@/utils/async'

//使用图标
import '../static/font-awesome-4.7.0/css/font-awesome.min.css'

//使用swiper插件做轮播
Vue.use(VueAwesomeSwiper)

//使用canvas图
Vue.use(canvas)

//使用注册异步请求函数
Vue.use(async)

//引入根模板
import home from './Home'

Vue.config.productionTip = false

//引用图片懒加载
Vue.use(VueLazyLoad,{
  error:require('@/assets/images/error.png'),
  loading:require('@/assets/images/waiting.png')
})

//引入mockjs模拟数据
require('./mock/index.js');

//初始化数据
// import {GET_HOME_LIST} from '@/components/home/module'

// (function initDatas(argument) {
// 		const {dispatch} = store;
//  		dispatch(GET_HOME_LIST);
// })()


/* eslint-disable no-new */
new Vue({
	store,
	router,
	render: h => h(home)
}).$mount('#app');
