<template>
  <div>
    <div class="flex-center-between border-b border-gray-300 pb-2.5">
      <CCheckbox
        v-model="isAllChecked"
        :partial="ids?.length && !isAllChecked"
        :label="parentText"
        @update:model-value="onParentInput"
      />
    </div>

        <label
          v-for="(i, index) in list"
          :key="index"
          class="flex items-center gap-3 py-2.5 border-b border-gray-300 last:border-[0px]"
        >
          <CCheckbox
            :checked="ids.includes(i.value)"
            :value="i.value"
            :label="i?.label"
            :info-icon="i?.infoIcon"
            :info-text="i?.text"
            :info-link="i?.path"
            @update:model-value="onInput($event, i.value)"
          />
        </label>
  </div>
</template>

<script setup lang="ts">
import CCheckbox from "./CCheckbox.vue";
import {computed, ref, watch} from "vue";

interface Props {
  modelValue: string[]
  list: {
    label: string
    value: number
  }[]
  parentText: string
  nestedClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  nestedClass: undefined,
})

interface Emits {
  (event: 'change', value: string[]): void
  (event: 'update:modelValue', value: string[]): void
}
const emit = defineEmits<Emits>()

const ids = ref<string[]>([...(props?.modelValue ?? [])])

watch(
  () => props.modelValue,
  (value) => {
    ids.value = value
  },
  {
    deep: true,
    immediate: true,
  }
)

const parent = ref(false)

const isAllChecked = computed(() => {
  return ids.value?.length === props?.list?.length
})

const isOpen = ref(true)

function onParentInput(newValue: boolean) {
  if (newValue) {
    ids.value = props.list.map((item) => item.value)
  } else {
    ids.value = []
  }
}

function onInput(newValue: boolean, itemValue: number) {
  if (newValue && !ids.value.includes(itemValue)) {
    ids.value.push(itemValue)
  } else {
    ids.value = ids.value.filter((item) => item !== itemValue)
    // ids.value = ids.value.filter((item) => item !== itemValue)
  }

  parent.value = ids.value.length === props.list.length
}

watch(
  () => ids.value,
  () => {
    emit('update:modelValue', ids.value)
  },
  {
    deep: true,
  }
)

watch(
  () => isAllChecked.value,
  () => {
    parent.value = isAllChecked.value
  }
)
</script>
