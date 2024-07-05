<template>
  <!-- Placeholder div for lazy-loading image -->
  <div v-lazy="src" :error-state="errorState" class="image-loading overflow-hidden">
    <!-- Image element to lazy-load -->
    <img :alt="alt" class="object-cover w-full h-full" :class="imageClass" />
  </div>
</template>

<script setup lang="ts">
import type { TClass } from '../../types'

interface Props {
  src: string | undefined // The source URL of the image to be lazy-loaded
  alt?: string // Alternate text for the image
  errorState?: string // URL of the image to display in case of loading error
  imageClass?: TClass // Additional CSS classes for the image element
}
withDefaults(defineProps<Props>(), {
  imageClass: '', // Default value for imageClass prop
  errorState: '', // Default value for errorState prop
  alt: 'image', // Default value for alt prop
})
</script>

<style scoped>
/* Styles for the placeholder div */
.image-loading {
  position: relative;
  overflow: hidden;
}

/* Styles for the loading animation */
.image-loading:after {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
  background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: imageLoadingAnimation;
  animation-timing-function: linear;
}

/* Styles for dark mode */
.dark .image-loading:after {
  background: rgba(114, 113, 114, 1) linear-gradient(90deg, #2f3d5b 0%, #435479 49.48%, #2f3d5b 100%);
}

/* Keyframe animation for the loading animation */
@keyframes imageLoadingAnimation {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
