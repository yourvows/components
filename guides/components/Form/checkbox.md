# Checkbox

Checkbox component is a versatile and customizable input field designed for Vue 3 applications. It provides a checkbox input that allows users to select multiple options from a list of choices. The component supports various features such as custom labels, disabled state, and visual feedback for different states like `checked` and `unchecked`.

## Basic Usage

Use a `v-model` to make the Checkbox reactive.

<CCheckbox v-model="value" />

```vue
<CCheckbox v-model="value" />
```

## Label

Use the `label` prop to add a label to the Checkbox.

<CCheckbox v-model="value" label="Label" />

```vue
<CCheckbox v-model="value" label="Label" />
```


## Style

Use the `checkboxStyles` prop to add custom styles to the Checkbox.

<CCheckbox v-model="value" checkbox-styles="!rounded-xl" />

```vue
<CCheckbox v-model="value" checkbox-styles="!rounded-xl" />
```

## Label Style

Use the `labelStyles` prop to add custom styles to the Checkbox label.

<CCheckbox v-model="value" label="Label" label-styles="!text-blue text-sm" />

```vue
<CCheckbox v-model="value" label="Label" label-styles="text-blue text-sm" />
```

## Required

Use the `required` prop to make the Checkbox required.

<CCheckbox v-model="value" label="Label" required />

```vue
<CCheckbox v-model="value" label="Label" required />
```


## Disabled

Use the `disabled` prop to disable the Checkbox.

<CCheckbox label="Label" disabled />

```vue
<CCheckbox v-model="value" label="Label" disabled />
```

## Error

Use the `error` prop to show an error state on the Checkbox.

<CCheckbox v-model="value" label="Label" error />

```vue
<CCheckbox v-model="value" label="Label" error />
```

## Slots

Use the `#label` slot to add custom content to the Checkbox label.

<CCheckbox v-model="value">
  <template #label>
    <span>Custom Label</span>
  </template>
</CCheckbox>

```vue
<CCheckbox v-model="value">
  <template #label>
    <span>Custom Label</span>
  </template>
</CCheckbox>
```

## Group

Use the `CCheckboxGroup` component to create a group of checkboxes.

<CCheckboxGroup :items="items" v-model="itemsValue" />

```vue
<CCheckboxGroup :items="items" v-model="value" />
```

it has `items` prop which is an array of objects with the following properties: `name` and `id`. And it also had `labelKey` prop to specify the key of the label in the items array and `valueKey`  prop to specify the key of the value in the items array.


## Props

| Prop          | Type                          | Default    | Description                                   |
|---------------|-------------------------------|------------|-----------------------------------------------|
| modelValue    | string \| number \| boolean  | undefined  | The value bound to the checkbox.              |
| label         | string                        | undefined  | Label text displayed next to the checkbox.    |
| name          | string                        | undefined  | The name attribute of the checkbox input.     |
| value         | string \| number \| boolean  | undefined  | The value attribute of the checkbox input.    |
| disabled      | boolean                       | false      | If true, disables the checkbox.               |
| error         | boolean                       | false      | If true, shows an error state.                |
| labelStyles   | string                        | undefined  | Custom styles for the label element.          |
| checked       | boolean                       | false      | If true, sets the checkbox as checked.        |
| checkboxStyles| string                        | undefined  | Custom styles for the checkbox element.      |
| required      | boolean                       | false      | If true, indicates that the checkbox is required. |



<script setup>
import CCheckbox from '../../../src/components/Form/Checkbox/CCheckbox.vue';
import CCheckboxGroup from '../../../src/components/Form/Checkbox/CCheckboxGroup.vue';
import { ref } from 'vue';

const value = ref(false);

const itemsValue = ref([]);

const items = [
  { name: 'Option 1', id: 'option1' },
  { name: 'Option 2', id: 'option2' },
  { name: 'Option 3', id: 'option3' },
  { name: 'Option 4', id: 'option4' },
];
</script>