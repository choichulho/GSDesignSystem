<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M17 16a1 1 0 0 1-2 0v-2.5a1 1 0 0 1 2 0zm-4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0zm-4 0a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm9-13H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
