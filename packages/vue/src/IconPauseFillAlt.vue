<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M8 4a2 2 0 0 1 2 2v12a2 2 0 1 1-4 0V6a2 2 0 0 1 2-2m8 0a2 2 0 0 1 2 2v12a2 2 0 1 1-4 0V6a2 2 0 0 1 2-2" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
