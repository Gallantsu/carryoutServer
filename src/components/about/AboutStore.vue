<template>
	<div :class="$style.store">
		<p>妈妈厨房是一家24小时经营以港式粤菜为基础的中西融合菜，特聘香港融合菜大师主理，打造新派主题时尚餐厅。它专业的厨师团队，开发和研究新派融合菜，定期推出特色菜品，聘请专业艺术团队研发造型，让茉莉每一款菜品成为一件艺术品，让客人感受别样的饮食文化。</p>
		<div id="map" :class="$style.map">
			
		</div>
	</div>
</template>

<script>
	export default {
		mounted(){
			let mp = new BMap.Map('map');  
			let point = new BMap.Point(104.073583,30.552179);
			mp.centerAndZoom(point, 15);  
			let marker = new BMap.Marker(point);   
			mp.addOverlay(marker); 
			mp.addControl(new BMap.NavigationControl());
			mp.addControl(new BMap.GeolocationControl({
				anchor:BMAP_ANCHOR_TOP_RIGHT
			}));
		}
	}
</script>

<style module lang="scss" >
	.store{
		@include point(margin-top,24);
		p{
			line-height:1.5
		}
	}
	.map{
		width:100%;
		@include point(height,500);
		border:1px solid #999;
	}
</style>
