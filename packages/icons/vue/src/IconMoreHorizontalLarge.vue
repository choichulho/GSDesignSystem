<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" fill-rule="evenodd" d="M3.75 13a1.251 1.251 0 0 1 0-2.5 1.251 1.251 0 0 1 0 2.5m0-4a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M12 13a1.251 1.251 0 0 1 0-2.5 1.251 1.251 0 0 1 0 2.5m0-4a2.75 2.75 0 1 0 0 5.5A2.75 2.75 0 0 0 12 9m7 2.75a1.25 1.25 0 0 0 2.5 0 1.251 1.251 0 0 0-2.5 0m-1.5 0a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"/>
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
