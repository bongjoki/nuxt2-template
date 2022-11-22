<style lang="less" scoped>
.basic-input {
  width: 100%;
  height: 48px;
  border-radius: 4px;
  text-align: left;
  border: none;
  :deep(.el-input__inner) {
    border-radius: 4px;
    height: 100%;
    padding: 10;
    text-align: inherit;
    background: #f5f5f5;
    &::placeholder {
      color: #9e9e9e;
      text-align: inherit;
    }
  }
}
</style>

<template lang="pug">
  el-input.basic-input(
    v-bind="{...$attrs, ...$props}"
    ref="input"
    @focus="$emit('focus')"
    @input="$emit('input', $event)")
</template>
