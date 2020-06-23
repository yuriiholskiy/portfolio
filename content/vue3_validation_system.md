---
title: Build a validation system with Vue 3 and typescript
description: In this article we build a validation system using Vue 3 composition api and typescript
---

<p>How to build a custom validation system with Vue 3 and typescript? In this paper we figure it out.</p>
<h3 class="title-1 mt-2 text-color-primary">
	<a href="https://yuriiholskiy.github.io/portfolio/blog/vue3_validation_system#setting-up-the-project">
		#
	</a>
	Setting up the project
</h3>
<section id="setting-up-the-project">
	<p>To create a project I used 
	<c-button
			tag="a"
			class="is-primary is-small"
			href="https://github.com/vitejs/vite">Vite</c-button>. It's a opinionated web dev build tool that serves your code via native ES Module imports during dev and bundles it with 
			<c-button
				tag="a"
				class="is-primary is-small"
				href="https://rollupjs.org/">Rollup</c-button> for production.
			Also, Vite already has a typescript support for Vue components.
	</p>
</section>
<h3 class="title-1 mt-2 mb-1 text-color-primary">
	<a href="https://yuriiholskiy.github.io/portfolio/blog/vue3_validation_system#project-files-overview">
		#
	</a>
	Project files overview
</h3>

<section id="project-files-overview">

```html[index.html]
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" href="/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vite App</title>
	</head>
	<body>
		<div id="app"></div>
		<script type="module" src="/src/main.js"></script>
	</body>
</html>
```

<p class="mb-1">Here we have a "container" element where we mount our application and script with type module. You can check more about Vite by link above.</p>

```vue[App.vue]
<template>
	<h1>{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'App',
	setup() {
		const title = ref('Hello, Vite');
		return {
			title
		};
	}
});
</script>
```

<p>I deleted boilerplate code that Vite give to us and just render heading with text.</p>
<p>
	Vue 3 offers a <code class="language-js">defineComponent()</code> function. Inside the <code class="language-js">defineComponent()</code> function you can see a setup function, which takes the props as the first argument. Since, we are not using props we just omit them.
</p>
<p class="mb-1">Also, we create a reactive reference using <code class="language-js">ref</code> function and returned it from the setup function.</p>

```js[main.js]
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

const app = createApp(App);
app.mount('#app');
```

<p>Here we create our app and mount it to <code class="language-html">#app</code>.</p>
</section>
