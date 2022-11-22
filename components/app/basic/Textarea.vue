<style lang="less" scoped>
.basic-textarea {
  width: 100%;
  height: 92px;
  :deep(.el-textarea__inner) {
    border-radius: 4px;
    height: 100%;
    background: #f5f5f5;
    border: none;
    color: #000000;
    padding: 12px;
    &::placeholder {
      color: #9e9e9e;
      white-space: pre;
    }
    &:focus {
      border: none;
    }
  }
}
</style>

<template lang="pug">
  el-input.basic-textarea(
    type="textarea"
    resize="none"
    v-bind="{ ...$attrs, ...$props }"
    @input="$emit('input', $event)")
</template>
