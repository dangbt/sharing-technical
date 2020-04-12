---
title: "Basic Vue"
date: "2020-04-12"
---

## EXPRESSIONS

# VUE ESSENTIALS CHEAT SHEET

```
<div id ="app">
<p>I have a {{ product }}</p>
<p>{{ product + 's' }}</p>
<p>{{ isWorking? 'YES' : 'NO' }}</p>
<p>{{ product.getSalePrice() }}</p>
</div>
```
## LIST RENDERING

```
<li v-for ="item in items" :key ="item.id">
{{ item }}
</li>
```
## BINDING DIRECTIVES

```
<p v-if ="inStock">{{ product }}</p>
```
```
<a v-bind:href ="url">...</a>
```
```
<a :href ="url">...</a>
```
```
<p v-show ="showProductDetails">...</p>
```
Element inserted/removed based on truthiness:

## ACTIONS / EVENTS

```
<button @click ="addToCart">...
```
```
<button v-on:click ="addToCart">...
```
```
Calls addToCart method on component:
```
```
<button @click ="addToCart(product)">...
```
```
Arguments can be passed:
```
```
<form @submit.prevent ="addProduct">...
```
```
To prevent default behavior (e.g. page reload):
```
```
<li v-for ="(item, index) in items">...
```
To access the position in the array:

```
<li v-for ="(value, key) in object">...
```
To iterate through objects:

```
<cart-product v-for ="item in products"
:product ="item" :key ="item.id">
```
Using v-for with a component:

```
<img @mouseover.once ="showImage">...
```
```
Only trigger once:
```
```
<input @keyup.enter ="submit">
```
```
Keyboard entry example:
```
```
<input @keyup.ctrl.c ="onCopy">
```
```
Call onCopy when control-c is pressed:
```
Toggles the display: none CSS property:

```
<p v-else-if ="onSale">...</p>
<p v-else >...</p>
```
```
<input v-model ="firstName" >
```
Two-way data binding:

```
v-model.lazy ="..." Syncs input after change event
```
```
.stop Stop all event propagation
```
```
.self Only trigger if event.target is element itself
```
```
.tab
.delete
.esc
.space
```
```
.up
.down
.left
.right
```
```
.ctrl
.alt
.shift
.meta
```
```
Key modifiers:
```
```
.left 
.right 
.middle
```
```
Mouse modifiers:
```
```
v-model.number ="..." Always returns a number
```
```
v-model.trim ="..." Strips whitespace
```
```
<button :disabled ="isButtonDisabled”>...
```
```
True or false will add or remove attribute:
```
```
<div :class ="{ active: isActive }">...
```
```
If isActive is truthy, the class ‘active’ will appear:
```
```
<div :style ="{ color: activeColor }">
```
```
Style color set to value of activeColor:
```
```
Need help on your path to Vue Mastery?
Checkout our tutorials on VueMastery.com
```
```
shorthand
```
```
shorthand
```
```
key always recommended
```

```
Created by your f riends at
```

## COMPONENT ANATOMY CUSTOM EVENTS

# VUE ESSENTIALS CHEAT SHEET

```
Vue. component ('my-component', {
  components: {
    ProductComponent, ReviewComponent
  },
  props: {
    message: String ,
    product: Object ,
    email: {
      type: String ,
      required: true,
      default: "none"
      validator: function (value) {

      }
    }
  },
  data: function() {
    return {
      firstName: 'Vue',
      lastName: 'Mastery'
    }
  },
  computed: {
    fullName: function () {
    return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    firstName: function (value, oldValue) { ... }
  },
  methods: { ... },
  template: '<span>{{ message }}</span>',
})
```
## LIFECYCLE HOOKS

```
beforeCreate
created
beforeMount
mounted
```
```
beforeUpdate
updated
beforeDestroy
destroyed
```
## USING A SINGLE SLOT

```
<div>
<h2>I'm a title</h2>
<slot>
Only displayed if no slot content
</slot>
</div>
```
```
Component template:
```
```
<app-layout>
<h1 slot="header">Page title</h1>
<p>the main content.</p>
<p slot="footer">Contact info</p>
</app-layout>
```
```
Use of component with data for slot:
```
## MULTIPLE SLOTS

```
<div class="container">
<header>
<slot name="header"></slot>
</header>
<main>
<slot>Default content</slot>
</main>
<footer>
<slot name="footer"></slot>
</footer>
</div>
```
```
Component template:
```
### LIBRARIES YOU SHOULD KNOW

```
Vue CLI
Command line interface for rapid Vue development.
```
```
<my-component>
<p>This will go in the slot</p>
</my-component>
```
```
Use of component with data for slot:
```
Use props (above) to pass data into child components,
custom events to pass data to parent elements.

Set listener on component, within its parent:

```
<button-counter v-on:incrementBy="incWithVal">
```
Inside button-counter template:

```
this.$emit('incrementBy', 5 )
```
Inside parent component:

```
methods: {
incWithVal: function (toAdd) { ... }
}
```
```
The parameters the component accepts
```
```
Should return true if value is valid
```
```
Must be a function
```
```
Return cached values until
dependencies change
```
```
Called when firstName changes value
```
```
Data sent up to parent
```
```
Custom event name
```
```
Components that can be used in the template
```
```
Can also use backticks for multi-line
```
```
Vue Router
Navigation for a Single-Page Application.
```
```
Vue DevTools
Browser extension for debugging Vue applications.
```
```
Nuxt.js
Library for server side rendering, code-splitting, hot-re-
loading, static generation and more.
```


