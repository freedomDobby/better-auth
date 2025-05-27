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
        <div class="flex-box">
          <p class="text-lg font-bold mb-2">전체 리스트</p>
          <input
            type="text"
            name="searchingTitle"
            id="searchingTitle"
            v-model="searchingTitle"
            class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            placeholder="Searching Movie"
          />
        </div>
        <readMovieList
          @deliverId="handleDeliverId"
          :searching="searchingTitle"
        />
      </div>

      <div v-else-if="activeTab === '영화 디테일'">
        <!-- 디테일 -->
        <p class="text-lg font-bold mb-2">영화 디테일 {{ movieId }}</p>
        <div v-if="!movieId">
          <p>선택된 영화의 상세 정보가 표시됩니다.</p>
        </div>
        <div v-else>
          <detailMovie
            :id="movieId"
            @deliverProps="handleDeliverId"
            @deliverCheck="handleMove"
          />
        </div>
      </div>

      <div v-else-if="activeTab === '수정'">
        <!-- 수정 -->
        <p class="text-lg font-bold mb-2">영화 수정</p>
        <div v-if="!movieId">
          <p>영화 정보를 수정하는 폼입니다.</p>
        </div>
        <div v-else>
          <UpdateMovie :id="movieId" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// component
import createMovie from './createMovie.vue'
import readMovieList from './readMovieList.vue'
import UpdateMovie from './updateMovie.vue'
import detailMovie from './detailMovie.vue'

const tabs = ['영화등록', '전체 리스트', '영화 디테일', '수정']
const activeTab = ref('영화등록')

const movieId = ref()
const searchingTitle = ref('')

// detail
const movie = ref({
  title: '',
  director: '',
  genre: '',
  release_date: '',
})

const handleDeliverId = (id: number, active: string) => {
  movieId.value = id
  activeTab.value = '영화 디테일'
  // console.log('movieId : ', movieId.value)
}

const handleMove = (check: boolean) => {
  if (check) activeTab.value = '수정'
  // console.log(check)
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

.flex-box {
  display: flex;
  justify-content: flex-start;
  gap: 5%;
  margin-bottom: 3%;
}
</style>
