<template>
	<div>
		<BackBar @goback="goback">用户登录</BackBar>
		<form :class="$style['login-form']">
			<div :class="$style['input-item']">
				<label>电话</label>
				<input type="text" v-model="phoneNum" maxlength="11" placeholder="请输入电话号码">
			</div>
			<div  :class="$style['input-item']">
				<label>密码</label>
				<input type="password" v-model="password" maxlength="20"  placeholder="请输入密码">
			</div>
			<div :class="$style['btn-group']">
				<button @click.prevent="commitLogin"  class="red-btn">登录</button>
			</div>
			<div :class="$style.subline">
				<span>忘记密码</span>
				<span>注册用户</span>
			</div>
		</form>
		
	</div>
</template>

<script>
	import BackBar from '@/components/common/BackBar'
	import { LOGIN } from '@/components/user/module'
 	import { SHOW_TEXT,HIDE_TEXT } from '@/components/popup/module'
	
	export default {
		data() {
			return {
				phoneNum:'',
				password:''
			};
		},
		methods:{
			goback(){
				this.$router.go(-1);
			},
			commitLogin(){
				if(this.phoneNum.length == 0){
					this.$store.commit(SHOW_TEXT,'请输入电话号码！');
					return;
				}
				if(!/^\d{11}$/.test(this.phoneNum)){
					this.$store.commit(SHOW_TEXT,'电话号码格式错误！');
					return;
				}
				if(this.password.length == 0){
					this.$store.commit(SHOW_TEXT,'请输入密码！');
					return;
				}
				this.$store.dispatch(LOGIN,{
					phoneNum:this.phoneNum,
					password:this.password
				}).then(msg => {
					this.$router.push('/user');
				}).catch(errorMsg => {
					this.$store.commit(SHOW_TEXT,errorMsg);
				});
			}
		},
		components:{
			BackBar
		}
	}
</script>

<style module lang="scss" >
	@mixin paddingAll{
		@include point(padding-left,20);
		@include point(padding-right,20);
	}
	.login-form{
		@include point(margin-top,20);
	}
	
	.input-item{
		@include addprefixval(display,flex);
		@include paddingAll;
		@include point(height,80);
		@include addprefix(align-items,center);
		border-bottom: 1px solid #eee;
		background-color: #fff;
		label{
			display: inline-block;
			@include point(width,120);
			color:#333;
		}
	}
	.btn-group{
		@include point(margin-top,40);
		@include paddingAll;
		button{
			width: 100%;
			@include point(height,70);
			text-align: center;
			@include point(border-radius,10);
			letter-spacing: 5px;
			&:active{
				background-color: #fd4c4c;
			}
		}
	}
	.subline{
		@include addprefixval(display,flex);
		@include point(padding-top,20);
		@include paddingAll;
		justify-content: space-between;
		span{
			@include point(font-size,24)
		}
	}
</style>
