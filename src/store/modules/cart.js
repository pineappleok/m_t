import * as types from "../mutation_types";
import localStorage from "utils/storage";
const cart = {
    state: {
        productor:localStorage.get('productor'),
        ALL_PRICE:0,
        ALL_CHECKED:false
    },
    mutations: {
        [types.ADD_AMOUNT](state,n){
            state.productor[n].amount++
        },
        [types.REDUCE_AMOUNT](state,m){
            state.productor[m].amount--
        },
        [types.CALC_PRICE](state,p){
            let curr = state.productor[p]
            curr.total = curr.amount * curr.price
        },
        [types.TOTAL_PRICE](state){
            let total = 0
            state.productor.forEach((curr) => {
                if(curr.checked){
                    total += curr.total
                }
            })
            state.ALL_PRICE = total
        },
        [types.CHECKED](state){
            let checked = false
            checked = state.productor.every(curr => curr.checked)
            state.ALL_CHECKED = checked
        },
        [types.DELETE_PROD](state){
            state.productor = state.productor.filter(curr => !curr.checked)
        }
    },
    actions: {
        increment({ commit }, n) {
            commit('ADD_AMOUNT', n)
        },
        reduce({ commit }, m) {
            commit('REDUCE_AMOUNT', m)
        },
        caluPrice({ commit }, p){
            commit('CALC_PRICE',p)
        },
        calcTotalPrice({commit}){
            commit('TOTAL_PRICE')
        },
        checkAll({commit}){
            commit('CHECKED')
        },
        deleteProds({ commit }){
            commit('DELETE_PROD')
        }
    }
}
export default cart