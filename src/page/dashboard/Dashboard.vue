<template>
  <div class="dashboard">
    <div class="column">
      <Echarts :options="options1" v-loading="loading" :id="a"></Echarts>
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="column">
          <Echarts :options="options2" :id="b"></Echarts>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="column">
          <Echarts :options="options3" :id="c"></Echarts>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="column">
          <Echarts :options="options4" :id="d"></Echarts>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Echarts from '@/components/echarts';

  export default {
    data() {
      return {
        loading: true,
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        options1: {

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
        },
        options3: {
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          series: [{
              name: '直接访问',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
              name: '邮件营销',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
              name: '搜索引擎',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
          ]
        },
        options4: {
          title: {
            text: ''
          },
          tooltip: {},
          legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [{
                name: '销售（sales）',
                max: 6500
              },
              {
                name: '管理（Administration）',
                max: 16000
              },
              {
                name: '信息技术（Information Techology）',
                max: 30000
              },
              {
                name: '客服（Customer Support）',
                max: 38000
              },
              {
                name: '研发（Development）',
                max: 52000
              },
              {
                name: '市场（Marketing）',
                max: 25000
              }
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [{
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）',
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）'
              }
            ]
          }]
        }
      }
    },
    components: {
      Echarts
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
        this.options1 = {
          title: {
            text: '堆叠区域图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              areaStyle: {
                normal: {}
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              areaStyle: {
                normal: {}
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              areaStyle: {
                normal: {}
              },
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              areaStyle: {
                normal: {}
              },
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {
                normal: {}
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };
      }, 3000);
    }
  }

</script>

<style lang="scss" scoped>
  .dashboard {
    .column {
      background: #fff;
      padding: 30px 20px;
      height: 400px;
      margin-bottom: 20px;
    }
  }

</style>
