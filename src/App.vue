<template>
  <div id="app">
    <Headers></Headers>
    <Contents></Contents>
    <Footers></Footers>
  </div>
</template>

<script>
import Headers from './components/layout/headers.vue'
import Contents from './components/layout/contents.vue'
import Footers from './components/layout/footers.vue'
export default {
  name: 'app',
  components: {
    Headers,
    Contents,
    Footers
  }
}
</script>

<style lang="scss">
  @import "./sass/index.scss";
  *{
    margin: 0;
    padding: 0;
    border: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    width: 1005px;
  }
</style>
