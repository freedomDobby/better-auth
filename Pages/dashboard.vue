<template>
  <div class="d-flex align-center justify-center" style="border: 1px solid red">
    <v-card class="pa-4" min-width="350">
      <v-card-title>User</v-card-title>

      <v-card-text>
        <div class="d-flex align-center gap-2">
          <!-- <v-avatar size="40" class="mr-3">
            <v-img :src="session?.user.image || ''" />
          </v-avatar> -->

          <div>
            <p class="text-subtitle-2 mb-1">{{ session?.user?.name }}</p>
            <p class="text-caption">{{ session?.user?.email }}</p>
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <!-- 버튼이나 다른 푸터 컨텐츠가 있다면 여기에 추가 -->
        <v-btn prepend-icon="$vuetify" @click="goBack"> 확인</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { useSession } from '../composables/auth/useAuthClient.ts'
const { data: session } = await useSession(useFetch)

const goBack = () => {
  useRouter().push('/test')
}
</script>

<style scoped>
.container {
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* no-visible-scrollbar */
.container::-webkit-scrollbar {
  display: none;
}
.container {
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
