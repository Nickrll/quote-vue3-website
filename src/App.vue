<template>
  <div>
    <Header></Header>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    Header
},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  float: left;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

body {
  margin: 30px;
}

@media only screen and (max-width: 600px) {
    body {
      margin: 0px;
    }
  }

</style>
