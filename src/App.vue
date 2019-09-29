<template>
    <div id="app">
        <transition :name="transitionName">
            <keep-alive v-if="$route.meta.keepAlive">
                <van-skeleton
                    title
                    :row="20"
                    :loading="loading"
                >
                <div>
                    <router-view class="child-view"/>
                </div>
                </van-skeleton>
            </keep-alive>
        </transition>
        <transition :name="transitionName">
            <van-skeleton
                    v-if="!$route.meta.keepAlive"
                    title
                    :row="20"
                    :loading="loading"
                >
                <div>
                    <router-view class="child-view"/>
                </div>
            </van-skeleton>
        </transition>
    </div>
</template>
<script>
// import BScroll from 'better-scroll'
export default {
    data () {
        return {
            transitionName:'slide-left',
            loading: true
        };
    },
    watch:{
        '$route'(to,from){
            if(to.path === '/'){
                this.transitionName = 'slide-left'
            }else{
                this.transitionName = 'slide-right'
            }
        }
    },
    mounted(){
        this.loading = false
        this.$nextTick(() => {
        //   let scroll = new BScroll('.wrapper')
      //   publish()
      })
    },
}
</script>
<style lang="css">
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
  -webkit-transform: translate3d(30px, 0,0);
  transform: translate3d(30px, 0,0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate3d(-30px, 0,0);
  transform: translate3d(-30px, 0,0);
}
</style>