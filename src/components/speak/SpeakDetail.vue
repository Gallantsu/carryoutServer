<template>
	<div>
		<BackBar @goback="$router.push('/speak')">厨房妈妈</BackBar>
		<section :class="$style.content">
			<h2>{{name}}</h2>
			<div :class="$style.neck">
				<time>{{time}}</time>
				<span>
					<i class="fa fa-thumbs-o-up"></i>
					浏览{{scanTime}}
				</span>
			</div>
			<div :class="$style.introduce" v-html="introduce">
			</div>
		</section>
	</div>
</template>

<script>

 	import BackBar from '@/components/common/BackBar'
 	import { GET_INTRO_DETAIL } from '@/components/speak/module'
 	import store from '@/store'

	export default {
		beforeRouteEnter(to,from,next){
			store.dispatch(GET_INTRO_DETAIL,to.params.id).then(()=>{
				next();
			});
		},
		components:{
			BackBar
		},
		computed:{
			name(){
				return this.$store.state.speakModule.introData.name;
			},
			time(){
				let date = new Date();
				let y = date.getFullYear();  
		    let m = date.getMonth() + 1;  
		    m = m < 10 ? '0' + m : m;  
		    let d = date.getDate();  
		    d = d < 10 ? ('0' + d) : d;  
    		return y + '-' + m + '-' + d; 
			},
			scanTime(){
				return this.$store.state.speakModule.introData.viewTimes;
			},
			introduce(){
				return this.$store.state.speakModule.introData.introduce.split(/<br\/>/).map((val) => {
					return "<p>" + val + "</p>"
				}).join("");
			}
		},
	}
</script>

<style module lang="scss" >
	.content{
		@include point(padding,24);
		h2{
			font-weight:500;
			@include point(font-size,36);
			color:#333;
			line-height:1.5;
		}
	}
	.neck{
		@include addprefixval(display,flex);
		@include addprefix(justify-content,space-between);
		@include point(margin-top,20);
	}
	.introduce{
		@include point(margin-top,20);
		@include point(font-size,26);
		p{
			line-height:2.5;
			text-indent:2em;
			color:#333;
		}
	}
</style>