<template>
  <slot>
    <div v-if="items && Object.keys(items).length > 0" :class="wrapperClass">
      <CCheckbox
          v-for="(item, index) in items"
          :key="index"
          :label="item[labelKey]"
          :value="item[valueKey]"
          :name="name"
          :checked="value.includes(item?.[valueKey])"
          @update:modelValue="onUpdate(item?.[valueKey])"
      />
    </div>
  </slot>
</template>

<script setup lang="ts">
import {ref} from "vue";
import CCheckbox from "./CCheckbox.vue";

interface Props {
  modelValue: string | number | object
  items: object
  labelKey?: string
  valueKey?: string
  wrapperClass?: string
  name?: string
}

withDefaults(defineProps<Props>(), {
  wrapperClass: 'flex flex-wrap gap-4',
  labelKey: 'name',
  valueKey: 'id',
  name: `k-checkbox-${Math.floor(Math.random() * 1000)}`,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | object): void
}>()

const value = ref<Array<string | number | object>>([])
const onUpdate = ( item: any) => {

  const newValue: (number | string | object)[] = [...value.value]

  console.log('newValue', newValue)

  if (newValue.includes(item)) {
    newValue.splice(newValue.indexOf(item), 1)
  } else {
    newValue.push(item)
  }

  value.value = newValue
  emit('update:modelValue', newValue)
}
</script>
