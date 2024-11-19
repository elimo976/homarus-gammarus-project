<template>
  <header class="relative w-full py-8 px-8 shadow-md bg-white">
    <div
      class="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between"
    >
      <!-- Logo a sinistra, ma sopra nel layout mobile -->
      <div class="flex-shrink-0 order-1 md:order-1 mb-4 md:mb-0">
        <img
          src="@/assets/loghi/logo-astice-fronte-cerchio-sfondobianco.svg"
          alt="Logo"
          class="h-20 w-auto"
        />
      </div>

      <!-- Titolo centrato sopra il logo nei dispositivi mobili -->
      <h1
        class="text-3xl md:text-4xl text-custom-blue font-bold text-center flex-1 order-2 md:order-2 lg:mt-3 md:mt-3 mb-4 md:mb-0"
      >
        Homarus Gammarus
      </h1>

      <!-- Pubblicazioni -->
      <div class="flex-shrink-0 order-3 md:order-3 lg:mt-6 md:mt-6">
        <a
          href="#"
          class="text-lg md:text-xl font-medium text-gray-500 hover:text-custom-blue text-center"
        >
          {{ $t('publication') }}
        </a>
      </div>
    </div>

    <!-- Selettore di lingua -->
    <div class="absolute top-4 right-8 flex space-x-3 text-lg">
      <button
        @click="setLanguage('it')"
        :class="{ 'text-gray-400': language === 'en', 'text-black': language === 'it' }"
      >
        IT
      </button>
      <span>|</span>
      <button
        @click="setLanguage('en')"
        :class="{ 'text-gray-400': language === 'it', 'text-black': language === 'en' }"
      >
        EN
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Variabile di stato per la lingua
const language = ref(localStorage.getItem('language') || 'it')

// Funzione per cambiare la lingua
const setLanguage = (lang: string) => {
  language.value = lang
  localStorage.setItem('language', lang)
  // Aggiorna la rotta per la lingua selezionata
  window.location.href = lang === 'en' ? '/en' : '/'
}

onMounted(() => {
  if (language.value === 'en' && window.location.pathname !== '/en') {
    window.location.href = '/en'
  } else if (language.value === 'it' && window.location.pathname !== '/') {
    window.location.href = '/'
  }
})
</script>
