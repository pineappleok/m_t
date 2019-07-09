import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// 引入移动设备调试工具
/* import vConsole from '@/utils/vconsole'
Vue.use(vConsole) */

// 
var VueEventBus = require('vue-event-bus')
Vue.use(VueEventBus)

import VueAMap from 'vue-amap';
window.VueAMap  = VueAMap 
Vue.use(VueAMap)
// 初始化vue-amap
VueAMap.initAMapApiLoader({
	// 高德的key
	key: '8120b756a0a5a0cc9a543412fc5b2613',
	// 插件集合
	plugin: ['AMap.Geocoder', 'AMap.Geolocation', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
	uiVersion: '1.0' // 版本号
});

/* 按需引入vant */
/* import 'vant/lib/button/style';
import { Button } from 'vant';
Vue.use(Button); */

/* 导入所有组件 */
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 用于设置 rem 基准值
import 'amfe-flexible';

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
