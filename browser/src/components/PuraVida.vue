<template>
  <div class="wrapper" v-bind:style="{ backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(' + imageUrl + ')' }">
    <div class="top">
    </div>
    <div class="center">
      <div class="center-center">
        <Time :militaryTime="militaryTime"/>
        <Greeting name="name"/>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-center">
        <Quote/>
      </div>
    </div>
  </div>
</template>
<script>
import Time from './Time'
import Quote from './Quote'
import Greeting from './Greeting'

export default {
  name: 'PuraVida',
  props: ['imageUrl'],
  components: {
    Time,
    Greeting,
    Quote
  },
  data() {
    return {
      militaryTime: false
    }
  }
}

</script>
<style scoped>
.wrapper {
  position: relative;
  height: 100%;
  width:  100%;
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center; 
}

* {
  animation: fadein 3s ease;
}

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.top {
  display: block;
  height: 20%;
  width: 100%;
}

.center {
  display: block;
  height: 60%;
  width: 100%;
}

.center-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: fit-content;
  width: 100%;
}

.bottom {
  display: block;
  height: 20%;
  width: 100%;
}

.bottom-center {
  width: 40%;
  height: 100%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
}
</style>
