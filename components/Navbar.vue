<template>
  <nav class="bg-green-500 shadow-lg text-white text-lg flex justify-around">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/iphone">Iphones</NuxtLink>
    <NuxtLink to="/test">Test</NuxtLink>
    <NuxtLink to="/profile">profile</NuxtLink>
    <NuxtLink to="/cart">Cart ({{ cart.length }})</NuxtLink>
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      "
      @click="
        async () => {
          await signOut()
        }
      "
    >
      {{ user }}
    </div>
  </nav>
</template>

<script setup>
import { signOut } from '../composables/auth/useAuthClient.ts'

const cart = useCart()
const user = useUser()

console.log('🎭 user : ', user)
</script>

<style lang="scss" scoped></style>
