<style lang="less" scoped>
.native-caption {
  .caption {
    margin-bottom: 10px;
  }
}
</style>

<template lang="pug">
  .native-caption
    .caption {{ caption }}
    slot
</template>
<script>
export default {
  props: { caption: { type: String, default: null } },
};
</script>
