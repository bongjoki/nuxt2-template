<style lang="less" scoped>
.native-confirm-dialog {
  :deep(.el-dialog) {
    text-align: center;
    margin: auto;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw - 32px);
    max-width: 335px;
    border-radius: 16px;
    padding: 20px;
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      padding: 0;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .basic-button {
        width: calc(50% - 4px);
        padding: 12px;
        height: auto;
        &:last-child {
          background: #ffffff;
          color: #2c7ff6;
          border-color: #2c7ff6;
        }
      }
    }
  }
}
</style>

<template lang="pug">
  el-dialog.native-confirm-dialog(:visible="visible")
    .title {{ title }}
    .description {{ description }}
    .buttons
      basic-button(@click="handleClickLeft") {{ leftButtonText }}
      basic-button(@click="handleClickRight") {{ rightButtonText }}
</template>
<script>
export default {
  props: {
    visible: { type: Boolean, default: false },
    title: { type: String, default: null },
    description: { type: String, default: null },
    leftButtonText: { type: String, default: null },
    rightButtonText: { type: String, default: null },
  },
  methods: {
    handleClickLeft() {
      this.$emit('update:visible', false);
      this.$emit('left');
    },
    handleClickRight() {
      this.$emit('update:visible', false);
      this.$emit('right');
    },
  },
};
</script>
