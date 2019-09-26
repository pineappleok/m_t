<template>
  <div class="wrapper">
    <nav-bar />
    <div v-if="$route.name === 'home'">
      <Lang></Lang>

      <van-button size="mini" @click="showLoading">加载</van-button>
      <van-button type="primary" size="mini" @click="showPopup">{{$t('m.download')}}</van-button>
      <van-popup v-model="show" position="left" :style="{ width: '70%',height: '100%'}" />
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
      />
      <div style="height: 200px;">
        <gd-map></gd-map>
      </div>
      <van-uploader v-model="fileList" multiple />
      <div class="parent">
        爸爸
        <div class="child">儿子</div>
      </div>
      <router-link :to="{name:'cart'}">去购物车</router-link>
    </div>
    <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="child-view" />
      </keep-alive>
    </transition>
    <transition
      :name="transitionName"
    ><router-view class="child-view" v-if="!$route.meta.keepAlive"/></transition>
  </div>
</template>
<script>
import NavBar from "components/navBar";
import Lang from "components/lang";
import GdMap from "components/map";
import { showLoading } from "utils/toast";
import { publish } from "api/";
import { prod } from "assets/js/prod";
import localStorage from "utils/storage";

export default {
  name: "home",
  components: { Lang, GdMap, NavBar },
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(2017, 12, 1),
      maxDate: new Date(2050, 11, 31),
      currentDate: new Date(),
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
    showLoading() {
      showLoading("正在加载...");
      // this.$toast.loading('正在加载...');
    },
    showPopup() {
      this.show = true;
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
<style>
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
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