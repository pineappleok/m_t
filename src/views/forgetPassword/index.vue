<template>
  <div class>
    <van-cell-group>
      <van-field 
        label="手机号" 
        type="tel" 
        v-model="phone" 
        placeholder="请输入手机号" 
        :error-message="errorPhone" 
        @blur="blurPhone(phone)"/>
      <van-field type="number" v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="btn-wrap">
      <van-button plain hairline type="info" size="small">确认</van-button>
    </div>
    <!-- <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      sms: "",
      value: "",
      errorPhone:'',
      showKeyboard: false
    };
  },

  methods: {
    /* focusPhone() {
      this.showKeyboard = true;
    // 让当前页面获得焦点的元素失去焦点
      document.activeElement.blur();
    }, */
    blurPhone(phone){
        let reg = /^1(3|5|6|7|8|9)\d{9,9}$/g
        this.errorPhone = !reg.test(phone) ? '手机号格式错误' : ''
    },
    /* onInput(key) {
      this.value += key;
      this.phone = this.value;
    },
    onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
        this.phone = this.value
    } */
  }
};
</script>
<style lang="stylus" scoped>
.btn-wrap {
  text-align: center;
  margin-top: 20px;
}
</style>