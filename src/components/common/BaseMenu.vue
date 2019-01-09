<template>
	<ul :class="$style.menu">
		<li 
		v-for="data in menuDatas"
		@click="$router.push({name:data.url,params:{parentPath:parentPath}})"
		>
			<img :src="data.src" alt="">
			<p>{{data.name}}</p>
		</li>
	</ul>
</template>
<script>
/*	const menuDatas = [
		{index:1,name:"最新推荐",src:require("@/assets/images/icon.jpg"),url:"/search"},
		{index:2,name:"热门菜谱",src:require("@/assets/images/icon1.jpg"),url:"/search"},
		{index:3,name:"人气菜肴",src:require("@/assets/images/icon2.jpg"),url:"/search"},
		{index:4,name:"优惠券",src:require("@/assets/images/icon3.jpg"),url:"/search"}
	]*/
	export default{
		props:{
			menuDatas:{
				type:Array,
				require:true
			}
		},
		computed:{
			parentPath(){
				return this.$router.currentRoute.fullPath;
			}
		}

	}
</script>

<style module lang="scss" >
	.menu{
		@include addprefixval(display,flex);
		@include addprefix(justify-content,space-around);
		@include point(padding-top,24);
		@include point(padding-bottom,24);
		width:100%;
		background-color:#fafafa;
		li{
			width:25%;
			text-align:center;
			img{
				width:50%;
			}
			p{
				@include point(font-size,30);
			}
		}
	}

</style>