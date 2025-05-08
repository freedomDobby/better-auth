<template>
  <div>
    <button @click="increment">Increment</button>
    <p>{{ count }}</p>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
const count = ref(0)

// Increment
function increment() {
  count.value++
}

// Decrement
function decrement() {
  count.value--
}
</script>

<style lang="scss" scoped></style>
