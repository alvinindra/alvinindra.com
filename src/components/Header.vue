<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <header class="header">
    <span class="header__inner">
      <router-link to="/">
        <div class="logo">
          <span class="logo__mark">&gt;</span>
          <span class="logo__text <sm:hidden">alvinindra.com</span>
          <span class="logo__text sm:hidden">AIP</span>
          <span class="logo__cursor"></span>
        </div>
      </router-link>
      <span class="header__right">
        <nav class="menu">
          <ul class="menu__inner">
            <li>
              <router-link class="flex" to="/blog">
                <span class="<sm:hidden">Blog</span>
                <carbon-blog class="sm:hidden" />
              </router-link>
            </li>
            <li>
              <router-link class="flex" to="/projects">
                <span class="<sm:hidden">Projects</span>
                <carbon-folder-details class="sm:hidden" />
              </router-link>
            </li>
            <li>
              <router-link class="flex" to="/about">
                <span class="<sm:hidden">About</span>
                <carbon-border-full class="sm:hidden" />
              </router-link>
            </li>
          </ul>
        </nav>
        <span class="theme-toggle">
          <a
            class="icon-btn mx-2 text-size-1.2rem leading-0 !outline-none"
            title="Toggle Dark"
            @click="toggleDark"
          >
            <carbon-moon v-if="isDark" />
            <carbon-sun v-else />
          </a>
        </span>
      </span>
    </span>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 1140px;
    max-width: 100%;
  }

  &__right {
    display: flex;
    flex-direction: row;
    align-items: center;

    .menu {
      z-index: 9999;

      a {
        margin-right: 15px;
        text-decoration: none;

        &:last-of-type {
          margin-right: 0;
        }
      }

      &__inner {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        max-width: 100%;
        margin: 0 auto;
        font-size: 1rem;
        list-style: none;

        li {
          margin: 0 12px;

          a {
            .dark &:hover {
              color: white;
            }
          }
        }
      }
    }

    .theme-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      cursor: pointer;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    font-family: monospace, monospace;

    &__mark {
      margin-right: 5px;
    }

    &__text {
      font-size: 1.125rem;
    }

    &__cursor {
      display: inline-block;
      width: 10px;
      height: 1rem;
      background: #fe5186;
      margin-left: 5px;
      border-radius: 1px;
      animation: cursor 1s infinite;
    }
  }
}

.dark .header {
  background: #252627;
}

@media (prefers-reduced-motion: reduce) {
  .logo__cursor {
    animation: none;
  }
}
@keyframes cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 330px) {
  .header {
    .logo {
      &__mark {
        font-size: 0.75rem;
      }

      &__text {
        font-size: 0.75rem;
      }
    }
  }
}
</style>
