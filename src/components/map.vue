<template>
	<div class="amap-page-container" style="width:100%;height:100%;">
		<el-amap vid="vuemap" :center="center" :plugin="plugin" :zoom="zoom" :events="events" style="width:100%;height:100%;">
		</el-amap>
	</div>
</template>
<style type="text/css" scoped>
	div.amap-geolocation-con {
		z-index: 100 !important;
	}
	.amap-page-container /deep/ .amap-geolocation-con{
		z-index: 100 !important;
	}
</style>
<script>
	export default {
		props:{
			address:{
				type:String,
				default:''
			}
		},
		data() {
			let self = this;
			return {
				zoom: 14,
				center: [121.59996, 31.197646],
				vueMap: null,
				events: {
					init(map) {
						self.vueMap = map;
					}
				},
				plugin: [{
					pName: 'Geolocation',
					enableHighAccuracy: true,
					showButton: true, //显示定位按钮，默认：true
					showMarker: false, //定位成功后在定位到的位置显示点标记，默认：true
					zoomToAccuracy: false, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
					events: {
						init(o) {
							if(self.address) return;
							// o 是高德地图定位插件实例
							o.getCurrentPosition((status, result) => {
								if(result && result.position) {
									self.center = [result.position.lng, result.position.lat];
									self.loaded = true;
									self.$nextTick();
									self.$emit("draggerMapMarker", result.formattedAddress, self.center, 1);
									let marker = new AMap.Marker({
										map: self.vueMap,
										draggable: true,
										position: self.center
									});
									self.markerDragend(marker);
									self.infoWindow(marker, result.formattedAddress);
								} else {
									let defaddr = '四川省成都市高新区天府四街66号航兴国际广场2号楼18F';
									self.center = [104.0668129921, 30.5427337221];
									self.loaded = true;
									self.$nextTick();
									self.$emit("draggerMapMarker", defaddr, self.center, 1);
									let marker = new AMap.Marker({
										map: self.vueMap,
										draggable: true,
										position: self.center
									});
									self.markerDragend(marker);
									self.infoWindow(marker, defaddr);
								}
							});
						}
					}
				}]
			};
		},
		methods: {
			//地址逆向解析坐标，address地址，callback回调函数返回地址编码
			geocoder(address, callback) {
				var geocoder = new AMap.Geocoder({
					radius: 1000 //范围，默认：500
				});
				//地理编码,返回地理编码结果
				geocoder.getLocation(address, (status, result) => {
					if(status === 'complete' && result.info === 'OK') {
						this.geocoder_CallBack(result, callback);
					}
				});
			},
			//逆地理编码
			getAddress(lnglatXY, callback) {
				var geocoder = new AMap.Geocoder({
					radius: 1000 //范围，默认：500
				});
				geocoder.getAddress(lnglatXY, function(status, result) {
					if(status === 'complete' && result.info === 'OK') {
						//获得了有效的地址信息:
						callback(result.regeocode.formattedAddress, 2);
					} else {
						//获取地址失败
					}
				});
			},
			//根据用户选取地址 标注点
			addMarkerAddress(d) {
				let marker = new AMap.Marker({
					map: this.vueMap,
					draggable: true,
					animation: "AMAP_ANIMATION_DROP",
					position: [d.location.lng, d.location.lat]
				});
				this.lng = d.location.lng;
				this.lat = d.location.lat;
				this.markerDragend(marker);
				this.infoWindow(marker, d.formattedAddress)
			},
			//点拖拽后生成地址
			markerDragend(marker) {
				marker.on("dragend", (e, handler, context) => {
					let lnglatXY = [e.lnglat.lng, e.lnglat.lat];
					this.getAddress(lnglatXY, (address) => {
						this.infoWindow(marker, address)
						this.vueMap.setFitView();
						this.$emit("draggerMapMarker", address, lnglatXY, 2);
					});
				});
			},
			// 信息提示窗体
			infoWindow(marker, content) {
				var infoWindow = new AMap.InfoWindow({
					content: content,
					offset: {
						x: 0,
						y: -30
					}
				});
				marker.on("click", (e) => {
					infoWindow.open(this.vueMap, marker.getPosition());
				});
			},
			geocoder_CallBack(data, callback) {
				//地理编码结果数组
				var geocode = data.geocodes;
				this.vueMap.clearMap();
				this.addMarkerAddress(geocode[0]);
				this.vueMap.setFitView();
				callback(geocode[0]);
			}
		}
	};
</script>