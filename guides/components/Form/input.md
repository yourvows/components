# Input

Input component is a versatile and customizable input field designed for Vue 3 applications. It integrates seamlessly with form handling and validation, providing visual feedback for different states like `focus`, `error`, and `disabled`. The component supports both text and numeric inputs, along with a range of HTML input attributes for extensive customization.

## Basic Usage

<CInput v-model="input" placeholder="Text"/>

```vue
<CInput v-model="inputValue" placeholder="Enter text" />
```

## Error State

The input component supports an error state that provides visual feedback when there's an error.

<CInput v-model="input" placeholder="Text" error/>

```vue
<CInput v-model="inputValue" placeholder="Enter text" error />
```

## Disabled State

The component can also be disabled to prevent user interaction.

<CInput v-model="input" placeholder="Text" disabled/>

```vue
<CInput v-model="inputValue" placeholder="Enter text" disabled />
```

## Prefix and Suffix Slots

The Input component offers slots for adding custom content before (prefix) and after (suffix) the input field.

<CInput v-model="input" placeholder="Text" class="px-3">
  <template #prefix>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 11C3 12.0506 3.20693 13.0909 3.60896 14.0615C4.011 15.0321 4.60028 15.914 5.34315 16.6569C6.08601 17.3997 6.96793 17.989 7.93853 18.391C8.90914 18.7931 9.94943 19 11 19C12.0506 19 13.0909 18.7931 14.0615 18.391C15.0321 17.989 15.914 17.3997 16.6569 16.6569C17.3997 15.914 17.989 15.0321 18.391 14.0615C18.7931 13.0909 19 12.0506 19 11C19 9.94943 18.7931 8.90914 18.391 7.93853C17.989 6.96793 17.3997 6.08601 16.6569 5.34315C15.914 4.60028 15.0321 4.011 14.0615 3.60896C13.0909 3.20693 12.0506 3 11 3C9.94943 3 8.90914 3.20693 7.93853 3.60896C6.96793 4.011 6.08601 4.60028 5.34315 5.34315C4.60028 6.08601 4.011 6.96793 3.60896 7.93853C3.20693 8.90914 3 9.94943 3 11Z" stroke="#354052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 21L17 17" stroke="#354052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <template #suffix>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
</CInput>

```vue
<CInput v-model="inputValue" placeholder="Search...">
  <template #prefix>
    prefix content
  </template>
  <template #suffix>
    suffix content
  </template>
</CInput>
```


## Features
- Customizable Input Types: Supports various HTML input types including `text`, `number`, `email`, etc.
- Visual Feedback: Offers visual cues for `focus`, `error`, and `disabled` states.
- Slots for Prefix and Suffix: Allows adding custom content before (prefix) and after (suffix) the input field.
- Reactive Value Binding: Utilizes v-model for two-way binding of the input value.
- Accessibility Features: Supports dynamic IDs for better form accessibility.

##  Props

| Prop          | Type               | Default        | Description                                        |
|---------------|--------------------|----------------|----------------------------------------------------|
| type          | string             | 'text'         | The type of the input.                             |
| placeholder   | string             | undefined      | Placeholder text for the input field.              |
| modelValue    | number \| string   | undefined      | The value bound to the input field.                |
| disabled      | boolean            | false          | If true, disables the input field.                 |
| error         | boolean            | false          | If true, shows an error state.                     |
| focus         | boolean            | false          | If true, auto-focuses the input field.             |
| maxlength     | number             | 99             | Maximum length of the input value.                 |
| minlength     | number             | undefined      | Minimum length of the input value.                 |
| max           | number             | undefined      | Maximum value for type="number" inputs.            |
| min           | number             | undefined      | Minimum value for type="number" inputs.            |
| isTransparent | boolean            | false          | If true, sets the input background as transparent. |
| inputClass    | string \| string[] | undefined      | Custom class(es) for the input field.              |
| autocomplete  | string             | 'new-password' | Controls the input's autocomplete feature.         |
| inputId       | string             | undefined      | The ID of the input field.                         |
| readonly      | boolean            | false          | If true, makes the input field read-only.          |
| id            | string             | undefined      | The ID of the component's root element.            |



## Emits
| Name              | Description                                                                         |
|-------------------|-------------------------------------------------------------------------------------|
| update:modelValue | Emitted when the value of the model changes.                                        |
| blur              | Emitted when the input field loses focus.                                           |
| focusout          | Emitted when the input field loses focus, including when moving to a child element. |
| focus             | Emitted when the input field gains focus.                                           |
| enter             | Emitted when the Enter key is pressed.                                              |


## Slots
- `prefix`: Used to add content before the input field.
- `suffix`: Used to add content after the input field.


<script setup>
import CInput from '../../../src/components/Form/Input/CInput.vue'; 
import {ref} from "vue"; 

const input = ref('');
</script>

