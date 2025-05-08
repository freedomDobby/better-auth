<template>
  <nav class="bg-green-500 shadow-lg text-white text-lg flex justify-around">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/iphone">Iphones</NuxtLink>
    <NuxtLink to="/test">Test</NuxtLink>
    <NuxtLink to="/profile">profile</NuxtLink>
    <NuxtLink to="/cart">Cart ({{ cart.length }})</NuxtLink>
  </nav>
</template>

<script setup>
const cart = useCart()
</script>

<style lang="scss" scoped></style>
