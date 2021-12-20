# SFC syntax

On top of the [official documentation](https://v3.vuejs.org/api/sfc-spec.html#intro), let's follow some simple rules to make our code more readable.

#### Structure for Expandable Modules
```html
<options>
  <!-- used for some waterfall props -->
</options>

<template>
  <!-- common usual template àla Vue2 -->
</template>

<script>
  // Options API because it will be exposed publicly and since it's still the easiest syntax
</script>

<style>
  /* if any Tailwind or homemade CSS is required */
</style>
```

#### Structure for the Core SPA
```html
<script>
  // matching Vue3 + React + community prefered style
</script>

<template>
  <!-- we will not have a lot of things in here, because of render functions -->
</template>

<route>
  <!-- used for pages: https://github.com/hannoeru/vite-plugin-pages -->
  <!-- used for layouts: https://github.com/JohnCampionJr/vite-plugin-vue-layouts -->
</route>
```

#### Naming of the components
To have a consistent Component name and how it is displayed in the Vue Devtools, let's use
```js
export default {
  name: 't-text-input'
}
```
rather than `TTextInput` (this one leads to `ttext-input` in the devtools).

#### Props good practices
Would be nice to have the components ordered by a few rules:
- use `is`, `has` and `can` prefixes to show that you're using a prop that expects `true`/`false` (eg: `isDisabled` is pretty self-explanatory)
- group specific group types together (`String`, `Boolean + String`, `String + Number` etc...)
- after the grouping, try to sort the props by an alphanumeric order, will be easier to find things
- use [prop validators](https://v3.vuejs.org/guide/component-props.html#prop-validation) to restrict the user to a specific subset of values passed to a prop
```js{4}
borderStyle: {
  type: String,
  default: 'solid',
  validator: (v) => ['solid', 'dashed', 'dotted', 'double'].includes(v),
},
```

### Page syntax
Here are all the [valid approaches](https://v3.vuejs.org/style-guide/#component-name-casing-in-templates-strongly-recommended) for template tags, meanwhile the following syntax is recommended to be used overall
```html:no-line-numbers
<t-cool-component label="Label" /> 1️⃣
```
Even tho, this syntax is totally valid
```html:no-line-numbers
<t-cool-component label="Label"></t-cool-component> 2️⃣
```
As [mentionned here](https://v3.vuejs.org/style-guide/#self-closing-components-strongly-recommended)
> Components that self-close communicate that they not only have no content, but are meant to have no content. It's the difference between a blank page in a book and one labeled "This page intentionally left blank." Your code is also cleaner without the unnecessary closing tag.

So, we may use the second form if we need to pass a slot, otherwise just use the first one. Oh and try to avoid React syntax like `<TCoolComponent />`, let's keep it Vue!

### VScode cool extensions
As mentioned on [VScode's extensions page](/tools/vscode.html), the usage of on-fly `Headwind` is recommended.
