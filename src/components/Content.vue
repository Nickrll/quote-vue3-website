<template>
  <div class="content">
    <h2>{{ head }}</h2>
    <p>{{ para }}</p>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Content',
  props: {
    head: String,
    para: String
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  color: #333;
  background-color: #fff;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
}
</style>