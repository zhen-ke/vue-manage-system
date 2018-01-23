<template>
  <div class="sidebar">
    <!-- <collapse @a="test"></collapse> -->
    <!-- <el-menu :default-openeds="['1']" :collapse="isCollapse"> -->
    <el-menu :default-openeds="['1']" :collapse="isCollapse" unique-opened>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>系统管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <router-link :to="{name: 'Admin'}" tag="a">管理员列表</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message"></i>系统设置
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <router-link :to="{name: 'AdminSettings'}" tag="a">管理员设置</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

  </div>
</template>

<script>
  import Collapse from '@/components/collapse'
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
        this.isCollapse = value
      }
    }
  }

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
