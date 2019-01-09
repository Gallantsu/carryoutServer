<template>
	<div>
		<ul >
			<li :class="$style['suggest-item']">
				<input type="text" v-model="userName" placeholder="姓名" >
			</li>
			<li :class="$style['suggest-item']">
				<input type="text" v-model="userPhone" placeholder="电话">
			</li>
			<li :class="$style['suggest-item']">
				<textarea v-model="userSuggest" placeholder="建议" ></textarea>
			</li>
			<li :class="$style['suggest-item']">
				<button class="red-btn">提交</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				userName:'',
				userPhone:'',
				userSuggest:'',
			}
		}
	}
</script>

<style module lang="scss" >
	.suggest-item{
		@include point(padding-top,20);
		@include point(padding-bottom,20);
		input{
			width: 100%;
			@include point(height,70);
			@include point(padding-left,20);
			border: 1px solid #eee;
		}
		textarea{
			width: 100%;
			@include point(height,170);
			@include point(padding-left,20);
			@include point(line-height,70);
			border: 1px solid #eee;
		}
		button{
			width: 100%;
			@include point(height,70);
			text-align: center;
			@include point(border-radius,10)
			&:active{
				background-color: #fd4c4c;
			}
		}
	}
</style>