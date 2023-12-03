<script setup lang="ts">
import type { CSSProperties } from 'vue-demi'
const isMobile = useMediaQuery('(max-width: 500px)')

const props = defineProps({
  parallax: {
    type: Object,
  },
})

const targetStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  transition: '.3s ease-out all',
}
const cardWindowStyle: CSSProperties = {
  fontSize: '6rem',
  position: 'absolute',
  height: '100%',
  width: '100%',
  margin: 'auto',
}
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
}
const containerStyle: CSSProperties = {
  perspective: '300px',
}
const layer0 = computed(() => ({
  ...layerBase,
  transform: isMobile.value
    ? `translateX(${props.parallax?.tilt * 10 - 80}px) translateY(${props.parallax?.roll * 20 - 70}px) 
  rotate(-20deg) scale(0.3)`
    : `translateX(${props.parallax?.tilt * 10 - 100}px) translateY(${props.parallax?.roll * 20 - 70}px) 
  rotate(-20deg) scale(0.5)`,
}))
const layer1 = computed(() => ({
  ...layerBase,
  borderRadius: '10px',
  transform: `translateX(${props.parallax?.tilt * 5}px) translateY(0) scale(1)`,
}))
const layer2 = computed(() => ({
  ...layerBase,
  transform: isMobile.value
    ? `translateX(${props.parallax?.tilt * 10}px) translateY(${props.parallax?.roll * 20 + 150}px) scale(0.35)`
    : `translateX(${props.parallax?.tilt * 10}px) translateY(${props.parallax?.roll * 20 + 130}px) scale(0.5)`,
}))
const layer3 = computed(() => ({
  ...layerBase,
  transform: isMobile.value
    ? `translateX(${props.parallax?.tilt * 10 + 60}px) rotate(20deg) translateY(${props.parallax?.roll * 20 - 70}px) scale(0.3)`
    : `translateX(${props.parallax?.tilt * 10 + 80}px) rotate(20deg) translateY(${props.parallax?.roll * 20 - 70}px) scale(0.5)`,
}))
const cardStyle = computed(() => ({
  background: '#f2f2f2',
  height: '22rem',
  width: '17rem',
  borderRadius: '10px',
  transition: '.3s ease-out all',
  transform: `rotateX(${props.parallax?.roll * 7}deg) rotateY(${props.parallax?.tilt * 7}deg)`,
}))
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="text-left my-auto <md:order-1">
      <h2 class="text-lg sm:text-2xl text-light-150 font-bold mb-1 sm:mb-3 animated animate-delay-200 animate-fadeInUp">
        Hi, I'm Alvin Indra Pratama
      </h2>
      <h1 class="text-xl sm:text-3xl text-green-500 dark:text-white font-bold mb-2 sm:mb-5 animated animate-delay-300 animate-fadeInUp">
        Frontend Engineer
      </h1>
      <p class="text-md sm:text-lg text-justify mb-4 animated animate-delay-400 animate-fadeInUp">
        An Intermediate Frontend Engineer with 4 years of experience. Focusing on tech stack Vue.js and React.js, I am passionate about front-end web development and continue to explore new technologies to improve user experience. My expertise lies in turning designs into high-quality code, leveraging my skills in quickly creating web design, accessibility, and performance.
      </p>
      <ListInfo class="animated animate-delay-600 animate-fadeInUp" />
    </div>
    <div :style="targetStyle" class="mb-5 <sm:py-5 md:mb-0 animated animate-delay-200 animate-fadeIn">
      <div :style="containerStyle" class="container-style">
        <div :style="cardStyle" class="!dark:bg-dark-200">
          <div :style="cardWindowStyle">
            <img
              class="object-contain"
              :style="layer0"
              src="../../assets/images/jumbotron/html5.png"
              alt=""
            >
            <img
              class="object-contain layer-1"
              :style="layer1"
              src="../../assets/images/jumbotron/pp-dicoding-removebg-cropped.png"
              alt=""
            >
            <img
              class="object-contain"
              :style="layer2"
              src="../../assets/images/jumbotron/vuejs.png"
              alt=""
            >
            <img
              class="object-contain"
              :style="layer3"
              src="../../assets/images/jumbotron/css3.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-style {
  @apply ml-auto <md:m-auto;
}

// If want profile become gray in dark theme
// .dark {
//   .layer-1 {
//     filter: grayscale(1);
//   }
// }
</style>
