<script setup lang="ts">
import AppHeader from './components/appHeader.vue'
import AppHero from './components/appHero.vue'
import MainContent from './components/mainContent.vue'
import AppFooter from './components/appFooter.vue'
import NavigationMenu from './components/navigationMenu.vue'

import 'font-awesome/css/font-awesome.css'
</script>

<template>
  <div id="app" class="flex flex-col w-full min-h-screen bg-gray-50">
    <AppHeader />
    <NavigationMenu />
    <AppHero />
    <MainContent />
    <AppFooter />
  </div>
</template>

<style scoped>
/* Assicurati che il contenitore abbia larghezza completa */
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
