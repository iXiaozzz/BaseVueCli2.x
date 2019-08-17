<template>
  <div class="layout-container">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import AppNavbar from './components/AppNavbar'

export default {
  name: 'layout',
  components: {
    AppHeader
    , AppMain
    , AppFooter
    , AppNavbar
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss">
@import "../../style/main.scss";
</style>
