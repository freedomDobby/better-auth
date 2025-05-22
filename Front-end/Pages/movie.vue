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
        <p class="text-lg font-bold mb-2">영화 디테일</p>
        <p>선택된 영화의 상세 정보가 표시됩니다.</p>
      </div>

      <div v-else-if="activeTab === '수정'">
        <!-- 수정 -->
        <p class="text-lg font-bold mb-2">영화 수정</p>
        <p>영화 정보를 수정하는 폼입니다.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// component
import createMovie from './movies/createMovie'
import readMovieList from './movies/readMovieList'

const tabs = ['영화등록', '전체 리스트', '영화 디테일', '수정']
const activeTab = ref('영화등록')
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
