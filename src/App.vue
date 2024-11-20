<script setup lang="ts">
import AppHeader from './components/appHeader.vue'
import AppHero from './components/appHero.vue'
import AppFooter from './components/appFooter.vue'
import NavigationMenu from './components/navigationMenu.vue'

import 'font-awesome/css/font-awesome.css'
import HomePage from './components/homePage.vue'
import AppCookie from './components/AppCookie.vue'
</script>

<template>
  <div id="app" class="flex flex-col w-full min-h-screen bg-gray-50">
    <router-view />
    <AppHeader />
    <NavigationMenu />
    <AppHero />
    <HomePage />
    <AppFooter />
    <AppCookie />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
