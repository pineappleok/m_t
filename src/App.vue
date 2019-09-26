<template>
    <div id="app">
        <transition :name="transitionName">
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view class="child-view"/>
            </keep-alive>
        </transition>
        <transition :name="transitionName">
            <router-view class="child-view" v-if="!$route.meta.keepAlive"/>
        </transition>
    </div>
</template>
<script>
// import BScroll from 'better-scroll'
export default {
    data () {
        return {
            transitionName:'slide-left'
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