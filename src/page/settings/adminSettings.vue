<template>
  <div class="admin-settings">
    <el-form ref="form" label-width="80px">
      <el-form-item label="更换头像">
        <Upload></Upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Upload from '@/components/Upload'

  export default {
    data() {
      return {
        admin: ''
      }
    },
    methods: {

    },
    components: {
      Upload
    }
  }

</script>

<style lang="scss" scoped>
  .admin-settings {
    width: 680px;
  }

</style>
