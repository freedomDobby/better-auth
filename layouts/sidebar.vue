<template>
  <main style="">
    <!-- Header -->
    <nav class="bg-green-500 shadow-lg text-white text-lg flex justify-around">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="about">About</NuxtLink>
      <NuxtLink to="/iphone">Iphones</NuxtLink>
      <NuxtLink to="/profile">Profile</NuxtLink>
    </nav>

    <div class="content-box">
      <slot />
    </div>
  </main>
</template>

<script setup>
import '../assets/css/tailwind.css'
</script>

<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 10px;
}

.content-box {
  display: flex;
}
</style>
