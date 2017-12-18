<template>
  <div id="app">
    <PuraVida/>
  </div>
</template>

<script>
import PuraVida from './components/PuraVida'

export default {
  name: 'app',
  components: {
    PuraVida
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
