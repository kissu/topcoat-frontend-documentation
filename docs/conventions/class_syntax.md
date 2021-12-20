# Class syntax

**TLDR**: recommended syntax (in this order if possible) ✨
```html:no-line-numbers
<input
  :class="[
    styles.borders[borderStyle][nestedBorderStyle],
    !isError && isFocused && 'border-primary-400 text-xl',

    isOutlined && styles.borderWidthSizes[borderWidth],
    isTrue && [styles.first[var1], styles.second[var2], styles.third[var3]],

    isOutlined ? 'border' : 'border-b'
  ]"
/>
```

---
There is a **lot** of various ways of [writting CSS classes](https://v3.vuejs.org/guide/class-and-style.html#binding-html-classes) in Vue.

Let's try to list a few variants that do exist:
1. Simple static one, simple nothing more to say.
```html:no-line-numbers
<input class="absolute" />
```

2. Object based, simple way of writting but has the drawback of inverting the syntax of the actual class to the left.
```html:no-line-numbers
<input :class="{ absolute: isAbsolute, 'text-xl': hasBigText }" />
```

3. 100% object-based, may be overkill and pretty annoying to always go back and forth between the template and the script part.
```html:no-line-numbers
<input :class="classObject" />
```
```js:no-line-numbers
data() {
  return {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
}
```

4. 100% array-based, interesting because we can map classes between Tailwind and our state, while having all of it explicitly defined.
```html:no-line-numbers
<input :class="[activeClass, errorClass]" />
```
```js:no-line-numbers
data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```

5. Mixing object + array syntax, can be interesting to have a mix of both because it is visually more easy to read while still having dynamic components.
```html:no-line-numbers
<input :class="[{ absolute: isAbsolute }, errorClass]">
```
Example
```html:no-line-numbers
<input
  :class="[
    callToAction.base[variant],
    callToAction.types[color][variant],
    {
      'opacity-32 cursor-not-allowed shadow-none': disabled,
      uppercase: path,
    },
  ]"
/>
```

6. We can also have some ternary classes, for quick and simple classes. This one having a syntax **opposed** to `2.`, which is pretty annoying to read/remember.
```html:no-line-numbers
<input :class="[isOutlined ? 'border' : 'border-b']" />
```

7. Some people like to write conditions like this. It has the benefit of quickly spotting the Tailwind class but is still another way of writing.
```html:no-line-numbers
<input :class="[isError && isFocused && 'border-primary-400']" />
```

::: danger
As a reminder, we cannot have interpolated utility-classes (yet?), so this is not possible to have
```html:no-line-numbers
<input :class="`border-${colorAsProp}`" />
```
We need to have them written in plain text for the compiler to know what to generate/purge (this also applies to Windi ofc)
```html:no-line-numbers
<input :class="colorAsProp === 'primary' ? 'border-primary-400' : 'border-secondary-400'" />
```

### References
[Official documentation](https://tailwindcss.com/docs/content-configuration#class-detection-in-depth)
![](https://user-images.githubusercontent.com/5133074/146174323-7eea6073-5ab3-4c20-87e8-aa750465b256.png)
:::

8. This may lead to some funky (working) syntax.
```html:no-line-numbers
<input :class="[{ [styles.borderWidthSizes[borderWidth]]: borderWidth && isOutlined }]" />
```

9. Alright, you do find all of this confusing? Let's see how it looks so far, if we mix all of those positibilities. Here an example:
```html:no-line-numbers{14-18}
<input
  class="cool-simple-static-class 1️⃣"
  :class="[
    isOutlined ? 'border' : 'border-b', 6️⃣
    styles.borders[borderStyle], 4️⃣
    {
      'cursor-not-allowed': isDisabled, 2️⃣
      'border-primary-400 placeholder-error-400': !isError && isFocused, 5️⃣
      [styles.borderWidthSizes[borderWidth]]: borderWidth && isOutlined, 8️⃣
    },
    isOutlined && styles.borderRadius[rounded], 7️⃣

    // ❌❌❌ all the following highlighted lines are INVALID ❌❌❌
    {
      isOutlined && [styles.colors[innerBgColor]],
      styles.colors[innerBgColor]: isOutlined,
    },
    'border-b' : isBordered,
  ]"
/>
```

As you can see, the above does have a few problems:
- is mixing object + array syntax all day long
- is not really sorted by any kind of priority
- not readable and can be _somehow_ confusing
- a LOT of ways of writting, some are wrong, others are the same but with a different syntax

---
Let's try to stick to a single syntax, that is keeping a lot of possibilities while being less confusing.
```html:no-line-numbers{5,7,9}
<input
  class="cool-simple-static-class" 1️⃣
  :class="[
    // solves 4️⃣ and enables dynamic array classes
    styles.borders[borderStyle][nestedBorderStyle],
    // solves 2️⃣ + 7️⃣ and simple to read with the conditions
    !isError && isFocused && 'border-primary-400 text-xl',
    // solves  6️⃣ and easy to read/quick to write
    isOutlined ? 'border' : 'border-b'
  ]"
/>
```

The syntax above have the benefits of:
- not having to deal with objects (a minor drawback) but it's balanced with the points below
- simple yet precise way of writing all conditions on the left side and having the classes on the right
- possible to have dynamic classes ➡️ mapped to arrays, truthy conditions + ternary
- no inversion, no funky array syntax, shorter to write and easier to read
- the code editor should help on the code highlighting, for an even easier reading experience!
- using only the array syntax, will allow us to have `truthy && [arrayClass1, arrayClass2, etc...]`
- let's try to order it in `array classes`, then `conditional classes` and then `ternary`
