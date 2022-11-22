<style lang="less" scoped></style>

<template lang="pug">
  infinite-loading.infinite-loading(
    v-bind="{ ...$attrs, ...$props }",
    @infinite="$emit('infinite', $event)")
    div(slot="no-results")
    div(slot="no-more")
</template>

<script>
export default {};
</script>
