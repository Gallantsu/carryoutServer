export const GET_HOME_LIST = "GET_HOME_LIST"
export const GET_LIST_BY_ID = "GET_LIST_BY_ID"

const homeModule = {
	state:{
		lists:[],
		list:null,
		showHomeLoading:true
	},
	/* getters:{

	}, */
	actions:{
		//获取首页所有商品种类
		[GET_HOME_LIST]({commit}){
			commit('changeLoading',true);
			return new Promise((resolve,reject) => {
				this._vm.$axios({
					commit,
					hideAlert:true,
					url:'/getHomeLists',
					method:'post',
					success(data){
						commit('changeLists',data);
						commit('changeLoading',false);
						resolve();
					},
					fail(){
						reject();
					}
				})
			})
		},
		[GET_LIST_BY_ID]({commit},id){
			return new Promise((resolve,reject) => {
				this._vm.$axios({
					commit,
					url:'/getListById',
					method:'post',
					data:{id:id},
					success(data){
						resolve();
						commit('commitList',data);
					},
					fail(){
						reject();
					}
				})
			})
			
		}
	},
	mutations:{
		changeLists(state,val){
			state.lists = val;
		},
		changeLoading(state,val){
			state.showHomeLoading = val;		
		},
		commitList(state,val){
			state.list = val;
		}
	}
}
export default homeModule