<script setup lang="ts">
defineProps({
  skill: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card flex p-3">
    <component
      :is="skill.icon"
      class="text-3xl my-auto mr-4 w-50px h-50px mr-3"
    />

    <div class="my-auto">
      <div class="mb-2 text-lg">
        {{ skill.title }}
      </div>
      <!-- <div class="w-min bg-green-500 text-white dark:bg-white dark:text-dark-400 min-w-max px-2 rounded-md">
        {{ skill.skill }}
      </div> -->
    </div>
  </div>
</template>
