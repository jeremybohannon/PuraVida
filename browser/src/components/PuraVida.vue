<template>
  <div class="wrapper" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }">
  </div>
</template>
<script>
export default {
  name: 'PuraVida',
  data () {
    return {
      imageUrl: null
    }
  },
  components: {
    
  },
  mounted() {
    fetch('http://localhost:3000/image', {
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
  width: 100%;
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center; 
}
</style>
