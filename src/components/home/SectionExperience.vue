<script setup lang="ts">
import useExperience from '~/composables/useExperience'
const { listExperience } = useExperience()
</script>

<template>
  <div class="text-left">
    <h1 class="text-2xl sm:text-3xl mb-5 font-bold dark:text-white">
      My Experience
    </h1>
    <div class="relative">
      <CardTimeline v-for="exp in listExperience" :key="exp.id" :experience="exp" />
    </div>
  </div>
</template>
