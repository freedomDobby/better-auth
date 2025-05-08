<template>
  <div>
    <Head>
      <Title>Nust 3 - Iphone{{ name.replaceAll('-', ' ') }}</Title>
    </Head>
    <div class="main-box" style="margin-top: 5%">
      <!-- Phone Image -->
      <div>
        <img
          width="300"
          :src="`/images/iphone${route.params.name}.jpg`"
          :alt="`/images/iphone${route.params.name}.jpg`"
        />
      </div>
      <!-- Info -->
      <div class="main-box" style="flex-direction: column">
        <div>iphone {{ name }}</div>
        <button v-if="!inCart()" @click="addToCart" class="cart-btn">
          Buy Now
        </button>
        <button v-else @click="addToCart" class="cart-btn">
          Remove in the Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const name = computed(() => {
  return route.params.name.replaceAll('-', ' ')
})

const fullname = computed(() => {
  return `iphone-${route.params.name}`
})

const cart = useCart()

function inCart() {
  const found = !!cart.value.find((ct) => ct.name == fullname.value)
  console.log('found )))', found)
  return found
}

const addToCart = () => {
  if (!inCart()) {
    cart.value.push({ name: fullname })
  } else {
    cart.value = cart.value.filter((ct) => ct.name !== fullname.value)
    console.log(cart.value)
  }
}

// useHead({
//   title: `Nuxt3 - Iphone${route.params.name.replaceAll('-', ' ')}`,
// })
</script>

<style>
.main-box {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5%;
}

.cart-btn {
  background-color: rgb(43, 230, 43);
  line-height: 50px;
  display: flex;
  justify-content: center;
  font-size: larger;
  font-weight: bolder;
  width: 250px;
  height: 50px;
  margin-top: 10%;
  cursor: pointer;
}
</style>
