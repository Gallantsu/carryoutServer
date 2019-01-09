/**
 * auth:suyong
 * description:用来保存通用的方法
 */

const expireTime = 24*60; //默认1天

const Utils = {
	getCookie:(name)=>{
		let val = null;
		let cookieStr;
		if(window.plus){
			cookieStr = plus.navigator.getCookie('http://localhost:8081');
		}else{
			cookieStr = document.cookie;
		}
		if(cookieStr && cookieStr != ""){
			let cookies = cookieStr.split(';');
			for(let i = 0; i < cookies.length; i++){
				let cookie = Utils.trim(cookies[i]);
				if(cookie.substring(0,name.length+1) == (name+"=")){
					val = decodeURIComponent(cookie.substring(name.length+1));
					break;
				}
			}
		}
		return val;
	},
	setCookie:(name,val)=>{
		let expires = "";
		let date = new Date();
		date.setTime(date.getTime() + (expireTime * 1000));
		expires = '; expires=' + date.toUTCString(); 
		if(window.plus){
			plus.navigator.setCookie('http://localhost:8081',[name, '=', encodeURIComponent(val), expires].join(''));
		}else{
			document.cookie = [name, '=', encodeURIComponent(val), expires].join('');
		}
	},
	trim:val => val.replace(/^\s+/i,"").replace(/\s+$/,"")
}

export default Utils