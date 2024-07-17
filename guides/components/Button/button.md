# Button

The Button component is a highly customizable and reusable Vue component designed to create buttons with various styles, sizes, loading states, and more. It utilizes Vue 3's Composition API and TypeScript for type safety and clarity. This component allows for easy integration into any Vue project, providing a consistent look and feel across your application while minimizing the effort required to manage button states and styles.

## Usage

Use the default version to set the `text` of the Button.

<CButton text="Button" />

```vue
<CButton text="Button" text="primary"/>
```

You can also use the slot.

<CButton>Button</CButton>

```vue
<CButton>Button</CButton>
```


## Style

Use the `variant` props to change the visual style of the Button.

  >In every project we have different variants. You can see other versions of the Button component in the `TButtonVariants` types in your project.
<div class="flex gap-4 flex-wrap">
    <CButton variant="primary" text="primary" @click="chooseRandomVariant" />
    <CButton variant="secondary" text="secondary" @click="chooseRandomVariant" />
    <CButton variant="danger" text="danger" @click="chooseRandomVariant" />
    <CButton variant="red" text="red" @click="chooseRandomVariant" />
    <CButton variant="gold" text="gold" @click="chooseRandomVariant" />
    <CButton variant="outline" text="outline" @click="chooseRandomVariant" />
    <CButton variant="outline-primary" text="outline-primary" @click="chooseRandomVariant" />
    <CButton variant="outline-fill" text="outline-fill" @click="chooseRandomVariant" />
</div>


```vue
<CButton text="secondary" variant="secondary" />
```


## Icon

if you have icomoon in your project use the `icon` props to add an icon to the Button and for change direction of icon you should use `iconPosition`.


<CButton text="Button">
    <template #icon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83398 5.8333H5.00065C4.55862 5.8333 4.1347 6.00889 3.82214 6.32146C3.50958 6.63402 3.33398 7.05794 3.33398 7.49997V15C3.33398 15.442 3.50958 15.8659 3.82214 16.1785C4.1347 16.491 4.55862 16.6666 5.00065 16.6666H12.5007C12.9427 16.6666 13.3666 16.491 13.6792 16.1785C13.9917 15.8659 14.1673 15.442 14.1673 15V14.1666M13.334 4.16663L15.834 6.66663M16.9882 5.48747C17.3164 5.15926 17.5007 4.71412 17.5007 4.24997C17.5007 3.78581 17.3164 3.34067 16.9882 3.01247C16.6599 2.68426 16.2148 2.49988 15.7507 2.49988C15.2865 2.49988 14.8414 2.68426 14.5132 3.01247L7.50065 9.99997V12.5H10.0007L16.9882 5.48747Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </template>
</CButton>

with icon position left

<CButton text="Button" icon-position="left" >
    <template #icon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83398 5.8333H5.00065C4.55862 5.8333 4.1347 6.00889 3.82214 6.32146C3.50958 6.63402 3.33398 7.05794 3.33398 7.49997V15C3.33398 15.442 3.50958 15.8659 3.82214 16.1785C4.1347 16.491 4.55862 16.6666 5.00065 16.6666H12.5007C12.9427 16.6666 13.3666 16.491 13.6792 16.1785C13.9917 15.8659 14.1673 15.442 14.1673 15V14.1666M13.334 4.16663L15.834 6.66663M16.9882 5.48747C17.3164 5.15926 17.5007 4.71412 17.5007 4.24997C17.5007 3.78581 17.3164 3.34067 16.9882 3.01247C16.6599 2.68426 16.2148 2.49988 15.7507 2.49988C15.2865 2.49988 14.8414 2.68426 14.5132 3.01247L7.50065 9.99997V12.5H10.0007L16.9882 5.48747Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </template>
</CButton>

```vue
<CButton text="Button" icon="icon-pen" />
```

Icons with slots

<CButton text="Button">
    <template #icon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83398 5.8333H5.00065C4.55862 5.8333 4.1347 6.00889 3.82214 6.32146C3.50958 6.63402 3.33398 7.05794 3.33398 7.49997V15C3.33398 15.442 3.50958 15.8659 3.82214 16.1785C4.1347 16.491 4.55862 16.6666 5.00065 16.6666H12.5007C12.9427 16.6666 13.3666 16.491 13.6792 16.1785C13.9917 15.8659 14.1673 15.442 14.1673 15V14.1666M13.334 4.16663L15.834 6.66663M16.9882 5.48747C17.3164 5.15926 17.5007 4.71412 17.5007 4.24997C17.5007 3.78581 17.3164 3.34067 16.9882 3.01247C16.6599 2.68426 16.2148 2.49988 15.7507 2.49988C15.2865 2.49988 14.8414 2.68426 14.5132 3.01247L7.50065 9.99997V12.5H10.0007L16.9882 5.48747Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </template>
</CButton>

```vue
<CButton text="Button">
    <template #icon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83398 5.8333H5.00065C4.55862 5.8333 4.1347 6.00889 3.82214 6.32146C3.50958 6.63402 3.33398 7.05794 3.33398 7.49997V15C3.33398 15.442 3.50958 15.8659 3.82214 16.1785C4.1347 16.491 4.55862 16.6666 5.00065 16.6666H12.5007C12.9427 16.6666 13.3666 16.491 13.6792 16.1785C13.9917 15.8659 14.1673 15.442 14.1673 15V14.1666M13.334 4.16663L15.834 6.66663M16.9882 5.48747C17.3164 5.15926 17.5007 4.71412 17.5007 4.24997C17.5007 3.78581 17.3164 3.34067 16.9882 3.01247C16.6599 2.68426 16.2148 2.49988 15.7507 2.49988C15.2865 2.49988 14.8414 2.68426 14.5132 3.01247L7.50065 9.99997V12.5H10.0007L16.9882 5.48747Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </template>
</CButton>
```

Just icon

<CButton without-text>
    <template #icon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83398 5.8333H5.00065C4.55862 5.8333 4.1347 6.00889 3.82214 6.32146C3.50958 6.63402 3.33398 7.05794 3.33398 7.49997V15C3.33398 15.442 3.50958 15.8659 3.82214 16.1785C4.1347 16.491 4.55862 16.6666 5.00065 16.6666H12.5007C12.9427 16.6666 13.3666 16.491 13.6792 16.1785C13.9917 15.8659 14.1673 15.442 14.1673 15V14.1666M13.334 4.16663L15.834 6.66663M16.9882 5.48747C17.3164 5.15926 17.5007 4.71412 17.5007 4.24997C17.5007 3.78581 17.3164 3.34067 16.9882 3.01247C16.6599 2.68426 16.2148 2.49988 15.7507 2.49988C15.2865 2.49988 14.8414 2.68426 14.5132 3.01247L7.50065 9.99997V12.5H10.0007L16.9882 5.48747Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </template>
</CButton>


```vue
<CButton without-text icon="icon-pen" />
```


## Loading

Use the `loading` props to show a loading spinner inside the Button.

<CButton text="Button" :loading="true" @click="checkLog" />

```vue
<CButton text="Button" loading />
```

## Disabled

Use the `disabled` and `variant` disabled props to disable the Button.

<CButton text="Button" variant="disabled" :disabled="true" />

```vue
<CButton text="Button" disabled variant="disabled" />
```

## Props

| Prop           | Type              | Default   | Description                                                                         |
|----------------|-------------------|-----------|-------------------------------------------------------------------------------------|
| `variant `     | `TButtonVariants` | primary   | Specifies the button style variant.                                                 |
| `loading `     | `boolean  `       | false     | Shows a loading spinner inside the button and disables it.                          |
| `mainClass `   | `string `         | undefined | Additional classes for custom styling.                                              |
| `iconPosition` | `left`, `right`   | undefined | Sets the position of the icon relative to the text.                                 |
| `text `        | `string `         | Button    | The text to display inside the button.                                              |
| `icon  `       | `string `         | undefined | Classes for the icon displayed on the button.                                       |
| ` disabled  `  | `boolean `        | boolean   | Disables the button, preventing user interactions.                                  |

> You change styles of button in your project according to your design system, first change **TButtonVariants** then **tailwind.config.js/ts**.


<script setup>
import CButton from '../../../src/components/Button/CButton.vue';
import {ref} from "vue"; 

const variant = ref('secondary');
const buttonVariants = ['primary', 'secondary', 'disabled', 'danger', 'red', 'outline', 'outline-dark', 'outline-primary', 'outline-fill', 'gold', 'secondary-danger', 'secondary-gray', 'secondary-danger', 'secondary-blue', 'secondary-green'];

function chooseRandomVariant() {
  const randomIndex = Math.floor(Math.random() * buttonVariants.length);
  variant.value = buttonVariants[randomIndex];
}

function checkLog() {
  console.log('Loading...');
}

</script>



[//]: # (## Variants)

[//]: # ()
[//]: # (```vue)

[//]: # ()
[//]: # (<CButton variant="primary" text="primary"/>)

[//]: # (<CButton variant="secondary" text="secondary"/>)

[//]: # (<CButton variant="disabled" text="disabled"/>)

[//]: # (<CButton variant="danger" text="danger"/>)

[//]: # (<CButton variant="red" text="red"/>)

[//]: # (<CButton variant="outline" text="outline"/>)

[//]: # (<CButton variant="outline-dark" text="outline-dark"/>)

[//]: # (<CButton variant="outline-primary" text="outline-primary"/>)

[//]: # (<CButton variant="outline-fill" text="outline-fill"/>)

[//]: # (<CButton variant="gold" text="gold"/>)

[//]: # (<CButton variant="secondary-danger" text="secondary-danger"/>)

[//]: # (<CButton variant="secondary-gray" text="secondary-gray"/>)

[//]: # (<CButton variant="secondary-danger" text="secondary-danger"/>)

[//]: # (<CButton variant="secondary-blue" text="secondary-blue"/>)

[//]: # (<CButton variant="secondary-green" text="secondary-green"/>)

[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # (## Features)

[//]: # (- Variants: Supports multiple predefined styles including primary, secondary, outline, danger, and more.)

[//]: # (- Sizes: Allows setting the button size to small, medium, or other predefined sizes.)

[//]: # (- Loading State: Includes a loading state that can display a spinner within the button, disabling interaction.)

[//]: # (- Icons: Supports adding icons to the button, with customizable positions &#40;left or right of the text&#41;.)

[//]: # (- Disabled State: Can be disabled to prevent user interactions.)

[//]: # (- Customizable: Offers extensive customization through props, including custom classes.)

[//]: # ()
[//]: # (## Props)

[//]: # ()

[//]: # ()
[//]: # ()
[//]: # (## Slots)

[//]: # (- `default`: Used to customize the content inside the button, allowing for more complex layouts than just text and icons.)

[//]: # ()
[//]: # (## Variants)

[//]: # (- Variants are used to define the appearance of the button. The component supports several predefined variants like primary, secondary, outline, danger, and more. Each variant adjusts the button's background color, text color, border, and hover effects.)

[//]: # ()
[//]: # (## Sizes)

[//]: # (- The `size` prop allows you to adjust the button's padding and font size. Supported sizes include sm for small and md for medium, with each size providing different dimensions and font settings.)

[//]: # ()
[//]: # (## Loading State)

[//]: # (- When the loading prop is set to true, the button displays an SVG spinner and becomes disabled. This state is useful for indicating that an action is being processed and prevents further user interactions until the action is complete.)

[//]: # ()
[//]: # (## Customization)

[//]: # (- Custom Styles: Use the mainClass prop to add custom styles.)

[//]: # (- Icon Positioning: Control the icon's position with the iconPosition prop, allowing icons to be placed to the left or right of the text.)

[//]: # (- Loader Color: The color of the loading spinner is automatically adjusted based on the button variant but can be further customized through CSS.)

[//]: # ()
[//]: # ()


