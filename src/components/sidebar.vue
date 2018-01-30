<template>
  <div class="sidebar">
    <!-- <collapse @a="test"></collapse> -->
    <!-- <el-menu :default-openeds="['1']" :collapse="isCollapse"> -->
    <el-menu :default-openeds="['1']" :collapse="isCollapse" unique-opened>
      <el-menu-item index="1">
        <router-link :to="{name: 'Dashboard'}" tag="a"><i class="el-icon-message"></i><span>控制面板</span></router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message"></i><span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <router-link :to="{name: 'Admin'}" tag="a"><span>管理员列表</span></router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-message"></i><span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            <router-link :to="{name: 'AdminSettings'}" tag="a"><span>管理员设置</span></router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

  </div>
</template>

<script>
  import Collapse from '@/components/collapse';
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    components: {
      Collapse
    },
    methods: {
      test(value) {
        this.isCollapse = value;
      }
    }
  };

</script>

<style lang='scss' scoped>
  .sidebar {
    a {
      text-decoration: none;
      display: block;
      color: #303133;
    }
    a:visited {
      color: #303133;
    }
    a.active {
      color: #409EFF;
    }
  }

</style>
