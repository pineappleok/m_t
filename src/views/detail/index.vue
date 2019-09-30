<template>
  <div style="background: #f5f5f5;">
    <van-swipe @change="onChange" :autoplay="3000">
      <van-swipe-item v-for="(item,index) in imgList" :key="index">
        <img class="detailImg" :src="item.src" alt />
        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{imgList.length}}</div>
      </van-swipe-item>
      <!-- <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{imgList.length}}</div> -->
    </van-swipe>
    <van-cell-group>
      <van-cell>
        <template slot="title">
            <span class="custom-title">美国伽力果（约680g/3个）</span>
            <p style="color:red;">¥26.80</p>
        </template>
      </van-cell>
      <van-cell>
          <template slot="title">
              <span>运费：免运费</span>
              <span style="margin-left: 20px;">剩余：19</span>
          </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="shop-o" value="进入店铺" is-link>
        <template slot="title">
          <span class="custom-title">我的小店</span>
          <van-tag type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link />
    </van-cell-group>

    <van-collapse v-model="activeNames">
        <van-collapse-item title="查看商品详情" name="1">内容</van-collapse-item>
    </van-collapse>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
      <van-goods-action-button type="danger" text="立即购买" @click="buyGoods"/>
    </van-goods-action>
    <Sku ref="skus"></Sku>
  </div>
</template>
<script>
import Sku from "components/sku"
export default {
  components: { Sku },
  data() {
    return {
      activeNames: ['1'],
      imgList: [
        {
          src:
            "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg"
        },
        {
          src:
            "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        }
      ],
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    addCart(){
        this.$refs['skus'].showSku()
    },
    buyGoods(){
        this.$router.push('cart')
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/index';

.van-swipe {
  width: 100%;
  h(300);
}

.detailImg {
  width: 100%;
  height: 100%;
}

.van-cell-group {
  margin-bottom: 16px;
}
</style>
