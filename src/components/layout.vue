<template>
  <div class="main">
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-container>
        <el-aside>
          <sidebar></sidebar>
        </el-aside>
        <el-main>
          <v-main></v-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Navbar from '@/components/navbar'
  import Sidebar from '@/components/sidebar'
  import vMain from '@/components/main'

  export default {
    data() {
      return {

      }
    },
    components: {
      Navbar,
      Sidebar,
      vMain
    }
  };

</script>

<style lang='scss' scoped>
  .main {
    .el-header {
      color: #333;
      padding: 0;
    }
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
    }
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      height: calc(100vh - 61px);
      // padding: 0;
    }
  }

</style>
