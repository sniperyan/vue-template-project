<template>
  <el-dropdown @command="changeTheme">
    <span class="">
      <svg-icon class="" icon-class="pifu" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item class="clearfix" command="default">
        青铜绿
      </el-dropdown-item>
      <el-dropdown-item class="clearfix" command='science-blue'>
        深空蓝
      </el-dropdown-item>
      <el-dropdown-item divided>
        <!-- <el-color-picker v-model="color"></el-color-picker> -->
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import '@/assets/custom-theme/science-blue.css' // the theme changed version element-ui css
export default {
  data() {
    return {
      color: 'rgba(255, 69, 0, 0.68)'
    }
  },
  methods: {
    // change theme - 换肤
    changeTheme(command) {
      console.log(document.querySelectorAll('link'))
      document.body.className = command
    }
  }
}
</script>