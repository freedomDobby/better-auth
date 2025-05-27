<template>
  <div class="detail-card">
    <p><span>🎞 제목:</span> {{ movie.title }}</p>
    <p><span>🎬 감독:</span> {{ movie.director }}</p>
    <p><span>📚 장르:</span> {{ movie.genre }}</p>
    <p><span>📅 개봉일:</span> {{ movie.release_date }}</p>

    <div class="flex-box" style="justify-content: end">
      <button type="submit" class="submit-btn" @click="updateMovie()">
        수정하기
      </button>
      <button type="submit" class="delete-btn" @click="deleteMovie()">
        삭제하기
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const movie = ref({
  title: '',
  director: '',
  genre: '',
  release_date: '',
})
const props = defineProps({
  id: Number,
})

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

const emit = defineEmits(['deliverProps', 'deliverCheck'])

// Delete
const deleteMovie = () => {
  const result = confirm('👀 Are you sure you want to delete the movie?')
  if (result) {
    fetch(`http://localhost:5000/movies/deleteMovie`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movieId: props.id }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to delete')
        alert('✅ Movie deleted successfully!')
        emit('deliverProps', null)
      })
      .catch((err) => {
        console.error(typeof JSON.stringify({ movieId: props.id }))
        alert('❌ Failed to delete movie.')
      })
  }
}

const updateMovie = () => {
  emit('deliverCheck', true)
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
}

.submit-btn {
  padding: 0.5rem 1rem;
  margin-top: 3%;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}

.delete-btn {
  padding: 0.5rem 1rem;
  margin-top: 3%;
  background-color: red;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: rgb(207, 7, 7);
}
</style>
