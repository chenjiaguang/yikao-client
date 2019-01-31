<template>
  <div class="c-top-info clearfix" :style="{height: height + 'px'}">
    <img class="logo fl" alt="中国音乐学院考级委员会-海南考区" title="中国音乐学院考级委员会-海南考区" :style="{marginTop: ((height - 55) / 2) + 'px'}" src="../assets/image/name_logo.png" />
    <div class="login fr clearfix" :style="{marginTop: ((height - 40) / 2) + 'px'}">
      <i class="ykfont yk-login fl"></i>
      <div class="center-text fl">
        <p><span class="login-btn" :class="{'cursor-pointer': !username}" @click.stop="loginClick">{{username || '登录'}}</span><span v-if="username" class="logout-btn cursor-pointer" @click.stop="logoutClick">退出</span></p>
        <p v-if="!username" style="color:#666">login</p>
      </div>
    </div>
    <div class="about-us fr clearfix" :style="{marginTop: ((height - 40) / 2) + 'px'}">
      <i class="ykfont yk-wechat fl"></i>
      <div class="center-text fl">
        <p class="cursor-pointer" @click.stop="attendClick">关注我们</p>
        <p style="color:#666">attention</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 80
    }
  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    loginClick: function () {
      console.log('loginClick')
      this.username = '陈加尧'
    },
    logoutClick: function () {
      console.log('logoutClick')
      this.username = ''
    },
    attendClick: function () {
      console.log('attendClick')
    }
  }
}
</script>

<style scoped>
.c-top-info{
  overflow: hidden;
}
.logo{
  display: block;
  width: 514px;
  height: 55px;
  margin-top: 12px;
}
.login,.about-us{
  margin-top: 20px;
  margin-left: 26px;
}
.logout-btn{
  margin-left: 20px;
}
.yk-login,.yk-wechat{
  font-size: 14px;
  line-height: 20px;
  color: #666;
  margin-right: 6px;
}
.center-text{
  text-align: center;
  font-size: 14px;
  line-height: 20px
}
</style>
