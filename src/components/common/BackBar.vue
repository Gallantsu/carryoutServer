<template>
	<header :class="$style.header">
		<div>
			<div :class="$style.goback" @click="$emit('goback')">
				<i class="fa fa-angle-left fa-lg"></i>
			</div>
			<span>
				<slot />
			</span>
		</div>
	</header>
</template>

<style module lang="scss" >
	.header{
		@include point(height,100);
		@include point(padding-left,20);
		@include point(padding-right,20);
		&>div{
				position: relative;
				@include point(line-height,100);
				text-align:center;
				@include point(font-size,40);
				span{
					color:#333;
				}
		}
	}
	.goback{
		position:absolute;
		left:0px;
		top:0px;
		@include point(height,100);
		@include point(width,72);
		@include point(line-height,100);
		text-align:center;
	}

</style>