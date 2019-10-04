<template>
	<transition :name="transitionAxis" mode="out-in">
		<div class="c-snackbar" v-if="value" :class="classes">
			<div class="c-snackbar-content">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'CSnackBar',
	props: {
		value: {
			type: Boolean,
			required: true
		},
		timeout: {
			type: [Number, String],
			default: 2500
		},
		axisY: {
			type: String,
			default: 'top'
		},
		axisX: {
			type: String,
			default: 'center'
		}
	},
	data() {
		return {
			timer: null
		}
	},
	watch: {
		value(val) {
			this.toggleSnackbar();
		}
	},
	computed: {
		classes() {
			return {
				 'c-snackbar-top': this.axisY === 'top',
				 'c-snackbar-bottom': this.axisY !== 'top',
				 'c-snackbar-left': this.axisX === 'left',
				 'c-snackbar-right': this.axisX !== 'left',
				 'c-snackbar-center': this.axisX === 'center'
			}
		},
		transitionAxis() {
			return this.axisY === 'top' ? 'snackbar-top' : 'snackbar-bottom'
		}
	},
	methods: {
		toggleSnackbar() {
			if(this.value) {
				this.timer = setTimeout(() => {
					this.$emit('input', !this.value);
				}, this.timeout);
			} else {
				clearTimeout(this.timer);
			}
		}
	}
}
</script>

<style scoped lang="scss"> 
	.c-snackbar {
		position: fixed;
    display: flex;
    align-items: center;
    color: #fff;
    z-index: 10000;
    font-size: .9rem;
    &-top {
    	top: 1rem;
    }
    &-bottom {
    	bottom: 1rem;
    }
    &-left {
    	left: 1rem !important;
    }
    &-right {
    	right: 1rem !important;
    }
    &-center {
    	left: calc(50% - 10rem);
    }
		&-content {
			width: $snackbar-width;
	    min-height: 48px;
	    padding: 1rem 1.5rem;
	    background-color: #323232;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    overflow: hidden;
	    @media (max-width: 720px) {
	    	width: 100%;
	    }
		}
	}

	.snackbar-top-enter-active,
	.snackbar-top-leave-active {
	  transition: .3s transform;
	}

	.snackbar-top-enter {
		transform: translateY(-100px);
	}
	.snackbar-top-leave-to {
	  transform: translateY(-100px);
	}

	.snackbar-bottom-enter-active,
	.snackbar-bottom-leave-active {
	  transition: .3s transform;
	}

	.snackbar-bottom-enter {
		transform: translateY(100px);
	}
	.snackbar-bottom-leave-to {
	  transform: translateY(100px);
	}
</style>