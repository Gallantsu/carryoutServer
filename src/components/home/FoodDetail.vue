<template>
	<div>
		<div :class="$style.pic">
			<i class="fa fa-angle-left fa-lg" @click="goback"></i>
			<img :src="require('@/assets/images/' + dishObj.src)" alt="">
		</div>
		<div :class="$style.detail">
			<h2>{{dishObj.name}}</h2>
			<div :class="$style.price">
				<b class="orange">¥ {{dishObj.price}}</b>
				<span>（{{dishObj.discountMsg}}）</span>
			</div>
			<p>库存 ： {{dishObj.inventory}}</p>
			<p>运费 ： {{carriage}}</p>
		</div>
		<div :class="$style.comment" >
			<h2>宝贝评价（{{totalEstimate}}）</h2>
			<ul :class="$style['comment-detail']" >
				<li>有图（{{dishObj.estimate.hasPic}}）</li>
				<li>好评（{{dishObj.estimate.positive}}）</li>
				<li>中评（{{dishObj.estimate.medium}}）</li>
				<li>差评（{{dishObj.estimate.negative}}）</li>
			</ul>
		</div>
		<section v-html="dishDes" :class="$style.description">
		</section>
		<div :class="$style['pic-bottom']">
			<img src="@/assets/images/banner.jpg" alt="">
		</div> 
		<div :class="$style.fixed">
			<div :class="$style['fix-btn']">
				<BaseButton class="orange-btn">立即购买</BaseButton>
				<BaseButton class="white-btn">加入购物</BaseButton>
			</div>
		</div>
	</div>
</template>
<script>

	import BaseButton from '@/components/common/BaseButton'
	import { GET_LIST_BY_ID } from '@/components/home/module'
	import store from '@/store'

	export default {
		async beforeRouteEnter(to,from,next){
			 await store.dispatch(GET_LIST_BY_ID,to.params.id);
			 next();
		},
		components:{
			BaseButton
		},
		methods:{
			goback(){
				try{
					this.$router.currentRoute.params.parentPath;
					this.$router.push(this.$router.currentRoute.params.parentPath);
				}catch(e){
					this.$router.push("/");
				}
			}
		},
		computed:{
			dishObj(){
				return this.$store.state.homeModule.list;
			},
			carriage(){
				if(this.dishObj.carriage == 0){
					return "免运费";
				}else{
					return this.dishObj.carriage;
				}
			},
			totalEstimate(){
				let estimate = this.dishObj.estimate;
				return parseInt(estimate.negative) + parseInt(estimate.medium) + parseInt(estimate.positive);
			},
			dishDes(){
				let desArray = this.dishObj.description.split(/<br\/>/g);
				return desArray.map((val) => {
					return "<p>" + val + "</p>"
				}).join("");
			}
		}
	}
</script>
<style module lang="scss" >

	.pic{
		display:relative;
		img{
			width:100%;
			vertical-align:middle;
		}
		i{
			position: absolute;
			top:3%;
			left:3%;
			@include point(width,60);
			@include point(height,60);
			@include point(line-height,60);
			color:#fff;
			text-align:center;
			border-radius:50%;
			background-color:rgba(0,0,0,0.4);
		}
	}
	.detail{
		@include point(padding,24);
		h2{
			@include point(font-size,40);
			font-weight:500;
			line-height:1.5;
			color:#333;
		}
		p{
			line-height:1.5
		}
	}
	.price{
		border-bottom:1px solid #ddd;
		b{
			@include point(font-size,36);
			@include point(line-height,60);
		}
	}
	.comment{
		@include point(margin-top,20);
		@include point(padding,24);
		h2{
			@include point(font-size,40);
			font-weight:500;
			line-height:1.5;
			color:#333;
		}
	}
	.comment-detail{
		@include addprefixval(display,flex);
		@include addprefix(flex-wrap,wrap);
		@include addprefix(justify-content,space-between);
		li{
			@include point(padding-left,12);
			@include point(padding-right,12);
			@include point(font-size,24);
			line-height:2;
			color:#000;
			background-color:#f5ece7;
			border-radius:5px;
		}
	}
	.description{
		@include point(margin-top,20);
		@include point(padding,24);
		p{
			line-height:2;
			text-indent:2em;
		}
	}
	.pic-bottom{
		@include point(padding-left,24);
		@include point(padding-right,24);
		@include point(padding-bottom,60);
		img{
			width:100%;
			vertical-align:middle;
		}
	}
	.fixed{
		position: fixed;
		bottom:0px;
		@include point(width,640);
		background-color:#fff;
	}
	.fix-btn{
		@include addprefixval(display,flex);
		@include addprefix(justify-content,space-between);
		@include point(padding,24);

		button{
			width:45%;
		}
	}
</style>