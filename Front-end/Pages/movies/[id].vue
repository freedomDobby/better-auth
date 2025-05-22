<template>
  <div class="w-full max-w-4xl mx-auto mt-10">
    <!-- 탭 헤더 -->
    <div class="flex border-b border-gray-300">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="px-6 py-2 -mb-px text-gray-600 font-semibold border-b-2 transition-all duration-200"
        :class="{
          'border-green-500 text-green-600': activeTab === tab,
          'border-transparent hover:text-green-500': activeTab !== tab,
        }"
      >
        {{ tab }}
      </button>
    </div>

    <!-- 탭 콘텐츠 -->
    <div
      class="p-6 border border-t-0 border-gray-300 rounded-b-md bg-white shadow-md"
    >
      <div v-if="activeTab === '영화등록'">
        <!-- 영화 등록 컴포넌트 또는 폼 -->
        <p class="text-lg font-bold mb-2">영화 등록</p>
        <div>
          <createMovie />
        </div>
      </div>

      <div v-else-if="activeTab === '전체 리스트'">
        <!-- 전체 리스트 -->
        <p class="text-lg font-bold mb-2">전체 리스트</p>
        <readMovieList />
      </div>

      <div v-else-if="activeTab === '영화 디테일'">
        <!-- 디테일 -->
        <div class="detail-card">
          <p><span>🎞 제목:</span> {{ movie.title }}</p>
          <p><span>🎬 감독:</span> {{ movie.director }}</p>
          <p><span>📚 장르:</span> {{ movie.genre }}</p>
          <p><span>📅 개봉일:</span> {{ movie.release_date }}</p>
        </div>
      </div>

      <div v-else-if="activeTab === '수정'">
        <!-- 수정 -->
        <p class="text-lg font-bold mb-2">영화 수정</p>
        <updateMovie />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// component
import createMovie from './createMovie'
import readMovieList from './readMovieList'
import updateMovie from './updateMovie'

const tabs = ['영화등록', '전체 리스트', '영화 디테일', '수정']
const activeTab = ref('영화 디테일')

const movie = ref({})
const movieId = route.params.id

// console.log(movieId.id)

// GetOne
try {
  const response = await fetch(`http://localhost:5000/movies/${movieId}`, {
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
