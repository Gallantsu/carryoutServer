<template>
	<BaseList :showloading="showloading" :dataLists="dataLists"></BaseList>
</template>

<script>
	import { GET_HOME_LIST } from '@/components/home/module'
	import BaseList from '@/components/common/BaseList'

	export default {
		computed:{
			showloading(){
				return this.$store.state.homeModule.showHomeLoading;
			},
			dataLists(){
				return this.$store.state.homeModule.lists;
			}
		},
		created(){
			this.$store.dispatch(GET_HOME_LIST);
		},
		components:{
			BaseList
		}
	}
</script>
