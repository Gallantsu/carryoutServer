<template>
	<div :class="$style.banner">
		<swiper :options="swiperOption" :class="$style.swiper">
		  <swiper-slide 
		  v-for="item in bannerImgs"
		  >
		  	<img :class="$style['banner-img']" :src="item" alt="banner">
		  </swiper-slide>
		</swiper>	
		<span @click="$router.push('/search')"  :class="$style.search">
		开启你的美食之旅...
			<i class="fa fa-search fa-lg"></i>
		</span>
	</div>
</template>
<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper'

	const bannerImgs = [
		require("../../assets/images/banner.jpg"),
		require('../../assets/images/banner1.jpg')
	]

	export default {
		data(){
			return {
				swiperOption:{
					loop: true,
				 	autoplay:true,
				 	delay:5000
	      },
	      bannerImgs
	    }
  	},
		components:{
			swiper,
			swiperSlide
		}
	}
</script>

<style module lang="scss">
	.banner{
		position:relative;
	}
	.swiper{
		width: 100%;
	}
	.banner-img{
		width:100%;
		vertical-align:middle;
	}
	.search{
		position:absolute;
		@include point(bottom,32);
		left:50%;
		display:block;
		@include point(margin-left,-288);
		@include point(padding-left,42);
		@include point(height,84);
		@include point(width,576);
		@include point(font-size,32);
		@include point(line-height,84);
		color:#000;
		background-color:#fff;
		@include point(border-radius,42);
		cursor:pointer;
		z-index:100;
		i{
			position:absolute;
			@include point(right,48);
			@include point(line-height,84);
		}
	}
</style>