<style lang="less" scoped>
.basic-select {
  :deep(.el-input__inner) {
    text-align: left;
    height: 100%;
    padding: 12px 10px;
    border: none;
    color: #000000;
    &::placeholder {
      color: #6e6e7a;
    }
  }
}
</style>

<template lang="pug">
  el-select.basic-select(
    v-bind="{ ...$attrs, ...$props }"
    @input="$emit('input', $event)")
    slot
</template>
