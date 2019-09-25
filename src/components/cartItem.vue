<template>
    <div class="c-wrapper">
        <van-checkbox v-model="productor.checked" @change="selectProd(productor.checked)"></van-checkbox>
        <div>{{productor.name}}</div>
        <div>￥{{productor.price}}</div>
        <div>
            <van-stepper 
                v-model="productor.amount" 
                @change="changeValHandler(productor.amount,myIndex)"
                @plus="plusHandler(myIndex)"
                @minus="minusHandler(myIndex)"/>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import { showToast } from "utils/toast";
export default {
    props:{
        pord:{
            type:Object
        },
        order:{
            type:Number,
        }
    },
    data () {
        return {
            productor:this.pord,
            amount:1,
            myIndex:this.order
        };
    },
    methods:{
        ...mapActions(['increment','reduce','caluPrice','calcTotalPrice','checkAll']),
        changeValHandler(amount,index){
            if(amount<=1){
                showToast('宝贝不能再减少了哦~')
            }
            this.caluPrice(index)
            this.calcTotalPrice()
        },
        plusHandler(n){
            this.increment(n)
        },
        minusHandler(m){
            this.reduce(m)
        },
        selectProd(checked){
            this.calcTotalPrice()
            this.checkAll()
        }   
    },
}
</script>
<style lang="stylus" scoped>
    @import '../assets/css/index.styl'
    .c-wrapper
        flex(row,space-around,center)
        font-size 14px
        margin 10px 0
</style>