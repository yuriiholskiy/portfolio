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
			<input type="text" placeholder="Name" v-model="name" />
		</div>
		<label for="email">Email</label>
		<div class="ui input focus">
			<input type="text" placeholder="Email" v-model="email" />
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
		const name = ref('');
		const email = ref('');
		return {
			title,
			name,
			email
		};
	}
});
</script>
```

<p>
	Vue 3 offers a <code class="language-js">defineComponent()</code> function. Inside the <code class="language-js">defineComponent()</code> function you can see a setup function, which takes the props as the first argument. Since, we are not using props we just omit them.
</p>
<p class="mb-1">Also, we create a reactive reference for title and model to our inputs using <code class="language-js">ref</code> function and returned it from the setup function. <code class="language-js">v-model</code> create "two-way" binding. You can read more in documentation.
</p>
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
	value: string | number,
	validators: Array<Validators>
): Status => {
	value = value.toString();
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
	value: string | number,
	validators: Array<Validators>
): Status => {
	value = value.toString();
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
<p>Now, in App.vue we can use our validations.</p>

```vue[App.vue]
<template>
	<h1>{{ title }}</h1>
	<form class="form">
		<label for="name">Name</label>
		<div class="ui input focus">
			<input type="text" placeholder="Name" v-model="name" />
			<span class="error-text text-color-red" v-if="!nameStatus.valid">
				{{ nameStatus.message }}
			</span>
		</div>
		<label for="email">Email</label>
		<div class="ui input focus">
			<input type="text" placeholder="Email" v-model="email" />
			<span class="error-text text-color-red" v-if="!emailStatus.valid">
				{{ emailStatus.message }}
			</span>
		</div>
		<input
			class="ui primary button"
			type="submit"
			value="Submit"
			:disabled="!isFormValid"
		/>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import {
	required,
	length,
	emailValidator,
	Status,
	validate
} from './validators';

export default defineComponent({
	name: 'App',
	setup() {
		const title = ref('Hello, Vite');
		const name = ref('');
		const email = ref('');
		const nameStatus = computed<Status>(() =>
			validate(name.value, [required(), length({ min: 5, max: 12 })])
		);
		const emailStatus = computed<Status>(() =>
			validate(email.value, [required(), emailValidator()])
		);
		const isFormValid = computed(
			() => nameStatus.value.valid && emailStatus.value.valid
		);
		return {
			title,
			name,
			email,
			nameStatus,
			emailStatus,
			isFormValid
		};
	}
});
</script>
```

<p>
	Here, we import validators, validate function and "Status" interface. In <code class="language-js">setup</code> method we create computed properties that return validate function with validators we want to use, named field name + Status since we return "Status" object.
	Moreover, <code class="language-js">isFormValid</code> computed show that all fields are valid. And if not we disabled submit button. Also, we add span to display error messages, when validation on this field failed.
</p>
<p class="mt-half">
And, in browser we have<img src="papers/validation-system/validation-1.png" alt="Form validation"/>
</p>
<p>
As we can see, our validation already works. Errors is appear because field need to be filled and submit button is disabled. 
</p>
<p class="mt-half">
On the video we can see all steps
</p>
<video class="mt-1" controls type="video/mp4" src="videos/validation.mp4"></video>
<p class="mt-half">
Pretty cool, right?
</p>
</section>

<section id="custom_hook_for_validation">
<h3 class="title-1 mt-1 text-color-primary">
	<a href="https://yuriiholskiy.github.io/portfolio/blog/vue3_validation_system#custom_hook_for_validation">
		#
	</a>
	Create custom hook for validation
</h3>
<p class="mt-half">
We can got further, and create composable function or hook (from react world). 
</p>
<p class="mb-half">In project I create file <code class="language-js">useValidation.ts</code></p>

```ts[useValidation.ts]
import { computed, Ref, ComputedRef } from 'vue';
import { validate, Status, Validators } from './validators';

export const useValidation = (
	ref: Ref,
	validators: Validators[]
): ComputedRef => {
	return computed<Status>(() => validate(ref.value, validators));
};
```

<p>We return function that accept value to validate and validators array and return computed that we describe above.<p/>

<p class="mb-half">Now, in <code class="language-js">App.vue</code> we can use this hook</p>

```vue[App.vue]
<template>
	<h1>{{ title }}</h1>
	<form class="form">
		<label for="name">Name</label>
		<div class="ui input focus">
			<input type="text" placeholder="Name" v-model="name" />
			<span class="error-text text-color-red" v-if="!nameStatus.valid">
				{{ nameStatus.message }}
			</span>
		</div>
		<label for="email">Email</label>
		<div class="ui input focus">
			<input type="text" placeholder="Email" v-model="email" />
			<span class="error-text text-color-red" v-if="!emailStatus.valid">
				{{ emailStatus.message }}
			</span>
		</div>
		<input
			class="ui primary button"
			type="submit"
			value="Submit"
			:disabled="!isFormValid"
		/>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { required, length, emailValidator } from './validators';
import { useValidation } from './useValidation';
export default defineComponent({
	name: 'App',
	setup() {
		const title = ref('Hello, Vite');
		const name = ref('');
		const email = ref('');
		const nameStatus = useValidation(name, [
			required(),
			length({ min: 4, max: 15 })
		]);
		const emailStatus = useValidation(email, [required(), emailValidator()]);

		const isValid = computed(
			() => nameStatus.value.valid && emailStatus.value.valid
		);
		const onSubmit = () => {
			console.log('submit');
		};
		return {
			title,
			name,
			nameStatus,
			email,
			emailStatus,
			isValid,
			onSubmit
		};
	}
});
</script>
```

<p>All logic work as before. To use another validator we just import it and pass in <code class="language-js">useValidation</code> function.</p>

</section>

<section id="conclusions" class="mt-1">
	<h3 class="title-1 mt-1 text-color-primary">
		<a href="https://yuriiholskiy.github.io/portfolio/blog/vue3_validation_system#conclusions">
			#
		</a>
		Conclusions
	</h3>
	<p>
	In this article we create a custom validation system using Vue 3 composition api and typescript.
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
