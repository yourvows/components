# Radio

## Usage

Use a `v-model` to make the RadioGroup reactive. The `items` prop is an array of objects with the following properties:

<CRadioGroup :items="items" />

```vue
<template>
  <CRadioGroup v-bind="{items}" v-model="radio" />
</template>

<script setup>
import CRadioGroup from 'path/to/CRadioGroup.vue';

const items = [
  { name: 'Option 1', id: 'option1' },
  { name: 'Option 2', id: 'option2' },
  { name: 'Option 3', id: 'option3' },
];

const radio = ref('');
</script>
```

## Disabled

To disable the RadioGroup, set the `disabled` prop to `true` for each item.


<CRadioGroup :items="itemsDisabled" />

```vue
<template>
  <CRadioGroup v-bind="{items}" v-model="radio" />
</template>

<script setup>
import CRadioGroup from 'path/to/CRadioGroup.vue';

const items = [
  { name: 'Option 1', id: 'option1' },
  { name: 'Option 2', id: 'option2' },
  { name: 'Option 3', id: 'option3', disabled: true },
];

const radio = ref('');
</script>
```

Or global `disabled` prop.


<CRadioGroup :items="itemsDisabled" disabled />

```vue
<template>
  <CRadioGroup v-bind="{ items }" v-model="radio" disabled />
</template>
```

## Error

To show an error message, set the `error` prop to `true`.

<CRadioGroup :items="items" error />

```vue
<template>
  <CRadioGroup v-bind="{ items }" v-model="radio" error />
</template>
```


## Style

The RadioGroup component is styled with the class. it has props `wrapperClass`, `itemClass`, `labelStyles` and `labelActiveClass`.

<CRadioGroup :items="items" wrapper-class="flex flex-col gap-3" item-class="before:!bg-green group-hover:!border-green peer-checked:!border-green peer-checked:before:!bg-green" label-styles="font-semibold group-hover:text-green transition-all duration-300" label-active-class="text-green" />

```vue
<template>
  <CRadioGroup 
      v-bind="{ items }" 
      v-model="radio"
      wrapper-class="flex flex-col gap-3"
      item-class="before:!bg-green group-hover:!border-green peer-checked:!border-green peer-checked:before:!bg-green" 
      label-styles="font-semibold group-hover:text-green transition-all duration-300"
      label-active-class="text-green" 
  />
</template>
```


## Props

| Name             | Type                           | Description                                              |
|------------------|--------------------------------|----------------------------------------------------------|
| `modelValue`     | `string \| number \| object`  | The value of the model.                                  |
| `items`          | `Array<object>`               | Array of objects to display as options.                  |
| `labelKey`       | `string`                       | (Optional) Key to use for labels in items.               |
| `valueKey`       | `string`                       | (Optional) Key to use for values in items.               |
| `wrapperClass`   | `string`                       | (Optional) CSS class for the component wrapper.          |
| `disabled`       | `boolean`                      | (Optional) Whether the component is disabled or not.     |
| `itemClass`      | `string`                       | (Optional) CSS class for individual items.               |
| `border`         | `boolean`                      | (Optional) Whether to display a border around the component.|
| `labelStyles`    | `string`                       | (Optional) Additional CSS styles for labels.              |
| `labelActiveClass`| `string`                      | (Optional) CSS class to apply when label is active.      |
| `error`          | `boolean`                      | (Optional) Whether there is an error with the component.  |


<script setup>

import CRadioGroup from '../../../src/components/Form/Radio/CRadioGroup.vue';

const items = [
  { name: 'Option 1', id: 'option1' },
  { name: 'Option 2', id: 'option2' },
  { name: 'Option 3', id: 'option3'},
];

const itemsDisabled = [
  { name: 'Option 1', id: 'option1' },
  { name: 'Option 2', id: 'option2' },
  { name: 'Option 3', id: 'option3', disabled: true },
];
</script>