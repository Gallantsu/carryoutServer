export const GET_SPEAK_INTROS = 'GET_SPEAK_INTROS'
export const GET_INTRO_DETAIL = 'GET_INTRO_DETAIL'
export const COMMIT_INTROS = 'COMMIT_INTROS'
export const COMMIT_INTRO = 'COMMIT_INTRO'

const speakModule = {
	state:{
		introDatas:[],
		introData:null
	},
	actions:{
		[GET_SPEAK_INTROS]({commit}){
			return new Promise((resolve,reject) => {
				this._vm.$axios({
					commit,
					url:'/getSpeakIntros',
					method:'post',
					success:(data) => {
						commit(COMMIT_INTROS,data);
						resolve(data);
					},
					fail:() => {
						reject();
					}
				});
			});
		},
		[GET_INTRO_DETAIL]({commit},id){
			return new Promise((resolve,reject) => {
				this._vm.$axios({
					commit,
					method:'post',
					url:'/getIntroDetail',
					data:{id:id},
					success:(data) => {
						commit(COMMIT_INTRO,data);
						resolve(data);
					},
					fail:() => {
						reject();
					}
				})
			})
		}
	},
	mutations:{
		[COMMIT_INTROS](state,val){
			state.introDatas = val;
		},
		[COMMIT_INTRO](state,val){
			state.introData = val;
		}
	}
}

export default speakModule