<template>
	<div :class="$style.search">
		<input type="text" :value="searchText"  @input="$emit('input',$event.target.value)"  placeholder="请输入要搜索的内容">
		<button @click="submitSearch">搜索</button>
	</div>
</template>

<script>
	export default {
		 props:["searchText"],
		 methods:{
		 	submitSearch(){
		 		this.$emit('searchResult');
		 	}
		 }
	}
</script>

<style module lang="scss" >
	.search{
		@include addprefixval(display,flex);
		@include point(padding-top,30);
		@include point(padding-bottom,30);
		@include point(padding-left,20);
		@include point(padding-right,20);
		input{
				@include point(height,80);
				@include addprefix(flex-grow,1);
				@include point(padding-left,20);
				border: 1px solid #eee;
				border-radius:5%;
		}
		button{
			@include point(width,100);
			@include point(margin-left,20);
	    background-color: #dcdcdc;
	    @include point(font-size,30);
	    border:none;
	    border-radius:10%;
		}
	}
</style>