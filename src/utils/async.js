
import axios from 'axios'
import { SHOW_LOADING, HIDE_LOADING, SHOW_TEXT, HIDE_TEXT} from '@/components/popup/module'

const async = {
	install(Vue){
		Vue.prototype.$axios = ({commit,url,method='post',data,headers,success,fail,hideAlert=false})=>{
			if(!hideAlert){
				commit(SHOW_LOADING);
			}
			axios({
				method,
				url,
				data,
				headers
			}).then(res => {
				const { data,status} = res;
				if(status == 200){
					if(!hideAlert){
						commit(HIDE_LOADING);
					}
					success&&success(data);
				}else{

				}
			}).catch(error => {
				fail&&fail(error);
			})
		}
	}
}

export default async