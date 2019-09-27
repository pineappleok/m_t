<template>
  <div class>
      <!-- 
          :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
       -->
    <van-sku
      v-model="show"
      :sku="sku"
      
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      }
    }
  },
  methods:{
      showSku(){
          this.show = true
      },
      hideSku(){
          this.show = true
      },
      onBuyClicked(){
          
      },
      onAddCartClicked(){
          
      }
  }
}
</script>
<style lang="stylus" scoped></style>