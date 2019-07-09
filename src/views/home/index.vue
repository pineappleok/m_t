<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="cn">切换中文</button>
    <button @click="en">切换英文</button>
    <!-- vant组件 -->
    <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
    />
  </div>
</template>
 
<script>
export default {
  name: 'lang',
  props: {
    msg: String
  },
  data(){
    return{
      minHour: 10,
       maxHour: 20,
       minDate: new Date(),
       maxDate: new Date(2019, 10, 1),
       currentDate: new Date()
    }
  },
  methods:{
    cn(){
      this.$i18n.locale='zhCHS'
      this.$Local('zhCHS')
    },
    en(){
      this.$i18n.locale='en'
      this.$Local('en')
    }
  },
}
</script>
<style>

</style>
