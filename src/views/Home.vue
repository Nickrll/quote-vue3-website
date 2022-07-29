<template>
  <div class="home">
    <div class="header-content">
      <h1>The <span style="color: #18d62b">Quotes</span> API</h1>
      <h2>By Nick Huegen</h2>
    </div>
    <div class="home-information">
      <h1>The app</h1>
      <p>
        This app is made with the help of
        http://quotes.stormconsultancy.co.uk/api as a coding challenge. The main
        features are extended from the storm consultency api. Following below
        are examples of what this app can do.
      </p>
      <Content
        class="ref-block"
        :head="this.comp1.head"
        :para="this.comp1.para"
      ></Content>
      <Content
        class="ref-block"
        :head="this.comp2.head"
        :para="this.comp2.para"
      ></Content>
      <Content
        class="ref-block"
        :head="this.comp3.head"
        :para="this.comp3.para"
      ></Content>
      <Content
        class="ref-block"
        :head="this.comp4.head"
        :para="this.comp4.para"
      ></Content>
    </div>
  </div>
</template>
<script>
import Content from "../components/Content.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: { Content },
  data() {
    return {
      comp1: {
        head: "By ID",
        para: "Using this button a quote can be looked up based on an ID",
      },
      comp2: {
        head: "Random",
        para: "A random quote can be looked up. By clicking on the nav button a fresh random quote will be found",
      },
      comp3: {
        head: "Popular",
        para: "All popular quotes will be gotten. They are ordered on ID",
      },
      comp4: {
        head: "Quotes by words",
        para: "By filling in more words seperated by a comma, all quotes that contain the words will be returned",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  .header-content {
    position: absolute;
    top: 140px;
    margin-left: calc(50px + 10vw);
    h1,
    h2 {
      color: #fff;
      text-align: left;
    }
    h1 {
      font-size: 50px;
      font-weight: 400;
      font-family: Zilla Slab;
    }
    h2 {
      font-size: 30px;

      margin-top: -30px;
      font-weight: 300;
      font-family: Peddana;
    }
  }

  .home-information {
    margin-top: 15px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    .ref-block {
      width: 19%;
      margin: 9px;
      border-radius: 5px;
      height: 180px;
      float: left;
    }
    h1,
    p {
      text-align: left;
    }
  }
  @media only screen and (max-width: 1024px) {
    .home {
      .header-content {
        .ref-block {
          width: 24%;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .header-content {
      margin-left: 10%;
    }
  }

  @media only screen and (max-width: 470px) {
    .header-content {
      padding-right: 10%;
      margin-left: 10%;
    }
    .home-information {
      p {
        font-size: 15px;
      }
    }
  }

  @media only screen and (max-width: 300px) {
    .header-content {
      h1 {
        font-size: 40px;
      }
      h2 {
        font-weight: 100;
        font-size: 25px;
      }
    }
    .home-information {
      p {
        font-size: 13px;
      }
    }
  }
}
</style>
