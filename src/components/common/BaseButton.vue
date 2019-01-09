<template>
	<button :class="$style.btn">
		<slot/>	
	</button>
</template>

<script>
	export default {
		props:["text"]
	}
</script>

<style module lang="scss" >
	.btn{
		@include point(height,70);
		@include point(line-height,70);
	}
</style>