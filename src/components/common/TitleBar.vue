<template>
	<div :class="$style['title-bar']">
		<div :class="$style['bar-left']">
			<h2 class="orange"> 积分菜品</h2>
		</div>
		<div :class="$style['bar-right']" >
			<span @click="$router.push('/search')">more <i class="fa fa-angle-double-right"></i></span>
		</div>
	</div>
</template>

<script>
	
</script>

<style module lang="scss" >
	.title-bar{
		@include addprefixval(display,flex);
		@include point(margin-top,40);
		@include point(margin-left,20);
		@include point(margin-right,20);
		@include point(line-height,88);
		background-color:#fff;
    border-bottom: 1px solid #dedede;
	}
	.bar-left{
		h2{
			position:relative;
			padding-left:12px;
			@include point(font-size,36);
			font-weight:700;
			&:before{
				content:"";
				position:absolute;
				@include point(top,20);
				@include point(bottom,16);
				left:2px;
				border:2px solid #f60;
			}
		}
	}
	.bar-right{
			@include addprefix(flex-grow,1);
			@include point(font-size,36);
			color:#f60;
			text-align:right;
	}
</style>