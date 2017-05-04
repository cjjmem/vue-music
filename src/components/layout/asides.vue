<template>
  <div name="asides" id="asides">
    <dl>
      <dt><span class="flex flex-1 title">在线音乐</span></dt>

      <router-link to="/mylove"><dd :class="{choosed: choosed == 'mylove'}"><span class="flex"><img class="icon" src="../../assets/next.png" > 音乐馆</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="flex"><img class="icon" src="../../assets/next.png" > 电台</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="flex"><img class="icon" src="../../assets/next.png" > MV</span></dd></router-link>
      <dt><span class="flex flex-1 title">我的音乐</span></dt>

      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="flex"><img class="icon" src="../../assets/next.png" > 我喜欢</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="flex"><img class="icon" src="../../assets/next.png" > 试听列表</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="flex"><img class="icon" src="../../assets/next.png" > 播放历史</span></dd></router-link>

      <dt><span class="flex flex-1 title">我创建的歌单</span></dt>

      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="flex"><img class="icon" src="../../assets/next.png" > 本地歌曲</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="flex"><img class="icon" src="../../assets/next.png" > 下载歌曲</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="flex"><img class="icon" src="../../assets/next.png" > 传歌到设备</span></dd></router-link>



      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="love-music"><img class="icon" src="../../assets/next.png" >张国荣</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="love-music"><img class="icon" src="../../assets/next.png" >陈奕迅2013年演唱会</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="love-music"><img class="icon" src="../../assets/next.png" >准备中</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="love-music"><img class="icon" src="../../assets/next.png" >QQ音乐顶峰尊享</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="love-music"><img class="icon" src="../../assets/next.png" >【酷到没朋友】BGM燃点爆炸（持更）</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="love-music"><img class="icon" src="../../assets/next.png" >ACG中的震撼，源于对心灵最纯粹的触动！</span></dd></router-link>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span class="love-music"><img class="icon" src="../../assets/next.png" >喜欢纯音乐?一单就够了!</span></dd></router-link>

    </dl>

  </div>
</template>

<script>
  export default {
    name: 'asides',
    props: ['choosed']
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  #asides {
    display: flex;
    width: 200px;
    border-right: 1px solid #ddd;
    overflow-y: scroll;

    dt,dd{
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      display: flex;
      flex: 1;
    }

    .title{
      padding: 0 0 0 20px;
      color: #999;
    }


    .icon{
      width: 20px;
      height: 20px;
      vertical-align: top;
      margin-right: 10px;
      margin-top: 5px;
    }

    .choosed{
      background-color: rgb(230,231,234);
      opacity: 1.0;
      color: black;
    }

    .choosed:before{
      position: absolute;
      left: 0px;
      top: 0px;
      display: inline-block;
      content: ' ';
      width:5px;
      height: 30px;
      background-color: rgb(198,47,47);
    }

    .love-music{
      text-align: left;
      width: 180px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 7px;
    background-color: #F5F5F5;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border-radius: 10px;
    background-color: rgb(245,245,247);
  }
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgb(225,225,226);
    background-color: rgb(225,225,226);
  }

</style>
