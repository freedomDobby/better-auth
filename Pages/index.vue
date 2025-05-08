<template>
  <div>
    <button @click="moveToAbout">Go About</button>
    Hello Index
  </div>
</template>

<script setup>
function moveToAbout() {
  navigateTo('about')
}
</script>

<style lang="scss" scoped></style>
