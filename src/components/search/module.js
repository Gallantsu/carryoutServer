export const GET_SEARCH_LIST = "GET_SEARCH_LIST"
export const COMMIT_LIST = 'COMMIT_LIST'
export const SHOW_SEARCH_LOAD = 'SHOW_SEARCH_LOAD'
export const HIDE_SEARCH_LOAD = 'HIDE_SEARCH_LOAD'

const searchModule = {
	state:{
		searchLists:[],
		showSearchLoading:true
	},
	actions:{
		//获取首页所有商品种类
		[GET_SEARCH_LIST]({commit},val){
			commit(SHOW_SEARCH_LOAD);
			this._vm.$axios({
				commit,
				hideAlert:true,
				url:'/getSearchLists',
				method:'post',
				data:{searchTxt:val},
				success(data){
					commit(COMMIT_LIST,data);
					commit(HIDE_SEARCH_LOAD);
				}
			})
		}
	},
	mutations:{
		[COMMIT_LIST](state,val){
			state.searchLists = val;
		},
		[SHOW_SEARCH_LOAD](state){
			state.showSearchLoading = true;		
		},
		[HIDE_SEARCH_LOAD](state){
			state.showSearchLoading = false;		
		}
	}
}
export default searchModule