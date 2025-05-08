<template>
  <div>
    <div class="grid grid-cols-4 gap-4 mt-10">
      <nuxt-link to="iphone/iphone-12" class="clickablue shadow-lg">
        <h1>Iphone-12</h1>
        <div class="flex justify-center">
          <img width="150" src="/images/iphone12.jpg" />
        </div>
      </nuxt-link>

      <nuxt-link to="iphone/iphone-12-mini" class="clickablue shadow-lg">
        <h1>Iphone12 mini</h1>
        <div class="flex justify-center">
          <img width="150" src="/images/iphone12-mini.jpg" />
        </div>
      </nuxt-link>

      <nuxt-link to="iphone/iphone-12-pro" class="clickablue shadow-lg">
        <h1>Iphone12 pro</h1>
        <div class="flex justify-center">
          <img width="150" src="/images/iphone12-pro.jpg" />
        </div>
      </nuxt-link>

      <nuxt-link to="iphone/iphone-13" class="clickablue shadow-lg">
        <h1>Iphone13</h1>
        <div class="flex justify-center">
          <img width="150" src="/images/iphone13.jpg" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app'

useHead({
  title: 'Nuxt3 - Iphones',
})
</script>

<style>
.flex-ur {
  display: flex;
  justify-content: space-between;
}

.clickablue {
  cursor: pointer;
  text-align: center;
}
</style>
