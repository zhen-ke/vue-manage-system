<template>
  <div class="admin-settings">
    <div class="column">
      <el-form ref="form" label-width="80px">
        <el-form-item label="更换头像">
          <Upload></Upload>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import Upload from '@/components/Upload';


  export default {
    data() {
      return {
        admin: '',
      };
    },
    methods: {

    },
    components: {
      Upload
    },
  };

</script>

<style lang="scss" scoped>
  .admin-settings {
    .column {
      background: #fff;
      padding: 30px 20px;
      height: 400px;
      margin-bottom: 20px;
    }
  }

</style>
