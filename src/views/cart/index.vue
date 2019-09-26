<template>
  <section>
    <div v-for="(item,index) in productor" :key="index">
      <cart-item :order="index" :pord="item"></cart-item>
    </div>
    <van-submit-bar v-if="!manageFlag" :price="ALL_PRICE * 100" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="allChecked" @click="checkAllProd">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
    <van-submit-bar v-else button-text="删除" @submit="deleteProd">
      <van-checkbox v-model="allChecked" @click="checkAllProd">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </section>
</template>
<script>
import CartItem from "components/cartItem";
import { showLoading } from "utils/toast";
import { mapState,mapActions } from "vuex";
import { Dialog } from 'vant';
import { showToast } from 'utils/toast';
export default {
  name: "home",
  components: { CartItem },
  data() {
    return {
      allChecked: false,
      manageFlag:false
    };
  },
  computed: {
    ...mapState({
      productor: state => state.cart.productor,
      ALL_PRICE: state => state.cart.ALL_PRICE,
      ALL_CHECKED: state => state.cart.ALL_CHECKED
    })
  },
  watch: {
    ALL_CHECKED(newVal) {
      this.allChecked = newVal;
    }
  },
  mounted(){
      this.$bus.$on('manageCart',() => {
        this.manageFlag = true
      })
  },
  methods: {
    ...mapActions(['deleteProds']),
    onSubmit() {},
    checkAllProd() {
      this.allChecked = !this.allChecked;
      this.productor.forEach(curr => {
        curr.checked = this.allChecked;
      });
    },
    onClickLeft() {
        this.$router.go(-1)
    },
    onClickRight() {
    },
    deleteProd(){
        if(!this.productor.some(curr => curr.checked)){
            showToast('您还没有选中的宝贝哦~')
            return 
        }
        const select_len = this.productor.filter(curr => curr.checked).length
        Dialog.confirm({
            message: `确定要删除这${select_len}件宝贝吗？`,
            confirmButtonText:'删除'
        }).then(() => {// on confirm
            this.deleteProds()
            /* this.productor = this.productor.filter(curr => !curr.checked) */
            this.manageFlag = false
        }).catch(() => {// on cancel
            this.manageFlag = false
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/index.styl';

.van-submit-bar__bar
    padding-left 10px
    display flex
    justify-content space-between

</style>