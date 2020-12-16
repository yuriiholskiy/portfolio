<template>
  <button
    type="button"
    aria-label="Open sidebar"
    class="burger-menu"
    :style="sizes"
    v-on="$listeners"
  >
    <span
      class="burger-menu-item bg-color-dark"
      :class="{ active: active }"
    ></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api';
export default defineComponent({
  props: {
    size: {
      type: String,
      default: '2'
    },
    active: Boolean
  },
  setup(props) {
    const sizes = computed(() => ({
      width: props.size + 'rem',
      height: props.size + 'rem'
    }));

    return {
      sizes
    };
  }
});
</script>

<style lang="scss">
.burger-menu {
  border: none;
  padding: 0 1rem;
  cursor: pointer;
  display: block;
  position: relative;
  border-radius: 50%;
  @include transition(0.3s background-color);
  &:hover {
    background-color: var(--secondary-light-color);
  }
  &:focus {
    outline: none;
  }
  &:focus,
  &:active {
    box-shadow: 0 0 0 0.2rem var(--secondary-color);
  }
  &-item,
  &-item::before,
  &-item::after {
    position: absolute;
    display: inline-block;
    width: 24px;
    height: 2px;
    transition: 0.3s transform;
  }
  &-item {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &::before,
    &::after {
      background-color: inherit;
      content: '';
      left: 50%;
      transform: translateX(-50%);
    }
    &::before {
      top: 7px;
    }
    &::after {
      top: -7px;
    }
  }
  &-item.active {
    height: 0;
    &::before {
      transform: translateX(-50%) rotate(135deg);
      top: 0;
    }
    &::after {
      transform: translateX(-50%) rotate(-135deg);
      top: 0;
    }
  }
}
</style>
