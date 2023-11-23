<script setup lang="ts">
import { useProjects } from '~/composables/useProjects'
const { listSkills } = useProjects()
</script>

<template>
  <div class="text-left">
    <h1 class="text-2xl sm:text-3xl mb-5 font-bold dark:text-white">
      Skills
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <CardSkill v-for="skill in listSkills" :key="skill.id" :skill="skill" />
    </div>
  </div>
</template>
