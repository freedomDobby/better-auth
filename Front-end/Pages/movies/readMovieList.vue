<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Director</th>
        <th>Genre</th>
        <th>Release Date</th>
      </tr>
    </thead>
    <tbody class="tbody-row">
      <tr v-for="(movie, index) in list" :key="index">
        <td @click="goDetail(movie.id)">{{ movie.id }}</td>
        <td>{{ movie.title }}</td>
        <td>{{ movie.director }}</td>
        <td>{{ movie.genre }}</td>
        <td>{{ movie.release_date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref, watch, toRef } from 'vue'

const movie = ref({
  id: 0,
  title: '',
  director: '',
  genre: '',
  release_date: '',
})

const movieList = ref([movie.value])

// Get
try {
  const response = await fetch('http://localhost:5000/movies', {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`❌ Failed to fetch movies: ${response.statusText}`)
  }

  movieList.value = await response.json()
  console.log('✅ Movies fetched successfully:', movieList.value)
} catch (error) {
  console.error('❌ Error fetching movies:', error)
}

// Searching
const props = defineProps({
  searching: String,
})
const searchingRef = toRef(props, 'searching')
const searchingList = ref([movie.value])
const list = ref(movieList.value)

watch(searchingRef, (newValue) => {
  // console.log('🔍 Searching:', newValue)
  if (newValue) {
    searchingList.value = movieList.value.filter((movie) =>
      movie.title.toLowerCase().includes(newValue.toLowerCase()),
    )
    list.value = searchingList.value
    // console.log(newValue)
  } else list.value = movieList.value
})

const emit = defineEmits(['deliverId'])

const goDetail = (movieId: number) => {
  emit('deliverId', movieId)
}
</script>

<style scoped>
.tbody-row :hover {
  border: 3px solid #22c55e;
  cursor: pointer;
}

td {
  height: 50px;
}
</style>
