import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		ARRIVETYPE: [
			{
				key: 1,
				value: '车已到'
			},
			{
				key: 0,
				value: '车未到'
			}
		],
		VEHICLEPLATE: [
			{
				key: 2,
				value: "新车"
			},
			{
				key: 1,
				value: "二手车"
			},
			{
				key: 3,
				value: "资管追回"
			},
		]
	},
	mutations: {

	},
	actions: {

	}
})
