<template>
  <div class="container">
    <div class="init-box">
      <div class="title-box">
        <h1>User Card</h1>
      </div>

      <div class="content-box">
        <!-- 프로필 사진 -->
        <div class="imag-box">
          <div v-if="!session?.user.image" class="picture-box">
            <div class="picture-box"></div>
          </div>
          <div v-else>
            <img :src="session?.user.image" />
          </div>
        </div>

        <!-- user Info -->
        <div class="content-box" style="flex-direction: column">
          <div class="info-box">
            <div class="info" style="width: 30%">Name</div>
            <div class="info" style="width: 70%">{{ session?.user?.name }}</div>
          </div>
          <div class="info-box">
            <div class="info" style="width: 30%">Email</div>
            <div class="info" style="width: 70%">
              {{ session?.user?.email }}
            </div>
          </div>
          <div class="info-box">
            <div class="info" style="width: 60%">Email Verified</div>
            <div class="info" style="width: 40%">
              {{ session?.user?.emailVerified }}
            </div>
          </div>
        </div>
      </div>
      <!-- 이메일 인증 vs 로그인 -->
      <div class="content-box" style="justify-content: center">
        <div class="btn-box" style="width: 300px">
          <button
            v-if="!session?.user?.emailVerified"
            @click="handleVerification"
          >
            <p>Verified</p>
          </button>
        </div>
        <div class="btn-box" style="width: 300px">
          <button @click="handleSignOut">
            <p>LOGOUT</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  useSession,
  signOut,
  sendVerificationEmail,
} from '../composables/auth/useAuthClient.js'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'sidebar',
})

const router = useRouter()

const { data: session } = await useSession(useFetch)
console.log('🔑 session', session.value)
if (!session.value) router.push('/')

// 로그아웃 처리 로직
const handleSignOut = async () => {
  console.log('로그아웃')
  await signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push('/')
      },
      onError: () => {
        alert(' 💦  로그아웃 실패')
      },
    },
  })
}

// 이메일 인증 처리 로직
const handleVerification = async () => {
  try {
    await sendVerificationEmail({
      email: session.value.user.email,
    })
    alert('인증 이메일을 보냈습니다.')
  } catch (err) {
    console.error('❌ 이메일 인증 요청 실패:', err)
    alert('인증 메일 전송 실패')
  }
}
</script>

<style>
.container {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.init-box {
  position: relative;
  border: 5px solid #22c55e;
  padding: 15%;
  border-radius: 5px;
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.title-box {
  /* border: 1px solid red; */
  position: absolute;
  top: 0%;
  left: 3%;
  margin-top: 0%;
  padding-top: 0%;
  font-size: larger;
  font-weight: x-larger;
}

.content-box {
  /* border: 1px solid blue; */
  display: flex;
  gap: 5%;
  align-items: center;
}

.info-box {
  /* border: 1px solid gold; */
  display: flex;
  width: 210px;
}

.info {
  /* border: 1px solid green; */
}

.picture-box {
  /* border: 1px solid black; */
  background-color: grey;
  margin: 5px;
  width: 100px;
  height: 140px;
}
</style>
