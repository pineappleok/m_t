<template>
  <div>
      <van-tabs>
        <van-tab v-for="index in 8" :title="'商品 ' + index" :key="index">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了:)" @load="onLoad">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
              <van-card
                v-for="(item,index) in list"
                :key="index"
                :num="item.num"
                :price="item.price"
                :desc="item.desc"
                :title="item.title"
                :thumb="item.thumb"
                @click="goDetail">
                <div slot="tags">
                    <van-tag plain type="danger">hot</van-tag>
                </div>
                <div slot="footer">
                    <van-button @click="addCart($event)" size="mini">添加到购物车</van-button>
                </div>
              </van-card>
            </van-pull-refresh>
          </van-list>
        </van-tab>
      </van-tabs>
      <go-top v-scroll-show:200="showObj" v-to-top :isShow="showObj.value"></go-top>
      <Sku ref="skus"></Sku>
  </div>
</template>
<script>
import GoTop from "../../directive/goTop/index.vue";
import Sku from "components/sku";
export default {
    components:{
        GoTop,
        Sku
    },
  data() {
    return {
      list: [
        {
          num: "2",
          price: "2.00",
          desc: "描述信息",
          title: "商品标题",
          thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg"
        }
      ],
      loading: false,
      finished: false,
      isLoading: false,
      pageTop: 46,
      container: null,
      showObj:{value:false}
    };
  },
  methods: {
    getOffsetTop(obj) {
      var tmp = obj.offsetTop;
      var node = obj.offsetParent;
      while (node != null) {
        tmp += node.offsetTop;
        node = node.offsetParent;
      }
      return tmp;
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list[0]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
        setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        // this.list = this.list.slice(0,10)
        }, 500);
    },
    goDetail() {
      this.$router.push("detail");
    },
    addCart(e){
        // 组织事件冒泡，避免跳转到商品详情
        e.cancelBubble = true || e.stopPropagation()
        this.$refs['skus'].showSku()
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index';
</style>