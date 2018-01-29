<template>
  <div id="charts"
    style="width: 600px;height:400px;"
    ref="charts"></div>
</template>

<script>
import Echarts from 'echarts';
export default {
  props: {
    options: {
      type: Object
    },
    loading: {
      type: Boolean
    }
  },
  data () {
    return {
      chart: null
    };
  },
  methods: {
    init () {
      this.chart = Echarts.init(this.$refs.charts);
      if(this.loading) {
        this.chart.showLoading();
      }
      this.chart.setOption(this.options);
    }
  },
  mounted () {
    this.init();
  },
  watch: {
    options (a,b) {
      if(a) {
        this.init();
        console.log(a);
      }
    },
    loading (newVal, oldVal) {
      console.log(newVal,oldVal);
      if(!newVal){
        this.chart.hideLoading();
      }
    }
  }
};
</script>

<style>

</style>
