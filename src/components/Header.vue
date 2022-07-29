<template>
  <div class="header">
    <Navbar></Navbar>
    <h1>Header</h1>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {
    Navbar
},
};
</script>

<style lang="scss" scoped>
.header {
  background-image: url("@/assets/headerimg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 23px;
  width: calc(100vw - 60px);
  height: 450px;
  display: inline-block;
  border-radius: 20px, 0px, 0px, 20px;
}
</style>
