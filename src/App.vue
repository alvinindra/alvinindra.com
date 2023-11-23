<template>
  <Header />
  <main class="app-container">
    <router-view />
  </main>
</template>

<style lang="scss">
.app-container {
  @apply px-10 md:px-20 py-3 md:py-10;
}

@media (max-width: 330px) {
  .app-container {
    @apply px-5;
  }
}
</style>
