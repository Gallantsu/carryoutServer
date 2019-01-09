<template>
	<div>
		<BackBar @goback="$router.push('/speak')">厨房妈妈</BackBar>
		<div :class="$style['forum-header']">
			<div :class="$style['header-left']">
				<img src="@/assets/images/p.png" alt="">
			</div>
			<div :class="$style['header-right']">
				<h4>饮食健康</h4>
				<div>
					<label>话题<span class="red" >0</span></label>
					<label>回复<span class="red" >0</span></label>
				</div>
			</div>
		</div>
		<h2  :class="$style['topic-header']" class="red" >全部</h2>
		<div :class="$style['topic-none']">
			<img src="@/assets/images/none.png" alt="">
			<p>还没话题，快来说两句！</p>
		</div>
	</div>
</template>

<script>

	import BackBar from '@/components/common/BackBar'

	export default {
		components:{
			BackBar
		}
	}
</script>


<style module lang="scss" >
	.forum-header{
		@include addprefixval(display,flex);
		@include point(padding-top,20);
		@include point(padding-bottom,20);
		border-bottom:1px solid #f3f3f3;
	}
	.header-left{
		@include point(width,180);
		@include point(padding-left,30);
		@include point(padding-right,30);
		img{
			width:100%;
			vertical-align:middle;
			border-radius:50%;
		}
	}
	.header-right{
		@include point(flex,1);
		h4{
			@include point(margin-bottom,20);
			font-weight:500;
			color:#333;
			line-height:1.5;
		}
		label{
			&:nth-child(2){
				@include point(margin-left,40);	
			}
			span{
				@include point(margin-left,10);	
			}
		}
		
	}
	.topic-header{
		@include point(padding-left,40);	
		@include point(height,80);	
		@include point(line-height,80);
		@include point(font-size,32);
		font-weight:normal;
		background-color:#fff;
	}
	.topic-none{
		@include point(padding,24);
		text-align:center;
		img{
			width:50%;
		}
	}
</style>