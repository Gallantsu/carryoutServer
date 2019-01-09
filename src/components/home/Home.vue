<template>
	<div>
		<HomeBanner></HomeBanner>
		<BaseMenu :menuDatas="menuDatas"></BaseMenu>
		<TitleBar></TitleBar>
		<HomeList></HomeList>
		<Footer :activeIdx="activeIdx"></Footer>
	</div>
</template>
<script>
	import HomeBanner from "./HomeBanner"
	import BaseMenu from "@/components/common/BaseMenu"
	import Footer from "@/components/common/Footer"
	import TitleBar from "@/components/common/TitleBar"
	import HomeList from "@/components/home/HomeList"

	const menuDatas = [
		{index:1,name:"最新推荐",src:require("@/assets/images/icon.jpg"),url:"search"},
		{index:2,name:"热门菜谱",src:require("@/assets/images/icon1.jpg"),url:"search"},
		{index:3,name:"人气菜肴",src:require("@/assets/images/icon2.jpg"),url:"search"},
		{index:4,name:"优惠券",src:require("@/assets/images/icon3.jpg"),url:"search"}
	]

	export default {
		data(){
			return{
				activeIdx:0,
				menuDatas
			}
		},
		components:{
			HomeBanner,
			BaseMenu,
			Footer,
			TitleBar,
			HomeList
		}
	}
</script>

<style module lang="scss">
	
</style>