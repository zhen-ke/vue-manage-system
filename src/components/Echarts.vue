<template>
  <div :style="{height:height,width:width}" :id="id"></div>
</template>

<script>
  import Echarts from 'echarts';
  import macarons from 'echarts/theme/macarons.js';

  export default {
    props: {
      options: {
        type: Object
      },
      loading: {
        type: Boolean
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      },
      id: {
        type: String, 
        default: 'charts'
      },
    },
    data() {
      return {
        chart: null
      };
    },
    methods: {
      init() {
        this.chart = Echarts.init(document.getElementById(this.id), 'macarons');
        if (this.loading) {
          this.chart.showLoading();
        }
        this.chart.setOption(this.options);
      }
    },
    mounted() {
      this.init();
    },
    watch: {
      options(a, b) {
        if (a) {
          this.init();
          // console.log(a);
        }
      },
      loading(newVal, oldVal) {
        // console.log(newVal,oldVal);
        if (!newVal) {
          this.chart.hideLoading();
        }
      }
    }
  };

</script>

<style>


</style>
