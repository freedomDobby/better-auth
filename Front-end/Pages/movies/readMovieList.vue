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
      <tr v-for="(movie, index) in movieList" :key="index">
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
import { useRouter } from 'vue-router'

const route = useRouter()

const movieList = ref([{}])
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

const goDetail = (movieId: number) => {
  route.push(`/movies/${movieId}`)
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
