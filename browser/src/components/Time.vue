<template>
  <div class="time">
    <h1>{{ time }}</h1>
  </div>
</template>
<script>
export default {
name: 'Time',
props: ['militaryTime'],
  data () {
    return {
      time: "00:00",
    }
  },
  mounted() {
    this.startTime() 
  },
  methods: {
    startTime: function () {
      let today = new Date();
      let h = today.getHours()
      let m = this.formatTime(today.getMinutes())
      
      this.$emit('updatedHour', h)

      if(!this.militaryTime) {
        h = h > 12 ? h - 12 : h
        h = h == 0 ? 12 : h
      }
      this.time = h + ":" + m
      let t = setTimeout(this.startTime, 1000)
    },
    formatTime: function (time) {
      return time < 10 ? "0" + time : time
    }
  }
}
</script>
<style scoped>
.time {
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
}

h1 {
  font-size: 10em;
  font-weight: 500;
  color: white;
  letter-spacing: -3px;
}
</style>
