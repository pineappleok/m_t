<template>
    <div>
        <Lang></Lang>
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
export default {
  name: "home",
  components:{Lang},
  data () {
    return {
        minHour: 10,
        maxHour: 20,
        minDate: new Date(),
        maxDate: new Date(2019, 10, 1),
        currentDate: new Date(),
        show:false
    };
  },
  methods:{
      showPopup() {
        this.show = true;
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>