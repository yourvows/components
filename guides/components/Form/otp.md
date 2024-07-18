# OTP INPUT


An **OTP** (One-Time Password) component is used for entering a one-time password, which is commonly used for two-factor authentication (2FA). This component allows users to input a code, typically consisting of several digits, sent to them via SMS or email.


## Features

- Automatically moves to the next field after entering a character.
- Allows paste functionality for the entire code.
- Handling events such as completion of input.
- Supports multiple fields.
- Error handling.

## Example
OTP code is: {{OtpCode}}

<COTP v-model="OtpCode"/>

:::details Code
```vue
<COTP v-model="OtpCode"/>
```
:::


## Props

| Name       | Type    | Default | Description                                   |
|------------|---------|---------|-----------------------------------------------|
| modelValue | string  | -       | The value of the model.                       |
| error      | boolean | -       | Whether there is an error with the component. |
| fields     | number  | 6       | (Optional) Number of fields to display.       |
| step       | number  | -       | (Optional) Step size for the input.           |
| disabled   | boolean | -       | (Optional) Whether the component is disabled. |

## Emits

| Name              | Description                                  |
|-------------------|----------------------------------------------|
| update:modelValue | Emitted when the value of the model changes. |
| complete          | Emitted when the code is complete.           |

<script setup>
import { ref } from 'vue';
import COTP from '../../../src/components/Form/OTP/COTP.vue';

const OtpCode = ref('');
</script>
