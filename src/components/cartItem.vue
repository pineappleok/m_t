<template>
    <div class="c-wrapper">
        <van-checkbox v-model="checked" @change="selectProd(checked)"></van-checkbox>
        <div>商品{{myOrder}}</div>
        <div>
            <van-stepper v-model="amount" @change="changeValHandler(amount)"/>
        </div>
    </div>
</template>
<script>
import { showToast } from "utils/toast";
export default {
    props:{
        order:{
            type:Number,
            default:0
        },
        allChecked:{
            type:Boolean,
            default:false
        }
    },
    data () {
        return {
            amount:1,
            checked:false,
            myOrder:this.order
        };
    },
    watch:{
        'allChecked'(newVal){
            if(newVal){
                this.checked = true
            }else{
                this.checked = false
            }
        }
    },
    methods:{
        changeValHandler(amount){
            if(amount<=1){
                showToast('宝贝不能再减少了哦~')
            }
        },
        selectProd(checked){
            if(checked){
                this.$emit('sendProdHandler')
            }
        }   
    },
}
</script>
<style lang="stylus" scoped>
    @import '../assets/css/index.styl'
    .c-wrapper
        flex(row,space-around,center)
        margin 10px 0
</style>