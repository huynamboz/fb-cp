<template>
  <div class="max-md:min-h-lvh flex flex-col items-center justify-center h-lvh bg-gray-50">
    <div
      class="max-w-[800px] min-h-[80vh] md:max-h-[80vh] gap-6 flex flex-col max-md:justify-between max-md:h-full p-6 bg-white shadow-lg max-md:shadow-none rounded-lg"
    >
      <div class="w-full h-full flex flex-col overflow-hidden">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <div class="rounded-full p-2">
              <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 2a10 10 0 0110 10v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2v-5A10 10 0 0112 2z"
                />
              </svg> -->
              <img class="w-[30px]" src="@Assets/images/fb-logo.webp" alt="" />
            </div>
            <!-- <span class="opacity-0 ml-4 text-lg font-medium text-gray-800"> Facebook Protect </span> -->
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#6B7280"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div class="flex justify-center flex-auto overflow-hidden">
          <img class="h-full object-contain" src="@Assets/images/protect-1.png" alt="" />
        </div>

        <h2 class="mt-4 text-xl font-semibold text-gray-900">
          {{ $t('step1.title') }}
        </h2>
        <p class="mt-2 text-gray-700">
          {{ $t('step1.description') }}
        </p>

        <div class="flex gap-3 mt-4 bg-[#eff1f5] p-4 rounded-md">
          <svg
            class="min-w-[24px]"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="30" height="29" fill="url(#pattern0_4606_6)" />
            <defs>
              <pattern
                id="pattern0_4606_6"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image0_4606_6" transform="scale(0.0166667 0.0172414)" />
              </pattern>
              <image
                id="image0_4606_6"
                width="60"
                height="58"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>

          <p class="">
            <!-- Turn on Facebook Protect before <strong>29 Oct 2023</strong>. After that, you may be
            locked out of your Facebook account until you turn it on. -->
            <strong>{{ $t('step1.warning_title') }}</strong> <br />
            {{ $t('step1.warning_description') }}
          </p>
        </div>
      </div>

      <NuxtLink
        to="/step-2"
        class="block w-full bg-blue-600 text-white text-center py-3 rounded-md shadow hover:bg-blue-700 transition"
      >
        {{ $t('step1.btn') }}
      </NuxtLink>
    </div>
  </div>
</template>
