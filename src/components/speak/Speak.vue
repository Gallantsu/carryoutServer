<template>
	<div>
		<SpeakBanner></SpeakBanner>
		<BaseMenu :menuDatas="menuDatas"></BaseMenu>
		<h1 :class="$style['speak-title']" >功效</h1>
		<ul>
			<li 
			:class="$style.introducer"
			v-for="data in introDatas"
			@click="$router.push({name:'speakDetail',params:{id:data.id,parentPath:'/speak'}})"
			>
				<div :class="$style['intro-left']" >
					<img v-lazy="require('@/assets/images/' + data.src)" alt="">
				</div>
				<div :class="$style['intro-right']">
					<h4>{{data.name}}</h4>
					<p>{{data.introduce.slice(0,15)+'...'}}</p>
					<div :class="$style.text">
						<time>{{getDate}}</time>
						<span>
							<i class="fa fa-thumbs-o-up"></i>
							点赞
						</span>
					</div>
				</div>
			</li>
		</ul>
		<Footer :activeIdx="activeIdx"></Footer>
	</div>
</template>

<script>
  import SpeakBanner from '@/components/speak/SpeakBanner'
  import BaseMenu from '@/components/common/BaseMenu'
  import Footer from '@/components/common/Footer'
  import store from '@/store'
  import { GET_SPEAK_INTROS } from '@/components/speak/module'

  const menuDatas = [
  	{index:1,name:"美食快拍",src:require("@/assets/images/ms.jpg"),url:"forum"},
		{index:2,name:"厨艺交流",src:require("@/assets/images/cy.jpg"),url:"forum"},
		{index:3,name:"妈妈派",src:require("@/assets/images/mmp.jpg"),url:"forum"},
		{index:4,name:"饮食健康",src:require("@/assets/images/ys.jpg"),url:"forum"}
  ]

	export default {
		beforeRouteEnter(to,from,next){
			store.dispatch(GET_SPEAK_INTROS);
			next();
		},
		data(){
			return {
				activeIdx:1,
				menuDatas
			}
		},
		components:{
			SpeakBanner,
			BaseMenu,
			Footer
		},
		computed:{
			introDatas(){
				return this.$store.state.speakModule.introDatas;
			},
			getDate(){
				let date = new Date();
				let y = date.getFullYear();  
		    let m = date.getMonth() + 1;  
		    m = m < 10 ? '0' + m : m;  
		    let d = date.getDate();  
		    d = d < 10 ? ('0' + d) : d;  
    		return y + '-' + m + '-' + d;  
			}
		}
	}

</script>

<style module lang="scss" >
	.speak-title{
		@include point(padding-left,20);
		@include point(height,100);
		@include point(line-height,100);
		@include point(font-size,36);
		font-weight:bolder;
		background-color:#fff;
		border-bottom:1px solid #ddd;
	}
	.introducer{
		@include addprefixval(display,flex);
		@include point(padding-top,30);
		@include point(padding-bottom,30);
		border-bottom:1px solid #eee;
	}
	.intro-left{
		@include point(width,160);
		@include point(padding-left,20);
		@include point(padding-right,20);
		img{
			width:100%;
			vertical-align:middle;
		}
	}
	.intro-right{
		flex:1;
		@include point(padding-right,20);
		h4{
			@include point(font-size,36);
			font-weight:500;
			color:#333;
			line-height:1.5;
		}
		p{
			text-overflow:clip;
			@include point(font-size,26);
			line-height:1.5;
			color:#333;
		}
	}
	.text{
		@include addprefixval(display,flex);
		@include addprefix(justify-content,space-between);
		@include point(margin-top,20);
		@include point(font-size,28);
		color:#999;
	}
</style>