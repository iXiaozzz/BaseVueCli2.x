<template>
  <div>
    <p>this is home page.</p>
    <p>{{12324234234 | money}}</p>
    <p>{{'2018-03-23 00:00:00' | dateFomat(false)}}</p>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
</style>
