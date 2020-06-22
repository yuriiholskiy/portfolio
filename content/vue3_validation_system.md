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
	</p>
</section>
<h3 class="title-1 mt-2 text-color-primary">
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

<p>Here we have a "container" element where we mount our application and script with type module. You can check more about Vite by link above.</p>

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

<p>To be continued...</p>
</section>
