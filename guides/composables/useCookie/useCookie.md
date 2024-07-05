# useCookie

The `useCookie` function is a composable Vue hook designed to facilitate the management of cookies within a Vue application. It provides an easy-to-use interface for getting, setting, and updating the value of a specific cookie. This hook encapsulates the native browser document.cookie API, offering a reactive Ref that can be used in Vue components to reactively update the UI based on the cookie's value. It also abstracts the complexity of cookie manipulation, making it more convenient to work with cookies in a Vue project.

## Features
- Get Cookie Value: Retrieves the current value of a specified cookie.
- Set Cookie Value: Allows setting the value of a cookie with an optional expiration date and domain.
- Update Cookie Value: Updates the value of the cookie and its expiration, reflecting this change reactively in the Vue component.
- Reactive Cookie Value: Provides a reactive reference to the cookie's value, enabling Vue components to reactively update when the cookie's value changes.

## Usage

### Importing

First, import the useCookie function in your Vue component:

```js{4}
import { useCookie } from 'path/to/useCookie';
```

### Initialization

Invoke useCookie by specifying the cookie name, and optionally the domain, to create a reactive reference to the cookie's value and a function to update it:

```js{4}
const { cookieValue, updateCookie } = useCookie('yourCookieName');
```

### Getting Cookie Value

The cookieValue is a reactive Ref that holds the current value of the cookie. It can be used directly in the template or computed properties to reactively display the cookie's value:
    
```js{4}
<template>
  <div>
    <p>Cookie Value: {{ cookieValue }}</p>
  </div>
</template>
```

### Setting and Updating Cookie Value

To set or update the cookie's value, use the updateCookie function with the new value and the number of days until the cookie expires:

```js{4}
updateCookie('newValue', 7); // Sets/Updates the cookie to 'newValue', expiring in 7 days
```

### Parameters
- `cookieName`: string: The name of the cookie.
- `domain?`: string: Optional. The domain for the cookie.

### Functions
- `getCookie()`: Returns the current value of the cookie, or null if it doesn't exist.
- `setCookie(value)`: string, days: number): Sets the cookie with the specified value and expiration period in days.
- `updateCookie(value)`: string, days: number): Updates the cookie's value and expiration, also updating the reactive reference.

### Returns
- `cookieValue`: `Ref<string | null>`: A reactive reference to the cookie's value.
- `updateCookie`: A function to update the cookie's value and expiration.

## Example

<UserCookieExample />

<script setup>
import UserCookieExample from './useCookieExample.vue'
</script>
