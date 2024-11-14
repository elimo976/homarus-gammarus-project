<template>
  <section
    class="z-0 flex flex-col items-center justify-center text-centerw-full bg-gradient-to-r from-custom-blue-dark to-custom-blue text-white"
  >
    <div class="relative w-full shadow-lg">
      <video src="@/assets/video/hero.mp4" autoplay loop muted class="w-full shadow-lg"></video>

      <!-- Bottone posizionato a un terzo della parte inferiore del video -->
      <button
        class="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 bg-custom-blue text-white px-6 py-3 rounded-lg shadow-lg hover:bg-custom-blue-dark transition-300"
      >
        Galleria
      </button>
    </div>
  </section>
</template>
