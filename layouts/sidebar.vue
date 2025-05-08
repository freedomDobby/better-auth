<template>
  <main style="">
    <!-- Header -->
    <nav class="bg-green-500 shadow-lg text-white text-lg flex justify-around">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="about">About</NuxtLink>
      <NuxtLink to="/iphone">Iphones</NuxtLink>
      <NuxtLink to="profile">Profile</NuxtLink>
    </nav>

    <div class="content-box">
      <!-- sidebar -->
      <div class="side-bar">
        <p>Dashboard</p>
        <p>Setting</p>
      </div>

      <!-- slot 부분에 profile.vue 내용이 렌더링됩니다. -->
      <div class="slot-box">
        <slot />
      </div>
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
  border: 1px solid red;
  width: 200px;
  padding: 10px;
}

.content-box {
  display: flex;
}

.slot-box {
  border: 1px solid blue;
}
</style>
