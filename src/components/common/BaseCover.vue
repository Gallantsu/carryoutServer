<template>
	<div :class="$style.cover" :style="{height:wrapHeight+'px'}">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		computed:{
			wrapHeight(){
				return this.$store.state.height;
			}
		}
	}
</script>
<style module lang="scss" >
	.cover{
		position:fixed;
		left:0px;
		top:0px;
		right:0;
		bottom:0;
		width:100%;
		background-color:rgba(0,0,0,0.4);
		z-index:200;
	}

</style>