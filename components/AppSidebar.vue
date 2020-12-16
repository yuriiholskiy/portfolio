<template>
  <div class="sidebar">
    <c-overlay :is-open="drawer" @click.self="$emit('update:drawer', false)" />
    <c-nav-drawer v-model="drawer">
      <div class="full-width text-center mt-2 px-1">
        <h3 class="title-1">
          Navigation
        </h3>
        <c-button
          tag="nuxt-link"
          :to="{ name: link.path }"
          v-for="link in menuLinks"
          :key="link.path"
          class="mt-1 is-primary db is-big"
        >
          {{ link.name }}
        </c-button>
        <c-button class="is-info mt-2" @click="changeTheme">
          Change theme ({{ $colorMode.preference }})
        </c-button>
      </div>
    </c-nav-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api';
import CNavDrawer from '../components/ui/CNavDrawer.vue';
import COverlay from '../components/ui/COverlay.vue';

export default defineComponent({
  name: 'AppSidebar',
  model: {
    prop: 'drawer',
    event: 'update:drawer'
  },
  props: {
    menuLinks: {
      type: Array,
      required: true
    },
    drawer: {
      type: Boolean,
      required: true
    }
  },
  components: {
    COverlay,
    CNavDrawer
  },
  setup(props, { root: { $options }, emit }) {
    const changeTheme = () => {
      if ($options!['$colorMode'].preference === 'light') {
        $options['$colorMode'].preference = 'dark';
      } else {
        $options['$colorMode'].preference = 'light';
      }
    };
    return {
      changeTheme
    };
    watch(
      () => '$route.fullPath',
      () => {
        emit('update:drawer', false);
      }
    );
  }
});
</script>
