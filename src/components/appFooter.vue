<template>
  <footer
    class="w-full bg-gradient-to-r from-custom-blue-dark to-custom-blue text-white py-6 px-4 mt-auto"
  >
    <div class="text-center">
      <h1 class="mb-2 text-lg text-black">{{ $t('textFooter') }}</h1>
      <p class="text-sm">
        &copy; 2024
        <a
          href="mailto:elisamorreale@gmail.com"
          aria-label="Contattami via email"
          class="hover:underline"
        >
          <span class="text-red-500">e</span>lisa<span class="text-red-500">m</span>orreale</a
        >. {{ $t('rightsReserved') }}.
      </p>
      <div class="mt-4 space-x-4">
        <RouterLink to="/privacy" class="hover:text-gray-300">{{ $t('privacyPolicy') }}</RouterLink>
        <RouterLink to="/terms" class="hover:text-gray-300">{{ $t('termsService') }}</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
