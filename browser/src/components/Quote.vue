<template>
  <div class="quote" v-if="quoteObj">
    <p class="quote-text">"{{ quoteObj.quote }}" - {{ quoteObj.author }}</p>
  </div>
</template>
<script>
export default {
  name: 'Quote',
  data() {
    return {
      quoteObj:  null
    }
  },
  mounted() {
    fetch('http://localhost:3000/quote', {
      method: 'GET'
    }).then(resp => {
      return resp.json()
    }).then(resp => {
      this.quoteObj = resp
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style scoped>
.quote {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
}

.quote-text {
  font-size: 1.3em;
  font-weight: 300;
  text-align: center;
  color: #fff;
}
</style>
