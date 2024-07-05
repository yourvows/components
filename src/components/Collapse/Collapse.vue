<template>
  <div class="mt-[32px] relative">
    <div class="relative">
      <span v-if="goalElse && goalElse.length" class="absolute w-full h-1/2 -bottom-[5px] shadow-section rounded-b-[20px] transition duration-200" :class="{ 'opacity-0': openMore }" />
      <div v-for="(item, i) in goal" :key="i" class="py-5 md:px-6 px-4 bg-[#FAFAFC] rounded-[20px] border border-[#DADDE8] mb-4" :class="{ '!mb-0': i === goal.length - 1 }">
        <p class="text-base leading-137 text-dark">
          {{ item.text }}
        </p>
      </div>
      <CollapseTransition>
        <div v-if="openMore" class="pt-4">
          <div v-for="(item, i) in goalElse" :key="i" class="py-5 px-6 bg-[#FAFAFC] rounded-[20px] border border-[#DADDE8] mb-4">
            <p class="text-base leading-137 text-dark">
              {{ item.text }}
            </p>
          </div>
        </div>
      </CollapseTransition>
    </div>

    <button
        text="Show more"
        v-if="goalElse && goalElse.length"
        :is-hide="openMore"
        @click="openMore = !openMore"
        class="mt-4"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue"

import SButton from "@/components/Button/SButton.vue"
import { collapseItems } from "../../../guides/data/collapse-items"

const openMore = ref(false)

const goal = ref([])
const goalElse = ref([])

onMounted( () => {
  goal.value = collapseItems.slice(0, 3)
  goalElse.value = collapseItems.slice(3)
})

</script>

<style>
.shadow-section {
  background: linear-gradient(180deg, rgba(250, 250, 252, 0), #fafafc);
}
</style>
