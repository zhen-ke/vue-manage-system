<template>
  <div id="charts" style="width: 600px;height:400px;" ref="charts"></div>
</template>

<script>
  import Echarts from "echarts";
  export default {
    props: {
      options: {
        type: Object
      }
    },
    data() {
      return {
        chart: null
      }
    },
    methods: {
      init() {
        this.chart = Echarts.init(this.$refs.charts);
        this.chart.setOption(this.options)
      }
    },
    mounted() {
      this.init()
    }
  }

</script>

<style>


</style>
