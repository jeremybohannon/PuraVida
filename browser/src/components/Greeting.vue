<template>
  <div class="greeting">
    <h2>Good evening, {{ name }}.</h2>
  </div>
  
</template>
<script>
export default {
  name: 'Greeting',
  props: ['name'],
  data() {
    return {

    }
  }  
}
</script>
<style scoped>
.greeting {
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  text-align: center;
}

h2 {
  font-size: 3.5em;
  font-weight: 500;
  color: white;
  letter-spacing: -3px;
}
</style>
