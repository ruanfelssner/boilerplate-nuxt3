<template>
  <header class="placeHeader">
    <ff-container class="placeHeader-container">
      <div class="placeHeader-logo">
        <router-link to="/">
          <img
            src="@/assets/svgs/logo.svg"
            alt="Logo Fairfax"
          />
        </router-link>
      </div>
      <nav class="placeHeader-nav">
        <ul>
          <li
            v-for="item in menu"
            :key="item.label"
          >
            <a :href="item.url">
              {{ item.label }}
            </a>
          </li>
        </ul>
        <ff-button
          primary-light
          class="w-[184px]"
        >
          Quero ser Corretor
        </ff-button>
        <ff-button
          class="w-32"
          @click="redirectToExternalLink"
        >
          Login
        </ff-button>
      </nav>
    </ff-container>
  </header>
</template>

<script lang="ts">
  export default {
    setup() {
      type Menu = {
        label: string
        url: string
      }

      const menu: Menu[] = [
        {
          label: 'Sobre a Fairfax',
          url: 'https://www.fairfax.com.br/#/'
        }
      ]

      const redirectToExternalLink = () => {
        const url = import.meta.env
          .VITE_FAIRFAX_PLACE_LOGIN_LINK

        window.location.href = url
      }
      return {
        menu,
        redirectToExternalLink
      }
    }
  }
</script>

<style lang="scss">
  .placeHeader {
    @apply w-full pt-14 pb-8;

    &-container {
      @apply flex items-center justify-between h-11;
    }

    &-logo {
      @apply flex flex-shrink-0 items-center mr-16;
    }

    &-nav {
      @apply flex space-x-8 items-center;
      ul {
        @apply flex;
        li {
          @apply mx-6;
          a {
            @apply py-2  text-base text-ellipsis font-normal;
          }
        }
      }
    }

    &-login {
      @apply absolute 
      inset-y-0 
      right-0 
      flex 
      items-center 
      pr-2 
      sm:static 
      sm:inset-auto 
      sm:ml-6 
      sm:pr-0;
    }
  }
</style>
