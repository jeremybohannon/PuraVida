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
  data () {
    return {
      imageUrl: null
    }
  },
  components: {
    Time
  },
  mounted() {
    fetch('http://localhost:3000/image?query=mountain', {
      method: 'GET'
    }).then(resp => {
      console.log(resp)
      return resp.blob()
    }).then(resp => {
      this.imageUrl = (window.URL ? URL : webkitURL).createObjectURL(resp);
    }).catch(err => {
      console.log(err)
    })
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

.center{
  display: block;
  position: absolute;
  top:   35%;
  width: 100%;
  text-align: center;
}
</style>
