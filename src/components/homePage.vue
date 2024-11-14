<template>
  <main class="w-full flex-grow bg-gray-50 p-8 md:p-12 lg:p-24">
    <section class="space-y-12">
      <!-- Titolo principale -->
      <h2 class="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10">
        {{ $t('homeTitle') }}
        <!-- Traduzione del titolo -->
      </h2>
      <p class="text-lg text-center text-gray-600 mb-16">
        {{ $t('homeIntro') }}
      </p>

      <!-- Gli elementi principali -->
      <div
        ref="element1"
        class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
      >
        <img
          src="@/assets/images/image1.jpg"
          alt="Caratteristica 1"
          class="w-48 h-48 object-cover rounded-full shadow-lg opacity-0 transform scale-90 transition-all"
        />
        <div class="text-center md:text-left max-w-md">
          <h3 class="text-2xl font-semibold text-gray-800">{{ $t('characteristic1') }}</h3>
          <!-- Traduzione caratteristica 1 -->
          <p class="text-gray-600 md:mr-6">{{ $t('description1') }}</p>
          <!-- Traduzione della descrizione -->
        </div>
      </div>

      <div
        ref="element2"
        class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
      >
        <img
          src="@/assets/images/image2.jpg"
          alt="Caratteristica 2"
          class="w-48 h-48 object-cover rounded-full shadow-lg opacity-0 transform scale-90 transition-all"
        />
        <div class="text-center md:text-left md:mr-6 max-w-md">
          <h3 class="text-2xl font-semibold text-gray-800">{{ $t('characteristic2') }}</h3>
          <!-- Traduzione caratteristica 2 -->
          <p class="text-gray-600">{{ $t('description2') }}</p>
          <!-- Traduzione della descrizione -->
        </div>
      </div>

      <div
        ref="element3"
        class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
      >
        <img
          src="@/assets/images/image3.jpg"
          alt="Caratteristica 3"
          class="w-48 h-48 object-cover rounded-full shadow-lg opacity-0 transform scale-90 transition-all"
        />
        <div class="text-center md:text-left max-w-md">
          <h3 class="text-2xl font-semibold text-gray-800">{{ $t('characteristic3') }}</h3>
          <!-- Traduzione caratteristica 3 -->
          <p class="text-gray-600 md:mr-6">{{ $t('description3') }}</p>
          <!-- Traduzione della descrizione -->
        </div>
      </div>

      <div
        ref="element4"
        class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
      >
        <img
          src="@/assets/images/image4.jpg"
          alt="Caratteristica 4"
          class="w-48 h-48 object-cover rounded-full shadow-lg opacity-0 transform scale-90 transition-all"
        />
        <div class="text-center md:text-left md:mr-6 max-w-md">
          <h3 class="text-2xl font-semibold text-gray-800">{{ $t('characteristic4') }}</h3>
          <!-- Traduzione caratteristica 4 -->
          <p class="text-gray-600">{{ $t('description4') }}</p>
          <!-- Traduzione della descrizione -->
        </div>
      </div>

      <div
        ref="element5"
        class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
      >
        <img
          src="@/assets/images/image5.jpg"
          alt="Caratteristica 5"
          class="w-48 h-48 object-cover rounded-full shadow-lg opacity-0 transform scale-90 transition-all"
        />
        <div class="text-center md:text-left max-w-md">
          <h3 class="text-2xl font-semibold text-gray-800">{{ $t('characteristic5') }}</h3>
          <!-- Traduzione caratteristica 5 -->
          <p class="text-gray-600 md:mr-6">{{ $t('description5') }}</p>
          <!-- Traduzione della descrizione -->
        </div>
      </div>
    </section>
    <ScrollTopButton />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollTopButton from './scrollTopButton.vue'

gsap.registerPlugin(ScrollTrigger)

const element1 = ref<HTMLElement | null>(null)
const element2 = ref<HTMLElement | null>(null)
const element3 = ref<HTMLElement | null>(null)
const element4 = ref<HTMLElement | null>(null)
const element5 = ref<HTMLElement | null>(null)

const animateOnScroll = () => {
  const elements = [element1, element2, element3, element4, element5]

  elements.forEach((el, index) => {
    if (el.value) {
      const imgElement = el.value.querySelector('img') as HTMLImageElement | null
      if (imgElement) {
        // Controlla che imgElement non sia null
        gsap.set(imgElement, { opacity: 1, scale: 1 }) // Imposta valori visibili di base
        gsap.fromTo(
          imgElement,
          {
            opacity: 0,
            scale: 0.9,
            x: -30,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.2,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el.value,
              start: 'top 80%',
              end: 'top 20%',
              once: true,
            },
          },
        )
      }
    }
  })
}

onMounted(() => {
  animateOnScroll()
})
</script>

<style scoped>
/* Eventuali stili extra */
</style>
