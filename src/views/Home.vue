<template>
  <div class="home">
    <div class="header-content">
      <h1>The <span style="color: #18d62b">Quotes</span> API</h1>
      <h2>By Nick Huegen</h2>
    </div>
    <div class="home-information">
      <h1>The app</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit
        sapien, eleifend vitae felis sed, fringilla bibendum tortor. Nullam a
        cursus nulla. Nam fringilla sem arcu, at euismod lacus placerat quis.
        Curabitur venenatis pharetra leo, sit amet accumsan mauris luctus in.
        Duis molestie sem nec efficitur fermentum. Vestibulum iaculis sem magna,
        sed condimentum enim porta quis. In tempor pharetra blandit. Vivamus
        consequat, arcu eget ultricies finibus, sem metus lobortis nibh, ac
        pellentesque metus turpis in enim.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
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
    float: left;
    h1,
    p {
      text-align: left;
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
    .home-information{
        p{
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
    .home-information{
        p{
            font-size: 13px;
        }
    }
  }
}
</style>
