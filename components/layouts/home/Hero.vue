<template>
  <div class="content-wrapper container relative pt-20 pb-10 overflow-hidden">
    <img class="absolute top-0 left-16 w-[50px]" src="@Assets/images/ellipse-1.png" alt="" />
    <img class="absolute top-0 -right-16 w-[50px]" src="@Assets/images/ellipse-1.png" alt="" />
    <img class="absolute bottom-0 left-20 w-[50px]" src="@Assets/images/ellipse-2.png" alt="" />
    <div class="flex px-5">
      <!-- left -->
      <div class="max-md:w-full max-md:pt-0 w-[60%] pt-12">
        <h1 class="max-md:text-[30px] font-clash font-bold text-[54px]">
          Secure your password anytime with
          <span id="typed" ref="typingElement" class="text-secondary"></span
          ><span class="cursor">&nbsp;</span>
        </h1>
        <h2 class="max-dmd:text-[24px] text-gray-400">
          Keep your business safe with secure password management, <br />
          and let us handle the rest so you can focus on what matters.
        </h2>
        <div class="flex flex-wrap gap-5 mt-10">
          <div class="max-md:w-full relative">
            <input
              v-model="password"
              class="max-md:w-full w-[320px] pr-10 outline-none px-3 border shadow-sm h-10 rounded-md"
              type="text"
            />
            <Icon
              size="26"
              class="text-[#5b6a79] cursor-pointer z-10 absolute right-2 top-1/2 -translate-y-1/2"
              name="material-symbols-light:content-copy-outline"
              @click="handleCopyToClipboard"
            />
          </div>
          <button
            class="border bg-primary border-primary h-[40px] w-[145px] rounded-full text-white hover:bg-primary hover:text-white cursor-pointer"
            @click="generatePassword"
          >
            Generate
          </button>
          <button
            class="border text-primary bg-white border-primary h-[40px] w-[40px] rounded-full hover:text-white hover:bg-primary flex justify-center items-center transition-all duration-300 cursor-pointer"
            @click="isShowSettings = !isShowSettings"
          >
            <Icon name="material-symbols-light:settings" size="20" />
          </button>
        </div>

        <!-- settings -->
        <div
          v-if="isShowSettings"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0, scale: 1 }"
          class="max-md:w-full w-[400px] px-0 p-4 mt-5 rounded-lg"
        >
          <p>Password length</p>
          <ClientOnly>
            <div class="flex items-center gap-3">
              <slider
                v-model="passwordLength"
                :handle-scale="3"
                tooltip
                color="#fb5e2f"
                track-color="#e7e8ee"
              />
              <p class="text-gray-400">
                {{ passwordLength }}
              </p>
            </div>
          </ClientOnly>

          <div class="flex items-center justify-between gap-3 mt-3">
            <p>Include uppercase</p>
            <label class="custom-checkbox">
              <input v-model="includeUppercase" type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div class="flex items-center justify-between gap-3 mt-3">
            <p>Include lowercase</p>
            <label class="custom-checkbox">
              <input v-model="includeLowercase" type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div class="flex items-center justify-between gap-3 mt-3">
            <p>Include numbers</p>
            <label class="custom-checkbox">
              <input v-model="includeNumbers" type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div class="flex items-center justify-between gap-3 mt-3">
            <p>Include special characters</p>
            <label class="custom-checkbox">
              <input v-model="includeSpecial" type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <div class="max-md:grid max-md:grid-cols-2 flex flex-wrap gap-5 mt-10">
          <img class="h-[48px]" src="@Assets/images/Apple.png" alt="" />
          <a
            href="https://play.google.com/store/apps/details?id=com.danaexperts.onekey&pli=1"
            target="_blank"
          >
            <img class="h-[48px]" src="@Assets/images/Google.png" alt="" />
          </a>
        </div>
        <img class="h-[50px] mt-6" src="@Assets/images/user-reviews.png" alt="" />
      </div>
      <!-- right -->
      <div class="max-md:hidden w-[40%]">
        <div class="w-[90%] relative">
          <img class="relative" src="@Assets/images/phone.png" alt="" />
          <img class="absolute w-[70px] top-2 left-2" src="@Assets/images/dot-1.png" alt="" />
          <img
            v-motion
            :initial="{
              y: 0,
            }"
            :enter="{
              y: [0, -30, 0],
              transition: {
                repeat: Infinity,
                repeatType: 'mirror',
              },
            }"
            :duration="2000"
            class="absolute bottom-12 h-[180px] left-2"
            src="@Assets/images/review-item.png"
            alt=""
          />
          <img class="absolute w-[70px] bottom-2 right-2" src="@Assets/images/dot-2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import slider from 'vue3-slider'
import { toast } from 'vue3-toastify'
import { startTypingEffect } from '~/utils/typingEffect'
import 'vue3-toastify/dist/index.css'
const typingElement = ref(null)

onMounted(() => {
  startTypingEffect(typingElement.value, ['1Key'])
})

const handleCopyToClipboard = () => {
  navigator.clipboard.writeText(password.value)
  toast.success('Copied to clipboard!', {
    autoClose: 1000,
    position: toast.POSITION.BOTTOM_LEFT,
  }) // ToastOptions
}

const isShowSettings = ref(false)
const passwordLength = ref(12)
const includeUppercase = ref(true)
const includeLowercase = ref(true)
const includeNumbers = ref(true)
const includeSpecial = ref(false)
const password = ref('')

const generatePassword = () => {
  let charset = ''
  if (includeUppercase.value) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (includeLowercase.value) charset += 'abcdefghijklmnopqrstuvwxyz'
  if (includeNumbers.value) charset += '0123456789'
  if (includeSpecial.value) charset += '!@#$%^&*()_+[]{}|;:,.<>?'

  if (charset === '') {
    password.value = 'Select at least one character type'
    return
  }

  password.value = Array.from(
    { length: passwordLength.value },
    () => charset[Math.floor(Math.random() * charset.length)],
  ).join('')
}
</script>

<style lang="scss" scoped>
.custom-checkbox .checkmark:hover {
  background-color: #f1f1f1;
  transition: background-color 0.2s ease;
}

/* Ẩn checkbox mặc định */
.custom-checkbox input[type='checkbox'] {
  display: none;
}

/* Thiết kế hộp checkmark */
.custom-checkbox .checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #377cff;
  border-radius: 3px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
}

/* Thêm dấu tích khi checkbox được chọn */
.custom-checkbox input[type='checkbox']:checked + .checkmark {
  background-color: #377cff;
}

.custom-checkbox input[type='checkbox']:checked + .checkmark::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.cursor {
  display: inline-block;
  background-color: #b0ff95;
  animation: blinker 800ms infinite;
}

.cursor.typing-true {
  animation: none;
}

@keyframes blinker {
  0% {
    background-color: #00aeff;
  }
  50% {
    background-color: transparent;
  }
  100% {
    background-color: #00aeff;
  }
}
</style>
