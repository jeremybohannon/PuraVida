<template>
  <div class="greeting">
    <h2 v-if="greeting && name">{{ greeting }}, {{ name }}.</h2>
    <div v-if="!name" class="greeting-new"> 
      <h2 class="getName"> What's your name? </h2>
      <input v-model="newName" type="text" v-on:keyup.13="saveName" >
    </div>
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
      greeting: "Hello",
      newName: ""
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
        this.greeting = "Afternoon"
      } else if (this.hour <= 24) {
        this.greeting = "Good evening"
      }
    },
    saveName() {
      this.$emit('updateName', this.newName)
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

.greeting-new {
  display: block;
  width: 100%;
}

.getName {
  display: inline-block;
}

input[type=text] {
    width: 25%;
    min-width: 250px;
    background: transparent;
    border: none;
    border-bottom: 3px solid #fffefec7;
    font-size: 2em;
    color: #fff;
    text-align: center;
}
</style>
