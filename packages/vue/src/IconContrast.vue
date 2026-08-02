<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M3.5 12c0-4.687 3.813-8.5 8.5-8.5v17c-4.687 0-8.5-3.813-8.5-8.5m18.05-2.973C20.285 4.956 16.489 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10c4.488 0 8.284-2.956 9.55-7.026.293-.94.45-1.938.45-2.974a10 10 0 0 0-.45-2.973" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
