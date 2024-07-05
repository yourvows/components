<script setup>
import { onMounted, ref } from 'vue';
import { collapseItems } from "../../data/collapse-items";
import CButton from '../../../src/components/Button/CButton.vue';
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
import '../../../src/components/Preloader/preloader.css';
const openMore = ref(false);

const goal = ref([]);
const goalElse = ref([]);

onMounted(() => {
  goal.value = collapseItems.slice(0, 3);
  goalElse.value = collapseItems.slice(3);
});

</script>

# Preloader (Shimmer)

The .shimmer component is a CSS class that creates a shimmering effect with a gradient background. It is often used to indicate loading or progress in web applications.

## Usage

To use the shimmer component, apply the .shimmer class to the HTML element you want to have the shimmer effect.

<div class="flex items-center gap-4">
  <div class="w-16 h-16 shimmer rounded-full shrink-0"></div>
  <div class="w-full">
    <div class="w-40 h-8 shimmer rounded-full mb-2"></div>
    <div class="w-1/2 h-6 shimmer rounded-full"></div>
  </div>
</div>

::: details Show source
```vue
<div class="flex items-center gap-4">
  <div class="w-16 h-16 shimmer rounded-full shrink-0"></div>
  <div class="w-full">
    <div class="w-40 h-8 shimmer rounded-full mb-2"></div>
    <div class="w-1/2 h-6 shimmer rounded-full"></div>
  </div>
</div>
```
:::

## Dark Mode

The shimmer component also supports a dark mode variant. To apply the dark mode, add the `.dark` class to the parent element of the `.shimmer` component.

<div class="dark">
    <div class="flex items-center gap-4">
      <div class="w-16 h-16 shimmer rounded-full shrink-0"></div>
      <div class="w-full">
        <div class="w-40 h-8 shimmer rounded-full mb-2"></div>
        <div class="w-1/2 h-6 shimmer rounded-full"></div>
      </div>
    </div>
</div>

::: details Show source
```vue
<div class="dark">
    <div class="flex items-center gap-4">
      <div class="w-16 h-16 shimmer rounded-full shrink-0"></div>
      <div class="w-full">
        <div class="w-40 h-8 shimmer rounded-full mb-2"></div>
        <div class="w-1/2 h-6 shimmer rounded-full"></div>
      </div>
    </div>
</div>
```
:::

## CSS Properties

The `.shimmer` component utilizes the following CSS properties:

* background-color: Sets the background color of the shimmer effect.
* background-image: Specifies the gradient for the shimmer effect.
* background-repeat: Determines if and how the background image should repeat.
* background-size: Sets the size of the background image.
* animation-duration: Specifies the duration of the shimmer animation.
* animation-fill-mode: Defines how the animation should apply styles before and after it executes.
* animation-iteration-count: Sets the number of times the animation should repeat (infinite for continuous shimmering).
* animation-name: Specifies the name of the shimmer animation.
* animation-timing-function: Sets the timing function for the shimmer animation.
* cursor: Specifies the type of cursor to be displayed when hovering over the shimmer area.

## Animation

The shimmer effect is achieved through the shimmerAnimation keyframes, which animate the background position from left to right.

## Customization

You can customize the shimmer effect by adjusting the gradient colors and animation properties in the CSS.
