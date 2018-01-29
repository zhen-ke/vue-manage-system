<template>
  <div class="admin-settings">
    <el-form ref="form" label-width="80px">
      <el-form-item label="更换头像">
        <Upload></Upload>
      </el-form-item>
    </el-form>
    <Echarts :options="options1"></Echarts>
    <Echarts :options="options2"></Echarts>
  </div>
</template>

<script>
  import Upload from '@/components/Upload'
  import Echarts from '@/components/echarts'

  export default {
    data() {
      return {
        admin: '',
        options1: {
          title: {
            text: 'ECharts 测试'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        },
        options2: {
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [{
                value: 235,
                name: '视频广告'
              },
              {
                value: 274,
                name: '联盟广告'
              },
              {
                value: 310,
                name: '邮件营销'
              },
              {
                value: 335,
                name: '直接访问'
              },
              {
                value: 400,
                name: '搜索引擎'
              }
            ]
          }]
        }
      }
    },
    methods: {

    },
    components: {
      Upload,
      Echarts
    }
  }

</script>

<style lang="scss" scoped>
  .admin-settings {
    width: 680px;
  }

</style>
