<template>
  <div class="mc-modal" v-show="visable" transition="fade">
    <div class="modal-mask" @click="handleCancel"></div>
    <div class="modal-container">
      <div class="modal-title" v-show="showTitle">
        <p class="title-text">{{ title }}</p>
      </div>
      <div class="modal-content" v-if="needSlot">
        <slot></slot>
      </div>
      <div class="modal-content" v-if="!needSlot" v-html="content"></div>
      <div class="modal-bottom">
        <p class="cancel-button" @click="handleCancel">{{ cancelText }}</p>
        <p class="ok-button" @click="handleOk">{{ okText }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mc-modal",
  methods: {
    handleOk() {
      this.onOk();
      this.visable = false;
    },
    handleCancel() {
      this.onCancel();
      this.visable = false;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
