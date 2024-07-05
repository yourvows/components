<template>
  <div>
    <p>Cookie value: {{cookieValue}}</p>
    <button class="bg-blue-500 p-3 text-white" @click="updateCookie(count++, 3)">Update cookie</button>
  </div>
</template>

<script setup lang="ts">
import useCookie from "./useCookie";
import {ref} from "vue";

const { cookieValue, updateCookie } = useCookie("counter");

const count = ref(cookieValue.value ?? 0);
</script>