<template>
  <div class="headers" name="header">
    <dl>
      <dd class="avatar">
        <router-link to="/find/">
          <img src="../../assets/avatar.jpg" alt="" width="40" height="40" >
        </router-link>
      </dd>
      <dd class="msg">
        <span>小小浪子...</span>
      </dd>
      <dd class="search">
        <Search></Search>
      </dd>
      <dd class="control">
        control


      </dd>
      <dd></dd>
      <dd></dd>
    </dl>

  </div>
</template>

<script>
  import Search from '../search.vue'
  export default {
    name: 'headers',
    components: {
      Search
    },
    data () {
      return {
        app: 'QQ音乐'
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  .headers{
    background: rgb(49,195,124);
    height: 58px;
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction:column;
    align-items: center;
    justify-conten:flex-start;

    dl{
      height: 58px;
      width: 100%;
      display: flex;
      flex: 1;
      justify-conten:flex-start;
      dd{
        display: flex;
        align-items:center;
      }

    }


    .avatar{
      width: 40px;
      padding:0 0 0 20px;
      img{
        border-radius: 20px;
      }
    }

    .msg{
      width: 100px;
      padding: 0 0 0 15px;
      font-size: 12px;
      margin-top: -25px;
      color:#fff;
    }

  }

</style>
