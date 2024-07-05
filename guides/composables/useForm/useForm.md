# `useForm`

### Overview
The `useForm` composition function is designed to simplify form management in Vue 3 applications by combining the reactivity of the Vue Composition API with the validation capabilities of Vuelidate. It allows you to create a reactive form object with associated Vuelidate validation.

### Installation
Before using `useForm`, ensure that you have installed the required dependencies:

```bash
npm install @vuelidate/core @vuelidate/validators
```

## API Reference
### `useForm<T extends object>(...args: TFormArguments<T>): TForm<T>`

The `useForm` function takes three parameters:

- `initialValues`: An object representing the initial values of the form fields.
- `validations`: Vuelidate validation rules for the form fields.
- `vuelidateConfig` (optional): Global configuration for Vuelidate.

Returns an object with the following properties:

- `values`: A reactive object containing the current values of the form fields.
- `$v`: A Vuelidate instance representing the validation state of the form.

### `TFormArguments<T>`
A type defining the arguments expected by `useForm`:

- `initialValues`: Initial values for the form fields.
- `validations`: Vuelidate validation rules for the form fields.
- `vuelidateConfig` (optional): Global configuration for Vuelidate.

### `TForm<T>`
An interface defining the structure of the object returned by `useForm`:

- `values`: A reactive object containing the current values of the form fields.
- `$v`: A Vuelidate instance representing the validation state of the form.

### Example
```js
// Usage of useForm
import { required, minLength } from '@vuelidate/validators';
import { useForm } from '@/composables/useForm';

const { values, $v } = useForm(
    {
        username: '',
        password: '',
    },
    {
        username: { required, minLength: minLength(3) },
        password: { required, minLength: minLength(6) },
    }
);

// Access form values and Vuelidate instance
console.log(values.username);
console.log($v.username.$error);

```

## Note
- Ensure that Vuelidate and Vue are properly installed before using useForm.
- Customize the `validations` parameter according to your specific validation requirements using Vuelidate rules.

## Source Code
The source code for the `useForm` function can be found [here](https://gitlab.uicgroup.tech/imkon/commeta-frontend/docs/-/blob/master/src/composables/useForm.ts).
