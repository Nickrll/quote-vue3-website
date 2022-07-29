<template>
  <div class="header">
    <Navbar></Navbar>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {
    Navbar,
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
  position: -webkit-sticky; /* Safari */
  position: sticky;
  h1,
  h2 {
    color: #fff;
    text-align: left;
  }
  h1 {
    font-family: Zilla Slab;
  }
  h2 {
    font-family: Peddana;
  }
}

@media only screen and (max-width: 600px) {
  .header {
    width: 100vw;
    border-radius: 0px;
  }
}
</style>
