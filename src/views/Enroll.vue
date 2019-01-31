<template>
  <div class="p-enroll">
    <top-info />
    <top-bar />
    <sub-nav :navs="subNavs" />
    <div class="enroll-body"></div>
    <bottom-info />
  </div>
</template>

<script>
// @ is an alias to /src
import TopInfo from '../components/TopInfo'
import TopBar from '../components/TopBar'
import BottomInfo from '../components/BottomInfo'
import BlockHead from '../components/BlockHead'
import SubNav from '../components/SubNav'
import Pagination from '../components/Pagination'

export default {
  data () {
    return {
      subNavs: [{ name: 'Home', label: '海南考区', link: '/' }, { name: 'Enroll', label: '考级报名', link: '/enroll' }]
    }
  },
  components: { TopInfo, TopBar, BottomInfo, BlockHead, SubNav, Pagination }
}
</script>

<style scoped>
.p-enroll{
  overflow-x: visible;
}
.enroll-body{
  min-height: 1000px;
  padding-bottom: 20px;
}
.cate-box{
  margin-top: 30px;
}
</style>
