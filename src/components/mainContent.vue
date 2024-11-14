<template>
  <main class="w-full flex-grow bg-gray-50 p-8 md:p-12 lg:p-24">
    <section class="space-y-12">
      <h2 class="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10">
        Scopri di più sul nostro progetto
      </h2>
      <p class="text-lg text-center text-gray-600 mb-16">
        Homarus Gammarus è un'iniziativa dedicata a...
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
          <h3 class="text-2xl font-semibold text-gray-800">Caratteristica 1</h3>
          <p class="text-gray-600 md:mr-6">Bre ve descrizione della prima caratteristica.</p>
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
          <h3 class="text-2xl font-semibold text-gray-800">Caratteristica 2</h3>
          <p class="text-gray-600">Breve descrizione della seconda caratteristica.</p>
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
          <h3 class="text-2xl font-semibold text-gray-800">Caratteristica 3</h3>
          <p class="text-gray-600 md:mr-6">Breve descrizione della terza caratteristica.</p>
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
          <h3 class="text-2xl font-semibold text-gray-800">Caratteristica 4</h3>
          <p class="text-gray-600">Breve descrizione della quarta caratteristica.</p>
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
          <h3 class="text-2xl font-semibold text-gray-800">Caratteristica 5</h3>
          <p class="text-gray-600 md:mr-6">Breve descrizione della quinta caratteristica.</p>
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
