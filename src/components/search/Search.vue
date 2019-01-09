<template>
	<div>
		<BackBar @goback="goback">厨房妈妈</BackBar>
		<BaseSearch @searchResult="beginSearch" v-model="searchText" ></BaseSearch>
		<ul v-show="listShow" :class="$style['filter-bar']">
			<li 
			v-for="list in sortDatas"
			@click="changeOrder(list.sortKey)"
			>
			{{list.name}}
			</li>
		</ul>
		<BaseList v-show="listShow" :showloading="showloading" :dataLists="dataLists"></BaseList>
	</div>
</template>
<script>
	import BackBar from '@/components/common/BackBar' 
	import BaseSearch from '@/components/common/BaseSearch' 
	import BaseList from '@/components/common/BaseList' 
	import { GET_SEARCH_LIST } from '@/components/search/module'

	const sortDatas = [
		{
			name:"默认",
			sortKey:"default"
		},
		{
			name:"销量",
			sortKey:"sales"
		},
		{
			name:"价格",
			sortKey:"price"
		}
	]

	export default {
		data(){
			return {
				listShow:false,
				sortDatas,
				searchText:"",
				sortKey:"default"
			}
		},
		components:{
			BackBar,
			BaseSearch,
			BaseList
		},
		computed:{
			showloading(){
				return this.$store.state.searchModule.showSearchLoading;
			},
			dataLists(){
				switch(this.sortKey){
					case "sales":
						return this.$store.state.searchModule.searchLists.sort((a,b)=>{
							return parseInt(a.sales) - parseInt(b.sales);
						});
					case "price":
						return this.$store.state.searchModule.searchLists.sort((a,b)=>{
							return parseInt(a.price) - parseInt(b.price);
						});
					case "default":
						return this.$store.state.searchModule.searchLists;
				}
			},
		},
		watch:{
			searchText(newVal,oldVal){
				if(newVal.length == 0){
					this.listShow = false;
				}
			}
		},
		methods:{
			beginSearch(){
				this.listShow = true;
				this.$store.dispatch(GET_SEARCH_LIST,this.searchText);
			},
			changeOrder(val){
				this.sortKey=val;
			},
			goback(){
				try{
					this.$router.currentRoute.params.parentPath;
					this.$router.push(this.$router.currentRoute.params.parentPath);
				}catch(e){
					this.$router.push("/");
				}
			}
		}
	}
</script>
<style module lang="scss" >
	.filter-bar{
		@include addprefixval(display,flex);
		li{
			width:20%;
			@include point(height,80);
			@include point(line-height,80);
			text-align:center;
			@include point(font-size,30);
		}
	}
</style>