---
title: 'Build a modal component with Vue 3'
---

<p>
 In this article we build modal component using Vue 3
	<code class="language-js">v-model</code> and also work with built-in
	<code class="language-js">Teleport</code> component. So, let's start.
</p>
<h3 class="title-1 mt-2 text-color-primary">
	<a href="https://yuriiholskiy.github.io/portfolio/blog/vue_teleport#setting-up-the-project">
		#
	</a>
	Setting up the project
</h3>
<section id="setting-up-the-project">
	<p class="mt-half">
		To create a project I use this minimal webpack setup for Vue 3 (beta) 
		<c-button
			tag="a"
			class="is-primary is-small"
			href="https://github.com/vuejs/vue-next-webpack-preview"
		>Vue next</c-button> 
		or You can use experimental
		<c-button
			tag="a"
			class="is-primary is-small"
			href="https://github.com/vuejs/vue-cli-plugin-vue-next"
		>
			vue-cli-plugin-vue-next
		</c-button>
		.
	</p>
	<p>Also, You can play with 
		<c-button
			tag="a"
			class="is-primary is-small"
			href="https://github.com/vitejs/vite">Vite</c-button>. It's a opinionated web dev build tool that serves your code via native ES Module imports during dev and bundles it with 
			<c-button
				tag="a"
				class="is-primary is-small"
				href="https://rollupjs.org/">Rollup</c-button> for production.
	</p>
</section>

<p>In this case I use webpack setup.</p>
<h3 class="title-1 mt-2 text-color-primary">
	<a href="https://yuriiholskiy.github.io/portfolio/blog/vue_teleport#project-files-overview">
		#
	</a>
	Project files overview
</h3>

<section id="project-files-overview">
	<p class="mt-half mb-1">In the <code class="language-js">main.js</code> file we have:</p>

```js[main.js]
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

<p class="mt-1">
	Here we using new Vue 3 api, importing
	<code class="language-js">createApp</code> and mounting
	<code class="language-js">App.vue</code> component into
	<code class="language-js">&lt;div id="app"&gt;&lt;/div&gt;</code>.
</p>
<p>Pretty similar to Vue 2, right?</p>
<p class="mb-1">
	In <code class="language-js">App.vue</code>
	we create:
</p>

```html[index.html]
<link rel="stylesheet" href="/dist/main.css" />

<div id="app"></div>
<script src="/dist/main.js"></script>
```

```vue[App.vue]
<template>
	<h1>Hello Vue 3!</h1>
	<button @click="isModalShow = !isModalShow">
		Click to open modal
	</button>
	<app-modal v-model:modal="isModalShow" />
</template>

<script>
import { ref } from 'vue';
import AppModal from './components/AppModal.vue';

export default {
	components: { AppModal },
	setup() {
		const isModalShow = ref(false);
		return {
			isModalShow
		};
	}
};
</script>
```

<p class="mt-1">Since, Vue 3 support multiple root nodes we no need a wrap element around.</p>
<p>There are we have a heading, button that open a modal and a modal component.</p>
<p>In script section we using composition api ("<strong>setup</strong>" option and "<strong>ref</strong>" function) and create "<strong>isModalShow</strong>" variable which is used in <code class="language-js">v-model</code> on modal component.</p>
<p>
	Notice that in Vue 3 we have argument on
	<code class="language-js">v-model</code>
	directive since it's api changed. Moreover, it supports multiple
	<code class="language-js">v-model</code> on the same element. Your can read
	more on
	<c-button
	  tag="a"
		class="is-primary is-small"
		href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0005-replace-v-bind-sync-with-v-model-argument.md"
	>
		rfc
	</c-button>.
</p>

<p class="mt-1">Next, go to the <code class="language-js">AppModal</code> component</p>
</section>

<h3 class="title-1 mt-2 text-color-primary">
	<a href="https://yuriiholskiy.github.io/portfolio/blog/vue_teleport#modal-component">
		#
	</a>
	Create modal component
</h3>

<section id="modal-component">

```vue[AppModal.vue]
<template>
	<transition name="modal-fade" mode="out-in">
		<div
			class="app-modal-backdrop"
			v-if="modal"
			@click.self="$emit('update:modal', false)"
		>
			<div class="app-modal">
				I am modal component
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'AppModal',
	props: {
		modal: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped>
.app-modal-backdrop {
	position: fixed;
	z-index: 9999;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.7);
}

.app-modal {
	background-color: #ffffff;
	overflow-x: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #000;
	flex-basis: 50%;
	padding: 2rem 0;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
	opacity: 0;
	transform: skewX(8deg);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity 0.5s ease, transform 0.3s;
}
</style>
```

<p class="mt-1">
	Here we accept the <code class="language-js">modal</code> prop according to
	<code class="language-js">v-model</code> argument and use this value to
	dynamically showing modal. Also, when clicking on modal backdrop (using
	<code class="language-js">.self</code> modifier) we emit event
	<code class="language-js">update:modal</code> and pass the
	<code class="language-js">isModalShow</code> to
	<code class="language-js">false</code> (i.e. close the modal).
	</p>
	<p>
	For more information about new <code class="language-js">v-model</code> on
	components check the documentation
	<c-button
	  tag="a"
		class="is-primary is-small"
		href="https://vuejs.org/v2/guide/forms.html#v-model-with-Components"
	>
		here
	</c-button>
	.
</p>
<p>Also, we using transition component to show/hide modal with pretty animation. Notice that classname <code class="language-js">v-enter</code> now renamed to <code class="language-js">v-enter-from</code> and the same for v-leave: <code class="language-js">v-leave</code> now is <code class="language-js">v-leave-from</code>.</p>
<p>You can read more on <c-button class="is-primary is-small" tag="a" href="https://github.com/vuejs/rfcs/pull/105">rfc</c-button>.</p>

<p class="mt-1">On the videos You can see how it looks</p>
<video class="mt-half" controls type="video/mp4" src="videos/modal.mp4"></video>
</section>

<h3 class="title-1 mt-2 text-color-primary">
	<a href="https://yuriiholskiy.github.io/portfolio/blog/vue_teleport#teleport-component">
		#
	</a>
	Teleport component
</h3>

<section id="teleport-component">
<p>
	But if for some reason we want to render modal in other element like
	<code class="language-js">&lt;div class="modal"&gt;&lt;/div&gt;</code>
	or something else.
</p>

<p>
	And Vue 3 give that to us by <code class="language-js">Teleport</code> built-in component
	which allows to move its slot content to another part of the document.
</p>
<p>
As usual You can read more on <c-button class="is-primary is-small" tag="a" href="https://github.com/vuejs/rfcs/pull/112">rfc</c-button>.
</p>

<p>In <code class="language-js">index.html</code> now we need element with class "modal"</p>

```html[index.html]
<link rel="stylesheet" href="/dist/main.css" />

<div id="app"></div>
<div class="modal"></div>
<script src="/dist/main.js"></script>
```

<p class="mt-1">Now App.vue</p>

```vue[App.vue]
<template>
	<div>
		<h1>Hello Vue 3!</h1>
		<app-button @click="isModalShow = !isModalShow">
			Click to open modal
		</app-button>
		<teleport to=".modal">
			<app-modal v-model:modal="isModalShow" />
		</teleport>
	</div>
</template>

<script>
import { ref } from 'vue';
import AppModal from './components/AppModal.vue';

export default {
	components: { AppModal },
	setup() {
		const isModalShow = ref(false);
		return {
			isModalShow
		};
	}
};
</script>
```

<p>Here we have a teleport component and content that need to be teleported passed via slots.</p>
<p>For teleport component we have a required prop "<strong>to</strong>" that accepted a valid CSS selector (i.e. id, class, etc.)</p>

<p class="mt-1">And voila, our modal component rendered in <code class="language-js">&lt;div class="modal"&gt;&lt;/div&gt;</code></p>

<video class="mt-1" controls type="video/mp4" src="videos/modal-teleport.mp4"></video>

</section>

<h3 class="title-1 mt-2 text-color-primary">
	<a href="https://yuriiholskiy.github.io/portfolio/blog/vue_teleport#conclusions">
		#
	</a>
	Conclusions
</h3>

<section id="conclusions">
	<p>
	In this article we created a modal component using Vue 3 composition api, understood the new <code class="language-js">v-model</code> and <code class="language-js">transition</code> api. Also, worked with a <code class="language-js">teleport</code> component.
	</p>
	<p>
	That's all. Hope You enjoyed.
	</p>
	<div class="buttons">
		<c-button class="mt-1 is-primary" tag="nuxt-link" to="/">
			Home
		</c-button>
		<c-button class="mt-1 is-primary" tag="nuxt-link" to="/blog">
			Back to blog
		</c-button>
	</div>
</section>
