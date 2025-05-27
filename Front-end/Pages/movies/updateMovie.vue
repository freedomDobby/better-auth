<template>
  <!-- 제목 -->
  <div>
    <label for="title" class="label-css">Title</label>
    <input
      id="title"
      type="text"
      v-model="title"
      :placeholder="movie.title"
      class="input-css"
    />
  </div>

  <!-- 감독 -->
  <div>
    <label for="director" class="label-css">Director</label>
    <input
      id="director"
      type="text"
      v-model="director"
      :placeholder="movie.director"
      class="input-css"
    />
  </div>

  <!-- 장르 -->
  <div>
    <label for="genre" class="label-css">Genre</label>
    <select id="genre" v-model="genre" required class="select-css">
      <option disabled value="">{{ movie.genre }}</option>
      <option value="action">Action</option>
      <option value="comedy">Comedy</option>
      <option value="drama">Drama</option>
      <option value="fantasy">Fantasy</option>
      <option value="horror">Horror</option>
      <option value="romance">Romance</option>
      <option value="thriller">Thriller</option>
      <option value="animation">Animation</option>
    </select>
  </div>

  <!-- 개봉일 -->
  <div>
    <label for="releaseDate" class="label-css">Release Date</label>
    <input
      id="releaseDate"
      type="date"
      v-model="releaseDate"
      :placeholder="movie.release_date"
      class="input-css"
    />
  </div>

  <div style="margin-top: 5%">
    <button type="submit" class="submit-btn" @click="updateMovie()">
      수정하기
    </button>
    <button type="submit" class="delete-btn">삭제하기</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// component

const props = defineProps({
  id: Number,
})

const movie = ref({
  title: '',
  director: '',
  genre: '',
  release_date: '',
})

// movie Info
const title = ref('')
const director = ref('')
const genre = ref('')
const releaseDate = ref('')

// GetOne
try {
  const response = await fetch(`http://localhost:5000/movies/${props.id}`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`❌ Failed to fetch movie: ${response.statusText}`)
  }

  const result = await response.json()
  movie.value = result
  console.log('✅ Movie fetched successfully:', movie.value)
} catch (error) {
  console.error('❌ Error fetching movie:', error)
}

// updateMocive
const updateMovie = async () => {
  const movieInfo = {
    title: title.value,
    director: director.value,
    genre: genre.value,
    release_date: releaseDate.value,
  }

  try {
    const response = await fetch(`http://localhost:5000/movies/updateMovie`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieInfo),
    })

    if (!response.ok) {
      throw new Error(`Failed to update movie: ${response.statusText}`)
    }

    const result = await response.json()
    console.log('✅ Movie updated successfully:', result)
    // 필요 시 성공 후 후처리
  } catch (error) {
    console.error('❌ Error updating movie:', error)
  }
}
</script>

<style scoped>
.label-css {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.input-css,
.select-css {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}

.submit-btn {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}

.delete-btn {
  padding: 0.5rem 1rem;
  background-color: red;
  margin-left: 5%;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #2563eb;
}

.delete-btn:hover {
  background-color: rgb(207, 7, 7);
}
</style>
