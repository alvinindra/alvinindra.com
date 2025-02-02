<script setup lang="ts">
const target = ref<any>(null)
const parallax = reactive(useParallax(target))
</script>

<template>
  <div ref="target" class="max-w-1100px mx-auto">
    <SectionJumbotron :parallax="parallax" class="mb-25" />
    <SectionProjects class="mb-25 animated animate-fadeInUp" />
    <SectionExperience class="mb-25 animated animate-fadeInUp" />
    <SectionSkill class="mb-25 animated animate-fadeInUp" />
  </div>
</template>
