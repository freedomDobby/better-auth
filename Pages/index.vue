<template>
  <div class="container" style="flex-direction: column">
    <!-- session이 null일 경우 - 로그인 회원 ❌ -->
    <div class="init-box">
      <form @submit.prevent="onSubmit">
        <div class="container" style="margin-bottom: 2%">
          <label class="label-css">Email</label>
          <input
            id="id"
            type="email"
            placeholder="m@example.com"
            v-model="id"
            required
          />
        </div>
        <div class="container" style="margin-bottom: 2%">
          <label class="label-css">pw</label>
          <input
            id="pw"
            type="password"
            placeholder="pass word"
            v-model="pw"
            required
          />
        </div>
        <!-- 구글 회원가입 -->
        <div class="google-box">
          <button @click="handleSignInGoogle">Login with Google</button>
        </div>
        <!--  -->
        <div class="container ga-15">
          <a href="./test">회원가입</a>
          <a>id/pw 찾기</a>
        </div>
        <div class="container">
          <!-- <div class="btn-box" v-if="session?.user?.emailVerified">
            <button type="submit" @click="handleVerification">Verified</button>
          </div> -->
          <div class="btn-box">
            <button type="submit" @click="handleSignIn">LOGIN</button>
          </div>
          <div class="btn-box">
            <button
              type="submit"
              @click="
                async () => {
                  await signOut()
                }
              "
            >
              LOGOUT
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// useSession - session 저장 회원 확인
import {
  useSession,
  signIn,
  signOut,
  sendVerificationEmail,
} from '../composables/auth/useAuthClient.ts'
import { useRouter } from 'vue-router'

const session = useSession()
const route = useRouter()

// user
const id = ref('')
const pw = ref('')
const error = ref('')
const user = useUser()

// 이메일 인증 처리 로직
const handleVerification = async () => {
  try {
    const response = await sendVerificationEmail({
      email: id.value,
      callbackURL: 'http://localhost:3000/profile',
    })

    // Better Auth는 응답 안에 code나 status 등의 실패 정보를 담을 수도 있음
    if (response?.code === 'VERIFICATION_EMAIL_ISNT_ENABLED') {
      alert('이메일 인증이 비활성화되어 있습니다.')
      console.error('Better Auth 에러:', response)
      return
    }
    alert('인증 이메일을 보냈습니다.')
  } catch (err) {
    alert('인증 메일 전송 실패')
    console.error('sendVerificationEmail 호출 실패:', err)
  }
}

// Login

const handleSignIn = async () => {
  error.value = null // 기존 오류 초기화

  watch(
    () => session.value,
    (newVal) => {
      console.log('세션 갱신됨 👉', newVal)
    },
  )

  await signIn.email(
    {
      email: id.value,
      password: pw.value,
    },
    {
      onSuccess(context) {
        console.log('✅ 로그인 성공!', context.data)
        const userInfo = context.data
        console.log('👤 userInfo', userInfo.user)
        user.value = userInfo.user.name
        if (!userInfo.user.emailVerified) {
          if (confirm('❌ 이메일 인증 하기')) handleVerification()
          else alert('로그인 실패')
        } else route.push('/profile')
      },
      onError(context) {
        if (confirm('❌ 로그인 실패 : ', context.error?.message))
          route.push('/test')
        else alert('로그인 실패')
      },
    },
  )
}
</script>

<style>
a {
  cursor: pointer;
}

a:hover {
  font-weight: bolder;
}

.container {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
}

.success-container {
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.init-box {
  border: 5px solid #22c55e;
  width: 60vw;
  padding: 15%;
  border-radius: 5px;
}

.btn-box {
  border: 2px solid #22c55e;
  width: 30%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.google-box {
  border: 2px solid rgb(247, 199, 67);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 5%;
  margin-bottom: 5%;
}

.google-box:hover {
  background-color: rgb(247, 199, 67);
  font-weight: bolder;
}

.btn-box:hover {
  background-color: #22c55e;
  font-weight: bolder;
}

.label-css {
  /* border: 1px solid red; */
  width: 20%;
}
</style>
