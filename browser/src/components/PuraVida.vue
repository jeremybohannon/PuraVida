<template>
  <div class="wrapper" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    <div class="center">
      <Time/>
    </div>
  </div>
</template>
<script>
import Time from './Time'

export default {
  name: 'PuraVida',
  props: ['imageUrl'],
  components: {
    Time
  }
}

</script>
<style scoped>
.wrapper {
  height: 100%;
  width:  100%;
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center; 
}

* {
  animation: fadein 3s;
}

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.center{
  display: block;
  position: absolute;
  top:   35%;
  width: 100%;
  text-align: center;
}
</style>
