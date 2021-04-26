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
  props: {
    visable: {
      type: Boolean,
      default: false,
      required: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: "标题"
    },
    needSlot: {
      type: Boolean,
      default: false
    },
    content: {
      default: "欢迎使用mc-modal"
    },
    okText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    onOk: {
      type: Function
    },
    onCancel: {
      type: Function
    }
  },
  data() {
    return {
      name: "mc-modal"
    };
  },
  watch: {
    visable: () => {}
  },
  methods: {
    handleOk() {
      this.$emit("ok");
      if (this.onOk) {
        this.onOk();
      }
      this.$emit("update:visable", false);
    },
    handleCancel() {
      this.$emit("cancel");
      if (this.onCancel) {
        this.onCancel();
      }
      this.$emit("update:visable", false);
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
