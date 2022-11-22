<style lang="less" scoped>
.bottom-dialog {
  width: 100%;
  :deep(.el-dialog) {
    box-sizing: border-box;
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 500px;
    width: 100%;
    border-radius: 12px 12px 0 0;
    .el-dialog__body {
      padding: 0;
      max-height: 90vh;
      overflow-y: auto;
    }
  }
}
</style>
<template lang="pug">
  el-dialog.bottom-dialog(
    close-on-press-escape
    @close="$emit('close')"
    :visible="visible")
    slot
</template>
<script>
export default {
  props: {
    visible: { type: Boolean, default: false },
  },
};
</script>
