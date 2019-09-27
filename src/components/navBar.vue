<template>
    <div class="n-bar">
        <van-nav-bar 
            :title="$route.meta.title" 
            left-text="返回" 
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight">
            <!-- <van-icon name="search" slot="right" /> -->
            <span v-if="$route.name==='cart'" name="search" slot="right" >管理</span>
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    data () {
        return {
        };
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1)
        },
        onClickRight() {
            this.$bus.$emit('manageCart')
        },
    },
}
</script>
<style lang="stylus" scoped>
    .n-bar
        position fixed
        top 0
        left 0
        right 0
        z-index 999
</style>