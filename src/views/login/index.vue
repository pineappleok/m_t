<template>
    <div>
        <van-cell-group>
            <van-field
                v-model="user.username"
                required
                clearable
                label="用户名"
                placeholder="请输入用户名"
                :error-message="errorUsername"
                @blur="blurUsername"
            />
            <van-field
                v-model="user.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
                :error-message="errorPassword"
                @blur="blurPassword"
            />
        </van-cell-group>
        <div class="b-block">
            <van-button type="info" size="small" @click="login">登陆</van-button>
            <van-button type="default" size="small" @click="forgetPassword">忘记密码</van-button>
        </div>
    </div>
</template>
<script>
import { showLoading,showToast } from "utils/toast";
import localStorage from "utils/storage";
export default {
  name: "home",
  data () {
    return {
        user:{
            username:'',
            password:''
        },
        errorUsername:'',
        errorPassword:'',
    };
  },
  mounted(){
    const user = localStorage.get('user')
    if(user){
        this.user = user
    }
  },
  methods:{
      blurUsername(){
          if(!this.user.username){
              this.errorUsername = '请输入用户名'
          }else{
              this.errorUsername = ''
          }
      },
      blurPassword(){
          if(!this.user.password){
              this.errorPassword = '请输入密码'
          }else{
              this.errorPassword = ''
          }
      },
      forgetPassword(){},
      login(){
          if(!this.user.username){
              showToast('请输入用户名')
              return
          }
          if(!this.user.password){
              showToast('请输入密码')
              return
          }
          if(this.user.username !=='xm' || this.user.password !== '123'){
              showToast('用户名或密码不正确')
              return
          }else{
              localStorage.set('user',this.user)
              this.$notify('登陆成功');
              this.$router.push('home')
          }
      }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
    .b-block
        flex(row,space-around,center)

</style>