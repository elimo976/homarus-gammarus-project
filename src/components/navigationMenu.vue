<template>
  <nav class="z-10 bg-custom-blue text-white lg:py-2 md:py-0">
    <!-- Hamburger Menu per schermi piccoli -->
    <div class="md:hidden flex justify-end px-4 py-3">
      <button @click="toggleMenu" class="text-white">
        <!-- Icona Hamburger -->
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-5 h-0.5 bg-white mb-1 ml-auto"></span>
        <span class="block w-4 h-0.5 bg-white ml-auto"></span>
      </button>
    </div>

    <!-- Menu laterale per schermi piccoli -->
    <div
      v-if="menuOpen && !isMdOrLarger"
      class="fixed top-0 right-0 bg-custom-blue text-white w-64 py-4 px-6 h-full shadow-lg z-50"
    >
      <button @click="toggleMenu" class="text-white text-2xl absolute top-4 right-4">
        <span class="block w-6 h-0.5 bg-white mb-1 rotate-45 transform origin-center"></span>
        <span class="block w-6 h-0.5 bg-white -rotate-45 transform origin-center"></span>
      </button>
      <div class="space-y-4 mt-8">
        <div v-for="item in menuItems" :key="item.title">
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="toggleSubmenu(item)"
          >
            <RouterLink
              :to="item.link"
              class="text-xl py-2 block focus:text-gray-800 active:text-gray-600"
              >{{ item.title }}</RouterLink
            >
            <span v-if="item.children" class="text-xl">{{ item.submenuOpen ? '−' : '▿' }}</span>
          </div>
          <div v-if="item.submenuOpen" class="pl-4">
            <RouterLink
              v-for="subItem in item.children"
              :key="subItem.title"
              :to="subItem.link"
              class="block py-1 text-lg focus:text-custom-blue-navy active:text-custom-blue-navy"
              >{{ subItem.title }}</RouterLink
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Menu per schermi medi con sottomenu a comparsa -->
    <div v-if="isMdOrLarger && !isLgOrLarger" class="flex flex-col items-center w-full">
      <div v-for="item in menuItems" :key="item.title" class="w-full">
        <div
          class="flex justify-between items-center w-full cursor-pointer"
          @click="toggleSubmenu(item)"
        >
          <RouterLink
            :to="item.link"
            class="text-xl block py-2 text-white w-full text-center hover:bg-custom-blue-dark hover:text-gray-800 focus:text-custom-blue-navy active:text-custom-blue-navy border-b border-custom-blue-light"
          >
            {{ item.title }}
          </RouterLink>
        </div>
        <div v-if="item.submenuOpen && item.children" class="flex flex-col items-center">
          <RouterLink
            v-for="(subItem, index) in item.children"
            :key="subItem.title"
            :to="subItem.link"
            :class="[
              'block w-full py-1 text-lg text-center hover:bg-custom-blue-light hover:text-custom-blue-navy',
              index === item.children.length - 1 ? 'border-b-0' : '',
            ]"
          >
            {{ subItem.title }}
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Menu orizzontale per schermi grandi -->
    <div v-if="isLgOrLarger" class="hidden lg:flex justify-center space-x-8 relative">
      <div
        v-for="item in menuItems"
        :key="item.title"
        class="relative group"
        @mouseenter="openSubmenu(item)"
        @mouseleave="closeSubmenuWithDelay(item)"
      >
        <RouterLink
          :to="item.link"
          class="py-2 px-4 hover:text-gray-800 flex items-center space-x-2"
        >
          <span>{{ item.title }}</span>
          <span v-if="item.children">{{ item.submenuOpen ? '−' : '▿' }}</span>
        </RouterLink>
        <div
          v-if="item.children && item.submenuOpen"
          class="absolute bg-custom-blue text-white mt-2 shadow-lg w-full"
        >
          <RouterLink
            v-for="subItem in item.children"
            :key="subItem.title"
            :to="subItem.link"
            class="block px-4 py-2 hover:bg-custom-blue-light hover:text-custom-blue-navy whitespace-nowrap border-b border-gray-200 last:border-0"
            >{{ subItem.title }}</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

interface MenuItem {
  title: string
  link: string
  children?: { title: string; link: string }[]
  submenuOpen?: boolean
  timeoutId?: ReturnType<typeof setTimeout>
}

const menuOpen = ref(false)
const isMdOrLarger = ref(false)
const isLgOrLarger = ref(false)

const { t } = useI18n()

const menuItems = ref<MenuItem[]>([
  {
    title: 'Home',
    link: '/',
    submenuOpen: false,
    children: [
      { title: t('aboutUs'), link: '/cismar' },
      { title: t('lobster'), link: '/astice' },
    ],
  },
  {
    title: t('conservation'),
    link: '/conservazione',
    submenuOpen: false,
    children: [
      { title: t('releases'), link: '/allevamento' },
      { title: t('results'), link: '/risultati' },
    ],
  },
  {
    title: t('research'),
    link: '/ricerca',
    submenuOpen: false,
    children: [
      { title: t('project'), link: '/progetti' },
      { title: t('publications'), link: '/pubblicazioni' },
    ],
  },
  {
    title: t('thirdMission'),
    link: '/terza-missione',
    submenuOpen: false,
    children: [
      { title: t('conferences'), link: '/conferenze' },
      { title: t('orientation'), link: '/orientamento' },
      { title: 'Media', link: '/media' },
    ],
  },
])

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const toggleSubmenu = (item: MenuItem) => {
  item.submenuOpen = !item.submenuOpen
}

const openSubmenu = (item: MenuItem) => {
  if (item.timeoutId) clearTimeout(item.timeoutId)
  item.submenuOpen = true
}

const closeSubmenuWithDelay = (item: MenuItem) => {
  item.timeoutId = setTimeout(() => {
    item.submenuOpen = false
  }, 200)
}

const updateScreenSize = () => {
  isMdOrLarger.value = window.innerWidth >= 768 && window.innerWidth < 1024
  isLgOrLarger.value = window.innerWidth >= 1024
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})
</script>

<style scoped>
nav div.group div.absolute {
  min-width: 230px;
}
</style>
