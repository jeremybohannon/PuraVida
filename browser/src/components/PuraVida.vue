<template>
  <div class="wrapper" v-bind:style="{ backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(' + imageUrl + ')' }">
    <div class="top">
      <span class="setting" v-on:click="openSetting"></span>
    </div>
    <div class="center">
      <div class="center-center">
        <Time :militaryTime="militaryTime" @updatedHour="updateHour"/>
        <Greeting :hour="hour" :name="name" @updateName="updateName"/>
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
      militaryTime: false,
      hour: null,
      name: null
    }
  },
  methods: {
    updateHour(hour) {
      this.hour = hour
    },
    updateName(newName) {
      this.name = newName
      localStorage.setItem("name", this.name)
    },
    openSetting(){
      localStorage.clear()
    }
  },
  mounted() {
    let name = localStorage.getItem("name")
    if(name != null) this.name = name
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
  width: fit-content;
  max-width: 60%;
  height: 100%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
}

.setting {
  display: block;
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  top: 10%;
  left: 1%;
  background-color: #0000003b;
}

.setting:hover {
  background-color: #0000008f;
}

.setting:active {
  background-color: #000000c7;
}
</style>
