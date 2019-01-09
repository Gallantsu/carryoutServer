<template>
	<div :class="$style.gallery">
		<ul v-show="listShow" >
			<li 
			v-for="list in dataLists"
			:class="$style['gallery-list']"
			>
				<div @click="$router.push({name:'detail',params:{id:list.id,parentPath:parentPath}})">
					<img v-lazy="require('@/assets/images/'+list.src)">
				</div>
				<h4>{{list.name}}</h4>
				<div>
					<span class="orange">¥{{list.price}}</span>
					<i class="fa fa-shopping-cart"></i>
				</div>
			</li>
		</ul>
		<div :class="$style['none-data']" v-show="textShow">
			<span>没有相关数据！</span>
		</div>
		<div :class="$style.loading"  v-show="showloading">
			<img src="@/assets/images/loading.gif" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			showloading:{
				type:Boolean,
				require:true
			},
			dataLists:{
				type:Array,
				require:true
			}
		},
		computed:{
			parentPath(){
				return this.$router.currentRoute.fullPath;
			},
			listShow(){
				return !this.showloading&&this.dataLists.length;
			},
			textShow(){
				return !this.showloading&&!this.dataLists.length;
			}
		}
	}
</script>

<style module lang="scss" >
	.gallery{
		@include point(padding-top,10);
		@include point(padding-left,10);
		@include point(padding-right,10);
		ul{
			@include addprefixval(display,flex);
			@include addprefix(flex-wrap,wrap);
		}
	}
	.loading{
		@include point(width,100);
		margin:0 auto;
		@include point(margin-top,100);
		img{
			width:100%;
		}
	}
	.gallery-list{
		@include point(padding,10);
		width:50%;
		img{
			width:100%;
			vertical-align:middle;
		}
		h4{
			@include point(margin-top,20);
			@include point(font-size,30);
	    font-weight: normal;
		}
		&>div:last-child{
			@include addprefixval(display,flex);
			@include addprefix(justify-content,space-between);
			span{
				@include point(font-size,30);
				line-height:1.5;
			}
			i{
				line-height:1.5;
				@include point(margin-top,-4);
				@include point(margin-right,6);
			}
		}
	}
	.none-data{
		text-align:center;
	}
</style>