import Vue from 'vue'
import Vuex from 'vuex'

import alertModule from '@/components/popup/module'
import homeModule from '@/components/home/module'
import searchModule from '@/components/search/module'
import speakModule from '@/components/speak/module'
import userModule from '@/components/user/module'

Vue.use(Vuex)

export const SET_HEIGHT = 'SET_HEIGHT'

export default new Vuex.Store({
	state:{
		//保存高度信息
		height:''
	},
	modules:{
		alertModule,
		homeModule,
		searchModule,
		speakModule,
		userModule
	},
	mutations:{
		[SET_HEIGHT](state,val){
			state.height = val;
		}
	}

})