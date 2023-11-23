<script setup lang="ts">
const isDark = useDark()
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <a :href="project.url" target="_blank" class="card">
    <img class="card-img" :src="project.cover" alt="">
    <div class="card-body">
      <h1 class="card-body__title">
        {{ project.name }}
      </h1>
      <div class="flex flex-col">
        <div class="mb-4 text-sm dark:text-light-900 h-60px <sm:h-auto line-clamp-3">{{ project.description }}</div>
        <div class="mt-auto">
          <div class="flex relative">
            <component
              :is="ts.icon"
              v-for="ts in project.techstack"
              :key="ts.id"
              :class="isDark ? 'fill-white' : ''"
              class="text-xl w-24px h-24px mr-3"
            />
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<style lang="scss">
.card {
  @apply rounded-md bg-#fafafa dark:shadow-gray-600 dark:bg-dark-200 no-underline
  shadow-md dark:shadow-none hover:shadow-lg dark:hover:shadow-xl relative overflow-hidden;

  &-img {
    @apply w-full h-200px object-cover rounded-t-md
    relative overflow-hidden;
  }

  &-body {
    @apply p-4 overflow-hidden relative z-10;

    &__title {
      @apply text-dark-50 dark:text-white text-lg font-sans font-semibold mb-2;
    }
  }
}
</style>
