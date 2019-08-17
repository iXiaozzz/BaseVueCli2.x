<template>
  <div class="app-header">
    <div class="app-header-container">
      <div class="header-title">
        小叶的自白地
      </div>
      <div class="header-navbar">
        <router-link to="/home">Home</router-link>
        <router-link to="/hlist">Hlist</router-link>
        <router-link to="/add">Add</router-link>
      </div>
      <div class="tools-weather">
        <span>&nbsp;</span>
        <span>*</span>
        <span>10</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AppHeader',

  }
</script>
<style lang="scss">
  @import "../../../style/mixin.scss";
  @import "../../../style/variables.scss";

  .app-header {
    .app-header-container {
      @include clearfix;

      .header-title {
        float: left;
      }

      .header-navbar {
        float: left;
      }

      .tools-weather {
        float: right;
      }
    }


  }
</style>
