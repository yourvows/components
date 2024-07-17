# Image Lazy Load Directive
The `lazyLoad` directive is used for lazy loading images in Vue.js applications using the Composition API. It utilizes the Intersection Observer API to load images when they become visible in the viewport.


## Registration

### Vue 3
```javascript
// Import the VLazyLoad directive function
import { lazyLoad } from '~/directives/vLazyLoad'

// Create a new Vue 3 app
const app = createApp(App)

// Register the VLazyLoad directive globally
app.directive('lazy', lazyLoad)

// Mount the app to the DOM
app.mount('#app')
```

### Nuxt 3
```javascript
// plugins/vLazyLoad.ts

import { defineNuxtPlugin } from '#app'

// Import the VLazyLoad directive
import { lazyLoad } from '~/directives/vLazyLoad'

// Register the VLazyLoad directive as a plugin
export default defineNuxtPlugin((nuxtApp) => {
  // Register the directive globally
  nuxtApp.directive('lazy', lazyLoad)
})

```

## Usage

This Vue component provides a directive for lazy loading images using the Composition API. It consists of the following parts:

- **Template**: Contains a placeholder `div` element wrapping an `img` element. The `v-lazy` directive is applied to the `div` for lazy loading images. Additional properties such as `error-state`, `alt`, and `imageClass` can be passed to customize the behavior and appearance of the image.

- **Script**: Utilizes the Composition API to define props for the component, including `src`, `alt`, `errorState`, and `imageClass`. Default values are provided for `alt` and `imageClass`. The `VLazyLoad` directive is imported and used within the script setup block.

- **Style**: Contains scoped styles for the placeholder `div` and loading animation. The loading animation is achieved using CSS keyframe animations.


## Directive Parameters
The `lazyLoad` directive function accepts the following parameters:

- `el` (HTMLElement): The HTML element to which the directive is attached. This element will be observed for intersection with the viewport to trigger lazy loading.
- `binding` (DirectiveBinding): An object containing information about the directive. It provides access to the value passed to the directive, which typically contains the URL of the image to be lazy-loaded.

## Directive Behavior
The `VLazyLoad` directive operates as follows:

1. Adds the class `image-loading` to the element, indicating that the image is in the process of loading.
2. Sets up an Intersection Observer with specified options to detect when the element enters the viewport.
3. When the observed element becomes visible (intersects with the viewport), it creates an `img` element and assigns the `onload` and `onerror` callbacks.
4. If the image loads successfully (`onload`), it sets the `src` attribute of the image element to the URL specified in the directive binding, removes the `image-loading` class, and stops observing the element.
5. If the image fails to load (`onerror`), it sets the `src` attribute of the image element to either the provided error state URL or a default image URL, removes the `image-loading` class, adds the `image-error` class, and stops observing the element.
