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
        <div style="height: 200px;">
            <gd-map></gd-map>
        </div>
        <div class="parent">爸爸
            <div class="child">儿子</div>
        </div>
        <router-link to="cart">去购物车</router-link>
    </div>
</template>
<script>
import Lang from "components/lang";
import GdMap from "components/map";
import { showLoading } from "utils/toast";
import { publish } from "api/";
import { prod } from "assets/js/prod";
import localStorage from "utils/storage";
export default {
  name: "home",
  components:{Lang,GdMap},
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
  mounted(){
    //   publish()
    localStorage.set('productor',prod())
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
@import '../../assets/css/index.styl'
.parent
    h(200)
    position relative
    .child
        h(50)
        p-c()
        

</style>