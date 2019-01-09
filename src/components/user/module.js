
import Utils from '@/utils/util'

export const CHECK_LOGIN = 'CHECK_LOGIN'
export const LOGIN = 'LOGIN'

const userModule = {
	state:{
		taken:null,
		user:null,
		phone:null
	},
	mutations:{
		commitTaken(state,value){
			state.taken = value;
		},
		commitUser(state,value){
			state.user = value;
		},
		commitPhone(state,value){
			state.phone = value;
		},
	},
/* 	getters:{
		
	}, */
	actions:{
		[CHECK_LOGIN]({commit},obj){
			return new Promise((resolve,reject) => {
				this._vm.$axios({
					commit,
					url:'/checkLogin',
					method:'post',
					data:{phone:obj.phone,taken:obj.taken},
					success:(response)=>{
						if(response.msg){
							resolve();
						}else{
							reject();
						}
					},
					fail:(e)=>{
						reject();
					}
				});
			})
		},
		[LOGIN]({commit},obj){
			return new Promise((resolve,reject) => {
				this._vm.$axios({
					commit,
					url:'/login',
					hideAlert:true,
					method:'post',
					data:{phoneNum:obj.phoneNum,password:obj.password},
					success:(response) => {
						if(response.msg=='success'){
							Utils.setCookie('phoneNum',obj.phoneNum);
							Utils.setCookie('taken',response.data.taken);
							commit('commitTaken',response.data.taken);
							commit('commitUser',response.data.user);
							commit('commitPhone',obj.phoneNum);
							resolve();
						}else{
							reject('电话号码或密码错误！')
						}
					},
					fail:(e) => {
						reject('服务器故障！')
					}
				})
			})
		}
	}
}

export default userModule