<template>
  <div class="about m-4">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'AboutAI',
  inheritAttrs: false
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
