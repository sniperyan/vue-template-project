<template>
  <div>
    <div class="header">
      <span class="title">设备列表</span>
      <el-input placeholder="请输入" suffix-icon="el-icon-search" v-model="search"></el-input>
    </div>
    <button class="add-btn">+添加</button>
    <list :devices="devices"></list>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import list from "./list";
/* eslint-disable*/
export default {
  components: {
    list
  },
  data() {
    return {
      search: ""
    };
  },
  created() {
    this.getDeviceList();
  },
  computed: {
    ...mapGetters(["devices"])
  },
  methods: {
    ...mapActions(["getDeviceList"]),
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .el-input {
    width: 200px;
  }
}
.add-btn {
  width: 100%;
  border: 1px #000000 dashed;
  margin: 20px 0;
}
</style>
