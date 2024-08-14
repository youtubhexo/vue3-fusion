<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    {{ msg }}
    {{ now }}
  </div>
</template>

<script setup lang="ts">
const msg = ref('AI赋能开发')
const now = useNow()
</script>

<style lang="scss" scoped></style>
