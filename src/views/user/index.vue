<template>
  <div class="u-block">
      <div class="u-banner">
        <img class="banner" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png" alt="">
      </div>
      <van-grid>
        <van-grid-item icon="pending-payment" text="待付款" />
        <van-grid-item icon="records" text="待接单" />
        <van-grid-item icon="tosend" text="待发货" />
        <van-grid-item icon="logistics" text="已发货" />
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
  methods: {}
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
    .u-block
        background #f5f5f5
    .u-banner
        width 100%
        h(180)
    .banner
        width 100%
        height 100%
    .u-block >>> .van-hairline--top::after
        border-top 0
    .u-block >>> .van-grid-item__content::after
        border 0
    .van-cell-group 
        margin-bottom 16px
</style>