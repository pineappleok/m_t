<template>
  <div class="lang">
    <van-button type="default" size="mini" @click="cn">中文</van-button>
    <van-button type="primary" size="mini" @click="en">EN</van-button>
  </div>
</template>
 
<script>
export default {
  name: "lang",
  data() {
    return {
    };
  },
  methods: {
    /**
     * 切换语言
     */
    cn() {
        // 语言包中的语言
      this.$i18n.locale = "zh-CN";
        //   更改组件语言
      this.$Local("zhCHS");
    },
    en() {
      this.$i18n.locale = "en-US";
      this.$Local("en");
    }
  }
};
</script>
<style>
</style>
