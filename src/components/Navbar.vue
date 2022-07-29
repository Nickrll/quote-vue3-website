<template>
  <div class="nav">
    <routerLink to="/quotes">Quotes</routerLink>
    <routerLink class="active" to="/">Home</routerLink>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.nav {
  overflow: hidden;
  padding-top: 10px;
  padding-right: 10px;
  a {
    float: right;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  a:hover {
    background-color: #fff;
    border-radius: 10px;
    color: black;
  }

  .topnav a.active {
    background-color: #04aa6d;
    color: white;
  }
}
</style>
