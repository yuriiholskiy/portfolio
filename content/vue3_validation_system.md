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
	<form class="form">
		<label for="name">Name</label>
		<div class="ui input focus">
			<input type="text" placeholder="Name" />
		</div>
		<label for="email">Email</label>
		<div class="ui input focus">
			<input type="text" placeholder="Email" />
		</div>
		<input class="ui primary button" type="submit" value="Submit" />
	</form>
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

<p>
	Vue 3 offers a <code class="language-js">defineComponent()</code> function. Inside the <code class="language-js">defineComponent()</code> function you can see a setup function, which takes the props as the first argument. Since, we are not using props we just omit them.
</p>
<p class="mb-1">Also, we create a reactive reference using <code class="language-js">ref</code> function and returned it from the setup function.</p>
<p>Also, I using <c-button
				tag="a"
				class="is-primary is-small"
				href="https://semantic-ui.com/">semantic ui</c-button> for easy styling</p>

```js[main.js]
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

const app = createApp(App);
app.mount('#app');
```

<p>Here we create our app and mount it to <code class="language-html">#app</code>.</p>
<p>In browser we see:</p>
<p class="mt-half"><img src="papers/validation-system/boilerplate.png" alt="Boilerplate"/></p>
</section>

<section id="create-validation-system">
<h3 class="title-1 mt-2 text-color-primary">
	<a href="https://yuriiholskiy.github.io/portfolio/blog/vue3_validation_system#create-validation-system">
		#
	</a>
	Create validation system
</h3>
<p class="mb-1">In project folder, I create file <strong>validators.ts</strong>.</p>
<p>In this file we will write all validate logic. First, start with interfaces</p>

```ts[validators.ts]
interface Rule {
	type: 'required' | 'length' | 'email';
}
interface Require extends Rule {
	type: 'required';
}
interface Email extends Rule {
	type: 'email';
}
interface Length extends Rule {
	type: 'length';
	options: MinMaxProps;
}
interface MinMaxProps {
	min: number;
	max: number;
}

export type Validators = Require | Length | Email;
```

<p>Here, we describe "rule" interfaces. To not overwhelmed paper, we have "required", "email" and "length" rule. "Length" rule have options for minimum and maximum characters.</p>
<p>In the end we export type "Validators" that we will be use later.</p>
<p class="mt-half">Second, validate function for each "rule"</p>

```ts[validators.ts]
export const required = (): Require => ({ type: 'required' });
export const length = (options: MinMaxProps): Length => ({
	type: 'length',
	options
});
export const emailValidator = (): Email => ({ type: 'email' });
```

<p>Functions that return right type for each rule.</p>

<p class="mt-half">Finally, validate function</p>

```ts[validators.ts]
const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export interface Status {
	valid: boolean;
	message?: string;
}

export const validate = (
	value: string,
	validators: Array<Validators>
): Status => {
	for (const validator of validators) {
		if (validator.type === 'required' && (!value || !value.length)) {
			return {
				valid: false,
				message: 'This field is required'
			};
		}

		if (
			validator.type === 'length' &&
			(value.length < validator.options.min ||
				value.length > validator.options.max)
		) {
			return {
				valid: false,
				message: `This field has a minimun length of ${validator.options.min} and maximum length of ${validator.options.max}`
			};
		}

		if (validator.type === 'email' && !emailRe.test(value.toLowerCase())) {
			return {
				valid: false,
				message: 'Email field is incorrect'
			};
		}
	}

	return {
		valid: true
	};
};
```

<p>That function accept two parameters: value, that we checking and array of validators and must return an object that satisfies "Status" interface above.</p>
<p>Then, we run through validators array and checked that the value satisfies the validation. If not, returns an object with "valid" property - false and message to describe error, otherwise returns an object with "valid" property - true. </p>

<p class="mt-half">All together</p>

```ts[validators.ts]
const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface Rule {
	type: 'required' | 'length' | 'email';
}
interface Require extends Rule {
	type: 'required';
}
interface Email extends Rule {
	type: 'email';
}
interface Length extends Rule {
	type: 'length';
	options: MinMaxProps;
}
interface MinMaxProps {
	min: number;
	max: number;
}

export type Validators = Require | Length | Email;

export const required = (): Require => ({ type: 'required' });
export const length = (options: MinMaxProps): Length => ({
	type: 'length',
	options
});
export const emailValidator = (): Email => ({ type: 'email' });

export interface Status {
	valid: boolean;
	message?: string;
}

export const validate = (
	value: string,
	validators: Array<Validators>
): Status => {
	for (const validator of validators) {
		if (validator.type === 'required' && (!value || !value.length)) {
			return {
				valid: false,
				message: 'This field is required'
			};
		}

		if (
			validator.type === 'length' &&
			(value.length < validator.options.min ||
				value.length > validator.options.max)
		) {
			return {
				valid: false,
				message: `This field has a minimun length of ${validator.options.min} and maximum length of ${validator.options.max}`
			};
		}

		if (validator.type === 'email' && !emailRe.test(value.toLowerCase())) {
			return {
				valid: false,
				message: 'Email field is incorrect'
			};
		}
	}

	return {
		valid: true
	};
};
```

</section>

<section id="using-validation">
<h3 class="title-1 mt-2 text-color-primary">
	<a href="https://yuriiholskiy.github.io/portfolio/blog/vue3_validation_system#using-validation">
		#
	</a>
	Using our validation system
</h3>
<p>In progress...</p>
</section>
