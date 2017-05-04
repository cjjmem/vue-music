<template>
  <div id="contents">
    <Asides></Asides>
    <router-view></router-view>
  </div>
</template>

<script>
  import Asides from './asides.vue'
  export default {
    name: 'contents',
    components: {
      Asides
    }
  }
</script>

<style lang="scss" >
  #contents {
    width: 100%;
    display: flex;
    flex: 1;
    height: 500px;
  }
</style>
