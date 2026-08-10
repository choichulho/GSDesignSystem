<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-4.433 3.414-8.08 7.75-8.462V10.5c0 1.24 1.01 2.25 2.25 2.25h6.962c-.381 4.337-4.029 7.75-8.462 7.75m.75-16.962a8.506 8.506 0 0 1 7.712 7.712H13.5a.75.75 0 0 1-.75-.75zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
