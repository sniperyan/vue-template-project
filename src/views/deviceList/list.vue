<template>
  <ul>
    <li
      class="device-item"
      v-for="device in devices"
      :key="device.deviceId"
      @click="showDetail(device.deviceId,$event)"
    >
      <div class="item item-1">
        <span class="name">{{device.customerName}}</span>
        <span>{{device.customerAddr}}</span>
      </div>
      <div class="item">
        <span>剩余存储：</span>
        <span>{{device.currentStorage}}/{{device.totalStorage}}</span>
      </div>
      <div class="item">
        <span>分组：</span>
        <span>{{device.group}}</span>
      </div>
      <div class="item">
        <span>注册时间：</span>
        <span>{{device.registTime}}</span>
      </div>
      <div class="item">
        <span>版本：</span>
        <span>{{device.version}}</span>
      </div>
      <div class="operate-item">
        <span class="blue" @click="edit(device.deviceId,$event)">编辑</span>
        <span>|</span>
        <span class="blue" @click="showMore(device.deviceId,$event)">更多</span>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "device-list",

  props: {
    devices: {
      type: Array,
      required: true
    }
  },
  methods: {
    edit(id, event) {
      event.stopPropagation();
      alert(`edit id= ${id}`);
    },
    showMore(id, event) {
      event.stopPropagation();
      alert(`show more id= ${id}`);
    },
    showDetail(id, event) {
      event.stopPropagation();
      this.$router.push(`/devicedetail/${id}`)
    }
  },
  created() {}
};
</script>
<style scoped lang="scss">
.device-item {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  .name {
    font-weight: bold;
    font-size: 16px;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .operate-item {
    display: flex;
    align-items: center;
  }
  .blue {
    color: blue;
    cursor: pointer;
  }
}
</style>