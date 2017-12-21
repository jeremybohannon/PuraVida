<template>
  <div id="app">
    <div v-if="!imageUrl">Loading...</div>
    <PuraVida v-if="imageUrl" :imageUrl="imageUrl"/>
  </div>
</template>

<script>
import PuraVida from './components/PuraVida'

export default {
  name: 'app',
  data() {
    return {
      imageUrl: false
    }
  },
  components: {
    PuraVida
  },
  mounted() {
    fetch('http://localhost:3000/image?query=dark,mountain', {
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100vw;
}
</style>
