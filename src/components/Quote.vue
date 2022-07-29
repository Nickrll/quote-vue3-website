<template>
  <div v-if="elements" class="quote">
    <div class="quote-text">"{{ elements.quote }}"</div>
    <div class="quote-author">~ {{ elements.author }}</div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Quote",
  props: {
    elements: {
      id: String,
      author: String,
      quote: String,
      permalink: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.quote {
  margin: 10px;
  padding: 30px;
  height: auto;
  color: #000;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.3);
  .quote-author {
    font-size: 15px;
    color: #7c7c7c;
    margin-top: 5px;
  }
  .quote-text {
    font-size: 20px;
    color: #000;
  }
}
</style>
