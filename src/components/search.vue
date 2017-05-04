<template>
  <div id="search" name="search">
    <input type="text" class="search"  v-model="content" />
  </div>
</template>

<script>
  export default{
    name: 'search',
    data () {
      return {
        content: '不期而遇 刘惜君'
      }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.search{
  width: 240px;
  height: 32px;
  border-radius: 32px;
  border: 0;
  padding-left: 20px;
}
</style>
