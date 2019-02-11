<template>
  <div class="p-enroll-notice">
    <div class="notice-item" v-for="notice in enrollNotice" :key="notice.id">
      <notice-item :notice="notice" />
    </div>
  </div>
</template>

<script>
import NoticeItem from '../components/NoticeItem'

export default {
  data () {
    return {
      enrollNotice: [
        {
          id: 1,
          title: '关于中国音乐学院本院在2019年寒假的考级通知',
          table: [
            [
              { name: '考试编号', value: '20190119001' },
              { name: '报名起止时间', value: '2018年12月10日 至 2018年12月20日' }
            ],
            [
              { name: '考试名称', value: '中国音乐学院本院在2019年寒假考级' },
              { name: '考试起止时间', value: '2019年01月19日 至 2019年01月25日' }
            ]
          ],
          entry: {
            query_enroll: false,
            query_pay: false,
            query_score: false,
            query_hall: false,
            query_apply: true
          }
        },
        {
          id: 2,
          title: '关于中国音乐学院本院在2019年寒假的考级通知',
          table: [
            [
              { name: '考试编号', value: '20190119002' },
              { name: '报名起止时间', value: '2018年12月10日 至 2018年12月20日' }
            ],
            [
              { name: '考试名称', value: '中国音乐学院本院在2019年寒假考级' },
              { name: '考试起止时间', value: '2019年01月19日 至 2019年01月25日' }
            ]
          ],
          entry: {
            query_enroll: false,
            query_pay: false,
            query_score: false,
            query_hall: false,
            query_apply: true
          },
          entryDisabled: {
            query_enroll: false,
            query_pay: false,
            query_score: false,
            query_hall: false,
            query_apply: true
          }
        }
      ]
    }
  },
  components: { NoticeItem }
}
</script>

<style scoped>
.notice-item{
  margin-top: 21px;
}
.notice-item:first-child{
  margin-top: 0;
}
</style>
