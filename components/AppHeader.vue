<template>
  <header class="app-header">
    <app-sidebar :menu-links="menuLinks" v-model="drawer" />
    <c-toolbar>
      <template #start>
        <div class="buttons">
          <app-burger-menu
            class="bg-color-light"
            size="2.5"
            @click="drawer = true"
            :active="drawer"
          />

          <app-logo />
        </div>
      </template>
      <template #end>
        <div class="buttons hide-md-and-down">
          <c-button
            tag="nuxt-link"
            v-for="link in menuLinks"
            :to="{ name: link.path }"
            :key="link.path"
            class="is-primary"
          >
            {{ link.name }}
          </c-button>
        </div>
      </template>
    </c-toolbar>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api';
import { IMenuLink } from '../interfaces';
import AppSidebar from '../components/AppSidebar.vue';
import CToolbar from '../components/ui/CToolbar.vue';
import AppBurgerMenu from '../components/AppBurgerMenu.vue';
import AppLogo from '../components/AppLogo.vue';
export default defineComponent({
  components: {
    AppSidebar,
    CToolbar,
    AppBurgerMenu,
    AppLogo
  },
  setup() {
    const isAnimation = ref(true);
    const drawer = ref(false);
    const menuLinks: Ref<IMenuLink[]> = ref([
      {
        name: 'Home',
        path: 'index'
      },
      {
        name: 'About',
        path: 'about'
      },
      {
        name: 'Works',
        path: 'works'
      },
      {
        name: 'Blog',
        path: 'blog'
      }
    ]);

    return {
      isAnimation,
      drawer,
      menuLinks
    };
  }
});
// export default {
//   data() {
//     return {
//       isAnimation: true,
//       drawer: false,
//       menuLinks: [
//         {
//           name: 'Home',
//           path: 'index'
//         },
//         {
//           name: 'About',
//           path: 'about'
//         },
//         {
//           name: 'Works',
//           path: 'works'
//         },
//         {
//           name: 'Blog',
//           path: 'blog'
//         }
//       ]
//     };
//   },
//   components: {
//     AppSidebar,
//     CToolbar,
//     AppBurgerMenu,
//     AppLogo
//   }
// };
</script>
