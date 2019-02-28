<template>
	<div>
		<div :class="$style['user-header']">
			<div :class="$style['user-photo']"></div>
			<div :class="$style['user-info']">
				<span v-show="logined">{{userName}}</span>
				<span v-show="logined">{{phoneNum}}</span>
				<span @click="$router.push('user/login')"  v-show="!logined">未登录</span>
			</div>
		</div>
		<ul :class="$style['user-list']">
			<li><i class="fa fa-map-marker"></i><span>收货地址</span></li>
			<li><i class="fa fa-newspaper-o"></i><span>我的订单</span></li>
			<li><i class="fa fa-cart-arrow-down"></i><span>购物车</span></li>
			<li><i class="fa fa-bell-o"></i><span>系统通知</span></li>
			<li><i class="fa fa-credit-card"></i><span>会员卡</span></li>
			<li><i class="fa fa-cc-mastercard"></i><span>优惠券</span></li>
			<li><i class="fa fa-dollar"></i><span>积分</span></li>
			<li><i class="fa fa-phone"></i><span>联系我们</span></li>
		</ul>
		<Footer activeIdx="3"></Footer>
	</div>
</template>

<script>
	import Footer from '@/components/common/Footer'
	import { CHECK_LOGIN } from '@/components/user/module'
	import Utils from '@/utils/util'
	export default {
		data(){
			return {
				logined:false
			}
		},
		computed:{
			userName(){
				if(this.logined){
					return this.$store.state.userModule.user;
				}else{
					return '';
				}
			},
			phoneNum(){
				if(this.logined){
					let phoneNum = this.$store.state.userModule.phone;
					return `${phoneNum.slice(0,3)}****${phoneNum.slice(7)}`;
				}else{
					return '';
				}
			}
		},
		components:{
			Footer
		},
		mounted(){
			let phone = Utils.getCookie('phoneNum');
			let taken = Utils.getCookie('taken');
			if(phone&&taken){
				this.$store.dispatch(CHECK_LOGIN,{
					phone,
					taken
				}).then(()=>{
					this.logined = true;
				}).catch(()=>{
					this.logined = false;
				})
			}else{
				this.logined = false;
			}
		}
	}
</script>

<style module lang="scss" >
	.user-header{
		width: 100%;
		@include point(height,240);
		background: url(../../assets/images/top_bg.jpg) no-repeat;
		background-size:cover;
		overflow: hidden;
	}
	.user-photo{
		float: left;
		@include point(margin-left,50);
		@include point(margin-top,40);
		@include point(width,160);
		@include point(height,160);
		background: url(../../assets/images/default_photo.png) no-repeat;
		background-size:100%;
		border-radius: 50%;
	}
	.user-info{
		float: left;
		display: inline-block;
		@include point(margin-left,30);
		@include point(padding-top,80);
		color: #fff;
		span{
			display: block;
		}
	}
	.user-list{
		li{
			@include point(padding-left,40);
			@include point(height,92);
			@include point(line-height,92);
			border-bottom: 1px solid #eee;
			color:#333;
			i{
				@include point(width,40);
				text-align: center;
			}
			span{
				@include point(margin-left,40);
			}
		}
	}
</style>
