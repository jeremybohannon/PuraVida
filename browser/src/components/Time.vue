<template>
  <div class="time">{{ time }}</div>
</template>
<script>
export default {
name: 'Time',
  data () {
    return {
      time: "00:00"
    }
  },
  mounted() {
    this.startTime() 
  },
  methods: {
    startTime: function () {
      let today = new Date();
      let h = this.checkTime(today.getHours())
      let m = this.checkTime(today.getMinutes())
      this.time = h + ":" + m
      let t = setTimeout(this.startTime, 1000)
    },
    checkTime: function (time) {
      return time < 10 ? "0" + time : time
    }
  }
}
</script>
<style scoped>
.time {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1000%;
  font-weight: 500;
  color: white;
  letter-spacing: -3px;
}
</style>
