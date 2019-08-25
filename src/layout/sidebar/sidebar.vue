<template>
  <el-menu
    mode="vertical"
    class="left-sidebar"
    @open="handleOpen"
    @close="handleClose"
    background-color
    :collapse="isCollapse"
  >
    <router-link to="/home">
      <el-menu-item index="0">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </router-link>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>素材管理</span>
      </template>
      <el-menu-item index="1-1">视频</el-menu-item>
      <router-link to="/resourceManage">
        <el-menu-item index="1-2">图片</el-menu-item>
      </router-link>
      
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>内容发布</span>
      </template>
      <el-menu-item index="2-1">审核发布</el-menu-item>
      <el-menu-item index="2-2">紧急发布</el-menu-item>
      <el-menu-item index="2-3">播放列表</el-menu-item>
      <el-menu-item index="2-4">推荐内容编辑</el-menu-item>
      <el-menu-item index="2-5">标签编辑</el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>设备管理</span>
      </template>
      <router-link to="/deviceList">
        <el-menu-item index="3-1">设备列表</el-menu-item>
      </router-link>
    </el-submenu>
  </el-menu>
</template>
<script>
// import { mapGetters } from "vuex";
// import SidebarItem from "./sidebar-item";
export default {
  name: "SideBar",
  components: {
    // SidebarItem
  },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    // ...mapGetters(["routers"])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log("handleOpen", key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("handleClose", key, keyPath);
    }
  }
};
</script>
<style lang="scss">
.left-sidebar {
  position: fixed;
  top: 56px;
  width: 200px;
  height: 100%;
  min-height: 500px;
  overflow: auto;
  padding-bottom: 60px;
}
</style>