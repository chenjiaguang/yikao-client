<template>
  <div class="p-us">
    <top-info />
    <top-bar />
    <sub-nav :navs="subNavs" />
    <div class="us-body"></div>
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
      subNavs: [{ name: 'Home', label: '海南考区', link: '/' }, { name: 'Us', label: '关于我们', link: '/us' }]
    }
  },
  components: { TopInfo, TopBar, BottomInfo, BlockHead, SubNav, Pagination }
}
</script>

<style scoped>
.p-us{
  overflow-x: visible;
}
.us-body{
  min-height: 1000px;
  padding-bottom: 20px;
}
.cate-box{
  margin-top: 30px;
}
</style>
