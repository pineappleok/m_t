<template>
    <div class="">
        <van-cell-group>
            <van-field
                v-model="registerInfo.username"
                required
                clearable
                label="用户名"
                placeholder="请输入用户名"
                @blur="blurUsername"
            />
            <div class="password">
                <van-field
                    v-model="registerInfo.password"
                    :type="showStatus ? 'password' : 'text'"
                    label="密码"
                    placeholder="英文字母加数字8~16位"
                    required
                    @blur="blurPassword(registerInfo.password)"
                />
                <van-icon @click="toggleShow" :name="showStatus ? 'closed-eye' : 'eye-o' " size="0.5rem"/>
            </div>
        </van-cell-group>
        <van-button size="small" @click="confirmRegister">确认注册</van-button>
    </div>
</template>
<script>
import { showToast } from "utils/toast";
export default {
    data () {
        return {
            registerInfo:{
                username:'',
                password:''
            },
            showStatus:true
        };
    },
    methods:{
        confirmRegister(){
            this.$router.push('login')
        },
        blurUsername(){

        },
        blurPassword(password){
            let reg = /[A-Za-z0-9]{8,16}/i
            if(!reg.test(password)){
                showToast('密码的格式有误')
            }
        },
        toggleShow(){
            this.showStatus = !this.showStatus
        }
    },
}
</script>
<style lang="stylus" scoped>
.password 
    padding-right 10px
    display flex
    align-items center
</style>