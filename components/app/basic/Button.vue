<style lang="less" scoped>
.basic-button {
  width: 100%;
  border-radius: 8px;
  color: #ffffff;
  padding: 13px;
    background: linear-gradient(90deg, #2c72f6 0%, #2ca2f6 100%);
  &.disabled {
    pointer-events: none;
    background: #E1E1E1;
  }
  & + .el-button {
    margin: 0;
  }
}
</style>

<template lang="pug">
  el-button.basic-button(
    v-bind="{ ...$attrs, ...$props }"
    @click="$emit('click')")
    slot
</template>

<script>
