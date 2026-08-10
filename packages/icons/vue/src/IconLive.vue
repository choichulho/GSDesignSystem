<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M20 2a2 2 0 0 1 2 2v16a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2m-6 6a2 2 0 1 0-4 0v12a2 2 0 1 0 4 0zm-8 6a2 2 0 1 0-4 0v6a2 2 0 1 0 4 0z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
