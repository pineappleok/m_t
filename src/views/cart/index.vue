<template>
    <section>
        <div v-for="i in 5" :key="i">
            <cart-item :order="i" :allChecked="allChecked"></cart-item>
        </div>
        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
        >  
            <van-checkbox v-model="allChecked" @change="checkAllProd">全选</van-checkbox>
            <span slot="tip">
                你的收货地址不支持同城送, <span>修改地址</span>
            </span>
        </van-submit-bar>
    </section>
</template>
<script>
import CartItem from "components/cartItem";
import { showLoading } from "utils/toast";
export default {
  name: "home",
  components:{CartItem},
  data () {
    return {
        allChecked:false
    };
  },
  mounted(){
  },
  methods:{
      onSubmit(){

      },
      checkAllProd(){

      }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
    .van-submit-bar__bar
        padding-left 10px
</style>