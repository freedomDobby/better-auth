<template>
  <div>
    <h1>Cart</h1>
    <ul>
      <div class="cart-table" v-for="(item, index) in cart" :key="index">
        <!-- index -->
        <div>{{ index + 1 }}</div>
        <!-- image -->
        <img
          width="100"
          :src="`images/${item.name.slice(0, 6) + item.name.slice(7)}.jpg`"
          :alt="`images/${item.name.slice(0, 6) + item.name.slice(7)}.jpg`"
        />
        <!-- itemName -->
        <div>{{ item.name.replaceAll('-', ' ') }}</div>
        <!-- count -->
        <div></div>
        <!-- delete Btn -->
        <button @click="deleteCart" style="border: 1px solid black">
          Delete
        </button>
      </div>
    </ul>
  </div>
</template>

<script setup>
const cart = useCart()
console.log(cart)

const deleteCart = () => {
  cart.value = cart.value.filter((ct) => ct.name !== fullname.value)
}
</script>

<style>
.cart-table {
  border: 1px solid black;
  gap: 5%;
  margin-left: 3%;
  padding: 1.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
