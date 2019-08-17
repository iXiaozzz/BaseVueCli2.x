<template>
  <div class="app-main">
    <app-side-bar></app-side-bar>
    <div class="main-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  import AppSideBar from './AppSideBar'

  export default {
    name: 'AppMain',
    components: {AppSideBar}
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/mixin";

  .app-main {
    @include flex(flex-start, flex-start);
    height: 100%;

    .sider-bar {
      width: 150px;
    }

    .main-content {
      @include flex-num(1);
    }
  }
</style>
