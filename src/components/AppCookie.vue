<template>
  <div
    class="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center"
    v-if="!isAccepted"
  >
    <div class="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg relative">
      <!-- Bottone di chiusura in alto a destra -->
      <button
        class="absolute top-1 right-3 text-gray-800 hover:text-gray-600 transition"
        @click="rejectCookies"
      >
        <span class="text-2xl font-bold">&times;</span>
      </button>

      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p class="lg:pr-10 p-3 text-lg text-gray-800 font-medium text-justify">
          {{ $t('cookieBanner.message') }}
        </p>
        <div class="flex items-center space-x-4">
          <button
            class="bg-custom-blue-light text-white px-6 py-3 rounded-lg shadow hover:bg-custom-blue-dark transition"
            @click="acceptCookies"
          >
            {{ $t('cookieBanner.accept') }}
          </button>
          <button
            class="bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700 transition"
            @click="rejectCookies"
          >
            {{ $t('cookieBanner.reject') }}
          </button>
          <button
            class="bg-gray-200 text-custom-blue px-6 py-3 rounded-lg shadow hover:bg-custom-blue-dark hover:text-white transition"
            @click="openPreferences"
          >
            {{ $t('cookieBanner.customize') }}
          </button>
        </div>
      </div>

      <!-- Pannello Personalizzazione -->
      <div v-if="showPreferences" class="mt-6 bg-white shadow p-6 rounded-lg">
        <h3 class="text-xl font-semibold text-gray-800 pb-4">
          {{ $t('cookiePreferences.title') }}
        </h3>
        <ul class="space-y-4">
          <li>
            <label class="flex items-center space-x-3">
              <input type="checkbox" v-model="preferences.necessary" disabled />
              <span class="text-gray-700">{{ $t('cookiePreferences.necessary') }}</span>
            </label>
          </li>
          <li>
            <label class="flex items-center space-x-3">
              <input type="checkbox" v-model="preferences.analytics" />
              <span class="text-gray-700">{{ $t('cookiePreferences.analytics') }}</span>
            </label>
          </li>
          <li>
            <label class="flex items-center space-x-3">
              <input type="checkbox" v-model="preferences.marketing" />
              <span class="text-gray-700">{{ $t('cookiePreferences.marketing') }}</span>
            </label>
          </li>
        </ul>
        <div class="mt-6 flex justify-end space-x-4">
          <button
            class="bg-custom-blue text-white px-6 py-3 rounded-lg shadow hover:bg-custom-blue-dark transition"
            @click="savePreferences"
          >
            {{ $t('cookiePreferences.save') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isAccepted = ref(false)
const showPreferences = ref(false)

// Preferenze default
const preferences = ref({
  necessary: true,
  analytics: false,
  marketing: false,
})

// Accetta tutti i cookie
const acceptCookies = () => {
  preferences.value.analytics = true
  preferences.value.marketing = true
  savePreferences()
}

// Rifiuta tutti i cookie (salva in sessionStorage)
const rejectCookies = () => {
  preferences.value.analytics = false
  preferences.value.marketing = false
  sessionStorage.setItem('cookiePreferencesRejected', 'true') // Salva il rifiuto in sessionStorage
  isAccepted.value = true
  showPreferences.value = false
}

// Mostra pannello personalizzazione
const openPreferences = () => {
  showPreferences.value = true
}

// Salva le preferenze nei localStorage e nasconde il banner
const savePreferences = () => {
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences.value)) // Salva in localStorage
  isAccepted.value = true
  showPreferences.value = false
}

// Carica le preferenze salvate al caricamento con validazione
const loadPreferences = () => {
  const savedPreferences = localStorage.getItem('cookiePreferences')
  if (savedPreferences) {
    try {
      const parsedPreferences = JSON.parse(savedPreferences)
      // Validazione delle preferenze
      if (
        typeof parsedPreferences.necessary === 'boolean' &&
        typeof parsedPreferences.analytics === 'boolean' &&
        typeof parsedPreferences.marketing === 'boolean'
      ) {
        preferences.value = parsedPreferences
        isAccepted.value = true
      }
    } catch {
      // In caso di errore nella lettura, resetta le preferenze
      localStorage.removeItem('cookiePreferences')
    }
  }

  // Verifica se il rifiuto è stato registrato nella sessionStorage
  if (sessionStorage.getItem('cookiePreferencesRejected')) {
    isAccepted.value = true
  }
}

loadPreferences()
</script>

<style scoped>
/* Stili per il banner */
.fixed {
  backdrop-filter: blur(5px); /* Aggiunge un effetto sfocato dietro il banner */
}

button {
  transition: all 0.3s ease;
}
</style>
