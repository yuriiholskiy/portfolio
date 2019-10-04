<template>
	<transition name="modal-fade">
    <div class="c-modal-backdrop" v-if="value" @click.self="$emit('close-modal', !value)">
      <div class="c-modal">
      	 <header class="c-modal-header">
          <slot name="header">
            This is the default title!
          </slot>
        </header>
        <section class="c-modal-body">
          <slot name="body">
            I'm the default body!
          </slot>
        </section>
        <footer class="c-modal-footer">
          <slot name="footer">
            I'm the default footer!
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
	name: 'CModal',
	model: {
		event: 'close-modal'
	},
	props: {
		value: Boolean
	},
	beforeDestroy() {
		this.$emit('close-modal', false);
	}
}
</script>

<style lang="scss" scoped>
.c-modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-modal {
  background-color: #FFFFFF;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  color: map-get($colors, dark);
  flex-basis: 50%;
  @media screen and (max-width: 700px) {
    flex-basis: 90%;
  }
}

.c-modal-body {
  position: relative;
  padding: 2rem 4rem;
  @media screen and (max-width: 700px) {
    padding: 2rem 1rem;
  }
}
.c-modal-header,
.c-modal-footer {
  padding: 1rem;
  display: flex;
}

.c-modal-header {
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
}

.c-modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}
</style>