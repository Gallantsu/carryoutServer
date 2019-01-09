<template>
	<div>
		<SpeakBanner></SpeakBanner>
		<div :class="$style.section">
			<ul :class="$style['about-tab']">
				<li @click="commitStore" :class="[activeTab=='AboutStore'?$style.active:'']">店铺介绍</li>
				<li @click="commitSuggest" :class="[activeTab=='AboutSuggest'?$style.active:'']">建议留言</li>
			</ul>
			<transition :name="animateName">
				<component :is="activeTab"></component>
			</transition>	
		</div>
		<Footer :activeIdx="activeIdx"></Footer>
	</div>
</template>

<script>

	import SpeakBanner from '@/components/speak/SpeakBanner' 
	import Footer from '@/components/common/Footer'
	import AboutStore from '@/components/about/AboutStore'
	import AboutSuggest from '@/components/about/AboutSuggest'
	export default {
		data(){
			return {
				activeIdx:2,
				activeTab:'AboutStore',
				animateName:'store'
			}
		},
		components:{
			SpeakBanner,
			Footer,
			AboutStore,
			AboutSuggest
		},
		methods:{
			commitStore(){
				this.activeTab = 'AboutStore';
				this.animateName = 'store';
			},
			commitSuggest(){
				this.activeTab = 'AboutSuggest';
				this.animateName = 'suggest';
			}
		}
	}
</script>

<style module lang="scss" >
	.section{
		@include point(padding,24);
	}
	.about-tab{
		&:after{
	 		content:"";
	 		display:block;
	 		height:0px;
	 		width:0px;
	 		clear:both;
	 	}
		li{
			float:left;
			@include point(padding-left,32);
			@include point(padding-right,32);
			@include point(height,80);
			@include point(line-height,80);
			&.active{
				color:red;
				border-bottom:1px solid red;
			}
		}
	}
</style>

<style lang="scss">
	.store-enter{
		@include addprefix(transform,translateX(-100%));
	}
	.suggest-enter{
		@include addprefix(transform,translateX(100%));
	}
	.store-enter-active,
	.suggest-enter-active{
		transition:all 0.5s; 
	}
	
</style>