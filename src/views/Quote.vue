<template>
  <div class="quote">
    <Subnav></Subnav>
  </div>
</template>
<script>
import Subnav from '../components/Subnav.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Quote",
  components: {
    Subnav
},
};
</script>

<style lang="scss" scoped>
.quote {
box-shadow: 3px 3px 12px rgb(104 104 104 / 0.6);
  position: absolute;
  left: 0;
  right: 0;
  width: calc(88vw - 60px);
  margin: auto;
  margin-top: -30vh;
  height: 100%;
  background-color: #fff;
  border-radius: 23px 23px 0px 0px;
}
</style>
