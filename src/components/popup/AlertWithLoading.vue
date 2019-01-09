<template>
	<BaseCover v-show="loadingShow">
		<div :class="$style['canvas-box']" v-canvas:show="loadingShow"></div>
	</BaseCover>
</template>
<script>
	import BaseCover from '@/components/common/BaseCover'

	export default {
		props:{
			loadingShow:{
				type:Boolean,
				default:false
			}
		},
		components:{
			BaseCover
		}
	}
</script>
<style module lang="scss" >
	.canvas-box{
		width:100%;
		text-align:center;
	}
</style>