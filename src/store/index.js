import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import user  from "./modules/user";
import cart from "./modules/cart";

export default new Vuex.Store({
    modules:{
        user: user,
        cart: cart
    },
	state: {
	},
	mutations: {

	},
	actions: {

	}
})
