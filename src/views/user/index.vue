<template>
  <div class="u-block">
      <div class="u-banner">
        <van-image
            round
            fit="cover"
            width="1rem"
            height="1rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span class="u-nickname">昵称</span>
      </div>
      <van-grid>
        <van-grid-item icon="pending-payment" text="待付款" />
        <van-grid-item icon="records" text="待接单" />
        <van-grid-item icon="tosend" text="待发货" />
        <van-grid-item icon="logistics" text="已发货" @click="goLogistics"/>
    </van-grid>

    <van-cell-group>
        <van-cell icon="records" title="全部订单" is-link=""/>
    </van-cell-group>
    <van-cell-group>
        <van-cell icon="points" title="我的积分" is-link=""/>
        <van-cell icon="gold-coin-o" title="我的优惠券" is-link=""/>
        <van-cell icon="gift-o" title="我收到的礼物" is-link=""/>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
      goLogistics(){
          this.$router.push({name:'logistics'})
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
    .u-block
        background #f5f5f5
    .u-banner
        width 100%
        h(180)
        background linear-gradient(green,black)
    .van-image
        margin-top 10px
        margin-left 10px
    .u-nickname
        font-size 14px
        color white
    .u-block >>> .van-hairline--top::after
        border-top 0
    .u-block >>> .van-grid-item__content::after
        border 0
    .van-cell-group 
        margin-bottom 16px
</style>