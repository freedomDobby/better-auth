<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="pass word" />
      <button type="submit">Sign in</button>
    </form>
  </div>
</template>

<script setup>
import { useFetch } from 'nuxt/app'

const url = 'https://reqres.in/signup'
const { data, error } = await useFetch(url)

// const isLoading = ref(false)
// const _error = ref(null)

async function onSubmit() {
  if (error.value) {
    console.error('❌ 에러 발생:', error.value)
  } else {
    console.log('✅ 응답 데이터:', data.value)
  }
}
</script>

<style></style>
