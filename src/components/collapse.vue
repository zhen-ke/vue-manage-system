<template>
  <el-radio-group v-model="isCollapse"
    style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    };
  },
  watch: {
    isCollapse: function (newVal, oldVal) {
      // console.log(newVal,oldVal)
      this.$emit('a', newVal);
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
