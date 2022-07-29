<template>
  <div class="subnav">
    <ul>
      <li
        @click="setActive(1)"
        v-bind:class="activeId == 1 ? 'active' : 'inactive'"
        class="subnav-find"
      >
        Find quotes
      </li>
      <li
        @click="setActive(2)"
        v-bind:class="activeId == 2 ? 'active' : 'inactive'"
        class="subnav-random"
      >
        Random quote
      </li>
      <li
        @click="setActive(3)"
        v-bind:class="activeId == 3 ? 'active' : 'inactive'"
        class="subnav-popular"
      >
        Popular quotes
      </li>
      <li
        @click="setActive(4)"
        v-bind:class="activeId == 4 ? 'active' : 'inactive'"
        class="subnav-words"
      >
        Quotes by words
      </li>
    </ul>
    <div>
        <div>Not implemented yet</div>
        <div>Not implemented yet</div>
        <div>Not implemented yet</div>
        <div>Not implemented yet</div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Subnav",
  data: function () {
    return {
      activeId: 1,
      members: [
        { id: 1, status: "find" },
        { id: 2, status: "random" },
        { id: 3, status: "popular" },
        { id: 4, status: "words" },
      ],
    };
  },
  methods: {
    setActive(id) {
      this.activeId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.subnav {
  text-align: center;
  padding: 30px 60px 60px 60px;
  ul {
    text-align: center;
    list-style-type: none;
    width: auto;
    margin: 0;
    padding: 15px;
    overflow: hidden;
    background-color: #fff;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
  }
  li {
    display: inline-block;
    width: 150px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 15px;
    border-radius: 6px;
    border: 5px;
    color: #000;
  }

  .active {
    padding: 15px;
    color: #333;
    background-color: #fff;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
  }
  li:hover {
    padding: 15px;
    color: #333;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
  }
}
</style>
