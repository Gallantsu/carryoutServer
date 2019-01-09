<template>
	<footer>
		<ul :class="$style['foot-nav']">
			<li 
			v-for="(data,index) in footDatas"
			@click="$router.push(data.url)"
			>
				<img :src="activeIdx==index?data.activeSrc:data.src" alt="foot-menu">
				<p>{{data.name}}</p>
			</li>
		</ul>
	</footer>
</template>

<script>

	const footDatas = [
		{name:"点餐",src:require("@/assets/images/nav.png"),activeSrc:require("@/assets/images/nav_active.png"),url:"/"},
		{name:"客说",src:require("@/assets/images/nav2.png"),activeSrc:require("@/assets/images/nav2_active.png"),url:"/speak"},
		{name:"我们",src:require("@/assets/images/nav3.png"),activeSrc:require("@/assets/images/nav3_active.png"),url:"/about"},
		{name:"我的",src:require("@/assets/images/nav4.png"),activeSrc:require("@/assets/images/nav4_active.png"),url:"/user"}
	]

	export default {
		data(){
			return {
				footDatas
			}
		},
		props:["activeIdx"]
	}
</script>

<style module lang="scss" >
	footer{
		position:fixed;
		bottom:0px;
		left:0px;
		width:100%;
		z-index:100;
	}
	.foot-nav{
		@include addprefix(display,flex);
		@include addprefix(justify-content,space-around);
		background-color:#fff;
	 	border-top: 1px solid #ddd;
		li{
			width:25%;
			text-align:center;
			img{
				@include point(width,60);
				vertical-align:middle;
			}
			p{
				@include point(font-size,24);
				color:#999;
			}
		}
	}
</style>