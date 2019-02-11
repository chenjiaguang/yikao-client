<template>
  <div class="p-enroll-apply">
    <div class="form-box avatar-box clearfix">
      <div class="avatar-title required-title fl clearfix"><i class="ykfont yk-required fl"></i><span class="fl">考生照片：</span></div>
      <div class="avatar-image fl"></div>
      <div class="avatar-state fl">
        <div class="state-text">
          <i class="ykfont yk-warning fl"></i>
          <div class="warining-text fl">上传头像注意事项：<br />1.上传二寸的电子证件照片，建议626*413，大小不超过800K；<br />2.照片的有效格式为PNG、JPG、BMP中的一种。</div>
          <div class="avatar-btn cursor-pointer">上传照片</div>
        </div>
      </div>
    </div>
    <div class="form-box">
      <div class="required-title clearfix"><i class="ykfont yk-required fl"></i><span class="fl">姓名：</span></div>
      <input class="full-input" placeholder="请填写真实姓名" />
    </div>
    <div class="form-box">
      <div class="required-title clearfix"><i class="ykfont yk-required fl"></i><span class="fl">拼音或英文：</span></div>
      <div class="clearfix">
        <input class="full-input fl" :disabled="disabledPinyin" placeholder="拼音将自动填写" />
        <div class="pinyin-btn cursor-pointer fl" @click.stop="changeDisabledPinyin">{{disabledPinyin ? '校正' : '确定'}}</div>
      </div>
    </div>
    <div class="form-box clearfix">
      <div class="required-title fl clearfix"><i class="ykfont yk-required fl"></i><span class="fl">性别：</span></div>
      <label class="gender-label cursor-pointer fl clearfix">
        <input type="radio" class="gender-radio fl" value="1" v-model="form.gender.value" />
        <span class="fl">男</span>
      </label>
      <label class="gender-label cursor-pointer fl clearfix">
        <input type="radio" class="gender-radio fl" value="2" v-model="form.gender.value" />
        <span class="fl">女</span>
      </label>
    </div>
    <div class="form-box">
      <div class="required-title clearfix"><i class="ykfont yk-required fl"></i><span class="fl">出生日期：</span></div>
      <el-date-picker
        v-model="form.birthday.value"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="年-月-日"
        :clearable="false"
        prefix-icon="none">
      </el-date-picker>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      disabledPinyin: true,
      form: {
        name: {
          value: '',
          text: '',
          required: true,
          valid: false,
          tip: '请输入姓名'
        },
        pinyin: {
          value: '',
          text: '',
          required: true,
          valid: false,
          tip: '请输入拼音或英文'
        },
        gender: {
          value: '',
          text: '',
          required: true,
          valid: false,
          tip: '请选择性别'
        },
        birthday: {
          value: '',
          text: '',
          required: true,
          valid: false,
          tip: '请选择出生日期'
        }
      }
    }
  },
  methods: {
    changeDisabledPinyin: function () {
      this.disabledPinyin = !this.disabledPinyin
    }
  }
}
</script>

<style scoped>
.p-enroll-apply{
  padding: 9px 34px;
  background: #fff;
}
.form-box{
  padding: 18px 0;
}
.yk-required{
  font-size: 12px;
  color: #D0021B;
}
.required-title{
  font-size: 16px;
  line-height: 22px;
  color: #141619;
  padding-bottom: 16px;
}
.avatar-image{
  width: 150px;
  height: 227px;
  margin: 0 40px 0 65px;
  background: url('../assets/image/default_avatar.png') no-repeat;
  background-size: 100% 100%;
  background-position: center;
  transition: background-image 0.4s;
}
.state-text{
  font-size: 16px;
  line-height: 22px;
}
.yk-warning{
  color: #D0021B;
}
.warining-text{
  color: #D0021B;
  padding-left: 8px;
}
.avatar-btn{
  clear: both;
  width: 78px;
  height: 38px;
  line-height: 38px;
  font-size: 16px;
  border: 1px solid #979797;
  border-radius: 5px;
  text-align: center;
  color: #000;
  position: relative;
  left: 24px;
  top: 56px;
}
.avatar-btn:hover{
  font-weight: bold;
}
.pinyin-btn{
  width: 78px;
  height: 38px;
  line-height: 38px;
  font-size: 16px;
  border: 1px solid #979797;
  border-radius: 5px;
  text-align: center;
  color: #000;
  margin-left: 70px;
}
.pinyin-btn:hover{
  font-weight: bold;
}
.full-input{
  width: 458px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #979797;
  text-indent: 7px;
}
.full-input:disabled{
  background: #979797;
}
.gender-label{
  padding: 0 20px;
  margin: 0 24px;
  font-size: 16px;
  line-height: 22px;
}
.gender-radio{
  display: block;
  margin: 1px 10px 0 0;
  width: 16px;
  height: 16px;
  padding: 0;
}
</style>
