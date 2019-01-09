<template>
	<swiper :options="swiperOption" :class="$style.banner">
	  <swiper-slide 
	  v-for="item in bannerImgs"
	  >
	  	<img :class="$style['banner-img']" :src="item" alt="banner">
	  </swiper-slide>
	</swiper>	
</template>

<script>
	const bannerImgs = [
		require('@/assets/images/banner3.png'),
		require('@/assets/images/banner4.png'),
	]

	export default {
		data(){
			return {
				bannerImgs,
				swiperOption:{
					loop: true,
				 	autoplay:true,
				 	delay:5000
	      },
			}
		}
	}

</script>

<style module lang="scss" >
	.banner{
		width: 100%;
	}
	.banner-img{
		width:100%;
		vertical-align:middle;
	}
</style>