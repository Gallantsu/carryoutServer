<template>
	<div class="root">
		<AlertWithLoading :loadingShow="loadingShow"></AlertWithLoading>
		<AlertWithText :textShow="textShow"></AlertWithText>
		<router-view></router-view>
	</div>
</template>
<script>
	import AlertWithLoading from '@/components/popup/AlertWithLoading'
	import AlertWithText from '@/components/popup/AlertWithText'
	import {SET_HEIGHT} from '@/store/index'
	export default {
		mounted(){
			this.setWrapHeight();
		},
		methods:{
			setWrapHeight(){
				let wrapHeight = document.documentElement.clientHeight; 
				this.$store.commit(SET_HEIGHT,wrapHeight);
			}
		},
		components:{
			AlertWithLoading,
			AlertWithText
		},
		computed:{
			loadingShow(){
				return this.$store.state.alertModule.showLoading;
			},
			textShow(){
				return this.$store.state.alertModule.showText;
			}
		}
	}
</script>

<style lang="scss" >
	@import "./styles/common.scss";
	.root{
		&:after{
			content:"";
			display:block;
			@include point(height,100);

		}
	}
</style>