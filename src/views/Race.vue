<template>
  <div class="p-race">
    <top-info />
    <top-bar />
    <sub-nav :navs="subNavs" />
    <div class="race-body">
      <div class="race-main clearfix">
        <div class="main-left fl">
          <div v-for="leftCate in leftCates" :key="leftCate.id" class="cate-box">
            <block-head :title="leftCate.name" />
            <div class="cate-dynamic-box">
              <dynamic v-for="dynamic in leftCate.dynamics" :key="dynamic.id" :dynamic="dynamic" />
            </div>
          </div>
          <div style="margin-top:20px;font-size:0;text-align:center">
            <div style="display:inline-block;">
              <pagination :total="100" :current="1" />
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
import SubNav from '../components/SubNav'
import Pagination from '../components/Pagination'
import mockData from '../datamap/race'

export default {
  data () {
    return {
      subNavs: [{ name: 'Home', label: '海南考区', link: '/' }, { name: 'Race', label: '大赛动态', link: '/race' }],
      leftCates: mockData.leftCates,
      rightCates: mockData.rightCates
    }
  },
  components: { TopInfo, TopBar, BottomInfo, BlockHead, Dynamic, SubNav, Pagination }
}
</script>

<style scoped>
.p-race{
  overflow-x: visible;
}
.race-body{
  overflow-x: visible;
  min-height: 1000px;
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
