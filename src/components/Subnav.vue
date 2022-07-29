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
    <input
      v-if="activeId == 1"
      v-model="amount"
      placeholder="1"
      @change="getOne()"
    />
    <input
      v-if="activeId == 4"
      v-model="message"
      placeholder="Words"
      @change="getWords()"
    />

    <div class="scollable">
      <div v-if="activeId == 1">
        <div :key="quote.id" v-for="quote in quotes">
          <Quote v-if="quote" :elements="quote"></Quote>
        </div>
      </div>
      <div v-if="activeId == 2">
        <div :key="quote.id" v-for="quote in quotes">
          <Quote v-if="quote" :elements="quote"></Quote>
        </div>
      </div>
      <div v-if="activeId == 3">
        <div :key="quote.id" v-for="quote in quotes">
          <Quote v-if="quote" :elements="quote"></Quote>
        </div>
      </div>
      <div v-if="activeId == 4">
        <div :key="quote.id" v-for="quote in quotes">
          <Quote v-if="quote" :elements="quote"></Quote>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as calls from "../helpers/axios-calls";
import Quote from "./Quote.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Subnav",
  data() {
    return {
      activeId: 1,
      members: [
        { id: 1, status: "find" },
        { id: 2, status: "random" },
        { id: 3, status: "popular" },
        { id: 4, status: "words" },
      ],
      quotes: [
        {
          id: "1",
          author: "author",
          quote: "quote",
          permalink: "permastring",
        },
      ],
      message: "",
      amount: "",
    };
  },
  methods: {
    setActive(id) {
      this.activeId = id;
      if (this.activeId == 1) {
        if (this.amount) this.getOne();
      } else if (this.activeId == 2) {
        this.getRandom();
      } else if (this.activeId == 3) {
        this.getFavorite();
      } else if (this.activeId == 4) {
        this.getWords();
      }
    },
    getRandom() {
      calls
        .getQuote()
        .then((res) => {
          return (this.quotes = [res.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getFavorite() {
      calls
        .getPopular()
        .then((res) => {
          return (this.quotes = res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOne() {
      console.log(this.amount);
      calls
        .getById(this.amount)
        .then((res) => {
          return (this.quotes = [res.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getWords() {
      calls
        .getByWords(this.message)
        .then((res) => {
          return (this.quotes = res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: { Quote },
};
</script>

<style lang="scss" scoped>
.subnav {
  text-align: center;
  padding: 30px 60px 60px 60px;
  height: auto;
  .scollable {
    margin-top: 10px;
    overflow-y: scroll;
    height: auto;
  }
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

  @media only screen and (max-width: 1105px) {
    li {
      width: 130px;
    }
  }
  @media only screen and (max-width: 1024px) {
    li {
      width: 200px;
    }
  }
  @media only screen and (max-width: 800px) {
    li {
      width: 130px;
    }
  }
}
@media only screen and (max-width: 624px) {
  .subnav {
    padding: 5px;
    li {
      margin: 0px;
      width: 180px;
    }
  }
}

@media only screen and (max-width: 459px) {
  .subnav {
        padding: 5px;

    li {
      width: 130px;
    }
  }
}
</style>
