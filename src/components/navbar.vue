<template>
  <div class="navbar">
    <el-menu class="el-menu-navbar" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff">
      <router-link :to="{name: 'Layout'}" tag="li" replace class="title">后台管理系统</router-link>
      <el-submenu index="2" class="user">
        <template slot="title">
          <img :src="avatar" alt="avatar" class="avatar">
          <span>{{username}}</span>
        </template>
        <el-menu-item index="2-1">资料</el-menu-item>
        <el-menu-item index="2-2">设置</el-menu-item>
        <el-menu-item index="2-3">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import Collapse from '@/components/collapse';
  import { mapState } from 'vuex';

  export default {
    data () {
      return {
        username: 'admin'
      };
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath, this);
        if (key === '2-3') {
          this.removeSession('token');
          this.$router.push('/login');
          this.$message({
            message: '登出成功',
            type: 'success',
            center: true
          });
        }
      }
    },
    computed: mapState(['avatar']),
    components: {
      Collapse
    }
  };

</script>

<style lang='scss' scoped>
  .navbar {
    color: #fff;
    .title {
      height: 60px;
      float: left;
      line-height: 60px;
      padding: 0 20px;
      font-size: 14px;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
      vertical-align: middle;
      background: #fff;
    }
    .user {
      float: right; // margin-right: 100px;
      ul {
        li {
          min-width: 100px;
        }
      }
    }
  }

</style>
