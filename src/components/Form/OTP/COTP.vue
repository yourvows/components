<template>
  <div
      class="code-input bg-white border border-gray-5 transition-all duration-300 flex items-center justify-center gap-3 p-3"
  >
    <div class="flex items-center gap-8">
      <template v-for="(v, index) in values" :key="index">
        <div class="relative overflow-hidden border rounded-[2px]">
          <input
              :id="`verification-input-${randomNumber + index}`"
              :ref="
              (el) => {
                if (el) inputs[index + 1] = el
              }
            "
              required
              inputmode="numeric"
              autocomplete="one-time-code"
              class="w-[30px] bg-white text-center outline-none transition-all duration-300 border-b-2 border-solid border-gray-200 h-11 focus-within:border-black font-semibold text-xl text-dark leading-140 overflow-hidden"
              :class="[inputClass, {'border-red-500': error}]"
              pattern="\d*"
              :autoFocus="autoFocus && index === autoFocusIndex"
              :data-id="index"
              :value="v"
              :disabled="props.disabled"
              maxlength="1"
              @input="onValueChange"
              @focus="onFocus($event, index)"
              @keydown="onKeyDown"
              @paste="pasteDigits"
              @blur="activeIndex = null"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, toRef, onBeforeUpdate, onMounted, nextTick, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  className?: string,
  inputClass?: string,
  step?: number,
  fields?: number,
  title?: string,
  error?: boolean,
  disabled?: boolean,
}>(),{
  fields:6,
})

const emit = defineEmits(['change', 'complete', 'update:modelValue'])
const KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
}
const randomNumber = Math.floor(Math.random() * 101)
const values = ref([])
const iRefs = ref([])
const inputs = ref([])
const fields = toRef(props, 'fields')
const autoFocusIndex = ref(0)
const autoFocus = true
const activeIndex = ref(0)

const initVals = () => {
  let vals
  if (values.value && values.value.length) {
    vals = []
    for (let i = 0; i < fields.value; i++) {
      vals.push(values.value[i] || '')
    }
    autoFocusIndex.value =
        values.value.length >= fields.value ? 0 : values.value.length
  } else {
    vals = Array(fields.value).fill('')
  }
  iRefs.value = []
  for (let i = 0; i < fields.value; i++) {
    iRefs.value.push(i + 1)
  }
  values.value = vals
}
const onFocus = (e, index) => {
  activeIndex.value = index
  e.target.select(e)
}
const onValueChange = (e) => {
  const index = parseInt(e.target.dataset.id)
  e.target.value = e.target.value.replace(/[^\d]/gi, '')
  // this.handleKeys[index] = false;
  if (e.target.value === '' || !e.target.validity.valid) {
    return
  }
  let next
  const value = e.target.value
  values.value = Object.assign([], values.value)
  if (value.length > 1) {
    let nextIndex = value.length + index - 1
    if (nextIndex >= fields.value) {
      nextIndex = fields.value - 1
    }
    next = iRefs.value[nextIndex]
    const split = value.split('')
    split.forEach((item, i) => {
      const cursor = index + i
      if (cursor < fields.value) {
        values.value[cursor] = item
      }
    })
  } else {
    next = iRefs.value[index + 1]
    values.value[index] = value
  }
  if (next) {
    const element = inputs.value[next]
    element.focus()
    element.select()
  }
  triggerChange(values.value)
}
const onKeyDown = (e) => {
  const index = parseInt(e.target.dataset.id)
  const prevIndex = index - 1
  const nextIndex = index + 1
  const prev = iRefs.value[prevIndex]
  const next = iRefs.value[nextIndex]
  switch (e.keyCode) {
    case KEY_CODE.backspace: {
      e.preventDefault()
      const vals = [...values.value]
      if (values.value[index]) {
        vals[index] = ''
        values.value = vals
        triggerChange(vals)
      } else if (prev) {
        vals[prevIndex] = ''
        inputs.value[prev].focus()
        values.value = vals
        triggerChange(vals)
      }
      break
    }
    case KEY_CODE.left:
      e.preventDefault()
      if (prev) {
        inputs.value[prev].focus()
      }
      break
    case KEY_CODE.right:
      e.preventDefault()
      if (next) {
        inputs.value[next].focus()
      }
      break
    case KEY_CODE.up:
    case KEY_CODE.down:
      e.preventDefault()
      break
    default:
      break
  }
}
const triggerChange = (values = values.value) => {
  const val = values.join('')
  emit('update:modelValue', val)
  if (val.length >= fields.value) {
    emit('complete', val)
  }
}
initVals()
watch(
    () => props.step,
    (newValue) => {
      if (newValue === 2) {
        document.getElementById(`verification-input-${randomNumber}`).autofocus
      }
    },
    { immediate: true }
)
onBeforeUpdate(() => {
  inputs.value = []
})

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      if (inputs.value && inputs.value[1]) {
        inputs.value[1]?.focus()
      }
    }, 500)
  })
})

const pasteDigits = (e) => {
  e.preventDefault()
  const pastedData = e.clipboardData.getData('text')
  const otpRegex = new RegExp(`^\\d{${props.fields}}$`);

  if (otpRegex.test(pastedData)) {
    for (let i = 0; i < fields.value; i++) {
      values.value[i] = pastedData[i]
    }

    triggerChange(values.value)
  }
}
</script>

<style>
.error input {
  border-color: #ff334c !important;
}
</style>
