<template>
	<transition name="modal-fade">
		<div
			id="modal"
			role="dialog"
			class="c-modal-backdrop"
			v-if="modelValue"
			@click.self="closeModal"
		>
			<div class="c-modal">
				<header class="c-modal-header">
					<slot name="header">
						This is the default title!
					</slot>
					<c-button
						v-if="closeButton"
						class="c-modal-close-btn is-small is-flat"
						title="Close modal"
						aria-label="Close modal"
						aria-labelledby="modal"
						@click="closeModal"
					>
						❌
					</c-button>
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
		prop: 'modelValue',
		event: 'update:modelValue'
	},
	props: {
		modelValue: {
			type: Boolean,
			required: true
		},
		lockScroll: {
			type: Boolean,
			deafult: false
		},
		cancelOnEscape: {
			type: Boolean,
			default: true
		},
		closeButton: {
			type: Boolean,
			default: true
		}
	},
	watch: {
		modelValue: {
			handler(val) {
				if (val && this.lockScroll) {
					document.body.style.overflow = 'hidden';
				} else {
					document.body.style.overflow = '';
				}
			}
		},
		immediate: true
	},
	mounted() {
		const handler = ({ code }) => {
			if (this.cancelOnEscape && code === 'Escape') {
				this.closeModal();
			}
		};
		document.addEventListener('keydown', handler);
		this.$once('hook:beforeDestroy', () => {
			document.removeEventListener('keydown', handler);
			this.closeModal();
		});
	},
	methods: {
		closeModal() {
			this.$emit('update:modelValue', false);
		}
	}
};
</script>

<style lang="scss" scoped>
.c-modal-backdrop {
	position: fixed;
	z-index: 9999;
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
	position: relative;
	background-color: var(--bg-color);
	overflow-x: auto;
	display: flex;
	flex-direction: column;
	color: var(--text-color);
	max-height: 650px;
	flex-basis: 70%;
	@media screen and(max-width: map-get($breakpoints, 'tablet')) {
		flex-basis: 100%;
	}
	@media screen and(max-height: map-get($breakpoints, 'phone-wide')) {
		max-height: 350px;
		flex-basis: 90%;
	}
	@media screen and(max-height: map-get($breakpoints, 'phone')) {
		max-height: 300px;
		flex-basis: 90%;
	}
	&-close-btn {
		position: absolute;
		right: 5px;
		top: 15px;
	}
	&-body {
		position: relative;
		padding: 1rem 4rem;
		@media screen and (max-width: map-get($breakpoints , 'tablet-small')) {
			padding: 1rem 1rem;
		}
		@media screen and (max-width: map-get($breakpoints , 'phablet')) {
			max-height: 200px;
			overflow-y: scroll;
		}
	}
	&-header,
	&-footer {
		padding: 0.5rem 1rem 1rem;
		display: flex;
	}
	&-header {
		border-bottom: 1px solid var(--light-color);
		justify-content: center;
	}
	&-footer {
		border-top: 1px solid var(--light-color);
		flex-direction: column;
		align-items: flex-end;
		margin-top: auto;
	}
}

.modal-fade-enter,
.modal-fade-leave-to {
	opacity: 0;
	transform: skewX(5deg);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity 0.5s ease, transform 0.3s;
}
</style>
