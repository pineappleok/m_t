<template>
    <div>
        <Lang></Lang>
        
        <van-button size="mini" @click="showLoading">
            加载
        </van-button>
        <van-button type="primary" size="mini" @click="showPopup">
            {{$t('m.download')}}
        </van-button>
        <van-popup
            v-model="show"
            position="left"
            :style="{ width: '70%',height: '100%'}"
        />
        <van-datetime-picker
            v-model="currentDate"
            type="datetime"
            :min-date="minDate"
            :max-date="maxDate"
        />
    </div>
</template>
<script>
import Lang from "components/lang";
import { showLoading,showToast } from "utils/toast";
// import { Toast } from "vant";
export default {
  name: "home",
  components:{Lang},
  data () {
    return {
        minHour: 10,
        maxHour: 20,
        minDate: new Date(2017,12,1),
        maxDate: new Date(2050, 11, 31),
        currentDate: new Date(),
        show:false
    };
  },
  methods:{
      showLoading(){
          showLoading('正在加载...')
        // this.$toast.loading('正在加载...');
      },
      showPopup() {
        this.show = true;
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>