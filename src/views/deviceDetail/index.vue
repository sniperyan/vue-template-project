<template>
  <div>
    <div class="header">
      <span class="title">设备详情</span>

    </div>
    <div>id:{{this.$route.params.id}}</div>
   
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
/* eslint-disable*/
export default {
  components: {
  },
  computed: {
  },
  methods: {
    
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
  border: 1px #0f0909 dashed;
  margin: 20px 0;
}
</style>
