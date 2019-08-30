<template>
    <div class="app">
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view/>
        </keep-alive>
        <router-view v-else/>
    </div>
</template>
<script>
export default {
    components:{},
    data () {
        return {
        };
    },
    methods:{
    },
}
</script>
<style lang="stylus">
// 引入全局styl
    // @import './assets/css/index.styl'
    // @import './assets/css/mixin.styl'
</style>