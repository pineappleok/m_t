<template>
  <div ref="container">
    <van-sticky :container="container">
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
                @click="goDetail"
              />
            </van-pull-refresh>
          </van-list>
        </van-tab>
      </van-tabs>
    </van-sticky>
  </div>
</template>
<script>
export default {
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
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
    /* const block = document.querySelector(".van-tabs__wrap");
    this.pageTop = this.getOffsetTop(block); */
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
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index';
</style>