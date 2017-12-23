<template>
  <div class="greeting">
    <h2 v-if="greeting">{{ greeting }}, {{ name }}.</h2>
  </div>
  
</template>
<script>
export default {
  name: 'Greeting',
  props: ['hour', 'name'],
  watch: { 
      	hour: function() {
          this.updateGreeting()
        }
  },
  data() {
    return {
      greeting: null
    }
  },
  mounted() {
    this.updateGreeting()
  },
  methods: {
    updateGreeting() {
      if (this.hour < 12) {
        this.greeting = "Good morning"
      } else if (this.hour < 16) {
        this.greeting = "Hello"
      } else if (this.hour <= 24) {
        this.greeting = "Good evening"
      }
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
