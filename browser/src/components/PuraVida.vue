<template>
  <div class="wrapper" v-bind:style="{ backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(' + imageUrl + ')' }">
    <div class="top">
      <span class="setting" v-on:click="openSetting">
        <i class="fa fa-cog" aria-hidden="true"></i>
      </span>
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
      //TODO change to menu
      localStorage.clear()
      location.reload()
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
  display: flex;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
}

.fa {
  font-size: 2em;
  color: #d2d2d270;
}

.fa:hover {
  font-size: 2.5em;
  color: #a7a7a770;
}

.fa:active {
  color: #53535370;
}
</style>
