<template>
  <div>
    <p>Cookie value: {{cookieValue}}</p>
    <CButton @click="updateCookie(count++,3)" >Set cookie</CButton>
  </div>
</template>

<script setup lang="ts">
import CButton from '../../../src/components/Button/CButton.vue'
import useCookie from "./useCookie";
import {ref} from "vue";


const { cookieValue, updateCookie } = useCookie("counter");



const count = ref(cookieValue.value ?? 0);
</script>