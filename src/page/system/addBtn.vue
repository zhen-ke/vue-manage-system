<template>
  <el-button icon="el-icon-plus" @click="add" size="medium">添加</el-button>
</template>

<script>
export default {
  methods: {
    add () {
      this.$emit('addData',true);
    }
  }
};
</script>

<style>

</style>
