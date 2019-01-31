<template>
  <div class="p-home">
    <top-info />
    <top-bar />
    <div class="home-body">
      <!-- banner -->
      <div class="home-banner">
        <div class="home-banner-bg"></div>
        <div class="home-banner-content">
          <div class="sub-head">Social Art Grade Examination of China Conservatory of Music</div>
          <div style="margin:0 25px;height:2px;background:#fff"></div>
          <div class="banner-title">中国音乐学院社会艺术等级考试</div>
          <div class="banner-sub-title">海南考区</div>
          <div style="margin:0 25px;height:2px;background:#fff"></div>
          <div class="entry-buttons clearfix">
            <div v-for="(et, idx) in entry" :key="idx" class="entry-btn fl cursor-pointer">
              <div class="entry-btn-content">{{et.label}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 主要内容(分类) -->
      <div class="home-main clearfix">
        <div class="main-left fl">
          <div v-for="leftCate in leftCates" :key="leftCate.id" class="cate-box">
            <block-head :title="leftCate.name" />
            <div class="cate-dynamic-box">
              <dynamic v-for="dynamic in leftCate.dynamics" :key="dynamic.id" :dynamic="dynamic" />
            </div>
          </div>
        </div>
        <div class="main-right fr">
          <div v-for="(rightCate, rightIdx) in rightCates" :key="rightCate.id" class="cate-box">
            <block-head :title="rightCate.name" />
            <div class="cate-dynamic-box" :class="{clearfix: rightIdx !== 0}">
              <template v-if="rightIdx === 0">
                <dynamic v-for="dynamic in rightCate.dynamics" :key="dynamic.id" :dynamic="dynamic" mode="2" />
              </template>
              <template v-else>
                <div v-for="(dynamic, dynamicIdx) in rightCate.dynamics" :key="dynamic.id" class="cate-dynamic-content mode3" :class="{fl: (dynamicIdx % 2) === 0, fr: (dynamicIdx % 2) !== 0}">
                  <dynamic :dynamic="dynamic" :mode="rightIdx === 0 ? '2' : '3'" />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom-info />
  </div>
</template>

<script>
// @ is an alias to /src
import TopInfo from '../components/TopInfo'
import TopBar from '../components/TopBar'
import BottomInfo from '../components/BottomInfo'
import BlockHead from '../components/BlockHead'
import Dynamic from '../components/Dynamic'
import mockData from '../datamap/home'

export default {
  data () {
    return {
      entry: [
        {
          name: '',
          label: '考级报名',
          link: ''
        },
        {
          name: '',
          label: '考场查询',
          link: ''
        },
        {
          name: '',
          label: '成绩查询',
          link: ''
        }
      ],
      leftCates: mockData.leftCates,
      rightCates: mockData.rightCates
    }
  },
  components: { TopInfo, TopBar, BottomInfo, BlockHead, Dynamic },
  mounted: function () {
    let rData = {
      username: 'test',
      password: '123456'
    }
    this.$ajax('/login', { data: rData }).then(res => {
      console.log('res', res)
    })
  }
}
</script>

<style scoped>
.p-home{
  overflow-x: visible;
}
.home-body{
  overflow-x: visible;
  min-height: 1000px;
  padding-bottom: 20px;
}
.home-banner{
  overflow-x: visible;
  height: 490px;
  position: relative;
}
.home-banner-bg{
  position: absolute;
  width: 300%;
  height: 100%;
  left: -100%;
  top: 0;
  background: url('../assets/image/home_banner.jpg') no-repeat;
  background-position: center;
  background-color: #FDF2D8;
  z-index: 1;
}
.home-banner-content{
  position: relative;
  z-index: 2;
  width: 640px;
  height: 100%;
  margin: 0 auto;
  background: rgba(185,104,31,0.4);
  text-align: center;
}
.sub-head{
  font-size: 20px;
  font-weight: boldl;
  line-height: 28px;
  padding: 38px 0 34px;
  color: #fff;
}
.banner-title{
  font-size: 42px;
  font-weight: bold;
  line-height: 50px;
  color: #fff;
  padding: 34px 0 20px;
}
.banner-sub-title{
  font-size: 36px;
  line-height: 44px;
  color: #fff;
  padding: 20px 0 40px 0;
  text-align: left;
  text-indent: 25px;
}
.entry-buttons{
  padding: 50px 0;
  margin: 0 25px;
}
.entry-btn{
  width: 30%;
  margin-left: 5%;
}
.entry-btn:first-child{
  margin-left: 0;
}
.entry-btn:hover{
  background: rgba(118,89,61,0.24);
}
.entry-btn-content{
  font-size: 32px;
  line-height: 76px;
  color: #fff;
  text-align: center;
  border: 2px solid #fff;
}
.home-main{
  padding-bottom: 20px;
}
.main-left{
  width: 780px;
}
.main-right{
  width: 360px;
}
.cate-box{
  margin-top: 30px;
}
.cate-dynamic-content.mode3{
  width: 47.22%;
}
</style>
