<template>
  <div class="init-box">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <!-- 영화 제목 -->
      <div>
        <label for="title" class="label-css">Title</label>
        <input
          id="title"
          type="text"
          v-model="title"
          required
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
          required
          class="input-css"
        />
      </div>

      <!-- 장르 -->
      <div>
        <label for="genre" class="label-css">genre</label>
        <select id="genre" v-model="genre" required class="select-css">
          <option disabled value="">Select a genre</option>
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

      <!-- 개봉 날짜 -->
      <div>
        <label for="releaseDate" class="label-css">Release Date</label>
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
          <input
            id="releaseDate"
            type="date"
            v-model="releaseDate"
            required
            class="input-css ps-10"
          />
        </div>
      </div>

      <!-- 버튼 -->
      <div>
        <button type="submit" class="submit-btn">등록하기</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const director = ref('')
const genre = ref('')
const releaseDate = ref('')

const onSubmit = async () => {
  const movieInfo = {
    title: title.value,
    director: director.value,
    genre: genre.value,
    release_date: releaseDate.value,
  }

  // API
  try {
    const response = await fetch('http://localhost:5000/movies/registerMovie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieInfo),
    })

    if (!response.ok) {
      throw new Error(`Failed to register movie: ${response.statusText}`)
    }

    const result = await response.json()
    console.log('✅ Movie registered successfully:', result)
    // 필요 시 성공 후 후처리
  } catch (error) {
    console.error('❌ Error registering movie:', error)
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

.submit-btn:hover {
  background-color: #2563eb;
}
</style>
