<template>
  <div class="wrapper">
    <nav-bar v-if="$route.name !== 'home'" />
    <div v-if="$route.name === 'home'">
      <van-button type="primary" size="mini" @click="showPopup">{{$t('m.set')}}</van-button>
      <van-popup v-model="show" position="left" :style="{ width: '70%',height: '100%'}">
        <Lang></Lang>
        <van-button size="mini" @click="logout">注销</van-button>
        <van-button size="mini" @click="editorAddress">编辑地址</van-button>
      </van-popup>
      <!-- <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
      />-->
      <!-- <div style="height: 200px;">
        <gd-map></gd-map>
      </div>-->
      <!-- <van-uploader v-model="fileList" multiple /> -->
      <van-cell-group>
        <van-cell title="商品列表" is-link :to="{name:'prod'}" />
        <van-cell title="购物车" is-link :to="{name:'cart'}" />
        <van-cell title="用户中心" is-link :to="{name:'user'}" />
      </van-cell-group>
    </div>
    <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="home-view" />
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view class="home-view" v-if="!$route.meta.keepAlive" />
    </transition>
  </div>
</template>
<script>
import NavBar from "components/navBar";
import Lang from "components/lang";
import GdMap from "components/map";
import { publish } from "api/";
import { prod } from "assets/js/prod";
import localStorage from "utils/storage";

export default {
  name: "home",
  components: { Lang, GdMap, NavBar },
  data() {
    return {
      /* minHour: 10,
      maxHour: 20,
      minDate: new Date(2017, 12, 1),
      maxDate: new Date(2050, 11, 31),
      currentDate: new Date(), */
      show: false,
      fileList: [],
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      if (to.path === "/") {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  },
  mounted() {
    localStorage.set("productor", prod());
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    logout() {
      localStorage.remove("user");
      this.$router.push("/");
    },
    editorAddress() {
      this.$router.push({ name: "addressEditor" });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/index.styl';

.parent {
  h(200);
  position: relative;

  .child {
    h(50);
    p-c();
  }
}
</style>
<style lang="css" scoped>
.home-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  margin-top: 46px;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate3d(30px, 0, 0);
  transform: translate3d(30px, 0, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate3d(-30px, 0, 0);
  transform: translate3d(-30px, 0, 0);
}
</style>