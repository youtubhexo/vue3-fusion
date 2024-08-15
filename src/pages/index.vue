<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    {{ msg }}
    {{ now }}
    <HelloWorld></HelloWorld>
    <el-button type="warning">Warning</el-button>
    <span class="i-ic:baseline-share"></span>
  </div>
</template>

<script setup lang="ts">
const msg = ref('AI赋能开发')
const now = useNow()
</script>

<style lang="scss" scoped></style>
