<template>
  <div>
    <CButton text="Secondary" :variant="buttonVariant" />
  </div>
</template>

<script setup>
import CButton from '/src/components/Button/CButton.vue'
import {ref} from "vue";

const buttonVariant = ref('secondary')
</script>