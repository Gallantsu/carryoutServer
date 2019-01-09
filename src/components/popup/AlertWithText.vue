<template>
	<BaseCover v-show="textShow">
		<div :class="$style.dialog">
			<div :class="$style.content">{{message}}</div>
			<div :class="$style.btn" @click="closeText">确定</div>
		</div>
	</BaseCover>
</template>
<script>
	import BaseCover from '@/components/common/BaseCover'
	import { HIDE_TEXT, SHOW_TEXT } from '@/components/popup/module'
	
	export default {
		props:{
			textShow:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			message(){
				return this.$store.state.alertModule.alertMsg;
			}
		},
		methods:{
			closeText(){
				this.$store.commit(HIDE_TEXT)
			}
		},
		components:{
			BaseCover
		}
	}
</script>
<style module lang="scss" >
	.dialog{
		position: fixed;
		display: table;
		z-index: 5000;
		width: 80%;
		max-width: 300px;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		background-color: #fff;
		text-align: center;
		border-radius: 3px;
		overflow: hidden;
	}
	.content{
		@include point(padding-top,40);
		@include point(padding-bottom,40);
	}
	.btn{
		@include point(height,80);
		@include point(line-height,80);
		border-top: 1px solid #d5d5d6;
		@include point(font-size,40);
		color:#dd514c;
		&:active{
			background-color: #f3f3f3;
		}
	}
	
</style>