<template>
  <div class="p-score-result">
    <div class="info-wrapper">
      <div class="head">考生信息</div>
      <div class="info-box">
        <div class="info-item clearfix">
          <div class="fl">姓名：</div>
          <div class="fr cursor-pointer">{{userInfo.name}}</div>
        </div>
        <div class="info-item clearfix">
          <div class="fl">国籍：</div>
          <div class="fr cursor-pointer">{{userInfo.nationality}}</div>
        </div>
        <div class="info-item clearfix">
          <div class="fl">民族：</div>
          <div class="fr cursor-pointer">{{userInfo.volk}}</div>
        </div>
        <div class="info-item clearfix">
          <div class="fl">证件号码：</div>
          <div class="fr cursor-pointer">{{userInfo.cardNumber}}</div>
        </div>
      </div>
    </div>
    <div class="info-wrapper">
      <div class="head">考级信息</div>
      <div class="info-box">
        <div class="info-item clearfix">
          <div class="fl">报考机构：</div>
          <div class="fr cursor-pointer">{{examInfo.institution}}</div>
        </div>
        <div class="info-item clearfix">
          <div class="fl">报考专业：</div>
          <div class="fr cursor-pointer">{{examInfo.major}}</div>
        </div>
        <div class="info-item clearfix">
          <div class="fl">报考等级：</div>
          <div class="fr cursor-pointer">{{examInfo.level}}</div>
        </div>
        <div class="info-item clearfix">
          <div class="fl">发证时间：</div>
          <div class="fr cursor-pointer">{{examInfo.time}}</div>
        </div>
        <div class="info-item clearfix">
          <div class="fl">证书编号：</div>
          <div class="fr cursor-pointer">{{examInfo.certificateNum}}</div>
        </div>
        <div class="seal-box">
          <seal2 :type="pass ? '1' : '2'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Seal2 from '../components/Seal2'

export default {
  data () {
    return {
      pass: true,
      userInfo: {},
      examInfo: {}
    }
  },
  components: { Seal2 },
  mounted () {
    this.requestInfo()
  },
  methods: {
    requestInfo: function () {
      this.userInfo = {
        name: '张三',
        nationality: '中国',
        volk: '汉族',
        cardNumber: '460027199905069889'
      }
      this.examInfo = {
        institution: '中国音乐学院',
        major: '钢琴',
        level: '一级',
        time: '2019年01月23日',
        certificateNum: ''
      }
    }
  }
}
</script>

<style scoped>
.p-score-result{
  background: #fff;
  padding-bottom: 100px;
}
.info-wrapper{
  padding-top: 50px;
}
.head{
  width: 160px;
  height: 50px;
  margin: 15px auto 0;
  background: url('../assets/image/button_actived.png') no-repeat;
  background-size: 100% 100%;
  background-position: center;
  line-height: 50px;
  font-size: 18px;
  color: #76593D;
  text-align: center;
}
.info-box{
  width: 400px;
  padding: 10px 0;
  margin: 0 auto;
  position: relative;
  overflow: visible;
}
.info-item{
  font-size: 18px;
  color: #000;
  line-height: 36px;
  padding-top: 20px;
  border-bottom: 1px solid #979797;
}
.seal-box{
  position: absolute;
  right: -78px;
  bottom: 24px;
}
</style>
