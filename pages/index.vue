<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
      <!-- Icon -->
      <div class="flex justify-center">
        <img src="@Assets/images/protect.png" alt="Facebook Protect" class="w-[80%]" />
      </div>

      <!-- Title -->
      <h1 class="text-xl font-semibold text-gray-800 mt-4">Welcome to Facebook Protect</h1>

      <!-- Description -->
      <p class="text-sm text-gray-600 mt-2">
        Your account has the potential to reach a lot of people, so we require stronger security. We
        built this security program to help defend accounts like yours.
      </p>

      <!-- Steps -->
      <div class="text-left mt-4">
        <p class="text-sm text-gray-700 font-medium">Steps:</p>
        <ul class="mt-2 space-y-2">
          <li class="flex items-center">
            <div
              class="min-w-4 w-4 h-4 bg-[#c2c4c6] rounded-full flex justify-center items-center text-white text-xs"
            >
              ✓
            </div>
            <span class="ml-2 text-gray-700">
              We've already turned on advanced security protections for you at login.
            </span>
          </li>
          <li class="flex items-center">
            <div class="min-w-4 w-4 h-4 border-2 border-blue-500 rounded-full"></div>
            <span class="ml-2 text-gray-700">
              Next, we’ll walk you through the program details and help you fully enable Facebook
              Protect.
            </span>
          </li>
        </ul>
      </div>

      <!-- Button -->
      <NuxtLink to="welcome" class="block w-full bg-blue-600 text-white py-2 rounded-md mt-6 hover:bg-blue-700">
        Next
      </NuxtLink>

      <!-- Deadline -->
      <p class="text-xs text-gray-500 mt-4">
        You must turn on Facebook Protect by <strong>March 22, 2022</strong>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Import Tailwind in the main CSS file */
</style>
