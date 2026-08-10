<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
