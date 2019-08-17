<template>
  <div class="sider-bar">
    <div class="side-item" v-for="(item,index) in sideMenus" :key="index">
      <span>{{item.meta.title}}</span>
      <div v-if="item.children && item.children.length" class="sub-side-item">
        <div v-for="(subItem, subIndex) in item.children"
             :key="subIndex"><span>{{subItem.meta.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppSideBar",
    data() {
      return {
        sideMenus: []
      }
    },
    mounted() {
      // this.sideMenus = this.$router.options.routes
      let routes = this.$router.options.routes
      // console.log(routes)
      this.sideMenus = routes.filter(item => {
        return item.path !== '' && item.path !== '*'
      })
      // console.log(this.sideMenus)
    }
  }
</script>

<style lang="scss" scoped>
  .sider-bar {
    .side-item {
      text-align: left;
      cursor: pointer;
      .sub-side-item {
        padding-left: 20px;
        text-align: left;
        height: 20px;
        line-height: 20px;
        cursor: pointer;
      }
    }
  }

</style>
