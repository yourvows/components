<script setup>
import { onMounted, ref } from 'vue';
import { collapseItems } from "../../../guides/data/collapse-items";
import CButton from '../../../src/components/Button/CButton.vue';
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";

const openMore = ref(false);

const goal = ref([]);
const goalElse = ref([]);

onMounted(() => {
  goal.value = collapseItems.slice(0, 3);
  goalElse.value = collapseItems.slice(3);
});

</script>

# Collapse transition

The Collapse transition component is a dynamic UI element commonly employed in web and mobile applications to enhance user experience and interface fluidity. It provides a smooth and visually appealing animation effect when elements, such as panels, sections, or menus, expand or collapse.

## Usage

Here is a minimal usage:

<div class="mt-[32px] relative">
    <div class="relative">
      <span v-if="goalElse && goalElse.length" class="absolute w-full h-1/2 -bottom-[5px] shadow-section rounded-b-[20px] transition duration-200" :class="{ 'opacity-0': openMore }" />
      <div v-for="(item, i) in goal" :key="i" class="md:px-6 px-4 bg-[#FAFAFC] rounded-[20px] border border-[#DADDE8] mb-4" :class="{ '!mb-0': i === goal.length - 1 }">
        <p class="text-base leading-137 text-dark">{{ item.text }}</p>
      </div>
      <CollapseTransition>
        <div v-if="openMore" class="pt-4">
          <div v-for="(item, i) in goalElse" :key="i" class="px-6 bg-[#FAFAFC] rounded-[20px] border border-[#DADDE8] mb-4">
            <p class="text-base leading-137 text-dark">{{ item.text }}</p>
          </div>
        </div>
      </CollapseTransition>
    </div>
    <CButton v-if="goalElse && goalElse.length" :is-hide="openMore" @click="openMore = !openMore" class="mt-4">Show more</CButton>
</div>

::: details Show source
```vue
<script setup>
import { onMounted, ref } from 'vue'
import CButton from '/path/to/button/CButton.vue'
import { collapseItems } from "../../data/collapse-items"
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue"
    
const openMore = ref(false)
    
const goal = ref([])
const goalElse = ref([])
    
onMounted(() => {
  goal.value = collapseItems.slice(0, 3)
  goalElse.value = collapseItems.slice(3)
})
</script>

<template>
    <div class="mt-[32px] relative">
        <div class="relative">
          <span v-if="goalElse && goalElse.length" class="absolute w-full h-1/2 -bottom-[5px] shadow-section rounded-b-[20px] transition duration-200" :class="{ 'opacity-0': openMore }" />
          <div v-for="(item, i) in goal" :key="i" class="md:px-6 px-4 bg-[#FAFAFC] rounded-[20px] border border-[#DADDE8] mb-4" :class="{ '!mb-0': i === goal.length - 1 }">
            <p class="text-base leading-137 text-dark">{{ item.text }}</p>
          </div>
          <CollapseTransition>
            <div v-if="openMore" class="pt-4">
              <div v-for="(item, i) in goalElse" :key="i" class="px-6 bg-[#FAFAFC] rounded-[20px] border border-[#DADDE8] mb-4">
                <p class="text-base leading-137 text-dark">{{ item.text }}</p>
              </div>
            </div>
          </CollapseTransition>
        </div>
        <CButton v-if="goalElse && goalElse.length" :is-hide="openMore" @click="openMore = !openMore" class="mt-4">Show more</CButton>
    </div>
</template>
```
:::