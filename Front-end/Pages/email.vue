<template>
  <div class="container">
    <div class="init-box">
      <div>이메일 인증 되었습니다.</div>
      <div class="button-box">
        <div class="btn-box" style="margin-top: 0%" @click="handleAuth">
          <button>Home</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const route = useRouter()

const handleAuth = async () => {
  route.push('/')
}
</script>

<style>
.button-box {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
}
</style>
