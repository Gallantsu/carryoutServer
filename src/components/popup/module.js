export const SHOW_LOADING = "SHOW_LOADING"
export const HIDE_LOADING = "HIDE_LOADING"
export const SHOW_TEXT = "SHOW_TEXT"
export const HIDE_TEXT = "HIDE_TEXT"

const alertModule = {
	state:{
		showLoading:false,
		showText:false,
		alertMsg:''
	},
	actions:{

	},
	mutations:{
		[SHOW_LOADING](state){
			state.showLoading = true;
		},
		[HIDE_LOADING](state){
			state.showLoading = false;
		},
		[SHOW_TEXT](state,message){
			state.showText = true;
			state.alertMsg = message;
		},
		[HIDE_TEXT](state){
			state.showText = false;
		}
	}
}

export default alertModule